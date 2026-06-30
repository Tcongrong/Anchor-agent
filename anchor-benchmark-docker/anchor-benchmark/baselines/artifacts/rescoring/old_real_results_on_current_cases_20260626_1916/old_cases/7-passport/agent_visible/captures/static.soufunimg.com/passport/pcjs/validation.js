define(function (require, exports, module) {
    //获取字符串的字符长度方法(一个汉字统计为2个字符)
    function getLength(userName) {
        var name = userName.trim();
        var regex = /^[\u4E00-\u9FA5\uf900-\ufa2d]$/;
        var length = 0;
        for (var i = 0; i < name.length; i++) {
            if (regex.test(name[i])) {
                length += 2;
            } else {
                length++;
            }
        }
        return length;
    }
    module.exports = {
        isMobile: function (mobile) {//验证手机号是否合法
            var mobileReg = /^1[3456789]{1}[0-9]{9}$/;
            var macauMobile = /^0085[3|2]\d{8}$/;
            return mobileReg.test(mobile) || (macauMobile.test(mobile));
        },
        isUserName: function (userName) {//判断用户名是否合法
            var userNameReg1 = /^[0-9]+/;//判断首字母是否为数字
            if (userNameReg1.test(userName)) {
                return "用户名首字符不能为数字";
            }
            /* var userNameReg2=/^[0-9]+$/;//判断是否纯数字
			if(userNameReg2.test(userName)){
				return "用户名不能是纯数字";
			} */
            var userNameReg3 = /^[\w\u4E00-\u9FA5\uf900-\ufa2d]+$/;//判断是否只包括中文、英文字母、下划线和数字
            if (!userNameReg3.test(userName)) {
                return "用户名只能包括中文、英文字母、下划线和数字";
            }
            var length = getLength(userName);//判断用户名长度是否符合规则
            if (length > 20 || length < 4) {
                return "长度必须为4-20个字符或2-10个汉字";
            }
            return true;
        },
        isPassword: function (pwd) {//判断密码是否合法
            var passwordReg = /^[\u0000-\u00FF]{6,16}$/;
            if (!passwordReg.test(pwd)) {
                return "密码错误";
                //return "密码为6到16位的半角字符(英文字母，字符，数字及其组合)";
            }
            return true;
        },
        isPasswordForV: function (pwd, version) { //密码升级判断
            if (version == 1) {
                var passwordReg = /^[\u0000-\u00FF]{8,16}$/;
                var passwordContainMathReg = /[0-9]{1,}/;
                var passwordContainCharReg = /[a-zA-Z]{1,}/;
                if (!passwordReg.test(pwd) || !passwordContainMathReg.test(pwd) || !passwordContainCharReg.test(pwd)) {
                    return false;
                }
            } else {
                var passwordReg = /^[\u0000-\u00FF]{8,16}$/;
                if (!passwordReg.test(pwd)) {
                    return false;
                }
            }
            return true;
        },
        isMobileCode: function (code) {//判断是否合法的手机验证码
            var codeReg = /^\d{4,6}$/;
            return codeReg.test(code);
        },
        displayResult: function (keywords, url, that, isMathCode) {//显示手机登录相关结果
            if (keywords) {
                that.mobileTip.html(keywords);
                that.mobileTip.show();
            }
            if (url) {
                window.location.href = url;
            }
        },
        displayPswdLoginResult: function (keywords, url, that, isMathCode) {//显示用户名登录结果
            if (keywords) {
                that.pswdTip.html(keywords);
                that.pswdTip.show();
            }
            if (url) {
                window.location.href = url;
            }
        },
        displayBindMobileResult: function (keywords, url, that, isMathCode) {//显示绑定手机号结果
            if (keywords) {
                that.bindMobileTip.html(keywords);
                that.bindMobileTip.show();
            }
            if (url) {
                window.location.href = url;
            }
        },
        displayMathCode: function (that) {//显示手机登录验证码
            that.loginBox.show();
            that.floatAlert.show();
        },
        displayPswdLoginMathCode: function (that) {//显示密码登录验证码
            that.mathCodePswd.show();
        },
        displayBindMobileMathCode: function (that) {//显示绑定手机号验证码
            that.mathCodeBindMobile.show();
        },

        displayOldMathCode: function (that) {//显示图形验证码
            that.sendFloat.show();
            that.loginBox.show();
            that.floatAlert.show();
        },
        closeMathCode: function (that) {//关闭手机登录图形验证码
            that.sendFloat.hide();
            that.loginBox.hide();
            that.floatAlert.hide();
        },
        closePswdLoginMathCode: function (that) {//关闭密码登录图形验证码
            that.mathCodePswd.hide();
        },
        closeBindMobileMathCode: function (that) {//关闭绑定手机号验证码
            that.sendFloatBindMobile.hide();
            that.mathCodeBindMobile.hide();
        },

        displayVoice: function (that) {//显示语音发送中的遮罩层
            //var num = 5;
            //var errorTimer = setInterval(function () {
            //    num = num - 1;
            //    if (num <= 0) {
            //        clearInterval(errorTimer);
            //        that.sendFloat.show();
            //        that.voiceShow.show();
            //    }
            //}, 1000);
            that.sendFloat.show();
            that.voiceShow.show();
        },

        closeVoice: function (that) {//关闭语音发送遮罩层
            that.sendFloat.hide();
            that.voiceShow.hide();
        }
    };
});