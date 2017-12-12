/**
 * Created by zhang_jian on 2017/11/28.
 */


var sonsortArr = [];

document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");

/* type
* 决策热点  11
* 热点专题  12
* 经济        13
* 政治        14
* 社会        15
* 文化        16
* 生态        17
* 国际关系  18
* 党的建设  19
* 通知公告  20
* 工作会议  21
* 活动        22
* 会议集萃  23
* 智库论坛  24
* */

// 获取决策热点子分类
function getArticleSonSort(parentId, callBack) {

    http.get(BaseUrl+"/articleSort/getArticleSonSort?parentId="+parentId, function (err, result) {

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

// 分页查询当前类型文章
function selectArticleSort(textTypeId, parentId,index,callBack) {

    http.get(BaseUrl+"/frontEnd/articleSort?textTypeId="+textTypeId+'&parentId='+parentId+'&index='+index, function (err, result) {

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
                sonsortArr = resultObj;
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

// 查看文章详情
function selectArticleDetails(articleId,callBack) {
    http.get(BaseUrl+"/article/articleDetails?id="+articleId, function (err, result) {

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
                sonsortArr = resultObj;
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

function selectVideoDetails(videoId, callBack) {

    http.get(BaseUrl+"/frontEnd/getVideoDetails?id="+videoId, function (err, result) {

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
                sonsortArr = resultObj;
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