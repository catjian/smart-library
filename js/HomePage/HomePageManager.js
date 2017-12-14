/**
 * Created by zhang_jian on 2017/11/27.
 */

document.write("<script language=\"javascript\" src=\"js/HttpRequest.js\"><\/script>");

var kindContentArr = [];
var recommendContentArr = [];
var newestContentArr = [];
var videoNews = null;
var videoNews1 = null;
var articleArr = [];

function findTitleImageByState() {

	http.get(BaseUrl + "/titleImg/findByState", function(err, result) {

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
					var resultObj = result.result;
					var str;
					// for (var i = 0; i < resultObj.length; i++)
					for (var i = resultObj.length-1; i >= 0; i--)
					{
						console.log(resultObj[i].imgUrl);
						str += '<div class="swiper-slide"><img  src=' + resultObj[i].imgUrl + ' width="100%"></div>';
					}
					str=str.replace("undefined","");
					$('#swiperbox').html(str);
					var mySwiper = new Swiper('#container1', {
							loop: true,
							autoplay: 6000,
							paginationClickable: true
						})
				}
				break;
			default:
				break;
		}
	});
}

// 2.1.6、获取优选资讯
function getArticle(textTypeId, callBack) {

	http.get(BaseUrl + "/frontEnd/article?textTypeId=" + textTypeId, function(err, result) {

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
					articleArr = result.result;
					if (articleArr.length > 0) {
						if (callBack != null) {
							callBack(articleArr);
						} else {
							var content = '<ul class="news-list-lg">';
							for (var i = 0; i < articleArr.length; i++) {
								var subObj = articleArr[i];
								content += '<li>';
								content += '<a href="zkyw-details.html?' + subObj.id + '" onclick="articleClickEvent(' + subObj.id + ')">';
								content += '<div><img src="' + subObj.imgUrl + '" alt=""></div>';
								content += '<h4>' + subObj.title + '</h4>';
								// content += '<p>' + subObj.content.length > 168 ? subObj.content.substring(0,168):subObj.content + '</p>';
								content += subObj.content.length > 80 ? subObj.content.substring(0, 80) : subObj.content;
								content += '</li>';
							}
							document.getElementById("articleList").innerHTML = content;
						}
					}
				}
				break;
			default:
				break;
		}
	});
}

// 2.1.6、获取优选资讯
function findVideoNews(index, size, query, callBack) {
	var params = '';
	if (index != null) {
		params += '?index=' + index;
	}
	if (size != null) {
		if (params.length == 0) params += '?size=' + size;
		else params += '&size=' + size;
	}
	if (query != null) {
		params += '&query=' + query;
	}
	http.get(BaseUrl + "/frontEnd/findByString" + params, function(err, result) {

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
					var resultArr = result.result;
					if (resultArr.length > 0) {
						if (callBack != null) {
							callBack(resultArr);
						} else {
							videoNews = resultArr[0];
							videoNews1 = resultArr[1];
							var content = '<dl class="hidden videoList">';
							content += '<li>';
							// content += '<dt><img src="img/news.jpg" height="209" width="350"></dt>';
							content += '<dt><video src="' + videoNews.videoUrl + '" controls>';
							content += '<dd>';
							content += '<a href="listvideo-details.html?' + videoNews.id + '" onclick="videonewsClickEvent(' + videoNews.id + ')">';
							content += '<h4>' + videoNews.title + '</h4>';
							content += '<p>' + videoNews.content + '</p>';
							content += '</a></dd>';
							content += '</li>';
							content += '<li>';
							// content += '<dt><img src="img/news.jpg" height="209" width="350"></dt>';
							content += '<dt><video src="' + videoNews1.videoUrl + '" controls>';
							content += '<dd>';
							content += '<a href="listvideo-details.html?' + videoNews1.id + '" onclick="videonewsClickEvent(' + videoNews1.id + ')">';
							content += '<h4>' + videoNews1.title + '</h4>';
							content += '<p>' + videoNews1.content + '</p>';
							content += '</a></dd>';
							content += '</li>';
							content += '</dl>';
							document.getElementById("findVideoNews").innerHTML = content;
						}
					}
				}
				break;
			default:
				break;
		}
	});
}



//2.11 获取五个同类文章
function getKind(textTypeId) {

	http.get(BaseUrl + "/frontEnd/getKind?textTypeId=" + textTypeId, function(err, result) {

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
					kindContentArr = result.result;
					if (kindContentArr.length > 0) {
						var content = '<h3>同类文章</h3>';
						content += '<ul>';
						for (var i = 0; i < kindContentArr.length; i++) {
							var subObj = kindContentArr[i];
							content += '<li><a href="##' + subObj.id + '" onclick="RecommendListClickEvent(' + subObj.id + ')">•&nbsp;&nbsp;' + subObj.title + '</a></li>';
						}
						document.getElementById("KindList").innerHTML = content;
					}
				}
				break;
			default:
				break;
		}
	});
}

// 2.1.5、获取轮播图展示的文章
//2.12 获取五个推荐文章
function getRecommendArticle(recommend) {

	http.get(BaseUrl + "/frontEnd/getRecommendArticle?recommend=" + recommend + (recommend == 0 ? '&size=3' : ''), function(err, result) {

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
					recommendContentArr = result.result;
					if (recommendContentArr.length > 0) {
						// if (recommend == 1) {
						// 	var content = '<h3>文章推荐</h3>';
						// 	content += '<ul>';
						// 	for (var i = 0; i < recommendContentArr.length; i++) {
						// 		var subObj = recommendContentArr[i];
						// 		content += '<li><a href="##' + subObj.id + '" onclick="RecommendListClickEvent(' + subObj.id + ')">•&nbsp;&nbsp;' + subObj.title + '</a></li>';
						// 	}
						// 	// document.getElementById("RecommendList").innerHTML = content;
						// }
						// else
						{
							var content = '<div class="pages" data-scro="list">';
							content += '<ul>';
							for (var i = 0; i < recommendContentArr.length; i++) {
								var subObj = recommendContentArr[i];
								content += '<li class="item"' + (i == 0 ? ' style="left:0;">' : '>');
								content += '<a href="news-details.html?' + subObj.id + '" onclick="RecommendListClickEvent(' + subObj.id + ')"><img src=' + subObj.imgUrl + '></a>';
								content += '<h3><a href="news-details.html?' + subObj.id + '" onclick="RecommendListClickEvent(' + subObj.id + ')">' + subObj.title + '</a></h3>';
								content += '<div></div>';
								content += '</li>';
							}
							content += '</ul>';
							content += '</div>';
							content += '<div class="controler" data-scro="controler">';
							content += '<b class="down">1</b>';
							content += '<b>2</b>';
							content += '<b>3</b>';
							content += '</div>';
							document.getElementById("section-focus-pic").innerHTML = content;
						}
					}
				}
				break;
			default:
				break;
		}
	});
}

//2.13 获取五个最新文章
function getNewestArticle() {

	http.get(BaseUrl + "/frontEnd/getNewestArticle", function(err, result) {

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
					newestContentArr = result.result;
					if (newestContentArr.length > 0) {
						var content = '<h3>最新发布</h3>';
						content += '<ul>';
						for (var i = 0; i < newestContentArr.length; i++) {
							var subObj = newestContentArr[i];
							content += '<li><a href="##' + subObj.id + '" onclick="RecommendListClickEvent(' + subObj.id + ')">•&nbsp;&nbsp;' + subObj.title + '</a></li>';
						}
						document.getElementById("NewestList").innerHTML = content;
					}
				}
				break;
			default:
				break;
		}
	});
}
//加入收藏 设为首页
function AddFavorite(title, url) {
 try {
   window.external.addFavorite(url, title);
 }
catch (e) {
   try {
    window.sidebar.addPanel(title, url, "");
  }
   catch (e) {
     alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
   }
 }
}

function SetHome(obj,url){
  try{
    obj.style.behavior='url(#default#homepage)';
    obj.setHomePage(url);
  }catch(e){
    if(window.netscape){
     try{
       netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
     }catch(e){
       alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
     }
    }else{
    alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
    }
 }
}

















