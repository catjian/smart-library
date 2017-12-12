/**
 * Created by zhang_jian on 2017/11/28.
 */

document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");

var letterContent;

function findExpertByLetter(letter,countryType,callBack) {
    var params = '';
    if (letter != null) {
        params += '?letter='+letter;
    }
    if (countryType != null) {
        if (params.length == 0) {
            params += '?type='+countryType;
        }
        else {
            params += '&type='+countryType;
        }
    }
    http.get(BaseUrl+"/frontEnd/findExpertByLetter"+params, function (err,result) {
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

function queryAnExpert(expertId, callBack) {

    http.get(BaseUrl+'/frontEnd/queryAnExpert?id='+expertId, function (err, result) {
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

function findExpertByCondition(field, keyword, callBack) {

    var params = '';
    if (field != null) {
        params += '?field='+field;
    }
    if (keyword != null) {
        if (params.length == 0) {
            params += '?keyword='+keyword;
        }
        else {
            params += '&keyword='+keyword;
        }
    }
    http.get(BaseUrl+'/frontEnd/findExpertByCondition'+params,function (err, result) {
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