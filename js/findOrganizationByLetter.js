/**
 * Created by zhang_jian on 2017/11/29.
 */

document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");

function findOrganizationByLetter(letter,OrgType,callBack) {
    var params = '';
    if (letter != null) {
        params += '?letter='+letter;
    }
    if (OrgType != null) {
        if (params.length == 0) {
            params += '?type='+OrgType;
        }
        else {
            params += '&type='+OrgType;
        }
    }
    http.get(BaseUrl+"/frontEnd/findOrganizationByLetter"+params, function (err,result) {
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

function findOrganizationByCondition(field,keyword,organizationType,callBack) {
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
    if (organizationType != null) {
        if (params.length == 0) {
            params += '?organizationType='+organizationType;
        }
        else {
            params += '&organizationType='+organizationType;
        }
    }
    http.get(BaseUrl+"/frontEnd/findOrganizationByCondition"+params, function (err,result) {
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

function getOrganizationNotice(orgId, textTypeId, callBack) {

    var params = '';
    if (orgId != null) {
        params += '?id='+orgId;
    }
    if (textTypeId != null) {
        if (params.length == 0) {
            params += '?textTypeId='+textTypeId;
        }
        else {
            params += '&textTypeId='+textTypeId;
        }
    }
    http.get(BaseUrl+'/frontEnd/getOrganizationNotice'+params,function (err, result) {
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

function getOrganizationActivity(orgId, textTypeId, index, size, callBack) {

    var params = '';
    if (orgId != null) {
        params += '?id='+orgId;
    }
    if (textTypeId != null) {
        if (params.length == 0) {
            params += '?textTypeId='+textTypeId;
        }
        else {
            params += '&textTypeId='+textTypeId;
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
    http.get(BaseUrl+'/frontEnd/getOrganizationActivity'+params,function (err, result) {
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

function getThisInstitution(callBack) {
    http.get(BaseUrl+'/frontEnd/getThisInstitution',function (err, result) {
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

function findInstitutionByid(organizationId, callBack) {
    var params = '';
    if (organizationId != null) {
        params += '?organizationId='+organizationId;
    }
    http.get(BaseUrl+'/frontEnd/findInstitutionByid'+params,function (err, result) {
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

function getInstitutionArticle(orgId, textTypeId, index, size, callBack) {

    var params = '';
    if (orgId != null) {
        params += '?organizationId='+orgId;
    }
    if (textTypeId != null) {
        if (params.length == 0) {
            params += '?textTypeId='+textTypeId;
        }
        else {
            params += '&textTypeId='+textTypeId;
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
    http.get(BaseUrl+'/frontEnd/getInstitutionArticle'+params,function (err, result) {
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

