/**
 * Created by zhang_jian on 2017/11/29.
 */

document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");

function findResultByCriteria(keyword,textTypeId,sort,callBack) {
    var params = '';
    if (keyword != null) {
        if (params.length == 0) params += '?keyword='+keyword;
        else params += '&keyword='+keyword;
    }
    if (textTypeId != null) {
        if (params.length == 0) params += '?textTypeId='+textTypeId;
        else params += '&textTypeId='+textTypeId;
    }
    if (sort != null) {
        if (params.length == 0) params += '?sort='+sort;
        else params += '&sort='+sort;
    }
    if (params.length == 0) params += '?index=0&size=10';
    else params += '&index=0&size=10';

    http.get(BaseUrl+"/frontEnd/findResultByCriteria"+params, function (err,result) {
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

function getArticleList(callBack) {
    http.get(BaseUrl+'/frontEnd/getArticleList?parentId=28',function (err, result) {
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
