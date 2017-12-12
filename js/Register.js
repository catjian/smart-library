/**
 * Created by zhang_jian on 2017/11/28.
 */

document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");

function RegisterUser() {

    var username = getByClass("username");
    var password = getByClass("password");
    var passwordAgin = getByClass("passwordAgin");
    if (username.length == 0 || password.length == 0 || passwordAgin.length == 0){
        return;
    }
    username = username[0];
    password = password[0];
    passwordAgin = passwordAgin[0];
    if (username.value.length == 0 || password.value.length == 0 || passwordAgin.value.length == 0){
        return;
    }
    if (password.value != passwordAgin.value) {
        alert("密码和确认密码不一样，请重新输入！")
        return;
    }

    http.post({url:BaseUrl+'/frontEnd/registeredUser', data:{'username':username.value,'password':password.value, 'type':1}}, function (err, result) {

        if (result == null) {
            return;
        }
        var status = result.status;
        switch (status) {
            case -1:
            {
                alert(result.message);
            }
                break;
            case 0:
            {
            }
                break;
            default:
                break;
        }

    });
}