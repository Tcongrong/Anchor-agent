var backurl = encodeURIComponent(location.href);
var serviceline = document.getElementById('serviceline');
if(serviceline && (serviceline.value==="esf" || serviceline.value === "zu")){
	backurl = location.href;
}
function getCookie(name) {
//	document.domain = 'fang.com';
	var start = document.cookie.indexOf(name + "=");
	var len = start + name.length + 1;
	if ((!start) && (name != document.cookie.substring(0, name.length)))
		return null;
	if (start == -1)
		return null;
	var end = document.cookie.indexOf(";", len);
	if (end == -1)
		end = document.cookie.length;
	return document.cookie.substring(len, end);
}
var cookie_passport = getCookie('passport');
var cookie_new_sfut = getCookie('sfut');
var isLogin = false;
var showLoginName = "";
var showLoginId = "";
var myXmlHttpRequest;
if (cookie_new_sfut!=null && cookie_new_sfut!='') {
	function getXmlHttpObject(){	
		var xmlHttpRequest;
		if(window.ActiveXObject){		
			xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");		
		}else{
			xmlHttpRequest=new XMLHttpRequest();
		}
			return xmlHttpRequest;
	}

	myXmlHttpRequest=getXmlHttpObject();
	if(myXmlHttpRequest){
		var url="https://www.fang.com/ajax2.do?unitedLogin=true&rand="+Math.random()+"&source=fang";
		myXmlHttpRequest.open("get",url,true);
		myXmlHttpRequest.withCredentials = true; //kua yu fang wen .cookies
//		myXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=GBK");
		myXmlHttpRequest.onreadystatechange=function chuli(){
			if(myXmlHttpRequest.readyState==4){
				if(myXmlHttpRequest.status==200){
					var responseResult= myXmlHttpRequest.responseText;
					var msgRes = JSON.parse(responseResult);

					var result = msgRes.feed.index;
					if (result == 100) {
						isLogin = true;
						if (isLogin) {
							showNickName = msgRes.feed.nickname; 
							showLoginName = msgRes.feed.username; 
							showLoginId = msgRes.feed.userid; 
							var nameStrTemp = decodeURI(showLoginName);
							var nicknameStr = decodeURI(showNickName)
							PASSPORT_LOGIN_AFTER(nicknameStr,nameStrTemp,showLoginId);
							if(document.getElementById('signUpli')){
								document.getElementById('signUpli').style.display = "none";
							}
							hideQipao();
						}
					}else {
						document.getElementById('sfHeadUsername').innerHTML = "登录";
						if(document.getElementById('signUpli')){
							document.getElementById('signUpli').style.display = "block";
						}
						deleteCookieLogin('new_loginid','/',null);// for zi xun
						deleteCookieLogin('login_username','/',null);// for wen da
						//deleteCookieLogin('sfut','/','fang.com');// for wen da
						setTimeout(qipao,10000)
					}
				
				}	
			 }
		}
		myXmlHttpRequest.send();
	}
}else{
	deleteCookieLogin('new_loginid','/',null);// for zi xun
	deleteCookieLogin('login_username','/',null);// for wen da
	setTimeout(qipao,10000)
	
}
function qipao(){
	if(!isLogin){
		var channel = document.getElementById('channelDsy').value;
		if(channel == 'dsy'){
			document.getElementsByClassName("guidance")[0].style.display = "block";
		}
	}
}

function hideQipao(){
	var channel = document.getElementById('channelDsy').value;
	if(channel == 'dsy'){
		document.getElementsByClassName("guidance")[0].style.display = "none";
	}
}

/**通行证又有了弹框，登录后需要*/
function PASSPORT_LOGIN_AFTER(nickName,loginName,loginId){
	document.getElementById('sfHeadRegister').target="_self";
	document.getElementById('sfHeadRegister').href = "https://passport.fang.com/logout.aspx?backurl=" + backurl;//设置logout
	var tui = document.getElementsByClassName('tuic');
	
	if(tui != undefined && tui != null){
		tui[0].style.display=""
	}
	
	if(null!=nickName && ''!= nickName){
		document.getElementById('sfHeadUsername').innerHTML = nickName;
	}else{
		document.getElementById('sfHeadUsername').innerHTML = loginName;
	}
//	
	deleteCookieLogin('new_loginid','/',null);// for zi xun
	deleteCookieLogin('login_username','/',null);// for wen da
	setCookieLogin('new_loginid',loginId,null,'/',null,true);//for zi xun
	setCookieLogin('login_username',loginName,null,'/',null,true);//for passport 
}

function urlencode(str) {
	str = (str + '').toString();
	return encodeURIComponent(str);
}

function changeSignUrl(){
	document.getElementById('signUp').href='https://passport.fang.com/NewRegister.aspx?backurl='+backurl;
}

function changeLoginUrl(){
	hideQipao();
	if (cookie_new_sfut!=null && cookie_new_sfut!='') {
		document.getElementById('sfHeadUsername').href=document.getElementById('userCenterUrl').value;
	}else{
		document.getElementById('sfHeadUsername').href='https://passport.fang.com/?backurl='+backurl;
	}
}
function setCookieLogin(sName, sValue, oExpires, sPath, sDomain, bSecure) {   
    var sCookie = sName + "=" + encodeURIComponent(sValue);   
    //除sName, sValue外，其他参考可选，所以使用前要判断是否传入   
    if (oExpires) {   
        //时间要是GMT格式   
        sCookie += "; expires=" + oExpires.toGMTString();   
    }   
    if (sPath) {   
        sCookie += "; path=" + sPath;   
    }   
    if (sDomain) {   
        sCookie += "; domain=" + sDomain;   
    }   
    if (bSecure) {   
        sCookie += "; secure";   
    }   
    document.cookie = sCookie;   
}

function deleteCookieLogin(sName, sPath, sDomain) {   
    //删除cookie必须给出与创建它时一样的路径和域信息。   
    var sCookie = sName + "=; expires=" + (new Date(0)).toGMTString();   
    if (sPath) {   
        sCookie += "; path=" + sPath;   
    }   
    if (sDomain) {   
        sCookie += "; domain=" + sDomain;   
    }   
    document.cookie = sCookie;   
} 