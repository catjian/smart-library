/**
 * Created by zhang_jian on 2017/12/2.
 */

document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");


function getDatabase(keyword, beginTime, endTime, index, size, callBack) {

    var params = '';
    if (keyword != null) {
        params += '?keyword='+keyword;
    }
    if (beginTime != null) {
        if (params.length == 0) {
            params += '?beginTime='+beginTime;
        }
        else {
            params += '&beginTime='+beginTime;
        }
    }
    if (endTime != null) {
        if (params.length == 0) {
            params += '?endTime='+endTime;
        }
        else {
            params += '&endTime='+endTime;
        }
    }
    if (index != null) {
        if (params.length == 0) {
            params += '?index='+index;
        }
        else {
            params += '&index='+index;
        }
    }
    if (size != null) {
        if (params.length == 0) {
            params += '?size='+size;
        }
        else {
            params += '&size='+size;
        }
    }
    http.get(BaseUrl+'/frontEnd/getDatabase'+params,function (err, result) {
        if (result == null) {
            return;
        }
        var status = result.status;
        switch (status) {
            case 0: {
                var resultObj = result.result;
                if (resultObj && resultObj.length == 0) {
                    resultObj = null;
                }
                callBack && callBack(resultObj);
            }
                break;
            default: {
                alert(result.message);
                callBack && callBack(null);
            }
                break;
        }
    });
}