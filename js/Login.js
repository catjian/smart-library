/**
 * Created by zhang_jian on 2017/11/27.
 */

document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");


function login() {
    var username = getByClass("username");
    var password = getByClass("password");
    if (username.length == 0 || password.length == 0){
        return;
    }
    username = username[0];
    password = password[0];
    if (username.value.length == 0 || password.value.length == 0) {
        return;
    }
    http.post({url:BaseUrl+'/login', data:{'username':username.value,'password':password.value,'type':1}}, function (err, result) {

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