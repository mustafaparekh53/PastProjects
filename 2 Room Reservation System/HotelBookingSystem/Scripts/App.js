'use strict';

var context = SP.ClientContext.get_current();
var user = context.get_web().get_currentUser();

// 此代码在 DOM 准备就绪时运行，并且可以创建使用 SharePoint 对象模型所需的上下文对象
$(document).ready(function () {
    getUserName();
});

// 此函数准备、加载然后执行 SharePoint 查询以获取当前用户信息
function getUserName() {
    context.load(user);
    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
}

// 如果上述调用成功，则执行此函数
// 此函数将“message”元素的内容替换为用户名
function onGetUserNameSuccess() {
    $('#message').text('Hello ' + user.get_title());
}

// 将在上述调用失败时执行此函数
function onGetUserNameFail(sender, args) {
    alert('Failed to get user name. Error:' + args.get_message());
} 
