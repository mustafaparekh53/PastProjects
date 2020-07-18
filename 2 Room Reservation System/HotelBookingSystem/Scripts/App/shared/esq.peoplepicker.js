define(['jquery', 'knockout', 'angelsp', 'angelsp/mssp!', 'angelsp/util'], function ($, ko, angelsp, mssp, util) {
    return function (params) {
        var self = this,
    		stdin = params.stdin,
    		stdout = params.stdout;
        self.showTips = ko.observable(true);
        self.hasFocus = ko.observable(false);
        self.inputVal = ko.observable();
        self.timeoutHandler = null;
        self.exitPicker = ko.observable(false);
        self.showLoading = ko.observable(false);
        self.showList = ko.observable(false);
        self.peopleList = ko.observableArray([]);
        self.displaySelectedUser = ko.observable(null);
        self.isSelected = ko.observable(false);

        self.setFocus = function (_, e) {
            self.exitPicker(false);
            self.showTips(false);
            if (!self.isSelected()) {
                $(e.currentTarget).find('input').focus();
            }
            e.stopPropagation();
        };
        self.loseFocus = function () {
            self.exitPicker(true);
            self.showLoading(false);
            self.inputVal('');
            self.showList(false);
            self.peopleList.removeAll();
            if (!self.isSelected()) {
                self.showTips(true);
            }
        };
        self.keyChange = function (_, e) {
            self.exitPicker(false);
            if (self.timeoutHandler) clearTimeout(self.timeoutHandler);
            self.inputVal(e.currentTarget.value);
            self.peopleList.removeAll();
            self.showList(false);
            if (util.isEmpty(e.currentTarget.value)) { self.showLoading(false); return; }
            self.showLoading(true);
            self.timeoutHandler = setTimeout(function () {
                var ctx = mssp.get_ctx(),
	    			sp = mssp.get_sp();
                var qry = new sp.UI.ApplicationPages.ClientPeoplePickerQueryParameters()
                qry.set_allowEmailAddresses(false);
                qry.set_allowMultipleEntities(false);
                qry.set_allUrlZones(false);
                qry.set_forceClaims(false);
                qry.set_maximumEntitySuggestions(10);
                qry.set_principalSource(15);
                qry.set_principalType(1);
                qry.set_queryString(self.inputVal());
                qry.set_required(false);
                qry.set_sharePointGroupID(0);
                qry.set_urlZone(0);
                qry.set_urlZoneSpecified(false);
                var searchRes = sp.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.clientPeoplePickerSearchUser(ctx, qry);
                mssp.callback(function () {
                    if (!self.isSelected() && !self.exitPicker()) {
                        var results = ctx.parseObjectFromJsonString(searchRes.get_value());
                        self.peopleList(results);
                        self.showList(true);
                        self.showLoading(false);
                    }
                }, function () {
                    if (!self.isSelected() && !self.exitPicker()) {
                        console.log('search user failed');
                        self.showList(true);
                        self.showLoading(false);
                    }
                });
                mssp.exec();
            }, 1000);
        };
        self.selectUser = function (m, e) {
            self.isSelected(true);
            self.displaySelectedUser(m.DisplayText);

            angelsp.getJSON("web#siteusers(@v)?@v='" + encodeURIComponent(m.Key) + "'", null, true).then(function (d) {
                stdout({ id: d.$raw.Id, loginName: d.$raw.LoginName, title: d.$raw.Title });
            }, function (arg) {
                console.log(arg);
            });
            self.loseFocus();
            e.stopPropagation();
        };
        self.deleteUser = function (_, e) {
            self.exitPicker(true);
            self.isSelected(false);
            self.showLoading(false);
            self.displaySelectedUser('');
            stdout(null);
        }
        $(window).click(function () {
            self.loseFocus();
        });

        function getUserById(id) {
            if (util.isEmpty(id) || !(/\d+/.test(id.toString()))) return;
            angelsp.getJSON("web#GetUserById(" + id + ")", null, true).then(function (d) {
                self.isSelected(true);
                self.displaySelectedUser(d.$raw.Title);

                stdout({ id: d.$raw.Id, loginName: d.$raw.LoginName, title: d.$raw.Title });
            }, function (arg) {
                console.log(arg);
            });
            self.loseFocus();
        }

        stdin.subscribe(function (val) {
            getUserById(val);
        });
        getUserById(stdin());
    };
});
