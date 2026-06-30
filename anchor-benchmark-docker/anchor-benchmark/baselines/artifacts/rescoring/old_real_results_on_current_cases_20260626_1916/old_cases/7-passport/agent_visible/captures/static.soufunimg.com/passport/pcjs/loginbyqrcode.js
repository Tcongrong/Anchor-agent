define(function (require, exports, module) {
    function loginPage() { };
    loginPage.prototype = {
        initObj: function () {
            var that = this;
            that.burl = $("#backurl"); /*登录成功后的回调地址*/
            that.middleUrl = $("#middleUrl"); /*跨域登录中间页地址*/
            that.host = $("#host");
            that.service = $("#service");
            that.qrCodeImg = $("#qrCodeImg");/*登录二维码*/
            that.refreshQrCodeBtn = $("#refreshQrCodeBtn");/*刷新二维码按钮*/
            that.switchBtn = $("#switchBtn");/*切换登录方式*/
            that.qrScanPanel = $("#qrScanPanel");/*二维码面板*/
            that.qrScanCompletePanel = $("#qrScanCompletePanel");/*扫码完成面板*/
            that.qrCodeInvalidMask = $("#qrCodeInvalidMask");/*二维码无效遮罩*/
            that.getQrCodeUrl = $("#getQrCodeUrl");/*获取二维码接口地址*/
            that.queryQrCodeStatusUrl = $("#queryQrCodeStatusUrl");/*查询二维码状态接口地址*/
            that.scanLoginTip = $("#scanLoginTip");/*扫码登录提示*/

            that.qrCodeWidth = 150;/*二维码宽度*/
            that.qrCodeHight = 150;/*二维码高度*/

            that.enableLoginPolling = false;/*是否允许扫码状态轮询*/
            that.isScanSucc = false;/*是否完成扫码*/
            that.isLoginSucc = false; /*是否登录成功*/
            that.key = "";/*二维码唯一标识*/
            that.qrLeftSeconds = 180 * 1000;/*二维码失效剩余时间（耗秒）*/
            that.timer = undefined;/*二维码过期计时器*/
            that.interval = undefined;/*二维码轮询定时器*/

            that.bindEvent();
        },

        /*---------------------------------------------------给Dom成员绑定事件方法的方法 -----------------------------------------------------*/
        bindEvent: function () {
            var that = this;
            /*绑定刷新二维码按钮*/
            that.refreshQrCodeBtn.click(function () { return that.initQrCodeFn.call(this, that); });
            /*绑定登录方式切换按钮*/
            that.switchBtn.click(function () { return that.switchToQrCodeLoginFn.call(this, that); });

        },

        /*---------------------------------------------------扫码登录相关的方法 -----------------------------------------------------*/
        /*获取新的二维码*/
        initQrCodeFn: function (obj) {
            var that = obj;
            $.ajax({
                url: that.getQrCodeUrl.val(),
                type: 'Get',
                async: true,
                dataType: 'jsonp',
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                data: {
                    w: that.qrCodeWidth,
                    h: that.qrCodeHight
                },
                error: function (data) {
                    that.invalidQrCodeFn(that, "获取二维码异常");
                },
                success: function (json) {
                    if (json && json.code == 1) {
                        that.key = json.data.key;
                        that.qrCodeImg.attr("src", 'data:image/jpg;base64,' + json.data.qrcode);
                        that.enableLoginPolling = true;
                        that.qrCodeImg.show();
                        that.qrCodeInvalidMask.hide();
                        that.checkQrCodeValidationFn(that);
                        that.pollingScanFn(obj);
                    } else {
                        that.invalidQrCodeFn(that, "获取二维码失败");
                    }
                }
            });
        },
        /*轮询扫码状态*/
        pollingScanFn: function (obj) {
            var that = obj;
            that.interval = window.setInterval(function () {
                if (that.enableLoginPolling && (!that.isScanSucc || !that.isLoginSucc)) {
                    $.ajax({
                        url: that.queryQrCodeStatusUrl.val(),
                        type: 'Get',
                        dataType: 'jsonp',
                        crossDomain: true,
                        async: false,
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        data: {
                            service: that.service.val(),
                            key: that.key
                        },
                        error: function (e) {
                            that.enableLoginPolling = false;
                            that.isScanSucc = false;
                            that.isLoginSucc = false;
                            alert("网络异常");
                        },
                        success: function (json) {
                            if (!json || json.code == 0) {
                                that.enableLoginPolling = false;
                                that.isScanSucc = false;
                                that.isLoginSucc = false;
                                that.loginFailFn(that);
                            } else if (json && json.code == 1 && json.data.isScanSuccess == 1 && json.data.isConfirmLogin == 1) {
                                that.isLoginSucc = true;
                                that.loginSuccFn(that, json.data);
                            } else if (json && json.code == 1 && json.data.isScanSuccess == 1) {
                                that.isScanSucc = true;
                                that.showQrScanCompleteFn(that);
                            } 
                        }
                    });
                } else {
                    window.clearInterval(that.interval);
                }
            }, 1000);

            /*查询扫码状态*/
            
        },
        /*切换登录方式*/
        switchToQrCodeLoginFn: function (obj) {
            var that = obj;
            if (that.switchBtn.hasClass("scan-login")) {
                that.switchBtn.removeClass("scan-login")
                that.enableLoginPolling = false;
            } else {
                that.switchBtn.addClass("scan-login");
                that.initQrCodeFn(that);
            }
        },
        /*扫码完成*/
        showQrScanCompleteFn: function (obj) {
            var that = obj;
            that.qrScanPanel.hide();
            that.qrCodeInvalidMask.hide();
            that.qrScanCompletePanel.show();
        },
        /*扫码失败展示*/
        showScanFailFn: function (obj) {
            var that = obj;
            that.qrScanPanel.show();
            that.scanLoginTip.text("扫描二维码失败");
            that.qrCodeInvalidMask.show();
            that.qrScanCompletePanel.hide();
        },
        /*登录成功*/
        loginSuccFn: function (obj, json) {
            var that = obj;
            var burl = that.burl.val()
            if (burl && json.PToken) {
                burl = that.middleUrl.val() + "?backurl=" + burl + '&ptoken=' + json.PToken;
            }
            if (burl) {
                window.location.href = burl;
            }
        },
        /*登录失败展示*/
        loginFailFn: function (obj) {
            var that = obj;
            that.qrScanPanel.show();
            that.scanLoginTip.text("登录失败");
            that.qrCodeInvalidMask.show();
            that.qrScanCompletePanel.hide();
            
        },
        /*无效二维码*/
        invalidQrCodeFn: function (obj,tips) {
            var that = obj;
            that.qrScanPanel.show();
            that.qrScanCompletePanel.hide();
            that.scanLoginTip.text(tips);
            that.qrCodeInvalidMask.show();
            that.enableLoginPolling = false;
        },
        /*检测二维码是否失效*/
        checkQrCodeValidationFn: function (obj) {
            var that = obj;
            window.clearTimeout(that.timer);
            that.timer = window.setTimeout(function () {
                that.invalidQrCodeFn(that, "二维码已失效");
            }, that.qrLeftSeconds);
            
        }
    };
    var page = new loginPage();
    page.initObj();

});