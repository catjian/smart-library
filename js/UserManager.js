/**
 * Created by zhang_jian on 2017/11/27.
 */

function UserManagerAdd() {
    http.post({url:"http://192.168.100.198:8080/sys/user/add", data:{'type':1}, timeout: 1000},function (err, result) {
        console.log(err);
        console.log(result);
    });
}