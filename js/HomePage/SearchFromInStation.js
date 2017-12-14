/**
 * Created by zhang_jian on 2017/11/27.
 */

document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");

function searchByContentValue() {
    var searchInput = getByClass("input-230 border-radius5 right");
    if (searchInput.length == 0){
        return;
    }
    searchInput = searchInput[0];
    http.get(BaseUrl+'/query/zk/article?query='+searchInput.value, function (err, result) {

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
                if (result.result != null) {
                    localStorage.setItem("searchResponse", JSON.stringify(result.result));
                    window.location.href = "searchResponse.html";
                }
            }
                break;
            default:
                break;
        }
    });
}