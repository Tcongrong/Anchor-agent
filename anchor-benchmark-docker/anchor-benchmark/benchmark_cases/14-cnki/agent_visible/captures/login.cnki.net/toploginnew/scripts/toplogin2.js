
//if (document.location.href.indexOf('cnki.net') > 0) {
//	document.domain = "cnki.net";
//}

var oauserSites = ["oi.cnki.net", "cajn.cnki.net", "dysw.cnki.net", "web02.cnki.net", "bnjj.cnki.net", "ste.cnki.net"
	, "local.cnki.net"
];

function getLoginResource(name) {
	//var lang = getUrlParam('lang');
	switch (lang) {
		case "zh-CN":
			resource = zhCN;
			break;
		case "zh-TW":
			resource = zhTW;
			break;
		case "en-US":
			resource = enUS;
			break;
		default:
			resource = zhCN;
			break;
	}
	return resource[name];
}

//获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}

function OauserOutSite(v) {
	try {
		if (isNull2(v)) { return false; }
		var vj = JSON.parse(v);
		var domain1 = document.domain.toLowerCase();
		if (vj.UserName.toLowerCase() === "oauser" && oauserSites.indexOf(domain1) > 0) {
			return true;
		}
	} catch (e) {
		return false;
	}
	return false;
}

jQuery.fn.shake = function (times, offset, delay) {
	this.stop().each(function () {
		var Obj = $(this);
		var marginLeft = parseInt(Obj.css('margin-left'));
		Obj.animate({ 'margin-left': marginLeft + offset }, delay, function () {
			Obj.animate({ 'margin-left': marginLeft }, delay, function () {
				times = times - 1;
				if (times > 0)
					Obj.shake(times, offset, delay);
			});
		});
	});
	return this;
};

function shake2(Obj, times, offset, delay) {
	Obj.stop().each(function () {
		var marginLeft = parseInt(Obj.css('margin-left'));
		Obj.animate({ 'margin-left': marginLeft + offset }, delay, function () {
			Obj.animate({ 'margin-left': marginLeft }, delay, function () {
				times = times - 1;
				if (times > 0)
					shake2(Obj, times, offset, delay);
			});
		});
	});
}

function Ecp_ShowMsgFocus(msg, focusEle) {
	Ecp_ShowMsg(msg);

	if (focusEle)
		focusEle.focus();
}
//----------------------

function Ecp_ShowMsgShake(msg, noshake) {
	Ecp_ShowMsg(msg);

	if (!noshake) {
		shake2($('#Ecp_top_login_layer'), 3, 4, 80);
	}
	//$('#Ecp_top_login_layer').shake(3, 4, 80);
}

function Ecp_ShowMsg(msg, isReg) {
	if (!isReg)
		isReg = "";
	var errorMsg = "#Ecp_errorMsg" + isReg;
	if (msg && msg.length > 0) {
		$(errorMsg).text(msg).show();
		$(".login-title").css("margin-bottom", 0);
	}
	else {
		$(errorMsg).text("").hide();
		$(".login-title").css("margin-bottom", "24px");
	}
}

Date.prototype.Format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"H+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	return fmt;
};
//-------------

var Ecp_IsShowCheck = false;
var Ecp_LoginStuts = "Ecp_LoginStuts";
var Ecp_notFirstLogin = "Ecp_notFirstLogin";
var b_AutoLogin;
var b_newLogin = false;
var Ecp_ResultR;
var Ecp_IsLogin = false;
var Ecp_CookieOtherDomain = '';
var Ecp_LoginOpen = 0;
var Ecp_LoginUsers = 0;//0null 1u 2p 3all
//var Ecp_VerifyCode = "";
//var Ecp_VerifyCount = 0;
//var Ecp_IsShowCheck = 0;//0null 1url 2url

function FlushLogin() {
	$("#Ecp_top_login_closeLayer").unbind("click").bind("click", function () { Ecp_CloseLayer(); });
	// $("#Ecp_CheckCodeImg").unbind("click").bind("click", function () { Ecp_ReGetImg(); });
	// $("#Ecp_CheckLink").unbind("click").bind("click", function () { Ecp_ReGetImg(); });
	$("#Ecp_Button1").unbind("click").bind("click", function () { return Ecp_SubmitCheck(this); });
	$("#Ecp_Button2").unbind("click").bind("click", function () { return Ecp_IpLogin(true); });

	$("#Ecp_top_login").unbind("click").bind("click", function () { Ecp_ShowLoginLayer2(2); });
	$("#Ecp_top_logout_showLayer").unbind("click").bind("click", function () { Ecp_ShowLogOutLayer(2); });
	$("#Ecp_top_logoutClick").unbind("click").bind("click", function () { Ecp_LogoutOptr_my(0); });
	$("#Ecp_top_login1").unbind("click").bind("click", function () { Ecp_ShowLoginLayer2(1); });
	$("#Ecp_top_logout_showLayer1").unbind("click").bind("click", function () { Ecp_ShowLogOutLayer(1); });
	$("#Ecp_top_logoutClick1").unbind("click").bind("click", function () { Ecp_LogoutOptr_my(0); });

	$("#Ecp_top_logoutGrClick").unbind("click").bind("click", function () { Ecp_LogoutOptr_my(2); });
	$("#Ecp_top_logoutJgClick1").unbind("click").bind("click", function () { Ecp_LogoutOptr_my(1); });
	$("#Ecp_TextBoxUserName").on("change",function() {
		getAgreementVersions($("#Ecp_TextBoxUserName").val())
	})
	$("#ecpover_open").unbind("click");

	if (Ecp_IsLoginRegistValue()) {
		$("#Ecp_top_logoutGrli1").hide();
		$("#Ecp_top_logoutJgli1").hide();
	}

	var loginlink = $("script[src]").filter(function () { return $(this).attr('src').toUpperCase().indexOf("LOGINAPI") >= 0; });
	if (loginlink && loginlink.length > 0) {
		var loginlinkattr = loginlink.attr('src');
		if (loginlinkattr) {
			var ptcode = GetParams3("platform", loginlinkattr.toLowerCase());
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
	}

	Ecp_ValdateInput("Ecp_TextBoxUserName");
	Ecp_ValdateInput("Ecp_TextBoxPwd");
	var domain1 = document.domain;
	if (!domain1.toLowerCase().endWith('cnki.net') && !/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(domain1)) {
		var intd = domain1.indexOf('cnki.net');
		if (intd > 0) {
			Ecp_CookieOtherDomain = domain1.substr(intd);
		}
		else {
			Ecp_CookieOtherDomain = domain1.replace('www.', '');
		}	
	}
	if (isNull2(Ecp_topLoginUrl1))
		Ecp_topLoginUrl1 = Ecp_topLoginUrlConfig;

	var uid = Ecp_GetQueryString("uid");
	if (uid && uid.length > 100) {
		var cuid5 = cookie('ecp_uid5');
		var uid5 = $.md5(uid);
		if (cuid5 === undefined || cuid5 && cuid5.length >= 16 && cuid5 !== uid5) {
			cookie("ecp_uid5", uid5);
			var autoLogin = Ecp_GetQueryString("autoLogin");
			if (autoLogin && autoLogin === '1')
				b_AutoLogin = true;

			b_newLogin = true;
			var nf = cookie(Ecp_notFirstLogin);
			Ecp_UidLogin(uid, nf);
			return;
		}
	}
	Ecp_FlushLogin();
}

function Ecp_FlushLogin() {
	var showCode = cookie("ecp_showcode");
	if (showCode !== undefined && showCode !== null && showCode === "1") {
		Ecp_IsShowCheck = true;
		// Ecp_ReGetImg();
	}

	var islogin = false;
	var v = cookie(Ecp_LoginStuts,undefined,{},true);
	var uid = cookie('c_m_LinID');
	if (v && v.length > 0 && uid) {
		v = v.replace(/ShowName":"(%09|\+)+/g, 'ShowName":"');
		islogin = true;
    try {
			var vj = JSON.parse(v);
		} catch (error) {
			console.log(11111111);
			cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieDomain });
			if (Ecp_CookieOtherDomain.length > 0) {
				cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
			}
		}
			var ses = cookie("Ecp_session");
			if (!ses || ses.length === 0 && ses === "") {
				b_newLogin = true;
			}

			var nf = cookie(Ecp_notFirstLogin);
			if (nf && nf.length > 0) {
				if (nf !== vj.r) {
					b_newLogin = true;
				}
			} else {
				Ecp_ResultR = vj.r;
				b_newLogin = true;
			}
			Ecp_LoginResult(vj);
		
		
	} else {
		cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieDomain });
		if (Ecp_CookieOtherDomain.length > 0) {
			cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
		}
	}
	if (!islogin && Ecp_isAuotIpLogin === '1') {
		var faultIp = cookie("Ecp_IpLoginFail");
		var isLogout = cookie("Ecp_lout");

    // start 接口签名
    var signUrl = Ecp_topLoginUrl1 + "api/loginapi/IpLoginFlush";
    var param = {};
    // end 接口签名
		if ((typeof Ecp_platform) !== 'undefined' && !isNull2(Ecp_platform)) {
			param.platform = Ecp_platform;
      signUrl += "?platform=" + Ecp_platform
		}
		
		if ((!faultIp || faultIp.length <= 0) && (!isLogout || isLogout.length <= 0)) {
			if (ecp_iever !== -1 && ecp_iever <= 10) {
				createSign(signUrl);
			$.ajax({
        type: "get",
        async: false,
        xhrFields: {
          withCredentials: true,
        },
        crossDomain: true,
        url: Ecp_topLoginUrl1 + "api/loginapi/IpLoginFlush",
        data: param,
        dataType: "text",
				// url: url1,
				// dataType: "jsonp",
				success: function (result) {
					result = JSON.parse(result.replace("(", "").slice(0, -1))
					//console.log("Top:IpLoginFlush," + result.IsSuccess + "|" + result.ErrorCode + "|" + result.ErrorMsg);
					if (result.success && Ecp_CookieOtherDomain.length > 0) {
						cookie("Ecp_IpLoginFail", "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
					}
					Ecp_LoginSuccessOne(2, result);
				}
			});
			}else {
				createSign(signUrl.replace("IpLoginFlush","IpLoginFlushPo"));
				$.ajax({
					url: Ecp_topLoginUrl1 + "api/loginapi/IpLoginFlushPo",
					data: JSON.stringify(param),
					type: "POST",
					cache: false,
					xhrFields: {
						withCredentials: true
					},
					contentType: "application/json",
					dataType: "text",
					success: function (result) {
						result = JSON.parse(result.replace("(", "").slice(0, -1))
						if (result.success && Ecp_CookieOtherDomain.length > 0) {
							cookie("Ecp_IpLoginFail", "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
						}
						Ecp_LoginSuccessOne(2, result,"IpLoginFlush");
					}
				});
			}
      
		}
	}
}
//----------------------

function Ecp_ShowLogOutLayer(p) {
	$('#Ecp_top_login_layer').hide();
	Ecp_LoginOpen = 0;

	if (p === 1) {
		$('#Ecp_top_logout_layer1').toggle();
		$('#Ecp_top_logout_layer').hide();
	} else {
		$('#Ecp_top_logout_layer').toggle();
		$('#Ecp_top_logout_layer1').hide();
	}
}

function Ecp_CloseLayer() {
	if (Ecp_Style === '2') {
		$("#Ecp_modal_he").hide();
		$("#Ecp_shadow_he").hide();
		$("#Ecp_top_login_layer").hide();
	}
	else {
		$('#Ecp_top_login_layer').hide(500);
	}
	Ecp_LoginOpen = 0;
}

function Ecp_WelcomeShow() {
}

function Ecp_UserStatus() {
	var b1 = !$("#Ecp_top_login1").is(':visible');
	var b2 = !$("#Ecp_top_login").is(':visible');
	if (b1) {
		if (b2) {
			return 3;
		}
		return 2;
	}
	if (b2) {
		return 1;
	}
	return 0;
}

function Ecp_ShowLoginLayer2(p, left, top) {

	Ecp_ShowMsg();

	if (Ecp_IsShowCheck) {
		// Ecp_ReGetImg();
	} else {
		Ecp_ReColseImg();
	}

	if (Ecp_Style === '2') {
		$("#Ecp_modal_he").show();
		$("#Ecp_shadow_he").show();
		$("#Ecp_top_login_layer").show();
		$('#Ecp_top_login_layer').animate({ "top": "50%", "left": "50%", "margin-top": "-173px" }, 800);
		if (p === 1) {
			$('#Ecp_TextBoxUserName').attr('placeholder', getLoginResource['UserNameHolderJG']);
			$('#Ecp_ThirdLogin').hide();
			$('#Ecp_RegistNew').hide();
		} else {
			$('#Ecp_TextBoxUserName').attr('placeholder', getLoginResource['UserNameHolder']);
			$('#Ecp_ThirdLogin').show();
			$('#Ecp_RegistNew').show();
		}
	}
	else {
		if (left && top)
			$('#Ecp_top_login_layer').css({ 'left': left, 'top': top }).toggle();
		else {
			if (Ecp_LoginOpen === 0) {
				$('#Ecp_top_login_layer').show();
				Ecp_LoginOpen = p;
			}
			else {
				if (Ecp_LoginOpen === p) {
					$('#Ecp_top_login_layer').hide();
					Ecp_LoginOpen = 0;
				} else {
					Ecp_LoginOpen = p;
				}
			}

			// var isjflogin = Ecp_isjflogined();
			// var isbklogin = Ecp_isbklogined();

			var IsLoginRegistValue = Ecp_IsLoginRegistValue();
			if (p === 1) {
				if (Ecp_Lay_Locate === 'left') {
					$('#Ecp_top_login_layer').css({ 'left': '-77px' });
				} else {
					$('#Ecp_top_login_layer').css({ 'left': '-362px' });
				}

				$('#Ecp_TextBoxUserName').attr('placeholder', getLoginResource['UserNameHolderJG']);
				$('#Ecp_ThirdLogin').hide();
				$('#Ecp_RegistNew').hide();
				if (IsLoginRegistValue) {

					$('#ecp_login_switch').hide();
					$('#ecp_login_left_regist').hide();
					$('.ecp_titletips').css('height', '30px');
					$('#login_box_main_container_right_check').css("background", "#fff");
					$('#login_box_main_container').css("min-height", "218px");
					$('#Ecp_FindPassworda2').hide();
				}
			} else {
				if (Ecp_Lay_Locate === 'left') {
					$('#Ecp_top_login_layer').css({ 'left': '-77px' });
				} else {
					$('#Ecp_top_login_layer').css({ 'left': '-362px' });
				}
				$('#Ecp_TextBoxUserName').attr('placeholder', getLoginResource['UserNameHolder']);
				$('#Ecp_ThirdLogin').show();
				$('#Ecp_RegistNew').show();
				if (IsLoginRegistValue) {
					$('#ecp_login_switch').show();
					$('#ecp_login_left_regist').show();
					$('.ecp_titletips').css('height', '0px');
					$('#login_box_main_container_right_check').css("background", "url('https://piccache.cnki.net/2022/ecp/toplogin/images/line.png') no-repeat center 100%;");
					$('#Ecp_FindPassworda2').show();
				}
			}

			$('#Ecp_top_logout_layer').hide();
			$('#Ecp_top_logout_layer1').hide();
		}
	}

	if (Ecp_IsLoginRegistValue()) {
		$("#ecp_login_input_username").val("");
		$("#txtMobile").val("");
		$("#userPsd").val("");
		$("#phoneTxtCheckCode").val("");
		$("#phoneValidateCode").val("");

		Ecp_ShowMsg("", "Reg");
		Ecp_ShowMsg("", "Reg2");

		$('#Ecp_RegistNew').hide();
		$('#Ecp_FindPassworda').hide();

		// if (Ecp_LoginUsers === 0 && (isjflogin || isbklogin) || Ecp_LoginUsers === 1 && isjflogin) {
		// 	ecp_login_show_login(2);
		// } else {
		// 	ecp_login_show_login(1);
		// }
	}
}

// function Ecp_isjflogined() {
// 	var i = cookie("Ecp_loginuserjf");
// 	return !isNull2(i);
// }
// function Ecp_isbklogined() {
// 	var i = cookie("Ecp_loginuserbk");
// 	return !isNull2(i);
// }

function Ecp_GetLoginStatus2() {
	if (Ecp_LoginUsers === 0) {
		return 0;
	}
	if (Ecp_LoginUsers === 1) {
		return 2;
	}
	return 1;
}
function setAgreementVersions() {
	if(!localStorage.getItem("ecpAgreementVersions")) {
		 localStorage.setItem("ecpAgreementVersions",currentAgreementVersions);
	 }
	 var loggedUserList = localStorage.getItem("ecpLoggedUserList");
	 if(loggedUserList) {
		 var tempArray = JSON.parse(loggedUserList);
		 tempArray.push($("#Ecp_TextBoxUserName").val());
		 localStorage.setItem("ecpLoggedUserList",JSON.stringify(tempArray));
	 } else {
		 localStorage.setItem("ecpLoggedUserList",JSON.stringify([$("#Ecp_TextBoxUserName").val()]));
	 }
}
function Ecp_GetLoginStatus() {
	var gr = !$("#Ecp_top_login").is(":hidden");
	var jg = !$("#Ecp_top_login1").is(":hidden");
	if (jg) {
		if (gr)
			return 0;
		return 1;
	}
	else {
		if (gr)
			return 2;
	}
	if (!gr && !jg && typeof Ecp_HiddenHeader !== "undefined" && Ecp_HiddenHeader) {
		return 0;
	}
	return 3;
}

var ecp_password = '';

//login----------------
function Ecp_UserLogin(userName, pwd) {
	ecp_password = pwd;

	var p = Ecp_GetLoginStatus2();
	b_AutoLogin = $("#rememberMe").prop("checked");
	var showCode = cookie("ecp_showcode");
	if (showCode !== undefined && showCode !== null && showCode === "1") {
		Ecp_IsShowCheck = true;
	}
	if (Ecp_IsShowCheck && !ecpCheckCode) {
		// if(verificationWay == 1) {
		// 	if (!Ecp_alysid) {
		// 		Ecp_ShowMsgFocus(getLoginResource("CompleteCheckCode"));
		// 		return false;
		// 	}
		// } else {
		// 	if (!$("#Ecp_CheckCode").val().trim()) {
		// 		Ecp_ShowMsgFocus(getLoginResource("CompleteCheckCode1"));
		// 		return false;
		// 	}
		// }
		
		//var ccode = checkCode.val();
		//if (ccode === '') {
		//	Ecp_ShowMsgFocus(getLoginResource("NeedCode"), checkCode);
		//	return false;
		//}
		//if (RegexCheck(/^[A-Za-z0-9]{4,4}$/, ccode) === false) {
		//	Ecp_ShowMsgFocus(getLoginResource("NeedRightCode"), checkCode);
		//	return false;
		//}
		window.ecpTriggerType = 1;
		window.captcha.show();
		return
	}
	Ecp_ShowMsg(getLoginResource("Logining"));
  // start 接口签名
  var signUrl;
  // end 接口签名
	var param;
	if (Ecp_IsShowCheck) {
		var cCode = ecpCheckCode;
		param = {
			userName: userName, pwd: pwd, isAutoLogin: b_AutoLogin, checkCode: cCode, p: p,verifyType: 3// vc: Ecp_VerifyCode + "|" + Ecp_VerifyCount,
		};
    signUrl = Ecp_topLoginUrl1 + "api/loginapi/Login?userName=" + userName  + "&isAutoLogin=" + b_AutoLogin + "&checkCode=" + cCode + "&p=" + p  + "&verifyType=3" 
	}
	else {
		param = {
			userName: userName, pwd: pwd, isAutoLogin: b_AutoLogin, p: p //vc: Ecp_VerifyCode + "|" + Ecp_VerifyCount,
		};
    signUrl = Ecp_topLoginUrl1 + "api/loginapi/Login?userName=" + userName  + "&isAutoLogin=" + b_AutoLogin + "&p=" + p 
	}
	if ((typeof Ecp_platform) !== 'undefined' && !isNull2(Ecp_platform)) {
		param["platform"] = Ecp_platform;
    signUrl += "&platform=" + Ecp_platform;
	}
	signUrl += "&isEncry=" + 1;
  signUrl += "&pwd=" + aes256Encrypt(pwd);
	param.pwd = aes256Encrypt(param.pwd);
	param.isEncry = 1;
	ecpCheckCode = "";
	if (ecp_iever !== -1 && ecp_iever <= 10) {
		// if (window.XDomainRequest) {
		// 	var XDR = new XDomainRequest();
		// 	XDR.open(
		// 		"GET",
		// 		signUrl
		// 	);
		// 	setTimeout(function() {
		// 		XDR.send();
		// 	}, 0);
		// 	XDR.onload = function() {
		// 		Ecp_LoginSuccessOne(p, res);
		// 	};
		// } else {
		createSign(signUrl)
		$.ajax({
      type: "get",
        async: false,
        xhrFields: {
          withCredentials: true,
        },
        crossDomain: true,
        url: Ecp_topLoginUrl1 + "api/loginapi/Login",
        data: param,
        contentType: "application/json",
        dataType: "text",
			success: function (result) {
				result = JSON.parse(result.replace("(", "").slice(0, -1))
				Ecp_LoginSuccessOne(p, result);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				//alert("登录出错:" + XMLHttpRequest.status + XMLHttpRequest.statusText + " " + XMLHttpRequest.readyState + " " + textStatus);
			},
			complete: function (XMLHttpRequest, textStatus) { $("#Ecp_TextBoxPwd").val(""); }
		});
		// }
    
	} else {
    createSign(signUrl.replace("Login","LoginPo"));
		$.ajax({
			url: Ecp_topLoginUrl1 + "api/loginapi/LoginPo",
			data: JSON.stringify(param),
			type: "POST",
			cache: false,
			xhrFields: {
				withCredentials: true
			},
			contentType: "application/json",
			success: function (result) {
				Ecp_LoginSuccessOne(p, result);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
			},
			complete: function (XMLHttpRequest, textStatus) { $("#Ecp_TextBoxPwd").val(""); }
		});
	}
}

function Ecp_IpLogin(forceLogin) {
	var p = Ecp_GetLoginStatus2();// Ecp_GetLoginStatus();
	b_AutoLogin = $("#rememberMe").prop("checked");
	var cCode = "";
	var showCode = cookie("ecp_showcode");
	if (showCode !== undefined && showCode !== null && showCode === "1") {
		Ecp_IsShowCheck = true;
	}
	if (Ecp_IsShowCheck && !ecpCheckCode) {
		window.ecpTriggerType = 2;
		window.captcha.show();
		return
	}

	Ecp_ShowMsg(getLoginResource("Logining"));
	if (forceLogin)
		forceLogin = true;
	else
		forceLogin = false;
	if (Ecp_IsShowCheck) {
		cCode = ecpCheckCode;
		// ResetCheckCode();
	}
	var ecpTimeStamp = Date.now();
  // start 接口签名
  var signUrl = Ecp_topLoginUrl1 + "api/loginapi/IpLogin?isAutoLogin=" + b_AutoLogin + "&checkCode=" + cCode + "&isForceLogin=" + forceLogin + "&p=" + p + "&t=" + ecpTimeStamp + "&verifyType=3";
  // end 接口签名
	var param;
	param = {
		isAutoLogin: b_AutoLogin, checkCode: cCode, isForceLogin: forceLogin, p: p,t: ecpTimeStamp,verifyType: 3// vc: Ecp_VerifyCode + "|" + Ecp_VerifyCount,
	};
	if ((typeof Ecp_platform) !== 'undefined' && !isNull2(Ecp_platform)) {
		param["platform"] = Ecp_platform;
    signUrl += "&platform=" + Ecp_platform;
	}
	ecpCheckCode = "";
	if (ecp_iever !== -1 && ecp_iever <= 10) {
		createSign(signUrl)
		$.ajax({
			type: "get",
			async: false,
			xhrFields: {
				withCredentials: true,
			},
			crossDomain: true,
			url: Ecp_topLoginUrl1 + "api/loginapi/IpLogin",
			data: param,
			dataType: "text",
			// url: Ecp_topLoginUrl1 + "api/loginapi/IpLogin",
			// data: param,
			// dataType: "jsonp",
			success: function (result) {
				result = JSON.parse(result.replace("(", "").slice(0, -1))
				if (result.success && Ecp_CookieOtherDomain.length > 0) {
					cookie("Ecp_IpLoginFail", "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
				}
				Ecp_LoginSuccessOne(p, result);
			}
		});
	} else {
		createSign(signUrl.replace("IpLogin","IpLoginPo"));
		$.ajax({
			url: Ecp_topLoginUrl1 + "api/loginapi/IpLoginPo",
			data: JSON.stringify(param),
			type: "POST",
			cache: false,
			xhrFields: {
				withCredentials: true
			},
			contentType: "application/json",
			dataType: "text",
			success: function (result) {
				result = JSON.parse(result.replace("(", "").slice(0, -1))
				if (result.success && Ecp_CookieOtherDomain.length > 0) {
					cookie("Ecp_IpLoginFail", "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
				}
				Ecp_LoginSuccessOne(p, result);
			}
		});
	}
	
}

function Ecp_LoginSuccessOne(p, result,trigger) {
	// IP自动登录不触发滑块
	if(!trigger) {
		Ecp_IsShowCheck = result.IsShowCheck;
	}
	if (result.IsSuccess === true) {
		b_newLogin = true;
		Ecp_IsShowCheck = false;
	}

	// if (Ecp_IsShowCheck) {
	// 	Ecp_ReGetImg();
	// }

	Ecp_LoginResult(result, p);

	StrongPasswordTips(result);
}

/**
 * 强密码修改提示
 */
function StrongPasswordTips(result) {
	//var isshow = cookie('Ecp_showpwdstrong');
	//if (isshow !== null) {
	//	return;
	//}
	var d2 = new Date();
	d2.setHours(d2.getHours() + 24);
	//cookie("Ecp_showpwdstrong", "1", { expires: d2, path: '/', domain: Ecp_CookieDomain });

	if (ecp_password !== '' && result.UserType === 'jf') {
		var pattern = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9-`~!@#$%^&*()_+={}\[\]|\\:;"",.<>/?]{8,20}|(?=.*[A-Za-z])(?=.*[-`~!@#$%^&*()_+={}\[\]|\\:;"",.<>/?])[A-Za-z0-9-`~!@#$%^&*()_+={}\[\]|\\:;"",.<>/?]{8,20}|(?=.*[0-9])(?=.*[-`~!@#$%^&*()_+={}\[\]|\\:;"",.<>/?])[A-Za-z0-9-`~!@#$%^&*()_+={}\[\]|\\:;"",.<>/?]{8,20}$/;

		if (!pattern.exec(ecp_password)) {
			var t = $("#update-password-wrap");
			if (t)
				t.css('display', 'block');
		}
	}
}

function updatePwdDialogClose() {
	document.getElementById("update-password-wrap").style.display = 'none';
}
//function linkToMycnki() {
//	window.location.href = '//o.cnki.net/mycnki/myAccount.html#/accountSafe';
//}

/**
 * 强密码修改提示结束
 */

function Ecp_UidLogin(uid, r) {
  // start 接口签名
  var param = {};
  // end 接口签名
	var url1 = Ecp_topLoginUrl1 + "api/loginapi/UidLogin";
	var isF = true;
	if (uid && uid.length > 0) {
		url1 += "?uid=" + uid + "&cookieLogin=true";
    param.uid = uid;
    param.cookieLogin = true;
		isF = false;
	}
	if (r && r.length > 0) {
		if (isF) {
			url1 += "?r=" + r;
		} else {
			url1 += "&r=" + r;
		}
    param.r = r;
	}
	if ((typeof Ecp_platform) !== 'undefined' && !isNull2(Ecp_platform)) {
		if (isF) {
			url1 += "?platform=" + Ecp_platform;
		} else {
			url1 += "&platform=" + Ecp_platform;
		}
    param.platform = Ecp_platform;
	}
  createSign(url1)
	$.ajax({
		// url: url1,
		// dataType: "jsonp",
    type: "get",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    crossDomain: true,
    url: Ecp_topLoginUrl1 + "api/loginapi/UidLogin",
    data: param,
    dataType: "text",
		success: function (result) {
			result = JSON.parse(result.replace("(", "").slice(0, -1))
			if (!result.IsSuccess) {
				var uid = cookie('c_m_LinID');
				var u = "";
				if (uid !== null) {
					u = getSubCookie(decodeURIComponent(uid), "LinID");
				}
			}
			if (result.IsSuccess === true) {
				Ecp_LoginResult(result);
				return;
			}
			else {
				Ecp_loginFalse();
				Ecp_ReomveCookie(0);
			}
		}
	});
}

function Ecp_loginFalse() {
	Ecp_IsLogin = false;
	Ecp_ShowMsg();
	$('#Ecp_top_login_oversea').hide();
}

function Ecp_ReomveCookie(p) {
	var remove = p;

	var v = cookie(Ecp_LoginStuts,undefined,{},true);
	if (v && v.length > 0) {

	}
	else {
		remove = 0;
	}

	if (remove === 0) {
		console.log(33333333);
		cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieDomain });
		cookie(Ecp_notFirstLogin, "", { expires: -1 });
		cookie("c_m_expire", "", { expires: -1, path: '/', domain: Ecp_CookieDomain });
		cookie("c_m_LinID", "", { expires: -1, path: '/', domain: Ecp_CookieDomain });
		cookie("Ecp_session", "", { expires: -1 });
		cookie("LID", "", { expires: -1, path: '/', domain: Ecp_CookieDomain });
		if (Ecp_CookieOtherDomain.length > 0) {
			cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
			cookie("c_m_expire", "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
			cookie("c_m_LinID", "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
			cookie("Ecp_session", "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
			cookie("LID", "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
		}
	}
}

//----------------------

function Ecp_LoginResult(vj, p) {
	if (vj === undefined || vj === null) {
		Ecp_loginFalse();
		Ecp_ReomveCookie(p);
		Ecp_ShowMsgShake(getLoginResource("LoginFailed"));
		return;
	}
	if (Ecp_members) {
		$("#vipUserName").text(vj.UserName);
	}

	var d = new Date();
	if (Ecp_IsShowCheck) {
		// Ecp_ReGetImg();
		d = d.setFullYear(d.getFullYear() + 1);
		cookie("ecp_showcode", "1", { expires: d, path: "/", domain: Ecp_CookieOtherDomain });
	}
	else {
		$("#Ecp_CheckCodeImg").attr({ src: "" });
		Ecp_ReColseImg();
		cookie("ecp_showcode", "", { expires: -1, path: "/", domain: Ecp_CookieOtherDomain });
	}

	if (vj.ErrorCode === 5550 || vj.ErrorCode === 5551) {
		window.location = Ecp_accountMoveCento + "?type=oversea" ;
	}
	else if (vj.ErrorCode === 5552 || vj.ErrorCode === 5553) {
		window.location = Ecp_accountMoveCent ;
	}

	//oversea-----------------
	if (vj.Msg === 'showoversea') {
		if (vj.ErrorMsg === null || vj.ErrorMsg === undefined || vj.ErrorMsg === '') {
			Ecp_loginFalse();
			Ecp_ReomveCookie(p);
			Ecp_ShowMsgShake(getLoginResource("LoginFailed"));
			return;
		}

		$('#Ecp_top_login_oversea').show();

		if (vj.ErrorCode === -1 || vj.ErrorCode === -2) {
			$('#ecpover_select').hide();
			$('#ecpover_close').show();
			$("#ecpover_p_close").html(vj.ErrorMsg);
			Ecp_ShowMsgShake(getLoginResource("LoginFailed"), true);
		}
		else {
			$('#ecpover_select').show();
			$('#ecpover_close').hide();

			$("#ecp_over_i").text(vj.ErrorCode);
			if (vj.r && vj.r.length > 0)
				$("#ecp_over_day").text(vj.r);
			$("#ecpover_open").unbind("click").bind("click", function () {
        createSign(Ecp_topLoginUrl1 + "api/loginapi/OverSeaOpen?k=" + vj.ErrorMsg)
				$.ajax({
					// url: Ecp_topLoginUrl1 + "api/loginapi/OverSeaOpen?k=" + vj.ErrorMsg,
					// dataType: "jsonp",
          type: "get",
          async: false,
          xhrFields: {
            withCredentials: true,
          },
          crossDomain: true,
          url: Ecp_topLoginUrl1 + "api/loginapi/OverSeaOpen",
          data: {
            k: vj.ErrorMsg
          },
          dataType: "json",
					success: function (result) { Ecp_LoginResult(result); }
				});
			});
		}
		return;
	}
	else {
		$('#Ecp_top_login_oversea').hide();
	}
	//oversea-----------------

	if ((!vj.ShowName || vj.ShowName === '') && (!vj.BShowName || vj.BShowName === '') || vj.success === false) {
		Ecp_loginFalse();
		Ecp_ReomveCookie(p);
		if (vj.ErrorMsg === null || vj.ErrorMsg === undefined || vj.ErrorMsg === '')
			Ecp_ShowMsgShake(getLoginResource("LoginFailed"));
		else {
			if (vj.ErrorMsg === "IP自动登录失败") {
				if (vj.r !== null) {
					var d2 = new Date();
					d2.setHours(d2.getHours() + 24);
					cookie("Ecp_IpLoginFail", vj.r, { expires: d2, path: '/', domain: Ecp_CookieDomain });
					if (Ecp_CookieOtherDomain.length > 0) {
						cookie("Ecp_IpLoginFail", vj.r, { expires: d2, path: '/', domain: Ecp_CookieOtherDomain });
					}
				}
			}
			Ecp_ShowMsgShake(vj.ErrorMsg);
		}
		return;
	}

	if (Ecp_CookieOtherDomain.length > 0) {
		cookie("Ecp_IpLoginFail", "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
	}

	setAgreementVersions();
	$(".modal").hide();

	Ecp_IsLogin = true;

	var data = new Object();
	if (b_AutoLogin)
		vj.IsAutoLogin = true;

	if (!Ecp_ResultR) {
		var v = cookie(Ecp_LoginStuts,undefined,{},true);
		if (v && v.length > 0) {
			v = v.replace(/ShowName":"(%09|\+)+/g, 'ShowName":"');
			try {
				var vjson = JSON.parse(v);
				vj.r = vjson.r;
			} catch (error) {
				console.log(444444444);
				cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieDomain });
					if (Ecp_CookieOtherDomain.length > 0) {
						cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
					}
			}
		}
	}
	else {
		vj.r = Ecp_ResultR;
	}
	//}

	vj.ShowName = vj.ShowName ? decodeURIComponent(vj.ShowName) : "";
	vj.BShowName = vj.BShowName ? decodeURIComponent(vj.BShowName) : "";

	var vMembers = [];
	if (vj.Members && vj.Members.length > 0) {
		for (var i = 0; i < vj.Members.length; i++) {
			var t = vj.Members[i].Le ? decodeURIComponent(vj.Members[i].Le) : "";
			vMembers[i] = { Le: encodeURIComponent(t), ET: encodeURIComponent(vj.Members[i].ET) };
		}
	}

	data.IsAutoLogin = vj.IsAutoLogin;
	data.UserName = vj.UserName;
	data.ShowName = vj.ShowName ? encodeURIComponent(vj.ShowName) : "";
	data.UserType = vj.UserType;
	data.BUserName = vj.BUserName;
	data.BShowName = vj.BShowName ? encodeURIComponent(vj.BShowName) : "";
	data.BUserType = vj.BUserType;
	data.r = vj.r;
	data.Members = vMembers;
	// WriteLoginCookie(data);
	// function WriteLoginCookie(data) {
	// 	var date2 = new Date();
	// 	date2.setFullYear(date2.getFullYear() + 20);
	// 	if (!isNull2(data.UserName)) {
	// 		if (data.UserType === 'jf') {
	// 			cookie("Ecp_loginuserjf", data.UserName, { expires: date2, path: '/', domain: Ecp_CookieDomain });
	// 		} else {
	// 			cookie("Ecp_loginuserbk", data.UserName, { expires: date2, path: '/', domain: Ecp_CookieDomain });
	// 		}
	// 		if (!isNull2(data.BUserName)) {
	// 			if (data.UserType === 'jf') {
	// 				cookie("Ecp_loginuserjf", data.BUserName, { expires: date2, path: '/', domain: Ecp_CookieDomain });
	// 			} else {
	// 				cookie("Ecp_loginuserbk", data.BUserName, { expires: date2, path: '/', domain: Ecp_CookieDomain });
	// 			}
	// 		}
	// 	}
	// }

	var zone = getClientTimezone();
	if (zone === 8) {
		var fromCookie = false;
		var expire;
		if (vj.Expire && vj.Expire.length > 0)
			expire = vj.Expire;
		else {
			fromCookie = true;
			expire = cookie('c_m_expire');
		}

		if (expire && expire.length > 0) {
			expire = decodeURIComponent(expire);
			if (Ecp_CookieOtherDomain.length > 0 && fromCookie) {
				d = new Date();
				d.setMinutes(d.getMinutes() + 20);
			}
			else {
				d = new Date(Date.parse(expire.replace(/-/g, "/")));
			}
		}
		else if (data.IsAutoLogin) {
			d.setDate(d.getDate() + 7);
		} else {
			d = new Date();
			d.setMinutes(d.getMinutes() + 20);
		}
	}
	else {
		if (data.IsAutoLogin) {
			d.setDate(d.getDate() + 7);
		} else {
			d = new Date();
			d.setMinutes(d.getMinutes() + 20);
		}
	}

	var rootPath = Ecp_getRootPath();
	var hid = JSON.stringify(data);

	if (vj.Uid === undefined || vj.Uid === null) {
		var uid = cookie('c_m_LinID');
		if (uid !== undefined && uid !== null && uid !== "" && uid.length > 45) {
			vj.Uid = getSubCookie(decodeURIComponent(uid), "LinID");
		}
	}
	var dt2 = d;
	dt2.setSeconds(dt2.getSeconds() + 5);
	var ot = encodeURIComponent(d.Format('MM/dd/yyyy HH:mm:ss'));
	cookie(Ecp_notFirstLogin, data.r, { expires: d, path: rootPath }, false);
	cookie(Ecp_LoginStuts, hid, { expires: d, path: '/', domain: Ecp_CookieDomain }, false);
	if (vj.Uid !== undefined && vj.Uid !== null) {
		cookie('c_m_LinID', 'LinID=' + vj.Uid + '&ot=' + ot, { expires: d, path: '/', domain: Ecp_CookieDomain }, false);
	}

	var expireen = encodeURIComponent(dt2.Format('yyyy-MM-dd HH:mm:ss'));

	if (zone == 8)
		cookie('c_m_expire', expireen, { expires: dt2, path: '/', domain: Ecp_CookieDomain }, false);
	cookie("Ecp_lout", 0, { expires: -1, path: '/', domain: Ecp_CookieDomain }, false);
	cookie("Ecp_session", 1, { path: '/', domain: Ecp_CookieDomain }, false);

	if (Ecp_CookieOtherDomain.length > 0) {
		cookie(Ecp_LoginStuts, hid, { expires: d, path: '/', domain: Ecp_CookieOtherDomain }, false);
		if (vj.Uid !== undefined && vj.Uid !== null)
			cookie('c_m_LinID', 'LinID=' + vj.Uid + '&ot=' + ot, { expires: d, path: '/', domain: Ecp_CookieOtherDomain }, false);
		if (zone == 8)
			cookie('c_m_expire', expireen, { expires: dt2, path: '/', domain: Ecp_CookieOtherDomain }, false);
		cookie("Ecp_lout", 0, { expires: -1, path: '/', domain: Ecp_CookieOtherDomain }, false);
		cookie("Ecp_session", 1, { path: '/', domain: Ecp_CookieOtherDomain }, false);
	}

	$("#Ecp_top_login_layer").hide();
	Ecp_LoginOpen = 0;
	if (Ecp_PageStyle === 'header') {
		$("#Ecp_top_login").hide();
		$("#Ecp_top_logout_layer").hide();
		$("#Ecp_top_logout").show();
		$("#Ecp_TextBoxUserName").val("");
		$("#Ecp_TextBoxPwd").val("");
		$("#Ecp_CheckCode").val("");
		$("#Ecp_header_Register").hide();
	}
	// 185和其他服务器使用不同的js，185不再排除任何域名，全记录，新增了一个字段 s，传固定值30185
	// 其他服务器排除所有域名部分以cnki.net，cnki.com.cn结尾的请求，不记录 s 字段
	// 10.30.20.185上的
		// var bkName = "";
		// if(vj.UserType == "bk") {
		// 	bkName = vj.ShowName
		// } else if (vj.BUserType) {
		// 	bkName = vj.BShowName
		// }
		// getProxyIp(bkName);
	// 非185上的
	var currentHostname = window.location.hostname;
	var suffix1 = /cnki\.net$/; 
	var suffix2 = /cnki\.com\.cn$/; 

	if (!suffix1.test(currentHostname) && !suffix2.test(currentHostname)) {
		var bkName = "";
		if(vj.UserType == "bk") {
			bkName = vj.ShowName
		} else if (vj.BUserType) {
			bkName = vj.BShowName
		}
		getProxyIp(bkName);
	} 


	Ecp_ShowLoginStauts(vj);
	if (typeof getLeadHtml === 'function')
		getLeadHtml(Ecp_topLoginUrl1, data.UserName, data.UserType, "", b_newLogin);
	if (Ecp_IsLoginRegistValue() && typeof showNewStatus === 'function')
		showNewStatus();

	if (typeof LoginSucess === 'function') {
		if (Ecp_PageStyle === 'header') {
			if (b_newLogin) {
				LoginSucess(vj, b_newLogin);
				Ecp_CloseRealName(!(vj.ErrorCode && vj.ErrorCode === 9));
			}
		} else
			LoginSucess(vj, b_newLogin);
	}
	if (typeof Ecp_RegSuccessShowMsg === 'function') {
		Ecp_RegSuccessShowMsg();
	}
	if (vj.ErrorCode && vj.ErrorCode === 9) {
		var uid2 = "";
		if (vj.Uid) uid2 = vj.Uid;
		var uName = "";
		if (vj.UserName) uName = vj.UserName;

		$("#Ecp_top_login_realName").show();
		$("#Ecp_top_login_realNameFrame").attr('src', Ecp_realNameUrl + "?UID=" + uid2 + "&userName=" + uName);
		ecp_startClock();
	} else {
		Ecp_CloseRealName(false);
	}
}

var realNameClock;
var realnameCookie = 'ecp_realname';
function ecp_startClock() {
	realNameClock = self.setInterval("ecp_checkRealNameCookie()", 300);
}
function ecp_checkRealNameCookie() {
	var coo = cookie(realnameCookie);
	if (coo && coo.length > 0) {
		if (realNameClock)
			realNameClock = window.clearInterval(realNameClock);
		cookie(realnameCookie, "", { expires: -1, path: '/', domain: '.cnki.net' });

		if (coo === "2") {
			Ecp_CloseRealName(true);
			Ecp_FlushLogin();
		}
		else {
			Ecp_CloseRealName(false);
		}
	}
}

function Ecp_CloseRealName(completed) {
	if (completed && typeof Ecp_LoginComplete === "function")
		Ecp_LoginComplete();

	$("#Ecp_top_login_realNameFrame").attr('src', '');
	$("#Ecp_top_login_realName").hide();
}

//=============

function Ecp_ShowLoginStauts(vj) {
	if (typeof Ecp_HiddenHeader !== "undefined" && Ecp_HiddenHeader)
		return;

	if (!vj) {
		Ecp_ShowStatus(1, "");
		Ecp_ShowStatus(2, "");
		Ecp_LoginUsers = 0;
	}
	else if (vj.UserType === "jf") {
		Ecp_ShowStatus(2, vj.ShowName, vj.Members);
		$("#Ecp_MycnkiLinkJg").hide();
		if (vj.BUserType === "bk") {
			Ecp_ShowStatus(1, vj.BShowName);
			Ecp_LoginUsers = 3;
		}
		else {
			Ecp_ShowStatus(1, "");
			Ecp_LoginUsers = 2;
		}
		if (Ecp_PageStyle === 'header') {
			$("#Ecp_header_Register").hide();
		}
	} else {
		$("#Ecp_MycnkiLinkJg").show();
		Ecp_ShowStatus(1, vj.ShowName);
		Ecp_ShowStatus(2, "");
		Ecp_LoginUsers = 1;
		if (Ecp_PageStyle === 'header') {
			$("#Ecp_header_Register").hide();
		}
	}

	Ecp_WelcomeShow();
}

function Ecp_ShowStatus(p, name, Members) {
	var IsLoginRegistValue = Ecp_IsLoginRegistValue();
	var name2 = getSubLongName(name);
	if (p === 1) {
		if (name && name.length > 0) {
			$("#Ecp_top_login1").hide();
			$("#Ecp_top_logout1").show();
			$("#Ecp_loginShowName1").text(name2).attr("title", name);
			$("#Ecp_loginShowNameI1").attr("title", name);
		}
		else {
			$("#Ecp_top_login1").show();
			$("#Ecp_top_logout1").hide();
		}
		$("#Ecp_top_logout_layer1").hide();
	}
	else {
		// start
		// 有name代表是计费账号
		if (Ecp_members && name) {
			$('.tn-topmenulist').css('background', 'none');
			if (Members && Members.length) {
				if (Members[0].ET == "已过期") {
					// 已过期
					$(".vip-expired").css("display", "inline-block");
				} else {
					// 未过期
					$('.vip-types').children().remove();
					$(".vip-noOverdue").css("display", "inline-block");
					for (var i = 0; i < Members.length; i++) {
						var txt = "<div class='vip-type clearfix'><div class='vip-name'>" + decodeURIComponent(Members[i].Le) + "</div><div class='vip-deadline'>有效期至<span>" + Members[i].ET + "</span></div>"
						$('.vip-types').append(txt);
					}
				}
			} else {
				// 未开通
				$(".vip-notOpen").css("display", "inline-block");
			}
		} else {
			$('.tn-topmenulist').css('background-color', '#FFF');
		}
		// end

		if (name && name.length > 0) {
			$("#Ecp_top_login").hide();
			$("#Ecp_top_logout").show();
			$("#Ecp_loginShowName").text(name2).attr("title", name);
			$("#Ecp_loginShowNameI").attr("title", name);
		}
		else {
			$("#Ecp_top_login").css("display","inline-block");
			$("#Ecp_top_login").show();
			$("#Ecp_top_logout").hide();
		}
		$("#Ecp_top_logout_layer").hide();
	}
}

//0all, 1 3jg, 2 4 gr
function Ecp_LogoutOptr_my(p) {
	if (p === 1) {
		$("#Ecp_top_login1").show();
		$("#Ecp_top_logout1").hide();
	} else if (p === 2) {
		$("#Ecp_top_login").css("display","inline-block");
		$("#Ecp_top_login").show();
		$("#Ecp_top_logout").hide();
	} else {
		if (Ecp_members) {
			// start
			$(".vip-expired").css("display", "none");
			$(".vip-notOpen").css("display", "none");
			$(".vip-noOverdue").css("display", "none");
			$('.vip-types').children().remove();
			// end
		}
		$('.vip-types').children().remove();
		$("#Ecp_top_login1").show();
		$("#Ecp_top_logout1").hide();
		$("#Ecp_top_login").css("display","inline-block");
		$("#Ecp_top_login").show();
		$("#Ecp_top_logout").hide();
	}

	Ecp_ShowMsg();

	$("#Ecp_TextBoxUserName").val("");
	$("#Ecp_TextBoxPwd").val("");
	$("#Ecp_CheckCode").val("");

  // start 接口签名
  var param = {};
  // end 接口签名
	var url1 = Ecp_topLoginUrl1 + "api/loginapi/Logout";//?domain=" + Ecp_CookieDomain;
	url1 += "?p=" + p;
  param.p = p;
	if ((typeof Ecp_platform) !== 'undefined' && !isNull2(Ecp_platform)) {
		url1 += "&platform=" + Ecp_platform;
    param.platform = Ecp_platform;
	}
  createSign(url1);
	$.ajax({
    type: "get",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    crossDomain: true,
    url: Ecp_topLoginUrl1 + "api/loginapi/Logout",
    data: param,
    dataType: "text",
		// url: url1,
		// dataType: "jsonp",
		// cache: false,
		// async: false,
		success: function (result) {
			result = JSON.parse(result.replace("(", "").slice(0, -1))
			var r = (new Date()).Format("HH:mm:ss");
			r = result.Msg + " " + r;
			$("#Ecp_LoginUid").val(r);

			var v = cookie(Ecp_LoginStuts,undefined,{},true);
			var vj = null;
			if (v && v.length > 0) {
				v = v.replace(/ShowName":"(%09|\+)+/g, 'ShowName":"');
				try {
					vj = JSON.parse(v);
				} catch (error) {
					console.log(5555555);
					cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieDomain });
					if (Ecp_CookieOtherDomain.length > 0) {
						cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
					}
				}
			}
			// 取消协议的勾选状态
			$("#agreement").prop("checked",false);
			Ecp_ShowLoginStauts(vj);

			if (!vj) {
				cookie("Ecp_lout", 1, { path: '/', domain: Ecp_CookieDomain });
				if (Ecp_CookieOtherDomain.length > 0) {
					cookie("Ecp_lout", 1, { path: '/', domain: Ecp_CookieOtherDomain });
				}
				p = 0;
			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			$("#Ecp_LoginUid").val(textStatus + ":" + errorThrown);
		},
		complete: function (XMLHttpRequest, textStatus) {
			Ecp_LogoutSend(p);
			//if (result.IsShowCheck) {
			//	var d = new Date();
			//	d = d.setFullYear(d.getFullYear() + 1);
			//	cookie("ecp_showcode", "1", { expires: d, path: Ecp_getRootPath(), domain: Ecp_CookieOtherDomain });
			//}
			//else {
			//	cookie("ecp_showcode", "", { expires: -1, path: Ecp_getRootPath(), domain: Ecp_CookieOtherDomain });
			//}
			Ecp_ReomveCookie(p);
			if (Ecp_IsLoginRegistValue()) {
				if (typeof showNewStatus === 'function')
					showNewStatus();
			}
		}
	});

	if (typeof lead_remove === 'function')
		lead_remove();
}

function Ecp_LogoutSend(p) {
	var vj;
	var u;
	var vc;
	if (typeof Ecp_LogoutOptr === 'function') {

		if (p !== 0) {
			var v = cookie(Ecp_LoginStuts,undefined,{},true);
			if (v && v.length > 0) {
				v = v.replace(/ShowName":"(%09|\+)+/g, 'ShowName":"');
				try {
					vj = JSON.parse(v);
				} catch (error) {
					console.log(66666666666);
					cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieDomain });
					if (Ecp_CookieOtherDomain.length > 0) {
						cookie(Ecp_LoginStuts, "", { expires: -1, path: '/', domain: Ecp_CookieOtherDomain });
					}
				}
			}
			if (!vj)
				p = 0;
			else {
				var uid = cookie('c_m_LinID');
				if (!uid) {
					p = 0;
				} else {
					u = getSubCookie(decodeURIComponent(uid), "LinID");
					if (!u) {
						p = 0;
					} else {
						vc = cookie("c_m_expire");
						if (!vc) {
							var d = new Date();
							d.setMinutes(d.getMinutes() + 20);
							vc = encodeURIComponent(d.Format('yyyy-MM-dd HH:mm:ss'));
						}
					}
				}
			}
		}

		if (p === 0) {
			Ecp_LogoutOptr(p);
		} else {
			vj.ErrorCode = 1;
			vj.ErrorMsg = null;
			vj.Expire = vc;
			vj.IsSuccess = true;
			vj.Msg = "登录成功";
			vj.Uid = u;
			LoginSucess(vj, true);
		}
	}
}

function ResetCheckCode() {
	if(verificationWay == 1) {
		if (window.nc) {
			window.nc.reset();
			Ecp_alysid = Ecp_alysig = Ecp_alytok = "";
		}
	} else {
		GetVcodeImg();
	}
}

function Ecp_ReColseImg() {
	$("#Ecp_CheckCodeLayer").hide();
}

// function Ecp_ReGetImg() {
// 	if(verificationWay == 1) {
// 		$("#slideVerify").show();
// 		$("#Ecp_CheckCodeLayer").show();
// 	} else {
// 		GetVcodeImg();
// 	}
// }

//new img
function GetVcodeImg() {
	var t = Math.random(new Date());
  createSign(Ecp_topLoginUrl1 + "api/loginapi/CheckCode?t=" + t)
	// $.ajax({
  //   type: "get",
  //   async: false,
  //   xhrFields: {
  //     withCredentials: true,
  //   },
  //   crossDomain: true,
  //   url: Ecp_topLoginUrl1 + "api/loginapi/CheckCode",
  //   data: {
  //     t: t
  //   },
  //   dataType: "text",
	// 	// url: Ecp_VerifyCodeUrl + "?t=" + Math.random(new Date()),
	// 	// dataType: "jsonp",
	// 	// jsonp: "cnkicallback",
	// 	success: function (result) {
	// 		if (result && result.Success) {
	// 			imginfo = result.Data;
	// 			Ecp_VerifyCode = imginfo.Uuid;
	// 			$("#Ecp_CheckCodeImg").attr("src", "data:image/png;base64," + imginfo.Img);
	// 			Ecp_IsShowCheck = false;
	// 			$("#imgCodeVerify").show();
	// 			$("#Ecp_CheckCodeLayer").show();
	// 			cookie("ecp_showcode", "", { expires: -1, path: Ecp_getRootPath(), domain: Ecp_CookieOtherDomain });
	// 		}
	// 	}
	// });
	var url = Ecp_topLoginUrl1 + "api/loginapi/CheckCode?t=" + Math.random(new Date());
	var xhr = new XMLHttpRequest(); //定义http请求对象
	xhr.open("GET", url, true);
	xhr.withCredentials = true;
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("");
	xhr.responseType = "blob"; // 返回类型blob
	xhr.onload = function() { // 定义请求完成的处理函数，请求前也可以增加加载框/禁用下载按钮逻辑
			if (this.status === 200) {
					var blob = this.response;
					var reader = new FileReader();
					reader.readAsDataURL(blob); // 转换为base64，可以直接放入a表情href
					reader.onload = function(e) {
						// Ecp_IsShowCheck = false;
						$("#imgCodeVerify").show();
						$("#Ecp_CheckCodeLayer").show();
						$("#Ecp_CheckCodeImg").attr("src",e.target.result);
						cookie("ecp_showcode", "", { expires: -1, path: Ecp_getRootPath(), domain: Ecp_CookieOtherDomain });
					}
			} else {
					console.log("请求异常！");
			}
	}
}



//login validate--------------

String.prototype.Trim = function () {
	return this.replace(/^\s+|\s+$/g, "");
};
String.prototype.Ltrim = function () {
	return this.replace(/^\s+/g, "");
};
String.prototype.Rtrim = function () {
	return this.replace(/\s+$/g, "");
};
function RegexCheck(reg, str) {
	return reg.test(str);
}

String.prototype.endWith = function (str) {
	var reg = new RegExp(str + "$");
	return reg.test(this);
};

function Ecp_CheckUserName(userName) {
	var uName = userName.val();
	uName = $.trim(uName);
	if (uName === '') {
		Ecp_ShowMsgFocus(getLoginResource("EmptyUsername"), userName);
		return false;
	}
	if (RegexCheck(/.*('|;|\"|--).*/, uName) === true) {
		Ecp_ShowMsgFocus(getLoginResource("WrongFormatUsername"), userName);
		return false;
	}
	return true;
}
function Ecp_CheckPwd(pwd) {
	if (pwd.val() === '') {
		Ecp_ShowMsgFocus(getLoginResource("EmptyPassword"), pwd);
		return false;
	}
	return true;
}

function Ecp_EnterSubmit(e, invalue, button) {
	if (invalue.value && invalue.value === "") {
		Ecp_ShowMsg();
		return;
	}
	if (window.event) {

		keyPressed = window.event.keyCode; // IE
	}
	else {

		keyPressed = e.which; // Firefox

	}
	if (keyPressed === 13 || e.event === "keydown") {
		Ecp_SubmitCheck(button);
		if (window.event) {
			window.event.cancelBubble = true;
		}
		else {
			event.stopPropagation();
		}
		return false;
	}
}

function Ecp_SubmitCheck() {
	// if(!verificationWay) {
	// 	getVerificationWay();
	// }
	Ecp_ShowMsg();
	
	var userName = $('#Ecp_TextBoxUserName');
	var pwd = $('#Ecp_TextBoxPwd');

	if (!Ecp_CheckUserName(userName))
		return false;
	if (!Ecp_CheckPwd(pwd))
		return false;

	if(!$("#agreement").is(":checked")) {
		$("#ecp-agreement-wrap").show();
		window.parentLoginHandle = Ecp_SubmitCheck;
		return
	}

	// if (Ecp_IsShowCheck && !Ecp_alysid) {
	// 	Ecp_ShowMsgFocus(getLoginResource("CompleteCheckCode"), pwd);
	// 	return false;
	// }

	Ecp_UserLogin(userName.val(), pwd.val());
}
//----------------------

function Ecp_GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r !== null) return unescape(r[2]); return null;
}

function Ecp_LoadJs(src, id, fun, parm) {
	var script = document.getElementById(id);
	if (script) {
		var head = document.getElementsByTagName('head')[0];
		head.removeChild(script);
	}

	script = document.createElement("script");
	script.id = id;
	script.type = "text/javascript";
	script.src = src;
	if (isImplementedOnload(script)) {
		script.onload = function () {
			fun(parm);
		};
	} else {
		script.onreadystatechange = function () {
			var r = script.readyState;
			if (r === 'loaded' || r === 'complete') {
				script.onreadystatechange = null;
				fun(parm);
			}
		};
	}
	document.getElementsByTagName("head")[0].appendChild(script);
}

function isImplementedOnload(script) {
	script = script || document.createElement('script');
	if ('onload' in script)
		return true;
	script.setAttribute('onload', '');
	return typeof script.onload === 'function';
}

function parseParam(param, key) {
	var paramStr = "";
	if (param instanceof String || param instanceof Number || param instanceof Boolean) {
		paramStr += "&" + key + "=" + encodeURIComponent(param);
	} else {
		$.each(param, function (i) {
			var k = key === null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
			paramStr += '&' + parseParam(this, k);
		});
	}
	return paramStr.substr(1);
}

function Ecp_ValdateInput(inp) {
	var el = document.getElementById(inp);
	if ("\v" == "v") {
		el.onpropertychange = textChange;
	} else {
		var event;
		if (!!window.ActiveXObject || 'ActiveXObject' in window) {
			event = 'keyup'
		} else {
			event = 'input'
		}
		el.addEventListener(event, textChange, false);
	}
	function textChange() {
		if (el.value === "") {
			Ecp_ShowMsg();
		}
	}
}
//----------------------

function Ecp_getRootPath() {
	var strFullPath = window.document.location.href;
	var strPath = window.document.location.pathname;
	var pos = strFullPath.indexOf(strPath);
	var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1) + '/';
	return postPath;
}

function Ecp_TestCookieEnable() {
	var result = false;
	if (!navigator)
		return false;
	if (navigator.cookiesEnabled)
		return true;
	document.cookie = "e_t_c=1; expires=60";
	var cookieSet = document.cookie;
	if (cookieSet.indexOf("e_t_c=1") > -1)
		result = true;
	document.cookie = "";
	return result;
}

isNull2 = function (str) {
	if (typeof (str) === "undefined" || str === null || str === "")
		return true;
	else
		return false;
};

function Ecp_IsLoginRegistValue() {
	if ("undefined" !== typeof Ecp_IsLoginRegist) {
		return Ecp_IsLoginRegist;
	}
	return false;
}

function cookie(key, value, options, isEncode) {
	if (typeof value === "undefined") {
		var cookies = document.cookie.split("; ");
		for (var i = 0, len = cookies.length; i < len; i++) {
			var parts = cookies[i].split("=");
			var name = decodeURIComponent(parts.shift());
			if (name === key) {
				if (isEncode)
					return decodeURIComponent(parts.join("="));
				else
					return parts.join("=");
			}
		}
		return undefined;
	}

	var _cookie = '';
	if (!isEncode)
		_cookie = key + "=" + value;
	else
		_cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value);
	options = options || {};
	if (options.expires) {
		if (typeof options.expires === 'number') {
			var days = options.expires, t = options.expires = new Date();
			t.setTime(+t + days * 864e+5);
		}
		_cookie += ";expires=" + options.expires.toUTCString();
	}
	if (options.path)
		_cookie += ";path=" + options.path;
	if (options.domain)
		_cookie += ";domain=" + options.domain;
	if (Ecp_CookieSecure || options.secure)
		_cookie += ";secure";
	document.cookie = _cookie;
}

function getSubCookie(coo, key) {
	if (coo !== undefined && key !== undefined) {
		var subCoo = coo.split("&");
		for (var i = 0; i < subCoo.length; i++) {
			var index = subCoo[i].indexOf("=");
			var sub = subCoo[i].substring(0, index);
			if (decodeURIComponent(sub) === key)
				return decodeURIComponent(subCoo[i].substring(index + 1));
		}
	}
	return "";
}

function getClientTimezone() {
	var nTimezone = -(new Date()).getTimezoneOffset() / 60;
	return nTimezone;
}


function getSubLongName(name) {
	if (isNull2(name)) {
		return "";
	}
	var i = 10;
	var l = getByteLen(name);
	if (l > i + 2) {
		var r = getByteVal(name, i);
		return r + "...";
	}
	return name;
}

function getByteLen(val) {
	var len = 0;
	for (var i = 0; i < val.length; i++) {
		var length = val.charCodeAt(i);
		if (length >= 0 && length <= 128)
			len += 1;
		else
			len += 2;
	}
	return len;
}


function getByteVal(val, max) {
	var returnValue = '';
	var len = 0;
	for (var i = 0; i < val.length; i++) {
		var length = val.charCodeAt(i);
		if (length >= 0 && length <= 128)
			len += 1;
		else
			len += 2;
		if (len > max)
			break;
		returnValue += val[i];
	}
	return returnValue;
}

function linkToUseAgreement() {
  window.open("https://my.cnki.net/cnkiAgreement/cnkiUseAgreement.html","_blank")
}
function linkToPrivacyAgreement() {
  window.open("https://my.cnki.net/cnkiAgreement/cnkiPrivacyAgreement.html","_blank")
}

function getVerificationWay() {
	var length = $("#slideVerify").children().length;
	if(length) {
		verificationWay = 1;
		$("#slideVerify").show();
		sessionStorage.setItem("verificationWay",1);
	} else {
		verificationWay = 2;
		$("#imgCodeVerify").show();
		sessionStorage.setItem("verificationWay",2);
	}
}