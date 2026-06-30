(function() {

	/**
 * 检测密码是否合法、密码强度
 * @return {
	* code:0: 不合法 1: 弱 2: 中 3: 强
	* errors:{
	--- * "noDigital",没有数字
	--- * "noUpperCase",没有大写
	--- * "noLowercase",没有小写
	--- * "noSymbol",没有字母
	* "typeOnly": 只能包含数字、大写字母、小写字母、英文符号
	* "typeRequired":且至少需要包括其中3种
	* "first"：第一位为数字或英文字母
	* "length",长度要求8-18位
	* "repeats",相同字符重复太多
	* "username"不能和用户名相同
	* }
	* }
	*/
   function checkPasswordComplexity(password, username) {
	 username = username || '';
   
	 let errors = {};
	 if(!password){
	   errors['typeRequired'] = true;
	   errors['length'] = true;
	   errors['first'] = true;
	   return {
		 code:0,
		 errors:errors
	   }
	 }
	 
	 function unique(str) {
	   var hash = {};
	   var arr = str.split('');
	   var result = [];
	   var key;
	   while(key = arr.shift()) {
		 if (!hash[key]) {
		   result.push(key);
		   hash[key] = true;
		 }
	   }
	   return result.join('');
	 }
	 let errorNum = 0
   
	 let strongCode = 0;
   
	 if(password.length < 8 || password.length > 18){
	   errors['length'] = true; //长度
	   errorNum++;
	 }else{
	   if(password.length > 10){
		 strongCode ++;
	   }
	 }
   
	 if(password === username){
	   errors['username'] = true;//和用户名重复
	   errorNum++;
	 }else if(unique(password).length < 4){
	   if(!errors['length']){
   //长度有问题时候不校验此项
		 errors['repeats'] = true; //字符数不够，重复太多
		 errorNum++;
	   }
	 }
   
	 var legalReg = /^[\w\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~]+$/;
	 if(!legalReg.test(password)){
	   errors['typeOnly'] = true;//有非法字符
	   errorNum++;
	 }
	 let count = 0;
	 if (/\d/.test(password)) {
	   count++;
	 }
	 if (/[a-z]/.test(password)) {
	   count++;
	 }
	 if (/[A-Z]/.test(password)) {
	   count++;
	 }
	 if (/[\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~]+/.test(password)){
	   count++;
	 }
	 if(count < 3){
	   errors['typeRequired'] = true;//包括字符类型太少
	   errorNum++;
	 }else{
	   strongCode += count - 2;
	 }
   
	 return {
	   code: errorNum > 0?0:strongCode,
	   errors:errors
	 };
   }
	// function checkPassword(password) {
	// 	var reg0 = /^[0-9a-zA-Z]/;
	//     // 是否匹配规则
	//     var reg1 = /^[0-9a-zA-Z][\w\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~]{7,17}$/i;
	//     if (!reg0.test(password)) {
	//     	return -1;
	//     } else if (!reg1.test(password)) {
	//         return 0; // 不匹配规则（8-18位，半角字符、英文符号等等）
	//     } else {
	//     	return strong(password);
	//     }


	//     function strong(str) {
	//         var stringbuffer = str.split('');

	//         var count = 0;
	//         var rule = {};
	//         var char = "";
	//         var charCode;
	//         var noRepeat = "";

	//         while (stringbuffer.length) {
	//         	char = stringbuffer.shift();
	//             charCode = char.charCodeAt(0);

	//             if ( charCode >= 97 && charCode <= 122 && !rule.lowerCase) { // a-z
	//                 count += 1;
	//                 rule.lowerCase = true;
	//             } else if ( charCode >= 65 && charCode <= 90 && !rule.upperCase) { // A-Z
	//                 count += 1;
	//                 rule.upperCase = true;
	//             } else if (charCode >= 48 && charCode <= 57 && !rule.number) { // 0-9
	//                 count += 1;
	//                 rule.number = true;
	//             } else if (
	//                 ((charCode >= 33 && charCode <= 47) || (charCode >= 58 && charCode <= 64) || (charCode >= 91 && charCode <= 96) || (charCode >= 123 && charCode <= 126)) && !rule['other_' + charCode] ) {
	//                 count += 1;
	//                 rule['other_' + charCode] = true;
	//             }

	//             if(noRepeat.indexOf(char)<0){
	//             	noRepeat = noRepeat+char;
	//             }
	//         }

	//         if(noRepeat.length>3){
	//         	return count;
	//         }else{
	//         	return 0;
	//         }
	//     }

	// }

	function checkMobileSimpleFormat(mobile) {
		var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
		return reg.test(mobile);
	}

	function checkStrSame(str1, str2) {
		if (str1 != null && str1 != "" && str2 != null && str2 != "" && str1 != str2) {
			return false;
		} else {
			return true;
		}
	}

	// function checkPasswordComplete(password, mobile) {
	// 	var passerror = "";
	// 	var strong = checkPassword(password);
	// 	if (strong <= 0) {
	// 		passerror = "密码格式不正确";
	// 	}
	// 	if (password.length > 18) {
	// 		passerror = ",密码超过长度限制，";
	// 	} else if (password.length > 0 && strong == -1) {
	// 		passerror = ",密码必须以字母或数字开头";
	// 	} else if (password == mobile) {
	// 		passerror = ",密码不允许与手机号一致";
	// 	}
	// 	return passerror;
	// }
	
	function utf16to8(str) {
		var out, i, len, c;
		out = "";
		len = str.length;
		for (i = 0; i < len; i++) {
			c = str.charCodeAt(i);
			if ((c >= 0x0001) && (c <= 0x007F)) {
				out += str.charAt(i);
			} else if (c > 0x07FF) {
				out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
				out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
				out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
			} else {
				out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
				out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
			}
		}
		return out;
	}

	function utf8to16(str) {
	    var out, i, len, c;
	    var char2, char3;
	    out = "";
	    len = str.length;
	    i = 0;
	    while(i < len) {
	    	c = str.charCodeAt(i++);
	    	switch(c >> 4)
	    	{
	    	case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
	    		out += str.charAt(i-1);
	    		break;
	    	case 12: case 13:
	    		char2 = str.charCodeAt(i++);
	    		out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
	    		break;
	    	case 14:
	    		char2 = str.charCodeAt(i++);
	    		char3 = str.charCodeAt(i++);
	    		out += String.fromCharCode(((c & 0x0F) << 12) |
	                       ((char2 & 0x3F) << 6) |
	                       ((char3 & 0x3F) << 0));
	    		break;
	    	}
	    }
	    return out;
	}

	function doBase64Encode(str) {
		var result = base64Encode(utf16to8(str));
		result = result.replace(/=/g, "!");
		result = result.replace(/\//g, "@");
		result = result.replace(/\+/g, "-");
		return result;
	}

	function doBase64Decode(str) {
		str = str.replace(/!/g, "=");
		str = str.replace(/@/g, "/");
		str = str.replace(/-/g, "+");
		return utf8to16(base64Decode(str));
	}

	var loginCtrl = function($scope, $modal, $state, $timeout, $iq_server,
			$iq_window,$location, $iqa_login_loginService, localStorageService) {

		$scope.wechatLogin = function() {
			$iqa_login_loginService.getWeChatParam().then(function(data){
				if (data.data.status = 200) {
					var params = data.data.item;
					location.href = params.code_url + "?appid=" + params.appid + "&redirect_uri=" + params.redirect_uri + "&response_type=" + params.response_type + "&scope=" + params.scope +"&state=" + params.state;
				} else {
					$iq_window.alert({message:"请求失败！",type:"warn"});
				}
			});
		}

		$scope.goToUrl = function(){
			//登录成功 直接跳到首页
			var url = "../home/";

			if(localStorageService.isSupported) {
				var tmp = localStorageService.get("historyUrl");
				localStorageService.set("historyUrl","");
				if(tmp){
					url = tmp;
					location.replace(url);
				}
				else{
					location.href = url;
				}
			}
			else{
				location.href = url;
			}
		}

		$scope.checkNeedValidate = function(mobile, everyTime) {
			if ($scope.needValidate == true) {
				if (everyTime == true) {
					$scope.getValidate(true);
				}
			} else {
				$iqa_login_loginService.needValidate(mobile).then(function(data) {
					$scope.needValidate = angular.copy(data.data.data);
					if ($scope.needValidate == true) {
						$scope.getValidate();
					}
				},function(){

				});
			}
		}

		$scope.clearPassword = function() {
			if ($scope.login) {
				$scope.login.password = "";
				$(".form-input[ng-model='login.password']").empty();
			}
		}
		$scope.clearVcode = function() {
			if ($scope.login) {
				$scope.login.validate = "";
			}
		}

		$scope.getValidate = function(fource) {
			if ($scope.needValidate == true) {
				if (fource == true) {
					var nowDate = new Date();
					$scope.validate = $iq_server.server() + "validate/generate-image-code/1?"
							+ nowDate.getTime();
				} else if ($scope.login == undefined
						|| $scope.login.validate == undefined
						|| $scope.login.validate == "") {
					var nowDate = new Date();
					$scope.validate = $iq_server.server() + "validate/generate-image-code/1?"
							+ nowDate.getTime();
				}
			}
		}
		
		$scope.doLogin = function() {

			var username=$scope.login?$scope.login.username:undefined;
			if(!username){
				username=$(".form-input[ng-model='login.username']").val();
			}
			var password=$scope.login?$scope.login.password:undefined;
			if(!password){
				password=$(".form-input[ng-model='login.password']").val();
			}
			if (!$scope.login||!username||!password) {
				$iq_window.alert({message:"请填写帐号和密码！",type:"warn"});
			} else if ($scope.needValidate == true
					&& ($scope.login.validate == undefined || $scope.login.validate == "")) {
				$iq_window.alert({message:"请填写验证码！",type:"warn"});
			} else {
				var data = {
					"username" : username,
					"password" : base64Encode(password),
					"org" : "",
					"rememberMe" : $scope.login.rememberMe,
					"validate" : $scope.login.validate
				}
				$iqa_login_loginService.login(data).then(function(data) {
					if (data.data.status == 200) {
						if(data.data.data.initialised==false){
							$iqa_login_loginService.isPermitted("companySetting:systemSetting").then(function(d){
								if(d.data==true){
									location.href = "/home/setting-guide/step1";
								}else{
									$scope.goToUrl();
								}
							},function(){
								$scope.goToUrl();
							})
						}else{
							$scope.goToUrl();
						}
					} else if (data.data.status == 2002) {
						$state.go("register.step3", {
							mobile : $scope.login.username
						});
					} else if (data.data.status == 2001) {

						$scope.needValidate = false;

						$scope.orgs = data.data.data.orgs;
						var modalInstance = $modal.open({
							templateUrl : 'templates/orgs.html',
							controller : modalInstanceCtrl,
							scope : $scope,
							windowClass : "modal fade mymodal"
						});

						modalInstance.opened.then(function(a, b, c) {
							$timeout(function() {
								var _m = $(".modal-dialog");
								_m.each(function() {
									var _this = $(this);
									_this.css({
										"margin-top" : "-" + _this.height() / 2
												+ "px",
										"top" : "50%"
									})
								})
							})
						})

					} else if (data.data.status == 2003) {
						$scope.clearVcode();
						$scope.checkNeedValidate($scope.login.username, true);
						$iq_window.alert(data.data.message + ",请检查输入是否正确！",3,"warn");
					} else if (data.data.status == 2004) {
						$iq_window.alert({message:data.data.message,type:"warn"});
					} else {
						$scope.clearPassword();
						$scope.clearVcode();
						$scope.checkNeedValidate($scope.login.username, true);
						$iq_window.alert(data.data.message + ",请检查输入是否正确！",3,"warn");
					}

				},function(){});
			}
		}

		var modalInstanceCtrl = function($scope, $modalInstance) {

			$scope.loginOrg = function(orgId) {
				var data = {
					"username" : encodeURIComponent($scope.login.username),
					"password" : base64Encode($scope.login.password),
					"org" : orgId,
					"rememberMe" : $scope.login.rememberMe,
					"validate" : $scope.login.validate
				}
				$iqa_login_loginService.login(data).then(function(data) {
					if (data.data.status == 200) {
						if(data.data.data.initialised==false){
							$iqa_login_loginService.isPermitted("companySetting:systemSetting").then(function(d){
								if(d.data==true){
									location.href = "/home/setting-guide/step1";
								}else{
									$scope.goToUrl();
								}
							},function(){
								$scope.goToUrl();
							})
						}else{
							$scope.goToUrl();
						}
					} else if (data.data.status == 2003) { // 如果因验证码出错导致，那么清除验证码
						$scope.clearVcode();
						$scope.checkNeedValidate($scope.login.username);
						$iq_window.alert({message:data.data.message,type:"warn"});
					} else { // 其他问题，清除验证码和密码
						$scope.clearPassword();
						$scope.clearVcode();
						$scope.checkNeedValidate($scope.login.username);
						$scope.cancel();
						$iq_window.alert({message:data.data.message,type:"warn"});
					}

				},function(){$scope.cancel();});
			}

			$scope.ok = function() {
				$modalInstance.close();
			};

			$scope.cancel = function() {
				$modalInstance.dismiss('cancel');
			};
		}

		$scope.gotoRegister = function() {
			$state.go("register");
		}
		$scope.gotoForgetPassword = function() {
			$state.go("forget-password");
		}

		$scope.checkNeedValidate();

	}

	var registerCtrl = function($scope, $modal, $state, $timeout, $iq_window,
			$iqa_login_registerService) {
		$scope.gotoLogin = function() {
			$state.go("login");
		}
		$scope.gotoProductInfo = function() {
			$iq_window.alert({message:"正在建设，美好的事情即将发生……",type:"success"});
		}
		$scope.gotoRegisterStep1Ctrl = function() {
			if ($scope.mobile != null && $scope.mobile != "") {
				// 这里检查手机号是否被注册
				$iqa_login_registerService.checkMobile($scope.mobile).then(function(data) {
					if (data.data.data == true) {
						$iq_window.alert({message:"手机号已被注册",type:"warn"});
					} else {
						$state.go("register.step1", {
							mobile : $scope.mobile
						});
					}

				},function(){});
			} else {
				$iq_window.alert({message:"请填写手机号",type:"warn"});
			}
		}
		$scope.gotoLogin = function(mobile, org) {
			if (mobile !== undefined && org != undefined) {
				$state.go("login", {
					username : mobile,
					org : org
				});
			} else {
				$state.go("login");
			}
		}
	}

	//zt
	var registerOrLoginJoinCtrl = function($scope, $modal, $state, $stateParams,$location,$iqa_login_weChatService,$iqa_login_loginService,$iq_server) {
		var yname = $stateParams.yname;
		$scope.yname = doBase64Decode(yname);
		$scope.orgcode = $stateParams.orgcode;
		$scope.show = false;
		$iqa_login_loginService.getOrgNameByOrgCode($scope.orgcode).then(function(re) {
			if(re.data.success) {
				$scope.orgname = re.data.data;
			} else {
				$scope.orgname = "";
			}
			$scope.show = true;
		});
		$iqa_login_weChatService.weiShare($location.absUrl()).then(function(re){
			if(!re.data.success){
				console.log("微信验证失败");
				return;
			}
			wx.config({
			      debug: false,
			      appId: re.data.item.appid,
			      timestamp: re.data.item.timestamp,
			      nonceStr: re.data.item.nonceStr,
			      signature: re.data.item.signature,
			      jsApiList: [
			        'onMenuShareAppMessage'
			      ]
			  });
			 wx.ready(function(){
			  	 wx.onMenuShareAppMessage({
			      title: '【'+$scope.yname+'】'+'邀请你加入'+'【'+$scope.orgname+'】',
			      desc: 'iQuicker——一个全面的企业协作管理平台，聚焦沟通、效率、流程定制及审批的办公平台',
			      link: $location.absUrl(),
			      imgUrl: $location.protocol()+"://"+$location.host()+"/login/img/squareLogo.png"
			    });
			  });
		})
		$scope.registerJoin = function() {
			location.href = "/login/register-join/" + yname + "/" + doBase64Encode($scope.orgname) + "/" + $scope.orgcode;
		}

		$scope.loginJoin = function() {
			location.href = "/login/login-special/" + yname + "/" + doBase64Encode($scope.orgname) + "/" + $scope.orgcode;
		}
	}

	var registerJoinCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iqa_login_registerService, $iqa_login_loginService) {
		var yname = $stateParams.yname;
		var orgname = $stateParams.orgname;
		$scope.yname = doBase64Decode(yname);
		$scope.orgname = doBase64Decode(orgname);
		$scope.orgcode = $stateParams.orgcode;
		$scope.strong = 0;
		$scope.submitValid = false;

		$scope.sendTimeClock = function() {
			if ($scope.sendTime > 0) {
				$timeout(function() {
					$scope.sendTime = $scope.sendTime - 1, $scope.sendTimeClock()
				}, 1000);
			}
		}

		$scope.sendRegisterAndJoinOrgValidateCode = function() {
			if(!checkMobileSimpleFormat($scope.mobile)){
				$scope.mobileerror = "手机号码格式不正确";
				return false;
			} else {
				$scope.mobileerror = "";
			}

			$scope.getVcodeText = "正在发送验证码……";
			$scope.sendTime = 60; // 1分钟
			$iqa_login_registerService.sendRegisterValidateCode($scope.mobile).then(function(data) {
				if (data.data.status == 200) {
					$scope.sendTime = 60; // 1分钟
					$scope.getVcodeText = "";
					$scope.sendTimeClock();
					$scope.mobileerror = "";
				}else{
					$scope.sendTime = 0;
					$scope.mobileerror = data.data.message;
				}
			},function(){$scope.sendTime = 0;});
		}

		$scope.$watch('password',function(){
			$scope.checkStrong();
		})
		$scope.checkStrong = function() {

			var checkRet = checkPasswordComplexity($scope.password,$scope.mobile);
			$scope.passwordErrors = checkRet.errors;
			$scope.passwordFlag = checkRet.code == 0;
			if(checkRet.code == 0){
				$scope.strong = 0;
			}else{
				$scope.strong = checkRet.code;
			}
			// $scope.strong = checkPassword($scope.password);
			// if ($scope.password.length > 18) {
			// 	$scope.passworderror = "密码超过长度限制";
			// } else if ($scope.password.length > 0 && $scope.strong == -1) {
			// 	$scope.passworderror = "密码必须以字母或数字开头";
			// } else if ($scope.password == $scope.mobile) {
			// 	$scope.passworderror = "密码不允许与手机号一致";
			// } else {
			// 	$scope.passworderror = "";
			// }
		}

		$scope.checkSame = function() {
			if(!checkStrSame($scope.password, $scope.rpassword)) {
				$scope.rpassworderror = "两次输入的密码不一致";
				return false;
			} else {
				$scope.rpassworderror = "";
			}
		}

		$scope.next = function() {
			$scope.rerror = "";

			if(!$scope.mobile) {
				$scope.submitValid = true;
				return false;
			}

			if(!checkMobileSimpleFormat($scope.mobile)){
				$scope.mobileerror = "手机号码格式不正确";
				return false;
			} else {
				$scope.mobileerror = "";
			}

			if(!$scope.vcode) {
				$scope.submitValid = true;
				return false;
			}

			if(!$scope.name) {
				$scope.submitValid = true;
				return false;
			}

			if($scope.strong <=0){//密码不过
				$scope.submitValid = true;
				return false;
			}
			// if (!$scope.password) {
			// }

			if (!$scope.rpassword) {
				$scope.submitValid = true;
				return false;
			}

			// if ($scope.passworderror != null && $scope.passworderror != "") {
			// 	return false;
			// } else {
			// 	var perror = checkPasswordComplete($scope.password, $scope.mobile);
			// 	if (perror != null && perror != "") {
			// 		$scope.passworderror = perror;
			// 		return false;
			// 	} else {
			// 		$scope.passworderror = "";
			// 	}
			// }

			if ($scope.rpassworderror != null && $scope.rpassworderror != "") {
				return false;
			} else {
				if (!checkStrSame($scope.password, $scope.rpassword)) {
					$scope.rpassworderror = "两次输入的密码不一致";
					return false;
				} else {
					$scope.rpassworderror = "";
				}
			}

			if (!$scope.read) {
				$scope.submitValid = true;
				return false;
			}

			var param = {
				"mobile" : $scope.mobile,
				"vcode" : $scope.vcode,
				"password" : base64Encode($scope.password),
				"name" : $scope.name,
				"orgcode" : $scope.orgcode
			}
			$iqa_login_registerService.createAccountAndJoinOrg(param).then(function(data) {
				if (data.data.status == 200) {
					$scope.rerror = "";
					if (data.data.data.status == 0) {
						location.href = "/login/register-join////wait/" + doBase64Encode(data.data.data.orgname);
					} else {
						var data = {
							"username" : $scope.mobile,
							"password" : base64Encode($scope.password),
							"org" : data.data.data.orgid
						}
						$iqa_login_loginService.login(data).then(function(data) {
							if (data.data.success == true) {
								location.href = "/home";
							}
						});
					}
				} else {
					var message = "";
					if (data.data.message && data.data.message != "") {
						message = "操作" + data.data.message;
					} else {
						message = "操作失败";
					}
					$scope.rerror = message;
				}
			});
		}

		$scope.gotoLogin = function() {
			location.href = "/login/login-special/" + yname + "/" + orgname + "/" + $scope.orgcode;
		}
	}


	var loginSpecialCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_server, $iq_window, $iqa_login_loginService) {
		var yname = $stateParams.yname;
		var orgname = $stateParams.orgname;
		$scope.yname = doBase64Decode(yname);
		$scope.orgname = doBase64Decode(orgname);
		$scope.orgcode = $stateParams.orgcode;
		$scope.submitValid = false;

		$scope.goToUrl = function(){
			//登录成功 直接跳到首页
			location.href = "../home/";
		}

		$scope.checkNeedValidate = function(mobile, everyTime) {
			if ($scope.needValidate == true) {
				if (everyTime == true) {
					$scope.getValidate(true);
				}
			} else {
				$iqa_login_loginService.needValidate(mobile).then(function(data) {
					$scope.needValidate = angular.copy(data.data.data);
					if ($scope.needValidate == true) {
						$scope.getValidate();
					}
				},function(){

				});
			}
		}

		$scope.clearPassword = function() {
			if ($scope.login) {
				$scope.login.password = "";
				$(".form-input[ng-model='login.password']").empty();
			}
		}
		$scope.clearVcode = function() {
			if ($scope.login) {
				$scope.login.validate = "";
			}
		}

		$scope.getValidate = function(fource) {
			if ($scope.needValidate == true) {
				if (fource == true) {
					var nowDate = new Date();
					$scope.validate = $iq_server.server() + "validate/generate-image-code/1?"
							+ nowDate.getTime();
				} else if ($scope.login == undefined
						|| $scope.login.validate == undefined
						|| $scope.login.validate == "") {
					var nowDate = new Date();
					$scope.validate = $iq_server.server() + "validate/generate-image-code/1?"
							+ nowDate.getTime();
				}
			}
		}

		$scope.doLogin = function() {
			$scope.rerror = "";

			var username=$scope.login?$scope.login.username:undefined;
			if(!username){
				username=$(".form-input[ng-model='login.username']").val();
			}
			var password=$scope.login?$scope.login.password:undefined;
			if(!password){
				password=$(".form-input[ng-model='login.password']").val();
			}
			if (!$scope.login||!username||!password) {
				$scope.uperror = "请填写账号和密码";
				return false;
			} else {
				$scope.uperror = "";
			}
			if ($scope.needValidate == true && ($scope.login.validate == undefined || $scope.login.validate == "")) {
				$scope.validateerror = "请填写验证码";
				return false;
			} else {
				$scope.validateerror = "";
			}

			var data = {
				"username" : $scope.login.username,
				"password" : base64Encode($scope.login.password),
				"org" : $scope.orgcode,
				"rememberMe" : $scope.login.rememberMe,
				"validate" : $scope.login.validate
			}
			$iqa_login_loginService.slogin(data).then(function(data) {
				if(data.data.status == 200) {
					if(data.data.data.initialised==false){
						$iqa_login_loginService.isPermitted("companySetting:systemSetting").then(function(d){
							if(d.data==true){
								location.href = "/home/setting-guide/step1";
							}else{
								$scope.goToUrl();
							}
						},function(){
							$scope.goToUrl();
						})
					}else{
						$scope.goToUrl();
					}
				} else if (data.data.data.personstatus != undefined && data.data.data.personstatus != null) {
					if(data.data.data.personstatus < 0) {
						location.href = "/login/join-company-special/" + $scope.login.username + "/" + $scope.orgcode;
					} else {
						location.href = "/login/register/step3/" + $scope.login.username;
					}
				} else {
					$scope.rerror = data.data.message;
					$scope.clearPassword();
					$scope.clearVcode();
					$scope.checkNeedValidate($scope.login.username, true);
				}
			});
		}

		$scope.gotoRegister = function() {
			$state.go("register-join", {
				yname : yname,
				orgname : orgname,
				orgcode : $scope.orgcode
			});
		}
		$scope.gotoForgetPassword = function() {
			$state.go("forget-password");
		}

		$scope.checkNeedValidate();
	}

	var joinCompanySpecialCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iqa_login_registerService) {
		$scope.mobile = $stateParams.mobile;
		$scope.orgcode = $stateParams.orgcode;
		$scope.submitValid = false;

		$scope.joinCompany = function() {
			$scope.rerror = "";

			if (!$scope.name) {
				$scope.submitValid = true;
				return false;
			}

			$iqa_login_registerService.joinOrg($scope.mobile, $scope.name, $scope.orgcode).then(function(data) {
				if (data.data.status == 200) {
					location.href = "/login/join-company-special///wait/" + doBase64Encode(data.data.data);
				} else {
					$scope.rerror = data.data.message;
				}
			},function(){});
		}
	}

	var registerStep1Ctrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iqa_login_registerService) {
		$scope.mobile = $stateParams.mobile;

		$scope.sendTimeClock = function() {
			if ($scope.sendTime > 0) {
				$timeout(function() {
					$scope.sendTime = $scope.sendTime - 1, $scope
							.sendTimeClock()
				}, 1000);
			}
		}

		var sendRegisterValidateCodeFirstTime = function() {
			$scope.getVcodeText = "正在发送验证码……";
			$scope.sendTime = 60; // 1分钟
			$iqa_login_registerService.sendRegisterValidateCode($scope.mobile).then(function(data) {
				if (data.data.status == 200) {
					$scope.sendTime = 60; // 1分钟
					$scope.getVcodeText = "";
					$scope.sendTimeClock();
				}else{
					$scope.sendTime = 0;
				}
			},function(){$scope.sendTime = 0;});
		}

		$scope.sendRegisterValidateCode = function() {
			$scope.getVcodeText = "正在发送验证码……";
			$scope.sendTime = 60; // 1分钟
			$iqa_login_registerService.sendRegisterValidateCode($scope.mobile).then(function(data) {
				if (data.data.status == 200) {
					$scope.sendTime = 60; // 1分钟
					$scope.getVcodeText = "";
					$scope.sendTimeClock();
					$iq_window.alert({message:data.data.message,type:"success"});
				}else{
					$scope.sendTime = 0;
					$iq_window.alert({message:data.data.message,type:"warn"});
				}
			},function(){$scope.sendTime = 0;});
		}

		$scope.next = function() {
			if ($scope.mobile == null || $scope.mobile == "") {
				$iq_window.alert({message:"手机号为空，将在3秒后自动跳转到第一步",type:"warn"}).then(function(){
					$state.go("register");
				});
				return false;
			}

			if ($scope.vcode == null || $scope.vcode == "") {
				$iq_window.alert({message:"请填写验证码",type:"warn"});
				return false;
			}
			// 这里检查验证码是否正确
			$iqa_login_registerService.validateRegisterCode($scope.mobile, $scope.vcode).then(function(data) {
				if (data.data.status == 200) {
					$state.go("register.step2", {
						mobile : $scope.mobile,
						vcode : $scope.vcode
					});
				} else {
					$iq_window.alert({message:data.data.message,type:"warn"});
				}
			},function(){});

		}
		$scope.gotoLogin = function() {
			$state.go("login");
		}
		sendRegisterValidateCodeFirstTime();
	}

	var registerStep2Ctrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iqa_login_registerService) {

		$scope.mobile = $stateParams.mobile;
		$scope.vcode = $stateParams.vcode;


		$scope.strong = 0;

		$scope.$watch("password",function(n,o){
			$scope.checkStrong();
		})
		$scope.checkStrong = function(){

			// $scope.strong = checkPassword($scope.password);
			// if($scope.password.length>18){
			// 	$scope.passwordRemind = "密码超过长度限制";
			// } else	if($scope.password.length>0&&$scope.strong==-1){
			// 	$scope.passwordRemind = "密码必须以字母或数字开头";
			// }else if($scope.password==$scope.mobile){
			// 	$scope.passwordRemind = "密码不允许与手机号一致";
			// }else{
			// 	$scope.passwordRemind = "";
			// }
			var checkRet = checkPasswordComplexity($scope.password,$scope.mobile);
			$scope.passwordErrors = checkRet.errors;
			$scope.passwordFlag = checkRet.code == 0;
			if(checkRet.code == 0){
				$scope.strong = 0;
			}else{
				$scope.strong = checkRet.code;
			}

		}

		$scope.checkSame = function(){
			if($scope.password!=null&&$scope.password2!=null&&$scope.password!=""&&$scope.password2!=""&&$scope.password!=$scope.password2){
				$scope.passwordSame = "您两次输入的密码不一致";
			}else{
				$scope.passwordSame = "";
			}
		}

		$scope.next = function() {
			if ($scope.mobile == null || $scope.mobile == "") {
				$iq_window.alert({message:"手机号为空，将在3秒后自动跳转到第一步",type:"warn"}).then(function(){
					$state.go("register");
				});
				return false;
			}
			if ($scope.vcode == null || $scope.vcode == "") {
				$iq_window.alert({message:"验证码已缺失,将在3秒后自动跳转到上一步",type:"warn"}).then(function(){
					$state.go("register.step1", {
						mobile : $scope.mobile
					});
				});
				return false;
			}

			if ($scope.password == null || $scope.password == "") {
				$iq_window.alert({message:"请填写密码",type:"warn"});
				return false;
			}
			if ($scope.password2 == null || $scope.password2 == "") {
				$iq_window.alert({message:"请填写确认密码",type:"warn"});
				return false;
			}
			if($scope.strong<=0){
				$iq_window.alert({message:"密码格式不正确",type:"warn"});
				return false;
			}
			if($scope.passwordSame!=null&&$scope.passwordSame!=""){
				$iq_window.alert({message:"您两次输入的密码不一致",type:"warn"});
				return false;
			}

			// 这里检查是否已同意条款
			if (!$scope.read) {
				$iq_window.alert({message:"您必须同意相关条款后才能进行下一步操作",type:"warn"});
				return false;
			}
			// 这里创建帐号
			$iqa_login_registerService.createAccount($scope.mobile, $scope.vcode, $scope.password).then(function(data) {
				if (data.data.status == 200) {
					$state.go("register.step3", {
						mobile : $scope.mobile
					});
				} else if(data.data.status == 2003){
					$iq_window.alert({message:data.data.message+",将在3秒后自动跳转到上一步",type:"warn"}).then(function(){
						$state.go("register.step1", {
							mobile : $scope.mobile
						});
					});
				}else{
					$iq_window.alert({message:data.data.message,type:"warn"});
				}
			},function(){});
		}

		$scope.gotoLogin = function() {
			$state.go("login");
		}

	}
	
	var registerStep3Ctrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iq_server, $iqa_login_registerService,
			$iqa_login_loginService,$location,$ocLazyLoad) {
				$ocLazyLoad.load(['css/login-bottomup.css']);
		$scope.mobile = $stateParams.mobile;

		$iqa_login_loginService.getOrgs("all").then(function(data) {
			if (data.data.status == 200) {
				$scope.orgs = data.data.data;
				if (data.data.message != null && data.data.message != "") {
					$scope.mobile = angular.copy(data.data.message);
				}
			}
		},function(){})

		$scope.gotoLogin = function() {
			$state.go("login");
		}

		$scope.gotoCreateCompany = function() {
			$state.go("create-company", {
				mobile : $scope.mobile
			})
		}

		$scope.gotoJoinCompany = function() {
			$state.go("join-company", {
				mobile : $scope.mobile
			})
		}

		$scope.loginToOrg = function(orgId) {
			$scope.orgId = orgId;
			var modalInstance = $modal.open({
				templateUrl : 'templates/login-dialog.html',
				controller : modalInstanceCtrl,
				scope : $scope,
				windowClass : "modal fade mymodal login-modal"
			});

			modalInstance.opened.then(function(a, b, c) {
				$timeout(function() {
					var _m = $(".modal-dialog");
					_m.each(function() {
						var _this = $(this);
						_this.css({
							"margin-top" : "-" + _this.height() / 2 + "px",
							"top" : "50%"
						})
					})
				})
			})
		}

		var modalInstanceCtrl = function($scope, $modalInstance) {

			$scope.checkNeedValidate = function(mobile, everyTime) {
				if ($scope.needValidate == true) {
					if (everyTime == true) {
						$scope.getValidate(true);
					}
				} else {
					$iqa_login_loginService.needValidate(mobile).then(function(data) {
						$scope.needValidate = angular.copy(data.data.data);
						if ($scope.needValidate == true) {
							$scope.getValidate();
						}
					},function(){});
				}
			}

			$scope.clearPassword = function() {
				$scope.password = "";
			}
			$scope.clearVcode = function() {
				$scope.validate = "";
			}

			$scope.getValidate = function(fource) {
				if ($scope.needValidate == true) {
					if (fource == true) {
						var nowDate = new Date();
						$scope.validateImg = $iq_server.server() + "validate/generate-image-code/1?"
								+ nowDate.getTime();
					} else if ($scope.validate == undefined	|| $scope.validate == "") {
						var nowDate = new Date();
						$scope.validateImg = $iq_server.server() + "validate/generate-image-code/1?"
								+ nowDate.getTime();
					}
				}
			}

			$scope.loginUsername = angular.copy($scope.mobile);
			$scope.login = function(form) {
				$scope.check = true;
				if(form.$invalid){
					return false;
				}
				if ($scope.needValidate == true	&& ($scope.validate == undefined || $scope.validate == "")) {
					return false;
				} else {

					var data = {
						"username" : $scope.loginUsername,
						"password" : base64Encode($scope.password),
						"org" : $scope.orgId,
						"rememberMe" : $scope.rememberMe,
						"validate" : $scope.validate
					}
					$iqa_login_loginService.login(data).then(function(data) {
						if (data.data.status == 200) {
							location.href = "/home";
						} else if (data.data.status == 2003) {
							$scope.clearVcode();
							$scope.checkNeedValidate($scope.loginUsername, true);
							$iq_window.alert(data.data.message + ",请检查输入是否正确！",3,"warn");
						}else {
							$scope.clearPassword();
							$scope.clearVcode();
							$scope.checkNeedValidate($scope.loginUsername, true);
							$iq_window.alert({message:data.data.message,type:"warn"});
						}
						$scope.check = false;
					},function(){$scope.cancel();});
				}
			}

			$scope.ok = function() {
				$modalInstance.close();
			};

			$scope.cancel = function() {
				$modalInstance.dismiss('cancel');
			};

			$scope.gotoForgetPassword = function() {
				$scope.cancel();
				$state.go("forget-password");
			}

			$scope.checkNeedValidate();
		}

	}

	//zt
	var wechatSelectOrgCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iq_server, $iqa_login_registerService,
			$iqa_login_loginService) {
		$scope.mobile = $stateParams.mobile;

		$iqa_login_loginService.getOrgs("all").then(function(data) {
			if (data.data.status == 200) {
				$scope.orgs = data.data.data;
				if (data.data.message != null && data.data.message != "") {
					$scope.mobile = angular.copy(data.data.message);
				}
			}
		});

		$scope.loginToOrg = function(id) {
			$iqa_login_loginService.selectOrg(id).then(function(data) {
				if (data.data.status == 200) {
					if (data.data.init == false) {
						location.href = "/home/setting-guide/step1";
					} else {
						location.href = "/home";
					}
				} else {
					location.href = "/login";
				}
			});
		}

		$scope.gotoCreateCompany = function() {
			$state.go("create-company", {
				mobile : $scope.mobile
			})
		}

		$scope.gotoJoinCompany = function() {
			$state.go("join-company", {
				mobile : $scope.mobile
			})
		}
	}

	var wechatBindingSelectCtrl = function($scope, $modal, $state, $stateParams) {
		$scope.registerBinding = function() {
			$state.go("wechat-register-binding");
		}

		$scope.loginBinding = function() {
			$state.go("wechat-login-binding");
		}
	}

	var wechatRegisterBindingCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iq_server, $iqa_login_registerService,
			$iqa_login_loginService) {
		$scope.strong = 0;
		$scope.submitValid = false;

		$scope.sendTimeClock = function() {
			if ($scope.sendTime > 0) {
				$timeout(function() {
					$scope.sendTime = $scope.sendTime - 1, $scope.sendTimeClock()
				}, 1000);
			}
		}

		$scope.sendRegisterAndJoinOrgValidateCode = function() {
			if(!checkMobileSimpleFormat($scope.mobile)){
				$scope.mobileerror = "手机号码格式不正确";
				return false;
			} else {
				$scope.mobileerror = "";
			}

			$scope.getVcodeText = "正在发送验证码……";
			$scope.sendTime = 60; // 1分钟
			$iqa_login_registerService.sendRegisterValidateCode($scope.mobile).then(function(data) {
				if (data.data.status == 200) {
					$scope.sendTime = 60; // 1分钟
					$scope.getVcodeText = "";
					$scope.sendTimeClock();
					$scope.mobileerror = "";
				}else{
					$scope.sendTime = 0;
					$scope.mobileerror = data.data.message;
				}
			},function(){$scope.sendTime = 0;});
		}

		
		$scope.$watch('password',function(){
			$scope.checkStrong();
		})
		$scope.checkStrong = function() {
			// $scope.strong = checkPassword($scope.password);
			// if ($scope.password.length > 18) {
			// 	$scope.passworderror = "密码超过长度限制";
			// } else if ($scope.password.length > 0 && $scope.strong == -1) {
			// 	$scope.passworderror = "密码必须以字母或数字开头";
			// } else if ($scope.password == $scope.mobile) {
			// 	$scope.passworderror = "密码不允许与手机号一致";
			// } else {
			// 	$scope.passworderror = "";
			// }
			var checkRet = checkPasswordComplexity($scope.password,$scope.mobile);
			$scope.passwordErrors = checkRet.errors;
			$scope.passwordFlag = checkRet.code == 0;
			if(checkRet.code == 0){
				$scope.strong = 0;
			}else{
				$scope.strong = checkRet.code;
			}

		}

		$scope.checkSame = function() {
			if(!checkStrSame($scope.password, $scope.rpassword)) {
				$scope.rpassworderror = "两次输入的密码不一致";
				return false;
			} else {
				$scope.rpassworderror = "";
			}
		}

		$scope.next = function() {
			$scope.rerror = "";

			if(!$scope.mobile) {
				$scope.submitValid = true;
				return false;
			}

			if(!checkMobileSimpleFormat($scope.mobile)){
				$scope.mobileerror = "手机号码格式不正确";
				return false;
			} else {
				$scope.mobileerror = "";
			}

			if(!$scope.vcode) {
				$scope.submitValid = true;
				return false;
			}

			if($scope.strong <=0){
				$scope.submitValid = true;
				return false;
			}

			// if (!$scope.password) {
			// 	$scope.submitValid = true;
			// 	return false;
			// }

			if (!$scope.rpassword) {
				$scope.submitValid = true;
				return false;
			}

			// if ($scope.passworderror != null && $scope.passworderror != "") {
			// 	return false;
			// } else {
			// 	var checkRet = checkPasswordComplexity($scope.password,$scope.mobile);
			// 	$scope.passwordErrors = checkRet.errors;
			// 	$scope.passwordFlag = checkRet.code == 0;
			// 	if(checkRet.code == 0){
			// 	}else{
			// 		// $scope.showPassImg = checkRet.code;
			// 	}

			// 	// var perror = checkPasswordComplete($scope.password, $scope.mobile);
			// 	// if (perror != null && perror != "") {
			// 	// 	$scope.passworderror = perror;
			// 	// 	return false;
			// 	// } else {
			// 	// 	$scope.passworderror = "";
			// 	// }
			// }

			if ($scope.rpassworderror != null && $scope.rpassworderror != "") {
				return false;
			} else {
				if (!checkStrSame($scope.password, $scope.rpassword)) {
					$scope.rpassworderror = "两次输入的密码不一致";
					return false;
				} else {
					$scope.rpassworderror = "";
				}
			}

			var param = {
				"mobile" : $scope.mobile,
				"vcode" : $scope.vcode,
				"password" : base64Encode($scope.password)
			}
			$iqa_login_registerService.createAccountAndWechatBinding(param).then(function(data) {
				if (data.data.status == 200) {
					$state.go("wechat-register-binding.wait", {
						mobile : angular.copy(data.data.data)
					});
				} else {
					var message = "";
					if (data.data.message && data.data.message != "") {
						message = "操作" + data.data.message;
					} else {
						message = "操作失败";
					}
					$scope.rerror = message;
				}
			});
		}
	}

	var wechatLoginBindingCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iq_server, $iqa_login_registerService,
			$iqa_login_loginService){

		$scope.checkNeedValidate = function(mobile, everyTime) {
			if ($scope.needValidate == true) {
				if (everyTime == true) {
					$scope.getValidate(true);
				}
			} else {
				$iqa_login_loginService.needValidate(mobile).then(function(data) {
					$scope.needValidate = angular.copy(data.data.data);
					if ($scope.needValidate == true) {
						$scope.getValidate();
					}
				},function(){

				});
			}
		}

		$scope.clearPassword = function() {
			if ($scope.login) {
				$scope.login.password = "";
				$(".form-input[ng-model='login.password']").empty();
			}
		}
		$scope.clearVcode = function() {
			if ($scope.login) {
				$scope.login.validate = "";
			}
		}

		$scope.getValidate = function(fource) {
			if ($scope.needValidate == true) {
				if (fource == true) {
					var nowDate = new Date();
					$scope.validate = $iq_server.server() + "validate/generate-image-code/1?"
							+ nowDate.getTime();
				} else if ($scope.login == undefined
						|| $scope.login.validate == undefined
						|| $scope.login.validate == "") {
					var nowDate = new Date();
					$scope.validate = $iq_server.server() + "validate/generate-image-code/1?"
							+ nowDate.getTime();
				}
			}
		}

		$scope.doLogin = function() {
			$scope.rerror = "";

			var username=$scope.login?$scope.login.username:undefined;
			if(!username){
				username=$(".form-input[ng-model='login.username']").val();
			}
			var password=$scope.login?$scope.login.password:undefined;
			if(!password){
				password=$(".form-input[ng-model='login.password']").val();
			}
			if (!$scope.login||!username||!password) {
				$scope.uperror = "请填写账号和密码";
				return false;
			} else {
				$scope.uperror = "";
			}
			if ($scope.needValidate == true && ($scope.login.validate == undefined || $scope.login.validate == "")) {
				$scope.validateerror = "请填写验证码";
				return false;
			} else {
				$scope.validateerror = "";
			}

			var data = {
				"username" : $scope.login.username,
				"password" : base64Encode($scope.login.password),
				"validate" : $scope.login.validate
			}
			$iqa_login_loginService.loginValidate(data).then(function(data) {
				if(data.data.status == 200) {
					$iqa_login_loginService.createWeChatBinding().then(function(rdata) {
						if(rdata.data.status == 200) {
							$state.go("wechat-login-binding.wait", {
								mobile : angular.copy(rdata.data.item)
							});
						} else {
							$scope.rerror = rdata.data.message;
						}
					});
				} else {
					$scope.rerror = data.data.message;
					$scope.clearPassword();
					$scope.clearVcode();
					$scope.checkNeedValidate($scope.login.username, true);
				}
			});
		}

		$scope.checkNeedValidate();
	}

	var joinOrCreateOrgCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iq_server, $iqa_login_registerService,
			$iqa_login_loginService,$location) {

		$scope.mobile = $stateParams.mobile;
		$scope.username = $stateParams.username;
		$scope.info = false;
		$iqa_login_loginService.getOrgs("all").then(function(data) {
			if (data.data.status == 200) {
				$scope.orgs = data.data.data;
				if (data.data.message != "") {
					$scope.mobile = data.data.message;
				}
				for(var i=0;i<$scope.orgs.length;i++){
					if($scope.orgs[i].userStatus==0||$scope.orgs[i].userStatus==5){
						$scope.info = true;
						break;
					}
				}
			}
		},function(){})

		$scope.gotoHome = function() {
			location.href = "/home";
		}

		$scope.gotoCreateCompany = function() {
			$state.go("create-company", {
				mobile : $scope.mobile,
				username : $scope.username
			})
		}

		$scope.gotoJoinCompany = function() {
			$state.go("join-company", {
				mobile : $scope.mobile,
				username : $scope.username
			})
		}

	}

	var createCompanyCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iqa_login_registerService) {
		$scope.mobile = $stateParams.mobile;
		$scope.username = $stateParams.username;

		$scope.getName = function(){
			$iqa_login_registerService.getName().then(function(data) {
				if (data.data.status == 200) {
					$scope.username = data.data.data;
				} else {
					$scope.username = "";
				}
			},function(){$scope.username = "";});
		}

		if($scope.username==null||$scope.username==""){
			$scope.getName();
		}

		$scope.createCompany = function(form) {
			$scope.check = true;
			if ($scope.mobile == null || $scope.mobile == "") {
				$iq_window.alert({message:"手机号为空，请返回",type:"warn"});
				return false;
			}

			if(form.$invalid){
				//$iq_window.alert("数据不符合要求，请修改后提交", 3, "warn");
				return false;
			}

			// 这里创建公司
			$iqa_login_registerService.createOrg($scope.mobile, $scope.username, $scope.org,$scope.itcode).then(function(data) {
				if (data.data.status == 200) {
					$state.go("create-company.ok", {
						orgName : doBase64Encode($scope.org.name)
					});
				} else {
					$iq_window.alert({message:data.data.message,type:"warn"});
				}
			},function(){});
		}
		$scope.gotoLogin = function() {
			$state.go("login");
		}
	}
	var createCompanyOkCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window,$iqa_login_registerService) {
		$iqa_login_registerService.getUser().then(function(data){
			$scope.home=true;
		},function(){$scope.home=false;})
		$scope.orgName = doBase64Decode($stateParams.orgName);

		$scope.getProbationLicense = function(){
			$iqa_login_registerService.getProbationLicense().then(function(data) {
				if (data.data.status == 200) {
					$scope.probationLicense = data.data.data;
				}
			},function(){});
		}

		$scope.gotoHome = function() {
			location.href = "/home";
		}

		$scope.gotoLogin = function() {
			$state.go("login");
		}
		$scope.getProbationLicense();
	}

	var joinCompanyCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iqa_login_registerService) {
		$scope.mobile = $stateParams.mobile;
		$scope.username = $stateParams.username;

		$scope.getName = function(){
			$iqa_login_registerService.getName().then(function(data) {
				if (data.data.status == 200) {
					$scope.username = data.data.data;
				} else {
					$scope.username = "";
				}
			},function(){$scope.username = "";});
		}
		if($scope.username==null||$scope.username==""){
			$scope.getName();
		}

		$scope.joinCompany = function(form) {
			$scope.check = true;

			if ($scope.mobile == null || $scope.mobile == "") {
				$iq_window.alert({message:"手机号为空，请返回",type:"warn"});
				return false;
			}

			if(form.$invalid){
				return false;
			}

			$iqa_login_registerService.joinOrg($scope.mobile, $scope.username, $scope.orgcode).then(function(data) {
				if (data.data.status == 200) {
					$state.go("join-company.wait", {
						orgName : doBase64Encode(data.data.data)
					}); // 可能需要传参数，告知申请加入哪个公司
				} else {
					$iq_window.alert({message:data.data.message,type:"warn"});
				}
			},function(){});
		}
		$scope.gotoLogin = function() {
			$state.go("login");
		}
	}

	var joinCompanyWaitCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window,$iqa_login_registerService,$ocLazyLoad) {
				$ocLazyLoad.load(['css/login-bottomup.css']);
		$iqa_login_registerService.getUser().then(function(data){
			$scope.home=true;
		},function(){$scope.home=false;})
		$scope.orgName = doBase64Decode($stateParams.orgName);
		$scope.gotoHome = function() {
			location.href = "/home";
		}
		$scope.gotoLogin = function() {
			$state.go("login");
		}
	}

	var forgetPasswordCtrl = function($scope, $modal, $state, $stateParams,
			$timeout, $iq_window, $iqa_login_registerService) {

		$scope.next = function() {
			// 验证手机号是否存在
			if ($scope.mobile != null && $scope.mobile != "") {
				$iqa_login_registerService.checkMobile($scope.mobile).then(function(data) {
					if (data.data.data == true) {
						$state.go("forget-password.step1", {
							mobile : $scope.mobile
						})

					} else {
						$iq_window.alert({message:"手机号尚未被注册",type:"warn"});
					}

				},function(){});
			} else {
				$iq_window.alert({message:"请填写手机号",type:"warn"});
			}
		}
		$scope.gotoLogin = function() {
			$state.go("login");
		}
	}

	var forgetPasswordStep1Ctrl = function($scope, $modal, $state,
			$stateParams, $timeout, $iq_window, $iqa_login_registerService) {
		$scope.mobile = $stateParams.mobile;

		$scope.sendTimeClock = function() {
			if ($scope.sendTime > 0) {
				$timeout(function() {
					$scope.sendTime = $scope.sendTime - 1, $scope
							.sendTimeClock()
				}, 1000);
			}
		}

		var sendPasswordValidateCodeFirstTime = function() {
			$scope.getVcodeText = "正在发送验证码……";
			$scope.sendTime = 60; // 1分钟
			$iqa_login_registerService.sendPasswordValidateCode($scope.mobile).then(function(data) {
				if (data.data.status == 200) {
					$scope.sendTime = 60; // 1分钟
					$scope.getVcodeText = "";
					$scope.sendTimeClock();
				}else{
					$scope.sendTime = 0;
				}
			},function(){$scope.sendTime = 0;});
		}

		$scope.sendPasswordValidateCode = function() {
			$scope.getVcodeText = "正在发送验证码……";
			$scope.sendTime = 60; // 1分钟
			$iqa_login_registerService.sendPasswordValidateCode($scope.mobile).then(function(data) {
				if (data.data.status == 200) {
					$scope.sendTime = 60; // 1分钟
					$scope.getVcodeText = "";
					$scope.sendTimeClock();
					$iq_window.alert({message:data.data.message,type:"success"});
				}else{
					$scope.sendTime = 0;
					$iq_window.alert({message:data.data.message,type:"warn"});
				}
			},function(){$scope.sendTime = 0;});
		}

		$scope.next = function() {
			if ($scope.mobile == null || $scope.mobile == "") {
				$iq_window.alert({message:"手机号为空，请返回到上一步",type:"warn"});
				return false;
			}

			if ($scope.vcode == null || $scope.vcode == "") {
				$iq_window.alert({message:"请填写验证码",type:"warn"});
				return false;
			}

			// 这里检查验证码是否正确
			$iqa_login_registerService.validatePasswordCode($scope.mobile, $scope.vcode).then(function(data) {
				if (data.data.status == 200) {
					$state.go("forget-password.step2", {
						mobile : $scope.mobile,
						vcode : $scope.vcode
					})
				} else {
					$iq_window.alert({message:data.data.message,type:"warn"});
				}
			},function(){});

		}
		$scope.gotoLogin = function() {
			$state.go("login");
		}
		sendPasswordValidateCodeFirstTime();
	}

	var forgetPasswordStep2Ctrl = function($scope, $modal, $state,
			$stateParams, $timeout, $iq_window, $iqa_login_registerService) {
		$scope.mobile = $stateParams.mobile;
		$scope.vcode = $stateParams.vcode;

		$scope.strong = 0;
		$scope.checkStrong = function(){

			// $scope.strong = checkPassword($scope.password);
			// if($scope.password.length>18){
			// 	$scope.passwordRemind = "密码超过长度限制";
			// } else	if($scope.password.length>0&&$scope.strong==-1){
			// 	$scope.passwordRemind = "密码必须以字母或数字开头";
			// }else if($scope.password==$scope.mobile){
			// 	$scope.passwordRemind = "密码不允许与手机号一致";
			// }else{
			// 	$scope.passwordRemind = "";
			// }
			var checkRet = checkPasswordComplexity($scope.password,$scope.mobile);
			$scope.passwordErrors = checkRet.errors;
			$scope.passwordFlag = checkRet.code == 0;
			if(checkRet.code == 0){
				$scope.strong = 0;
			}else{
				$scope.strong = checkRet.code;
			}

		}

		$scope.checkSame = function(){
			if($scope.password!=null&&$scope.password2!=null&&$scope.password!=""&&$scope.password2!=""&&$scope.password!=$scope.password2){
				$scope.passwordSame = "您两次输入的密码不一致";
			}else{
				$scope.passwordSame = "";
			}
		}

		$scope.next = function() {
			if ($scope.password == null || $scope.password == "") {
				$iq_window.alert({message:"请填写密码",type:"warn"});
				return false;
			}
			if ($scope.password2 == null || $scope.password2 == "") {
				$iq_window.alert({message:"请填写确认密码",type:"warn"});
				return false;
			}
			if($scope.strong<=0){
				$iq_window.alert({message:"密码格式不正确",type:"warn"});
				return false;
			}
			if($scope.passwordSame!=null&&$scope.passwordSame!=""){
				$iq_window.alert({message:"您两次输入的密码不一致",type:"warn"});
				return false;
			}
			$iqa_login_registerService.resetPassword($scope.mobile, $scope.vcode, $scope.password).then(function(data) {
				if (data.data.status == 200) {
					$state.go("forget-password.step3")
				} else {
					$iq_window.alert({message:data.data.message,type:"warn"});
				}
			},function(){});

		}
		$scope.gotoLogin = function() {
			$state.go("login");
		}
	}

	var forgetPasswordStep3Ctrl = function($scope, $modal, $state,$stateParams, $timeout, $iq_window) {

		$scope.gotoLogin = function() {
			$state.go("login");
		}
	}

	var loginTrialCtrl = function($scope, $modal, $state,$stateParams, $timeout, $iq_server, $iq_window,$iqa_login_loginTrialService) {
		$scope.login = {"username":"10000000000","password":"12345678"}

		$scope.getValidate = function() {
			var nowDate = new Date();
			$scope.validate = $iq_server.server() + "validate/generate-image-code/2?" + nowDate.getTime();
		}



		$scope.doLogin = function() {

			var username=$scope.login?$scope.login.username:undefined;
			if(!username){
				username=$(".form-input[ng-model='login.username']").val();
			}
			var password=$scope.login?$scope.login.password:undefined;
			if(!password){
				password=$(".form-input[ng-model='login.password']").val();
			}
			if (!$scope.login||!username||!password) {
				$iq_window.alert({message:"请填写帐号和密码！",type:"warn"});
			} else if ($scope.login.validate == undefined || $scope.login.validate == "") {
				$iq_window.alert({message:"请填写验证码！",type:"warn"});
			} else {
				var data = {
					"username" : username,
					"password" : base64Encode(password),
					"validate" : $scope.login.validate,
					"rememberMe":false
				}
				$iqa_login_loginTrialService.login(data).then(function(data) {
					if (data.data.status == 200) {
						//登录成功 直接跳到首页
						location.href = "../home/";
					} else if (data.data.status == 2002) {
						$state.go("register.step3", {
							mobile : $scope.login.username
						});
					} else if (data.data.status == 2001) {
						$scope.orgs = data.data.data.orgs;
						var modalInstance = $modal.open({
							templateUrl : 'templates/orgs.html',
							controller : modalInstanceCtrl,
							scope : $scope,
							windowClass : "modal fade mymodal"
						});

						modalInstance.opened.then(function(a, b, c) {
							$timeout(function() {
								var _m = $(".modal-dialog");
								_m.each(function() {
									var _this = $(this);
									_this.css({
										"margin-top" : "-" + _this.height() / 2
												+ "px",
										"top" : "50%"
									})
								})
							})
						})
					} else {
						$scope.clearVcode();
						$scope.getValidate();
						$iq_window.alert(data.data.message + ",请检查输入是否正确！",3,"warn");
					}

				},function(){});
			}
		}


		var modalInstanceCtrl = function($scope, $modalInstance) {

			$scope.loginOrg = function(orgId) {
				var data = {
					"username" : encodeURIComponent($scope.login.username),
					"password" : base64Encode($scope.login.password),
					"org" : orgId,
					"validate" : $scope.login.validate,
					"rememberMe":false
				}
				$iqa_login_loginTrialService.login(data).then(function(data) {
					if (data.data.status == 200) {
						location.href = "../home/";
					} else if (data.data.status == 2003) { // 如果因验证码出错导致，那么清除验证码
						$scope.clearVcode();
						$scope.cancel();
						$scope.getValidate();
						$iq_window.alert({message:data.data.message,type:"warn"});
					}

				},function(){$scope.cancel();});
			}

			$scope.cancel = function() {
				$modalInstance.dismiss('cancel');
			};
		}


		$scope.clearVcode = function() {
			if ($scope.login) {
				$scope.login.validate = "";
			}
		}


		$scope.getValidate();
	}


	var registerQingCloudCtrl = function($scope, $modal, $state,$stateParams, $timeout, $iq_window, $iqa_login_qingCloudService) {
		$scope.strong = 0;

		$iqa_login_qingCloudService.getContext().then(function(data){
			$scope.qingCloudContext = data.data.data;
			if($scope.qingCloudContext!=null){
				$scope.mobile = angular.copy($scope.qingCloudContext.phone);
				$scope.username = angular.copy($scope.qingCloudContext.user_name);
				$scope.org={"name":angular.copy($scope.qingCloudContext.company_name)};
			}
		},function(){})


		$scope.$watch('password',function(){
			$scope.checkStrong();
		})
		$scope.checkStrong = function(){

			// $scope.strong = checkPassword($scope.password);
			// if($scope.password.length>18){
			// 	$scope.passwordRemind = "密码超过长度限制";
			// } else	if($scope.password.length>0&&$scope.strong==-1){
			// 	$scope.passwordRemind = "密码必须以字母或数字开头";
			// }else if($scope.password==$scope.mobile){
			// 	$scope.passwordRemind = "密码不允许与手机号一致";
			// }else{
			// 	$scope.passwordRemind = "";
			// }
			var checkRet = checkPasswordComplexity($scope.password,$scope.mobile);
			$scope.passwordErrors = checkRet.errors;
			$scope.passwordFlag = checkRet.code == 0;
			if(checkRet.code == 0){
				$scope.strong = 0;
			}else{
				$scope.strong = checkRet.code;
			}

		}

		$scope.checkSame = function(){
			if($scope.password!=null&&$scope.password2!=null&&$scope.password!=""&&$scope.password2!=""&&$scope.password!=$scope.password2){
				$scope.passwordSame = "您两次输入的密码不一致";
			}else{
				$scope.passwordSame = "";
			}
		}

		$scope.next = function(form) {

			if ($scope.mobile == null || $scope.mobile == "") {
				$iq_window.alert({message:"手机号为空，将在3秒后自动跳转到常规注册",type:"warn"}).then(function(){
					$state.go("register");
				});
				return false;
			}
			$scope.check = true;
			if(form.$invalid){
				$iq_window.alert("数据不符合要求，请修改后提交", 3, "warn");
				return false;
			}
			if($scope.strong<=0){
				$iq_window.alert({message:"密码格式不正确",type:"warn"});
				return false;
			}
			if($scope.passwordSame!=null&&$scope.passwordSame!=""){
				$iq_window.alert({message:"您两次输入的密码不一致",type:"warn"});
				return false;
			}

			// 这里检查是否已同意条款
			if (!$scope.read) {
				$iq_window.alert({message:"您必须同意相关条款后才能进行下一步操作",type:"warn"});
				return false;
			}

			$iqa_login_qingCloudService.getContext().then(function(data){
				$scope.qingCloudContext = data.data.data;
				if($scope.qingCloudContext!=null){
					$scope.mobile = angular.copy($scope.qingCloudContext.phone);
					$scope.username = angular.copy($scope.qingCloudContext.user_name);
					$scope.org.name = angular.copy($scope.qingCloudContext.company_name);
				}
			},function(){})

			var paramdatas = {
					"mobile" : $scope.mobile,
					"password" : base64Encode($scope.password),
					"name" : $scope.username,
					"org" : $scope.org,
					"itcode" : $scope.itcode
			}

			// 这里创建帐号
			$iqa_login_qingCloudService.createAccount(paramdatas).then(function(data) {
				if (data.data.status == 200) {
					$state.go("create-company.ok", {
						orgName : doBase64Encode($scope.org.name)
					});
				} else {
					$iq_window.alert({message:data.data.message,type:"warn"});
				}
			},function(){});
		}

		$scope.gotoLogin = function() {
			$state.go("login");
		}

	}


	angular.module('login')
	.controller('loginCtrl', loginCtrl)
	.controller('registerCtrl', registerCtrl)
	.controller('registerStep1Ctrl', registerStep1Ctrl)
	.controller('registerStep2Ctrl', registerStep2Ctrl)
	.controller('registerStep3Ctrl', registerStep3Ctrl)
	.controller('wechatSelectOrgCtrl', wechatSelectOrgCtrl)
	.controller('wechatBindingSelectCtrl', wechatBindingSelectCtrl)
	.controller('wechatRegisterBindingCtrl', wechatRegisterBindingCtrl)
	.controller('wechatLoginBindingCtrl', wechatLoginBindingCtrl)
	.controller('registerOrLoginJoinCtrl', registerOrLoginJoinCtrl)
	.controller('registerJoinCtrl', registerJoinCtrl)
	.controller('loginSpecialCtrl', loginSpecialCtrl)
	.controller('joinCompanySpecialCtrl', joinCompanySpecialCtrl)
	.controller('createCompanyCtrl', createCompanyCtrl)
	.controller('createCompanyOkCtrl', createCompanyOkCtrl)
	.controller('joinCompanyCtrl', joinCompanyCtrl)
	.controller('joinCompanyWaitCtrl', joinCompanyWaitCtrl)
	.controller('forgetPasswordCtrl', forgetPasswordCtrl)
	.controller('forgetPasswordStep1Ctrl', forgetPasswordStep1Ctrl)
	.controller('forgetPasswordStep2Ctrl', forgetPasswordStep2Ctrl)
	.controller('forgetPasswordStep3Ctrl', forgetPasswordStep3Ctrl)
	.controller('joinOrCreateOrgCtrl', joinOrCreateOrgCtrl)
	.controller('loginTrialCtrl', loginTrialCtrl)
	.controller('registerQingCloudCtrl', registerQingCloudCtrl)

})()
