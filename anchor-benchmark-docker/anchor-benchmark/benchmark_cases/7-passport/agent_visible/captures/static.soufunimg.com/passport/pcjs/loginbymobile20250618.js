define(function (require, exports, module) {
    var validate = require("validation.js?v=202110151423");
    var passportapidomain = "/web"
    //passportapidomain = "http://devpassport.fang.com:18081"
    function loginPage() { };
    loginPage.prototype = {
        initObj: function () {
            var that = this;
            that.burl = $("#backurl"); /*登录成功后的回调地址*/
            that.middleUrl = $("#middleUrl"); /*跨域登录中间页地址*/
            that.host = $("#host");
            that.service = $("#service");
            that.sendFlag = false;/*发送验证码按钮状态（是否可点）*/
            that.verifyFlag = false;/*手机验证码输入状态（是否输入）*/
            that.imgFlag = false;/*图片验证码输入状态（是否正确）*/
            that.loginFlag = false;/*登陆按钮状态（是否可点）*/
            that.isClickSend = false;/*是否已经点击发送验证码*/
            that.telNum = undefined;/*通过正则的手机号*/
            that.phoneNum = undefined;/*用户输入的手机号*/
            that.telVerifyNum = undefined;/*通过正则的验证码*/
            that.phoneVerifyNum = undefined;/*用户输入的验证码*/
            that.verifyCodeInput = undefined;/*用户输入的图片验证码*/
            that.sendBtnEnabled = true;//发送按钮是否可用
            that.sendFloat = $('#service')

            /*短信验证码*/
            that.send = $("#send");
            that.tel = $("#tel");
            that.phoneVerify = $("#phoneVerify");
            that.login = $("#login");
            /*语音验证码*/
            that.sendVoice = $("#sendVoice");
            that.sendShow = $("#sendShow")
            that.voiceShow = $("#voiceShow");
            that.closeVoice = $("#closeVoice");
            /*图形验证码*/
            that.sure = $("#qd");
            that.close = $("#close-x");
            that.verify = $("#verify");
            that.verifyCode = $("#verifyCode");
            that.mathCode = $("#mathCode");
            that.loginBox = $(".loginbox");
            that.floatAlert = $(".floatAlert");
            /*错误提示*/
            that.mobileTip = $('#mobileTip'); /*手机登录提示*/
            /*清除文本框内容*/
            that.cleartel = $("#clearTel");
            that.clearphoneVerify = $("#clearPhoneVerify");
            that.bindEvent();
        },

        /*---------------------------------------------------给Dom成员绑定事件方法的方法 -----------------------------------------------------*/

        bindEvent: function () {
            var that = this;
            /*检验手机号码*/
            that.tel.keyup(function () { return that.checkTelKeyupFn.call(this, that); });
            /*检验手机验证码*/
            that.phoneVerify.keyup(function () { return that.checkPhoneVerifyFn.call(this, that); });
            /*发送手机验证码按钮单击事件*/
            that.send.click(function () { return that.sendMessageClickFn.call(this, that); });
            /*发送语音验证码按钮单击事件*/
            that.sendVoice.click(function () { return that.sendVoiceClickFn.call(this, that); });
            /*关闭语音验证码提示*/
            that.closeVoice.click(function () { return that.closeVoiceClickFn.call(this, that); });
            /*关闭图形验证码*/
            that.close.click(function () { return validate.closeMathCode(that); });
            /*点击改变验证码*/
            that.verify.click(function () { return that.clickChangePicFn.call(this, that); });
            /*检验图片验证码输入框*/
            that.verifyCode.keyup(function () { return that.checkPicInputFn.call(this, that); });
            /*浮层确定按钮*/
            //that.sure.click( function () { return that.clickFloatSureFn.call(this, that); });
            /*点击登陆*/
            that.login.click(function () { return that.clickLoginFn.call(this, that); });
            /*清除文本框内容*/
            that.cleartel.click(function () { return that.clearTel.call(this, that); });
            that.clearphoneVerify.click(function () { return that.clearPhoneVerify.call(this, that); });
            /*控制清除按钮的显隐*/
            //that.tel.keyup( function () { return that.showClearTel.call(this, that);});
            /*如果上一页是搜房，显示返回按钮；否则显示logo*/
            if (!(document.referrer.indexOf(".fang.com") > -1)) {
                $(".logo").show();
            }
            else {
                $(".back").show();
            }
            /*判断是否显示传递的用户名*/
            var username = that.getUrlParam("username");
            if (username != null && validate.isMobile(username)) {
                that.tel.val(username);
                that.send.removeClass("noClick");
                that.sendFlag = true;
                that.phoneNum = username;
                that.telNum = that.phoneNum;
                that.loginStateFn();

                that.cleartel.show();
            }
        },
        /*---------------------------------------------------检验手机号码  -----------------------------------------------------*/
        /*检验电话号码keyup*/
        checkTelKeyupFn: function (obj) {
            var $this = $(this), that = obj;
            that.phoneNum = $.trim($this.val());
            $this.val(that.phoneNum);
            if (validate.isMobile(that.phoneNum)) {
                that.send.removeClass("noClick");
                that.sendFlag = true;
                that.telNum = that.phoneNum;
                that.loginStateFn();
            } else {
                that.send.addClass("noClick");
                that.sendFlag = false;
                that.telNum = '';
                that.login.removeClass("click");
                that.loginFlag = false;
            }
            if (that.phoneNum != null && that.phoneNum != "") {
                that.cleartel.show();
            }
            else {
                that.cleartel.hide();
            }
        },
        /*----------------------------------------------------清除文本框内容 -----------------------------------------------------*/
        /*清除手机号*/
        clearTel: function (obj) {
            var $this = $(this), that = obj;
            that.tel.val("");
            that.telNum = '';
            that.send.addClass("noClick");
            that.sendFlag = false;
            that.login.removeClass("click");
            that.loginFlag = false;
            that.disabledStateIniFun();
            that.sendBtnEnabled = true;
            that.cleartel.hide();
        },
        /*清除验证码*/
        clearPhoneVerify: function (obj) {
            var $this = $(this), that = obj;
            that.phoneVerify.val("");
            that.telVerifyNum = '';
            that.verifyFlag = false;
            that.login.removeClass("click");
            that.loginFlag = false;
            that.clearphoneVerify.hide();
        },
        /*----------------------------------------------------检验手机验证码 -----------------------------------------------------*/
        /*检验手机验证码*/
        checkPhoneVerifyFn: function (obj) {
            var $this = $(this), that = obj;
            that.phoneVerifyNum = $.trim($this.val());
            $this.val(that.phoneVerifyNum);
            //检查手机验证码格式
            if (!validate.isMobileCode(that.phoneVerifyNum)) {
                that.verifyFlag = false;
                that.telVerifyNum = '';
                that.login.removeClass("click");
                that.loginFlag = false;
            } else {
                that.verifyFlag = true;
                that.telVerifyNum = that.phoneVerifyNum;
                that.login.addClass("click");;
                that.loginStateFn();
            }
            if (that.phoneVerifyNum != null && that.phoneVerifyNum != "") {
                that.clearphoneVerify.show();
            }
            else {
                that.clearphoneVerify.hide();
            }
        },
        /*----------------------------------------------------发送手机验证码 -----------------------------------------------------*/
        /*发送短信验证码*/
        sendMessageClickFn: function (obj) {
            var that = obj;
            var isShowMathCode = false;
            var isPhoneVerifyFocus = "";
            ////ceshi001
            //validate.displayMathCode(that);
            //that.verifyCode.focus();
            //return;
            if (!validate.isMobile(that.phoneNum)) {
                validate.displayResult("请输入正确的手机号", '', that);
                that.send.addClass("noClick");
                that.sendFlag = false;
                that.telNum = '';
                return;
            }
            if (that.sendFlag && that.sendBtnEnabled) {
                _ub.collect(803, { 'vwg.page': 'txz_dl^gg_pc' }); //埋码
                validate.displayResult("", '', that);
                that.clearPhoneVerify(that);
                that.isClickSend = true;
                that.telNum = that.phoneNum;
                that.loginStateFn();
                jQuery.ajax({
                    url: passportapidomain+'/loginsms/sendsmsforpc',
                    type: 'Post',
                    dataType: 'json',
                    async: false,
                    xhrFields: {
                        withCredentials: true
                    },
                    //crossDomain: true,
                    data: {
                        MobilePhone: that.telNum,
                        Operatetype: "0",
                        Service: that.service.val()
                    },
                    error: function (data) {
                        validate.displayResult('服务器开小差了，请重试', '', that);
                    },
                    success: function (data) {
                        //that.sendShow.show();
                        if (data.Message == "Success") {
                            validate.closeMathCode(that);
                            that.sendFlag = false;
                            isPhoneVerifyFocus = "MessageSuccess";
                            validate.displayResult("验证码已发送", '', that);
                        } else if (data.IsSent == "true") {
                            isPhoneVerifyFocus = "IsSentTrue";
                            validate.displayResult(data.Tip, '', that);
                        } else if (data.IsShowMathCode == "true") {
                            that.initSlideMathCode(that);
                            validate.displayMathCode(that);
                        } else {
                            validate.displayResult(data.Tip, '', that);
                            that.clearStateIniFun();
                        }

                    }
                });
                if (isPhoneVerifyFocus == "MessageSuccess") {
                    that.numLoseFn(60);
                    that.phoneVerify.focus();
                    return;
                }
                if (isPhoneVerifyFocus == "IsSentTrue") {
                    that.clearStateIniFun();
                    that.phoneVerify.focus();
                    return;
                }

            }
        },


        /*关闭语音验证码提示,并发送语音验证码*/
        closeVoiceClickFn: function (obj) {
            var $this = $(this), that = obj;
            validate.closeVoice(that);
            that.login.attr("class", "btn-login click");
        },

        /*恢复发送按钮可用状态*/
        clearStateIniFun: function () {
            var that = this;
            that.sendBtnEnabled = true;
            that.send.removeClass("noClick");
            that.send.addClass("click");
            that.sendVoice.removeClass("gray-b");
            that.sendVoice.addClass("red-f6");
        },

        /*发送按钮置灰*/
        disabledStateIniFun: function () {
            var that = this;
            that.sendBtnEnabled = false;
            that.send.removeClass("click");
            that.send.addClass("noClick");
            that.sendVoice.removeClass("red-f6");
            that.sendVoice.addClass("gray-b");
        },

        /*----------------------------------------------------图文验证码相关 -----------------------------------------------------*/

        /*点击改变验证码*/
        clickChangePicFn: function (obj) {
            var that = obj;
            that.changeVerifyFn();
        },

        /*检验图片验证码输入框*/
        checkPicInputFn: function (obj) {
            var that = obj;
            that.verifyCodeInput = $.trim(that.verifyCode.val());
            that.verifyCode.val(that.verifyCodeInput);
            //if (that.verifyCodeInput) {
            //    that.sure.css("background-color", "#df3031");
            //} else {
            //    that.sure.css("background-color", "#999");
            //}
        },


        /*验证码60s倒计时*/
        numLoseFn: function (num) {
            var that = this;
            that.tel.off("keyup");
            that.disabledStateIniFun();
            that.verifyTimer = setInterval(function () {
                num = num - 1;
                that.send.text(num + 's');
                if (num <= 0) {
                    clearInterval(that.verifyTimer);
                    that.sendFlag = true;
                    that.send.text('获取验证码');
                    if (validate.isMobile(that.tel.val())) {
                        that.clearStateIniFun();
                    }
                    that.tel.on("keyup", function () { return that.checkTelKeyupFn.call(this, that); });
                }
            }, 1000);
        },
        /*语音验证码60s倒计时*/
        numLoseVoiceFn: function (num) {
            var that = this;
            that.disabledStateIniFun();
            that.verifyTimer = setInterval(function () {
                num = num - 1;
                that.sendVoice.text(' 语音验证码(' + num + 's)');
                if (num <= 0) {
                    clearInterval(that.verifyTimer);
                    that.sendFlag = true;
                    that.sendVoice.text(' 语音验证码 ');
                    if (validate.isMobile(that.tel.val())) {
                        that.clearStateIniFun();
                    }
                }
            }, 1000);
        },
        /*改变验证码*/
        changeVerifyFn: function () {
            var that = this;
            that.verify.attr('src', 'https://Captcha.fang.com/Display?type=wap&width=150&height=80' + "&r=" + Math.random());
        },

        /*----------------------------------------------------点击登录按钮 -----------------------------------------------------*/
        /*登陆按钮状态*/
        loginStateFn: function () {
            var that = this;
            if (that.telNum && that.verifyFlag) {
                that.login.addClass("click");
                that.loginFlag = true;
            }
        },

        /*点击登陆*/
        clickLoginFn: function (obj) {
            var that = obj;
            if (that.login.attr("class") == "btn-login") {
                return false;
            }
            validate.displayResult('', '', that);
            if (!that.telNum) {
                validate.displayResult('请输入正确的手机号', '', that);
                return false;
            }
            if (!validate.isMobile(that.telNum)) {
                validate.displayResult('手机号格式错误', '', that);
                return false;
            }
            if (!that.phoneVerify) {
                validate.displayResult('请输入手机验证码', '', that);
                return false;
            }
            if (!validate.isMobileCode(that.phoneVerify.val())) {
                validate.displayResult('请输入正确的手机验证码', '', that);
                return false;
            }
            if (that.loginFlag) {
                _ub.collect(9, { 'vwg.page': 'txz_dl^gg_pc', "vwt.logintype": "sms" }); //埋码
                if (that.isClickSend) {
                    if (!validate.isMobileCode(that.phoneVerify.val())) {
                        validate.displayResult('验证码不正确', '', that);
                        that.login.removeClass("click");
                        that.verifyFlag = false;
                    }
                    else {
                        jQuery.ajax(
                            {
                                url: '/loginverifysms.api',
                                type: 'Get',
                                dataType: 'json',
                                xhrFields: {
                                    withCredentials: true
                                },
                                //crossDomain: true,
                                data:
                                {
                                    "mobilephone": that.telNum,
                                    "mobilecode": that.phoneVerifyNum,
                                    "operatetype": "0",
                                    "service": that.service.val()
                                },
                                error: function () {
                                    validate.displayResult('服务器开小差了，请重试', '', that);
                                },
                                success: function (json) {
                                    if (json.Message == 'Success') {
                                        var burl = that.burl.val()
                                        if (burl && json.PToken) {
                                            burl = that.middleUrl.val() + "?backurl=" + burl + '&ptoken=' + json.PToken;
                                        }
                                        validate.displayResult("登录成功", burl, that);
                                    }
                                    else {
                                        validate.displayResult(json.Tip, '', that);
                                    }
                                },
                            })
                    }
                }
                else {
                    validate.displayResult("请先发送验证码", '', that);
                }
            }
            else {
                if (that.login.hasClass('click')) {
                    if (that.tel.val().length > 0 && that.phoneVerify.val().length > 0) {
                        if (validate.isMobile(that.tel.val())) {
                            validate.displayResult('验证码不正确', '', that);
                        }
                        else {
                            validate.displayResult('手机号不正确', '', that);
                        }
                        that.phoneVerify = $("#phoneVerify");
                        that.login.removeClass("click");
                        that.verifyFlag = false;
                        that.phoneVerify.val('');
                    }
                }
            }
        },

        /*获取url中的参数*/
        getUrlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) {
                return unescape(r[2]);
            }
            return null; //返回参数值
        },
        /*初始化滑动验证码*/
        initSlideMathCode: function (obj) {
            var that = obj;
            if (window.fCheck.target) {
                window.fCheck.target = null;
            }
            window.fCheck.init({
                container: '#mathCode',
                url: passportapidomain +"/slider/init",
                mode: 'embed',
                callback: function () {
                    that.floatAlert.hide();
                    that.loginBox.hide();
                    // 验证成功后的回调                   
                    var isPhoneVerifyFocus = "";
                    var tip = "";
                    var result = window.fCheck.config.result; //滑动验证码验证参数
                    jQuery.ajax({
                        url: passportapidomain + '/loginsms/sendsmsforpc',
                        type: 'Post',
                        dataType: 'json',
                        async: false,
                        xhrFields: {
                            withCredentials: true
                        },
                        //crossDomain: true,
                        data: {
                            MobilePhone: that.telNum, Operatetype: "0", Service: that.service.val(), Gt: result.fc_gt, Challenge: result.fc_challenge, Validate: result.fc_validate
                        },
                        error: function (data) {
                            validate.displayResult('服务器开小差了，请重试', '', that);
                        },
                        success: function (data) {
                            if (data.Message == "Success") {
                                that.sendFlag = false;
                                isPhoneVerifyFocus = "MessageSuccess";
                            }
                            else if (data.IsSent == "true") {
                                tip = data.Tip;
                                isPhoneVerifyFocus = "IsSentTrue";
                            }
                            else if (data.Message == "Error") {
                                validate.displayResult(data.Tip, '', that, false);
                                that.reInitSlideMathCode();
                                that.clearStateIniFun();
                            }
                            else {
                                validate.displayResult(data.Tip, '', that, false);
                                that.clearStateIniFun();
                            }
                        }
                    });

                    if (isPhoneVerifyFocus == "MessageSuccess") {
                        that.numLoseFn(60);
                        validate.displayResult("验证码已发送", '', that);
                        that.phoneVerify.focus();
                        return;
                    }
                    if (isPhoneVerifyFocus == "IsSentTrue") {
                        that.clearStateIniFun();
                        validate.displayResult(tip, '', that);
                        that.phoneVerify.focus();
                        return;
                    }
                }
            });
            var mc = $("#mathCode");
            mc.bind("DOMNodeInserted", function (e) {
                $("#mathCode .slide-verify").addClass("yz_hua");
                $("#mathCode .drag-bg").addClass("yz_pass");
                $("#mathCode .img-verify").addClass("yz_pic");
            });

        },
        /*滑动验证码重新初始化*/
        reInitSlideMathCode: function () {
            window.fCheck.reinit();
        }
    };

    var page = new loginPage();
    page.initObj();
});