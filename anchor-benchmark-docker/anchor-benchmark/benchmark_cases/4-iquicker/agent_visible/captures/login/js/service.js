(function() {
	var loginService = function($iq_http, $iq_server){
		var login = function(data){
			var params = {
					method:"POST",
					url:  $iq_server.server() + "login",
					data:data,
					dataType : "json"
				}
			
			return $iq_http.http(params);
		}
		
		var slogin = function(sdata){
			var params = {
				method:"POST",
				url: $iq_server.server() + "login?valid=1&type=code",
				data: sdata,
				dataType : "json"
			}
			return $iq_http.http(params);
		}
		
		//获取微信绑定所需参数
		var getWeChatParam = function() {
			var params = {
				method: "GET",
				url: $iq_server.server() + "person_org/wechat/params/login"
			}
			return $iq_http.http(params);
		}
		
		//验证用户名密码是否正确
		var loginValidate = function(data) {
			var params = {
				method:"POST",
				url: $iq_server.server() + "login/validate",
				data: data,
				dataType : "json"
			}
			return $iq_http.http(params);
		}
		
		//建立微信绑定
		var createWeChatBinding = function() {
			var params = {
				method : "POST",
				url : $iq_server.server() + "person_org/wechat/newWeChatAccount"
			}
			return $iq_http.http(params);
		}
		
		var getOrgs = function(filter){
			var params = {
					method:"GET",
					url: $iq_server.server() + "login/user/orgs/"+filter
				}
			return $iq_http.http(params);
		}
		
		var needValidate = function(mobile){
			
			if(mobile==undefined||mobile==""){
				url = $iq_server.server() + "validate/need-image-code/1";
			}else{
				url = $iq_server.server() + "validate/need-image-code/1/mobile/"+mobile;
			}
			var params = {
					method:"GET",
					url:url
				}
			
			return $iq_http.http(params);
		}
		
		var isPermitted = function(permission){
			var params = {
					method:"GET",
					url: $iq_server.server() + "is-permitted/"+permission
				}
			return $iq_http.http(params);
		}
		
		var selectOrg = function(id) {
			var params = {
				method : "GET",
				url : $iq_server.server() + "login/select-org/" + id 
			}
			return $iq_http.http(params);
		}
		
		var getOrgNameByOrgCode = function(orgcode) {
			var params = {
				method : "GET",
				url : $iq_server.server() + "org/orgcode/" + orgcode
			}
			return $iq_http.http(params);
		}
		
		return {
			login:login,
			slogin:slogin,
			getOrgs:getOrgs,
			needValidate:needValidate,
			isPermitted:isPermitted,
			getWeChatParam:getWeChatParam,
			loginValidate:loginValidate,
			createWeChatBinding:createWeChatBinding,
			selectOrg:selectOrg,
			getOrgNameByOrgCode:getOrgNameByOrgCode
		}
	}	
	
	
	var loginTrialService = function($iq_http, $iq_server){
		var login = function(data){
			var params = {
					method:"POST",
					url: $iq_server.server() + "login/trial",
					data:data,
					dataType : "json"
				}
			
			return $iq_http.http(params);
		}
		
		var getOrgs = function(filter){
			var params = {
					method:"GET",
					url: $iq_server.server() + "login/user/orgs/"+filter
				}
			return $iq_http.http(params);
		}
		
		return {
			login:login,
			getOrgs:getOrgs
		}
	}	
	
	var registerService = function($iq_http, $iq_server) {
		
		var getUser = function(){
			var params = {
					method:"GET",
					url: $iq_server.server() + "login/user"
			}
			return $iq_http.http(params);
		}
		
		var checkMobile = function(id){
			var params = {
					method:"GET",
					url: $iq_server.server() + "register/mobile/"+id
				}
			return $iq_http.http(params);
		}
		
		
		var sendRegisterValidateCode = function(id){
			
			var params = {
					method:"GET",
					url: $iq_server.server() + "validate/record-mobile-code/1"
				}
			
			return $iq_http.http(params).then(function(r){
				var params2 = {
						method:"POST",
						url: $iq_server.server() + "register/register-validate-code",
						data:id
					}
				
				return $iq_http.http(params2);
			});

		}
		
		var validateRegisterCode = function(mobile,vcode){
			var params = {
					method:"GET",
					url :  $iq_server.server() + 'register/validate-code/mobile/'+ mobile + '/vcode/' + vcode + '/type/1'
				}
			
			return $iq_http.http(params);
		}
		
		var getName = function(){
			var params = {
					method:"GET",
					url :  $iq_server.server() + 'register/name'
				}
			return $iq_http.http(params);
		}
		
		var createAccount = function(mobile,vcode,password){
			var params = {
					method:"POST",
					url : $iq_server.server() + 'register/account',
					data : {
						'mobile' : mobile,
						'password' : base64Encode(password),
						'vcode' : vcode
					},
					dataType : 'json'
				}
			
			return $iq_http.http(params);
		}
		
		var createOrg = function(mobile,username,org,itcode){
			
			var paramdatas = {
					"mobile":mobile,
					"name" : username,
					"org" : org,
					"itcode":itcode
			}
			
			var params = {
					method:"POST",
					url: $iq_server.server() + "register/org",
					data:paramdatas
				}
			
			return $iq_http.http(params);
		}
		
		var createAccountAndJoinOrg = function(data) {
			var params = {
				method : "POST",
				url : $iq_server.server() + "register/account-join-org",
				data : data
			}
			return $iq_http.http(params);
		}
		
		var createAccountAndWechatBinding = function(data) {
			var params = {
				method : "POST",
				url : $iq_server.server() + "register/account-wechat-binding",
				data : data
			}
			return $iq_http.http(params);
		}
		
		var joinOrg = function(mobile,username,orgcode){
			
			var paramdatas = {
					"mobile":mobile,
					"name" : username,
					"orgcode" : orgcode
			}
			
			var params = {
					method:"POST",
					url: $iq_server.server() + "register/join-org",
					data:paramdatas
				}
			
			return $iq_http.http(params);
		}
		
		var sendPasswordValidateCode = function(id){
			
			var params = {
					method:"GET",
					url: $iq_server.server() + "validate/record-mobile-code/2"
				}
			
			return $iq_http.http(params).then(function(r){
				var params2 = {
						method:"POST",
						url: $iq_server.server() + "register/password-validate-code",
						data:id
					}
				
				return $iq_http.http(params2);
			});

		}
		
		var validatePasswordCode = function(mobile,vcode){
			var params = {
					method:"GET",
					url :  $iq_server.server() + 'register/validate-code/mobile/'+ mobile + '/vcode/' + vcode + '/type/2'
				}
			
			return $iq_http.http(params);
		}
		
		var resetPassword = function(mobile,vcode,password){
			var params = {
					method:"PUT",
					url :  $iq_server.server() + 'register/password/mobile/'+mobile+'/vcode/'+vcode,
					data : base64Encode(password)
				}
			
			return $iq_http.http(params);
		}
		
		var getProbationLicense = function(){
			var params = {
					method:"GET",
					url :  $iq_server.server() + 'service_order/probation/config'
				}
			return $iq_http.http(params);
		}
		
		return {
			getUser:getUser,
			checkMobile:checkMobile,
			sendRegisterValidateCode:sendRegisterValidateCode,
			validateRegisterCode:validateRegisterCode,
			createAccount:createAccount,
			createOrg:createOrg,
			joinOrg:joinOrg,
			sendPasswordValidateCode:sendPasswordValidateCode,
			validatePasswordCode:validatePasswordCode,
			resetPassword:resetPassword,
			getName:getName,
			getProbationLicense:getProbationLicense,
			createAccountAndJoinOrg:createAccountAndJoinOrg,
			createAccountAndWechatBinding:createAccountAndWechatBinding
		}
	}
	
	
	
	var qingCloudService = function($iq_http, $iq_server){
		var getContext = function(){
			var params = {
					method:"GET",
					url: $iq_server.server() + "person_org/qingcloud/context"
				}
			return $iq_http.http(params);
		}
		
		var createAccount = function(data){
			var params = {
					method:"POST",
					url: $iq_server.server() + "person_org/qingcloud/account",
					data:data,
					dataType:"json"
				}
			return $iq_http.http(params);
		}
		
		return {
			getContext:getContext,
			createAccount:createAccount
		}
	}	
	
	var weChatService =  function($iq_http,$iq_server){
		var weiShare = function(data){
			var params = {
					method : "POST",
					url : $iq_server.server() + "weChat/signature",
					data : data,
					dataType : "json"
				}
			return $iq_http.http(params);
		}
		return {
			weiShare : weiShare
		}
	}
	
	var login = angular.module('login');
	login.service("$iqa_login_loginService",loginService);
	login.service("$iqa_login_loginTrialService",loginTrialService);
	login.service("$iqa_login_registerService",registerService);
	login.service("$iqa_login_qingCloudService",qingCloudService);
	login.service("$iqa_login_weChatService",weChatService);
})()