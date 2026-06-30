//#中心网站发布#

var Ecp_topToploginStr = "TopLoginNew";
var Ecp_mycnkiUrlConfig = 'my.cnki.net'
var Ecp_topLoginUrlConfig = '//login.cnki.net/toploginnew/';
var Ecp_VerifyCodeUrl = "https://my.cnki.net/EcpAPI/Login/GetVerifyCode";
// mark 上线改成true
var Ecp_CookieSecure = true;
var Ecp_realNameUrl = "//my.cnki.net/Certification/RealNameCertificationPopup.aspx";
var Ecp_staticSource = "https://piccache.cnki.net/2022/ecp/toplogin/";
var Ecp_staticSourceLocal = Ecp_topLoginUrlConfig;
var Ecp_accountMoveCent = "https://my.cnki.net/accountMove/notice.html";
var Ecp_accountMoveCento = "https://o.cnki.net/accountMove/notice.html";
var Ecp_topLoginUrl1 = "//login.cnki.net/TopLoginCore/";


// var Ecp_topToploginStr = "TopLogin";
// var Ecp_mycnkiUrlConfig = 'e.dev.cnki.net'
//  //local e.dev
// // var Ecp_topLoginUrlConfig = 'http://local.cnki.net/Toploginnew/'
// var Ecp_topLoginUrlConfig = '//e.dev.cnki.net/TopLogin/'
// var Ecp_VerifyCodeUrl = "//e.dev.cnki.net/ECPApiTest/Login/GetVerifyCode";
// var Ecp_CookieSecure = false;
// var Ecp_realNameUrl = "//e.dev.cnki.net/Certification/RealNameCertificationPopup.aspx";
// var Ecp_staticSource = "//ecp.dev.cnki.net/staticsource/TopLogin/";
// var Ecp_staticSourceLocal = Ecp_topLoginUrlConfig;
// var Ecp_accountMoveCent = "//e.dev.cnki.net/accountMove/notice.html";
// var Ecp_accountMoveCento = "//e.dev.cnki.net/accountMove/notice.html";
// var Ecp_topLoginUrl1 = "http://ec.dev.cnki.net/TopLogin/";



// 有,表示member的 !! 放入members虚拟目录下
//var Ecp_members = "members";
var Ecp_members = null;
var Ecp_membersStr = '';
if (Ecp_members) {
	Ecp_membersStr = 'members/'
}

var Ecp_alysid = "";
var Ecp_alysig = "";
var Ecp_alytok = "";
var currentType;
var ecpCheckCode;
// 接口签名测试
var Ecp_imagesUrl = "//login.cnki.net/toploginnew/";
// 接口签名测试
var Ecp_PageStyle = 'header';
var Ecp_Style = '1';
var Ecp_CookieDomain = "cnki.net";
var Ecp_isAuotIpLogin;
var Ecp_ArgueDic = new Object();
var Ecp_platform;
var AppendUID;
var lang;
var Ecp_VerifyCodeRegister = "";
var Ecp_VerifyCodePhone = "";
var Ecp_IsLoginRegist = false;
var Ecp_Lay_Locate = 'left';
var isWithIpLogin = "0";
var ecp_iever = 0;
// 1是滑块  2是图形验证码
var verificationWay = sessionStorage.getItem("verificationWay");
var qqLinkUrl;
var weixinLinkUrl;
var sinaLinkUrl;
var wyLinkUrl;

var clickUnCloseLoginNames = ["#Ecp_top_login_layer", "#Ecp_top_login", "#testunclose","#ecp-agreement-wrap","#tcaptcha_transform_dy"];
if (Ecp_members) {
	clickUnCloseLoginNames = ["#Ecp_top_login_layer", "#Ecp_top_logout_layer", "#Ecp_top_login", "#testunclose", "#Ecp_top_login_div2"];
}

Ecp_windowonlad(function () {
	CreateArgDic();
	ecp_iever = IEVersion();
	var nojquery = GetParams("nojquery")
	if (isNull(nojquery)) {
		nojquery = "0";
	}
	if (nojquery !== "1") {
		AppendJs(Ecp_staticSourceLocal + "scripts/jquery-3.7.1.min.js", InitPage);
	}
	else {
		InitPage();
	}
});


var dic = {
	"Access": "启用",
	"AllLogout": "全部退出",
	"BuyCard": "购买知网卡",
	"Cancel": "取消",
	"Close": "关闭",
	"CodeHolder": "请输入验证码",
	"CodeTip": "看不清？换一张",
	"CodeTitle": "换一张",
	"CodeWrong": "验证码不正确",
	"EmptyUsernamePassword": "请输入用户名密码",
	"FindPassword": "找回密码",
	"Help": "帮助中心",
	"HezuoLogin": "使用合作网站账号快速登录",
	"IPAutoLoginFailed": "IP自动登录失败",
	"IPLogin": "IP登录",
	"LoginFailed": "登录失败",
	"LoginSuccess": "登录成功",
	"LoginText": "登录",
	"LoginUnitUser": "登录机构用户",
	"Logout": "退出",
	"MyCNKI": "我的CNKI",
	"MyCNKI2": "我的账户",
	"NoAccount": "没有账号？",
	"NotLogin": "用户未登录或者已经退出",
	"OtherLogin": "其他登录",
	"OutSchool": "校外访问",
	"Oversea": "您的IP已超出中国大陆的许可使用范围！",
	"OverseaLoginExhaust": "您今年的应急服务次数已耗尽，<i>暂无法登录。</i>",
	"OverseaLoginServiceFailed": "启用应急服务失败，请稍后再试。",
	"OverseaVisit": "中国大陆地区以外的用户，请访问",
	"PasswordHolder": "请输入密码",
	"PersonLogout": "个人退出",
	"PersonLogin": " 登录 ",
	"PersonLogin2": " 登录 ",
	"QQLogin": "qq登录",
	"Recharging": "充值中心",
	"RegisterLong": "注册新用户",
	"RegisterNow": "立即注册",
	"RegisterShort": "注册",
	"RememberMe": "自动登录",
	"RememberMeTitle": "用户下次访问直接登录系统，为了账户安全，建议您在个人电脑使用此功能",
	"ServiceConfirm": "您确定要启用吗？",
	"ServiceTimeRemain": "您今年还可启用<i id='ecp_over_i'>j</i>次应急服务，每次<i>7</i>天。",
	"Shoujiban": "手机版",
	"SiteMap": "网站地图",
	"TimeoutAndRelogin": "启用应急服务超时或参数错误，请重新登录再试",
	"Tip": "提示",
	"UnitLogin": "机构登录",
	"UnitLogout": "机构退出",
	"UserLogin": "用户登录",
	"UserNameHolder": "请输入用户名/邮箱/手机号",
	"Welcome": "欢迎",
	"WxLogin": "微信登录",
	"WyLogin": "网易登录",
	"XlLogin": "新浪登录",
	"YourIP": "您当前IP为：",
	"WelcomeFrom": "欢迎来自",
	"WelcomeNew": "欢迎",
	"De": "的",
	"DeNin": "的您，个人账户"
};


function InitPage() {
	AppendJs(Ecp_staticSourceLocal + "scripts/ecpAgreementAlertLink.js?v=20251225",InitPageNext);
}
function InitPageNext() {
	//AppendJs(Ecp_staticSource + "scripts/jquery.cookie.js");
	// 接口签名测试
	AppendJs(Ecp_staticSource + "scripts/jquery.md5.js?v=20251225",InitPage00);
	// 接口签名测试
}

function InitPage00() {
	AppendJs(Ecp_staticSourceLocal + "scripts/crypto.js?v=20251225");
	AppendJs(Ecp_staticSourceLocal + "scripts/json2-min.js?v=20251225");
	//AppendJs(Ecp_staticSource + "scripts/resources/resource.js");
	AppendCss(Ecp_staticSourceLocal + 'content/index.css?v=20251225');
	//AppendCss(Ecp_staticSource + 'content/loginalert.css');
	// 接口签名测试
	// AppendJs("nregister.js");
	// AppendJs(Ecp_staticSource + "scripts/nregister20201022.js?v=230213");
	// 接口签名测试

	if (Ecp_members) {
		AppendCss(Ecp_staticSourceLocal + 'content/members/vip.css?v=20251225');
		AppendCss(Ecp_staticSourceLocal + 'content/base.css?v=20251225');
	}

	lang = GetParams("lang")
	if (isNull(lang)) {
		lang = "zh-CN";
	}
	// AppendJs(Ecp_staticSourceLocal + "scripts/resources/login." + lang.toLowerCase() + ".js", InitPage01);
	AppendJs(Ecp_staticSourceLocal + "scripts/login.zh-cn.js?v=20251225", InitPage01);
}


function InitPage01() {
	// AppendJs("https://g.alicdn.com/AWSC/AWSC/awsc.js", InitPage02);
	// AppendJs("https://g.alicdn.com/AWSC/AWSC/awsc.js", InitPage02);
	AppendJs("https://turing.captcha.qcloud.com/TJCaptcha.js", InitPage02);

}
// 接口签名测试
function InitPage02() {
	
	// AppendJs(Ecp_staticSourceLocal + "scripts/slideTop.js?v=20251225");
	AppendJs(Ecp_staticSourceLocal + "scripts/tencentSlide.js?v=20251225");
	AppendJs(Ecp_staticSourceLocal + "scripts/toplogin2.js?v=20251225", InitPage0);
}
// 接口签名测试
function InitPage0() {
	var style = GetParams("style")
	var localCSS = GetParams("localCSS")

	if (isNull(style)) {
		style = "1";
	}
	Ecp_Style = style;

	var laylocate = GetParams("laylocate");
	if (isNull(laylocate)) {
		Ecp_Lay_Locate = 'left';
	} else {
		Ecp_Lay_Locate = laylocate;
	}

	if (isNull(localCSS) || localCSS !== "1") {
		if (Ecp_Style === "1" || Ecp_Style === "3") {
			AppendCss(Ecp_staticSourceLocal + 'content/toplogin.css?v=20251225');
			// AppendCss(Ecp_staticSourceLocal + 'content/' + Ecp_membersStr + 'toplogin.css?v=230213');
		}
		else {
			AppendCss(Ecp_staticSource + 'content/toploginheng.css?v=20251225');
		}
	}
	if (Ecp_Style === "1") {		
		AppendJs(Ecp_staticSourceLocal + "scripts/top1.js?v=20251225", InitPage2);
		// AppendJs(Ecp_staticSourceLocal + "scripts/" + Ecp_membersStr + "top1.js?v=230213", InitPage2);
	}
	else if (Ecp_Style === "3") {
		AppendJs(Ecp_staticSourceLocal + "scripts/top3.js?v=20251225", InitPage2);
		// AppendJs(Ecp_staticSourceLocal + "scripts/" + Ecp_membersStr + "top3.js?v=230213", InitPage2);
	}
	else {
		AppendJs(Ecp_staticSourceLocal + "scripts/top2.js?v=20251225", InitPage2);
	}
};

function InitPage2() {
	if (Ecp_Style === "1" || Ecp_Style === "3") {
		Ecp_IsLoginRegist = true;
	}

	// alyyzm();

	AppendJs(Ecp_staticSourceLocal + "scripts/updatePasswordHandle.js?v=20251225");
	AppendCss(Ecp_staticSourceLocal + 'content/updatePassword.css?v=20251225');

	//if (lang === "zh-CN") {
	//	AppendJs(Ecp_staticSource + "scripts/topcn.js", InitPage3);
	//} else if (lang === "zh-TW") {
	//	AppendJs(Ecp_staticSource + "scripts/toptw.js", InitPage3);
	//} else if (lang === "en-US") {
	//	AppendJs(Ecp_staticSource + "scripts/topus.js", InitPage3);
	//}
	InitPage3();
}

function InitPage3() {
	var type = GetParams("type");
	isWithIpLogin = GetParams("isWithIpLogin");
	if (isNull(isWithIpLogin))
		isWithIpLogin = "0";
	var returnUrl = GetParams("returnUrl");
	var isAutoIpLogin = GetParams("isAutoIpLogin") || "1";
	Ecp_platform = GetParams("platform");
	AppendUID = GetParams("AppendUID");

	if (isNull(returnUrl)) {
		returnUrl = "https://www.cnki.net";
	}

	if (!isNull(Ecp_platform)) {
		returnUrl = decodeURIComponent(returnUrl);
		returnUrl = changeUrlArg(returnUrl, 'platform', Ecp_platform);
		returnUrl = encodeURIComponent(returnUrl);
	}

	var returnUrl2 = returnUrl;
	var result = style2();

	if (Ecp_Style === "2") {
		AppendJs(Ecp_staticSourceLocal + "scripts/top2js.js?v=20251225");
	}

	var placeid = GetParams("placeid");
	var placesucc = false;
	var isHasDom = $("#" + placeid + " > " + ".ecp_top-nav").length;
	if (!isNull(placeid)) {
		if(!isHasDom) {
			var placeho = $("#" + placeid + ":first");
			if (placeho) {
				placeho.prepend(result);
				placesucc = true;
			}
		}
		
	}

	if (!placesucc && !isHasDom) {
		$("body:first").prepend(result);
	}
	// 第三方登录也要先同意隐私协议
	qqLinkUrl = $("#qqThirdLogin").attr("href");
	$("#qqThirdLogin").attr("href","#");
	weixinLinkUrl = $("#weixinThirdLogin").attr("href");
	$("#weixinThirdLogin").attr("href","#");
	sinaLinkUrl = $("#sinaThirdLogin").attr("href");
	$("#sinaThirdLogin").attr("href","#");
	wyLinkUrl = $("#163ThirdLogin").attr("href");
	$("#163ThirdLogin").attr("href","#");
	FlushLogin();

	if (Ecp_Style === "1" || Ecp_Style === "3") {
		newLoginEvent();
		showNewStatus();
	}

	if (typeof LayInitComplete === 'function') {
		LayInitComplete();
	}

	function style2() {
		var result;
		if (Ecp_Style === "2") {
			if (!isNull(isWithIpLogin) && isWithIpLogin === "1") {
				result = txt.replace("$iplogin$", "<a id='Ecp_Button1' class='login-btn' style='float: left !important;' href='javascript:void(0);' tabindex='4'>[LoginText]</a><a id='Ecp_Button2' class='login-btn' style='float: left !important;' href='javascript:void(0);' tabindex='4'>[IPLogin]</a>")
					.replace("$loginStyle$", "")
			}
			else {
				result = txt.replace("$iplogin$", "<a id='Ecp_Button1' class='login-btn' href='javascript:void(0);' tabindex='5'>[LoginText]</a>")
					.replace("$loginStyle$", " btn-ljdl")
			}
		}
		else {
			result = txt;
		}
		result = ReplaceSource(result, dic);
		result = result.replace(new RegExp("#Ecp_mycnkiUrlConfig#", "g"), Ecp_mycnkiUrlConfig);

		if (!isNull(isAutoIpLogin) && isAutoIpLogin === "1") {
			Ecp_isAuotIpLogin = "1";
		}
		else {
			Ecp_isAuotIpLogin = "0";
		}

		result = result.replace(new RegExp("#lUrl#", "g"), Ecp_imagesUrl).replace(new RegExp("#ReturnUrl#", "g"), returnUrl2);
		if (!isNull(Ecp_platform)) {
			result = result.replace(new RegExp("#ecpplatform#", "g"), "?platform=" + Ecp_platform);
			result = result.replace(new RegExp("#&ecpplatform#", "g"), "&platform=" + Ecp_platform);
			if (!isNull(returnUrl)) {
				result = result.replace(new RegExp("#returnurl#", "g"), "&returnUrl=" + returnUrl);
			}
			else {
				result = result.replace(new RegExp("#returnurl#", "g"), "");
			}
		}
		else {
			result = result.replace(new RegExp("#ecpplatform#", "g"), "");
			result = result.replace(new RegExp("#&ecpplatform#", "g"), "");
			if (!isNull(returnUrl)) {
				result = result.replace(new RegExp("#returnurl#", "g"), "?returnUrl=" + returnUrl);
			}
			else {
				result = result.replace(new RegExp("#returnurl#", "g"), "");
			}
		}

		if (!isNull(AppendUID)) {
			result = result.replace(new RegExp("#AppendUID#", "g"), "&AppendUID=" + AppendUID);
		}
		else {
			result = result.replace(new RegExp("#AppendUID#", "g"), "");
		}

		if (!isNull(Ecp_platform)) {
			var ptcode = GetParams3("platform", Ecp_platform.toLowerCase());
			if (ptcode) {
				var cardlink = $("#Ecp_header_BuyCard_link");
				if (cardlink) {
					if (ptcode.toLowerCase() === "kjpt") {
						cardlink.attr("href", "https://kjcard.cnki.net/");
					} else if (ptcode.toLowerCase() === "skpt") {
						cardlink.attr("href", "https://skcard.cnki.net/");
					}
				}
			}
		}

		clicktoclose();
		function clicktoclose() {
			var ename = "#Ecp_top_login_layer";
			$(document).on("click", function (e) {
				//var clickCon = $("#Ecp_top_login");
				//var _conss = $(ename);
				//var c1 = !clickCon.is(e.target) && clickCon.has(e.target).length === 0;
				//var c2 = !_conss.is(e.target) && _conss.has(e.target).length === 0;

				//if (c1 && c2) {
				//	$(ename).hide();
				//	Ecp_LoginOpen = 0;
				//}

				var conss;
				var cc;
				var isin = false;
				for (var i = 0; i < clickUnCloseLoginNames.length; i++) {
					conss = $(clickUnCloseLoginNames[i]);
					if (conss.length > 0) {
						cc = !conss.is(e.target) && conss.has(e.target).length === 0;
						if (!cc) {
							isin = true;
							break;
						}
					}
				}
				if (!isin) {
					$(ename).hide();
					if (Ecp_members) {
						$("#Ecp_top_logout_layer").hide();
					}
					Ecp_LoginOpen = 0;
				}
			});
		}

		return result;
	}
}
function ecpThirdLogin(type) {
	if(type) {
		currentType = type;
	} else {
		type = currentType;
	}
	if(!$("#agreement").is(":checked")) {
		$("#ecp-agreement-wrap").show();
		window.parentLoginHandle = ecpThirdLogin;
    return
  }
	switch (type) {
		case 1: 
			window.location.href = qqLinkUrl;
		break;
		case 2: 
			window.location.href = weixinLinkUrl;
		break;
		case 3: 
			window.location.href = sinaLinkUrl;
		break;
		case 4: 
			window.location.href = wyLinkUrl;
		break;
	}
}

function WriteAlyLog(type, code) {
	//(int type, string code, string remark = "", string msg = "toplogin")
	var param = {
		type: type, code: code, remark: window.location.href
	};
  var signUrl = Ecp_topLoginUrl1 + "api/loginapi/WriteAlyError?type=" + type + "&code=" + code + "&remark=" + window.location.href;
  createSign(signUrl);
	$.ajax({
    type: "get",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    crossDomain: true,
    url: Ecp_topLoginUrl1 + "api/loginapi/WriteAlyError",
    data: param,
    dataType: "json",
		// url: Ecp_topLoginUrl + "api/loginapi/WriteAlyError",
		// data: param,
		// cache: false,
		// dataType: "jsonp",
		success: function (result) {
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			//alert("登录出错:" + XMLHttpRequest.status + XMLHttpRequest.statusText + " " + XMLHttpRequest.readyState + " " + textStatus);
		},
		complete: function (XMLHttpRequest, textStatus) { }
	});
}

function showNewStatus() {
	if (Ecp_Style !== "1" && Ecp_Style !== "3")
		return;
	var personStr = dic["PersonLogin"];
	$("#Ecp_top_login_show").text(personStr);
	$("#ecp_login_input_username").text("");
	$("#Ecp_welcome").text(dic["Welcome"]);
	$("#ecp_top_login_de").hide();
	$("#Ecp_top_login1").hide();

	switch (Ecp_LoginUsers) {
		case 0:
			$("#Ecp_welcome").text(dic["Welcome"]);
			break;
		case 1:
			$("#Ecp_loginShowName1Arrow").show();
			$("#Ecp_loginShowName1").css("cursor", "pointer");
			$("#Ecp_top_logout_showLayer1").unbind("click").bind("click", function () { Ecp_ShowLogOutLayer(1); });

			$("#Ecp_top_login_show").text(dic["PersonLogin2"]);

			$("#Ecp_welcome").text(dic["WelcomeFrom"]);
			$("#ecp_top_login_de").show();
			$("#ecp_top_login_de_p").text(dic["DeNin"]);
			$("#Ecp_top_login_div21").insertBefore($("#ecp_top_login_de"));
			$("#Ecp_top_login_div2").insertBefore($("#Ecp_top_login_laybox"));
			//}
			break;
		case 2:
			$("#Ecp_top_login_div2").insertBefore($("#ecp_top_login_de"));
			$("#Ecp_top_login_div21").insertBefore($("#Ecp_top_login_laybox"));
			break;
		case 3:
			$("#Ecp_loginShowName1Arrow").hide();
			$("#Ecp_loginShowName1").css("cursor", "default");
			$("#Ecp_top_logout_showLayer1").unbind("click");
			$("#Ecp_welcome").text(dic["WelcomeFrom"]);
			$("#ecp_top_login_de").show();
			$("#ecp_top_login_de_p").text(dic["De"]);
			$("#Ecp_top_login_div21").insertBefore($("#ecp_top_login_de"));
			$("#Ecp_top_login_div2").insertBefore($("#Ecp_top_login_laybox"));
			break;
	}
}

function newLoginEvent() {
	//$('.login-alert-input').focus(function () {
	//	$(this).parent().addClass('login-alert-input-focus');
	//})
	//$('.login-alert-input').focusout(function () {
	//	$(this).parent().removeClass('login-alert-input-focus');
	//})
	//// 弹窗
	//$('#login_box_main_c2').unbind("click").bind('click', function () {
	//	$('#login_box_main_container').show();
	//	$('#Ecp_common_login_box_zhezhao').show();
	//});
	//// 弹窗关闭
	//$('#Ecp_common_login_box_zhezhao').unbind("click").click(function () {
	//	$('#login_box_main_container').hide();
	//	$('#Ecp_common_login_box_zhezhao').hide();
	//});
	//$('#login_box_main_container_left_button').unbind("click").bind('click', ecp_login_Regist_Next);

	//$('#login_box_main_container_left_button1').unbind("click").bind('click', function () {
	//	$('#login_box_main_container_left2').hide();
	//	$('#login_box_main_container_left1').show();
	//});

	//$('#login_box_main_container_left4_button2').unbind("click").bind('click', function () {
	//	$('#login_box_main_container_left4').hide();

	//	$('#login_box_main_container_right').hide();
	//	$('#ecp_login_left_regist').show();
	//	$('#login_box_main_container_left1').hide();
	//	$('#login_box_main_container_left2').show();
	//});

	//$("#smsbtn").unbind("click").bind("click", getmobilecode);//.attr("cursor", "pointer") css("","")
}

function ecp_login_Regist_Next() {
	var t = startRequest(true);
	if (!t)
		return;

	if (!CheckPsd("userPsd", true, "spanphone_psd", "trphone_psd", "psdphone_flag", "psdphone_parent", "txtMobile"))
		return;

	$('#login_box_main_container_left1').hide();
	$('#login_box_main_container_left2').show();

	$("#txtMobile").val("");
	$("#phoneTxtCheckCode").val("");
	Ecp_ShowMsg("", "Reg2");
	$("#txtMobile").attr("placeholder", "请输入邮箱");
	changemobileemail();

	//if (isNull(Ecp_VerifyCodeRegister))
	GetRegisterCheckImg();

	$("#mobilelinkshowinfo").hide();
	$("#mobilesendnuminfo").html("").hide();
}

function ecp_login_show_login(showReg) {
	//$('#login_box_main_container_left3').hide();
	//$('#login_box_main_container_left4').hide();

	//var linkinfo = '立即登录';


	//if (linkinfo === '立即登录') {
	//	$('#login_box_main_container_header_span1').html("会员登录");
	//	Ecp_ShowMsg("");
	//	$("#Ecp_TextBoxUserName").val("");
	//	$("#Ecp_TextBoxPwd").val("");

	//	$('#login_box_main_container_left_all').hide();
	//	$('#ecp_login_left_regist').hide();
	//	$('#login_box_main_container_right').show();
	//	$('#Ecp_FindPassworda2').show();
	//} else {
	//	$('#login_box_main_container_header_span1').html("会员注册");
	//	//$('#login_box_main_container_header_span2').html("立即登录");

	//	Ecp_ShowMsg("", "Reg");
	//	$("#ecp_login_input_username").val("");
	//	$("#userPsd").val("");

	//	$('#login_box_main_container_left_all').show();
	//	$('#ecp_login_left_regist').show();
	//	$('#login_box_main_container_right').hide();
	//	$('#login_box_main_container_left2').hide();
	//	$('#login_box_main_container_left1').show();
	//}
}


isNull = function (str) {
	if (typeof (str) === "undefined" || str === null || str === "")
		return true;
	else
		return false;
};

function changeUrlArg(url, arg, val) {
	var pattern = arg + '=([^&]*)';
	var replaceText = arg + '=' + val;
	return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'), replaceText) : (url.match('[\?]') ? url + '&' + replaceText : url + '?' + replaceText);
}

function AppendJs(jsurl, callback) {
	var oHead = document.getElementsByTagName('HEAD').item(0);
	var oScript = document.createElement("script");
	oScript.src = jsurl;
	if (callback) {
		//if (ecp_iever>0)
		//	oScript.onreadystatechange = callback;
		//else
			oScript.onload = callback;
			oScript.onerror = callback;
	}
	oHead.appendChild(oScript);
}
//--------
function CreateArgDic() {
	var data = document.getElementById('toploginstruct').getAttribute('data').split('&');
	for (var vi = 0; vi < data.length; vi++) {
		var v = data[vi];
		var d = v.indexOf('=');
		var key = v.substring(0, d).toLowerCase();
		var val = v.substring(d + 1, v.length)
		Ecp_ArgueDic[key] = val;
	}

	var unclose = Ecp_ArgueDic["unclose"];
	if (unclose) {
		var uns = unclose.split("|");
		for (var i = 0; i < uns.length; i++) {
			clickUnCloseLoginNames.push("#" + uns[i]);
		}
	}
}

function GetParams(name) {
	return Ecp_ArgueDic[name.toLowerCase()];
}

//function GetUrl() {
//	var url = document.getElementById('toploginstruct');
//	var reg = new RegExp("toplogin", "i").exec(url);
//	return url.substring(0, reg.index);
//}

function AppendCss(path) {
	var a = document.createElement('link');
	a.href = path;
	a.rel = 'stylesheet';
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(a);
}

function AppendHtml(html) {
	var divTemp = document.createElement("div"), nodes = null
		, fragment = document.createDocumentFragment();
	divTemp.innerHTML = html;
	nodes = divTemp.childNodes;
	for (var i = 0, length = nodes.length; i < length; i += 1) {
		fragment.appendChild(nodes[i].cloneNode(true));
	}
	this.appendChild(fragment);
	nodes = null;
	fragment = null;
};

function ReplaceSource(origin, dic) {
	var i = origin.indexOf("[");
	var j = origin.indexOf("]");
	while (i >= 0) {
		var temp = origin.substring(i + 1, j);

		origin = origin.replace("[" + temp + "]", dic[temp]);

		i = origin.indexOf("[");
		j = origin.indexOf("]");
	}
	if (Ecp_members) {
		try {
			setTimeout(function () {
				$("#Ecp_top_logoutClick").text("[退出]");
				$("#personalCenter").text("[进入个人中心]");
			}, 0)
		} catch (error) {
			console.log(error)
		}
	}
	return origin;
}

//reg img
function GetRegisterCheckImg() {
  createSign(Ecp_VerifyCodeUrl + "?t=" + Math.random(new Date()))
	$.ajax({
    type: "get",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    crossDomain: true,
    url: Ecp_VerifyCodeUrl,
    data: {
      t: Math.random(new Date())
    },
    dataType: "json",
		// url: Ecp_VerifyCodeUrl + "?t=" + Math.random(new Date()),
		// dataType: "jsonp",
		// jsonp: "cnkicallback",
		success: function (result) {
			if (result && result.Success) {
				imginfo = result.Data;
				Ecp_VerifyCodeRegister = imginfo.Uuid;
				$("#checkcode").attr("src", "data:image/png;base64," + imginfo.Img);
			}
		}
	});
}

function baseUrl(url1) {
	if (!url1) {
		url1 = Ecp_topToploginStr;
	}
	var url = document.getElementById('toploginstruct').src;
	var host = url.substring(0, url.toLowerCase().indexOf(url1.toLowerCase()));
	return host;
}

function changemobileemail() {
	$("#mobilelinkshowinfo").hide();
	var ismob = isMobileOrEmail();
	Ecp_ShowMsg("", "Reg2");
	$("#txtMobile").val("");
	if (ismob) {
		$("#txtMobile").attr("placeholder", "请输入邮箱")
		$("#txtMobile").attr("maxlength", "60");
		$("#changemobemail").html("或使用手机")
		$("#login_box_main_container_left_mobilecode").hide();
	} else {
		$("#txtMobile").attr("placeholder", "请输入手机号码")
		$("#txtMobile").attr("maxlength", "11");
		$("#changemobemail").html("或使用邮箱")
		$("#login_box_main_container_left_mobilecode").show();
	}
}

function isMobileOrEmail() {
	return $("#txtMobile").attr("placeholder") === "请输入手机号码";
}

function Ecp_EnterSubmitReg(e, invalue, button) {
	if (window.event) {

		keyPressed = window.event.keyCode; // IE
	}
	else {

		keyPressed = e.which; // Firefox
	}
	if (keyPressed === 13 || e.event === "keydown") {
		ecp_login_Regist_Next();
		event.stopPropagation();
		return;
	}
}

function Ecp_windowonlad(FuncName) {
	if (document.all) {
		window.attachEvent('onload', FuncName)
	}
	else {
		window.addEventListener('load', FuncName, false);
	}
}

function GetParams3(name, src) {
	var reg = new RegExp("[^\?&]?" + encodeURI(name) + "=[^&]+");
	var arr = src.match(reg);
	if (arr !== null) {
		return decodeURI(arr[0].substring(arr[0].search("=") + 1));
	}
	return "";
}

function IEVersion() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器 
	var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器 
	var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion == 10) {
			return 10;
		} else if (fIEVersion == 9) {
			return 9;
		} else if (fIEVersion == 8) {
			return 8;
		} else if (fIEVersion == 7) {
			return 7;
		} else {
			return 6;//IE版本<=7
		}
	} else if (isEdge) {
		return 12;//edge
	} else if (isIE11) {
		return 11; //IE11 
	} else {
		return -1;//不是ie浏览器
	}
}

// aes加密
function aes256Encrypt(origin) {
  // 密钥 16 位
  var key = 't8b52yrsoyx66f35';
  // 初始向量 initial vector 16 位
  var iv = '0000000000000000';
  // key 和 iv 可以一致
  key = CryptoJS.enc.Utf8.parse(key);
  iv = CryptoJS.enc.Utf8.parse(iv);
  
  var encrypted = CryptoJS.AES.encrypt(origin, key, {
      iv: iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });
  // 转换为字符串
  return encrypted.toString();
}

function aes256Decrypt(origin) {
// 密钥 16 位
var key = 't8b52yrsoyx66f35';
// 初始向量 initial vector 16 位
var iv = '0000000000000000';
// key 和 iv 可以一致
key = CryptoJS.enc.Utf8.parse(key);
iv = CryptoJS.enc.Utf8.parse(iv);
var decrypted = CryptoJS.AES.decrypt(origin, key, {
  iv: iv,
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
});

// 转换为 utf8 字符串
return CryptoJS.enc.Utf8.stringify(decrypted);
}


function getProxyIp(bkName) {
	$.ajax({
		type: "get",
		async: false,
		crossDomain: true,
		url: "https://www.pzpzpop.com/i/p",
		dataType: "text",
		success: function (result) {
			getProxyIp2(result,bkName)
			// recodeIpLog(result,bkName);
		},
		error: function (error) {
			getProxyIp2("",bkName)
		} 
	});
}

function getProxyIp2(ip1,bkName) {
	$.ajax({
		type: "get",
		async: false,
		crossDomain: true,
		url: "https://api.ipify.org/?format=json",
		dataType: "text",
		success: function (result) {
			recodeIpLog(ip1,JSON.parse(result).ip,bkName);
		},
		error: function (error) {
			recodeIpLog(ip1,"",bkName);
		} 
	});
}
// s参数只有10.30.20.185传
function recodeIpLog(ip1,ip2,bkName) {
	var param = {
		u: window.location.href,
		b: bkName,
		r: document.referrer,
		c: document.cookie,
		i: ip1,
		i2: ip2,
		// s: 30185
	};
	$.ajax({
		url: "https://g.cnki.net/log/v/r",
		data: JSON.stringify(param),
		type: "POST",
		cache: false,
		contentType: "application/json",
		dataType: "text",
		success: function (result) {
			
		},
		error: function (error) {
			console.error('recodeIpLog');
		} 
	});
}
//=========

