const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const request = require('request');
const compression = require('compression');
const dotenv = require('dotenv');
dotenv.config();
const http = require('http').Server(app);
const io = require('socket.io')(http, { wsEngine: 'ws' });
const passwordHash = require('password-hash');  


const pwd = `${process.env.PASSWORD}`
let pwd_hash = passwordHash.generate(pwd)

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

var options = {
    method: 'POST',
    url: 'https://sam1498.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: `${process.env.REQUEST_TOKEN}`
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(compression());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('home')
});

app.post('/',(req,res) => {
    if(req.body.pwd == pwd){
        res.redirect(`/getVisualize/:${pwd_hash}`);
    }
    else{
        io.emit('error', {description: 'Password Incorrect'})
        res.redirect('back')
    }

})

app.get('/getVisualize/:hash', (req, res, next) => {
    if (req.params.hash === ":"+pwd_hash)
        res.render('index')
    else
        res.send('Unauthorized Access')

    
})

app.get('/getData', (req, res) => {
    let requestOptions = {
        url: `${process.env.REQUEST_URL}`,
        method: 'GET',
        headers: { authorization: `${process.env.REQUEST_HEADER}` }
    }
    request(requestOptions, function (err, resp, body) {
        if ((err == null) && resp.statusCode == 200) {
            body = JSON.parse(body)
            res.send({
                err: null,
                data: body
            });
        } else {
            res.send({
                err: new Error('Error on response' + (resp ? ' (' + resp.statusCode + ')' : '') + ':' + err + ' : ' + body),
                data: null
            });
        }
    })

})
io.on('connection', (socket) => {
    socket.on('success', () => {
        let makeSecondRequest = () => {
            return new Promise((resolve, reject) => {
                let requestOptions = {
                    url: `${process.env.REQUEST_URL2}`,
                    method: 'GET',
                    headers: { authorization: `${process.env.REQUEST_HEADER}` }
                }

                request(requestOptions, function (err, resp, body) {
                    if (err) reject(err)
                    else if ((err == null) && resp.statusCode == 200) {
                        data = JSON.parse(body)
                        resolve(data)
                    }
                })
            })
        }

        makeSecondRequest().then(data => {
            io.emit('second_data_fetch', { description: data })
        }).catch(err => console.log(err))

    })

})
http.listen(port, () => {
    console.log('server is running..');
})

