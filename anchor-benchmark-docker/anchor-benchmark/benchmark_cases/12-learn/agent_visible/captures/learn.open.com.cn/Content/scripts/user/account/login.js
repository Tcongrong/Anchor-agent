define(['jquery', 'common', 'verifySDK', 'loading', 'layer'], function ($, common, VerifySDK) {
    $(function () {
        var isLoading = false;
        var num = 59;
        var isShowFirseLesson = localStorage.getItem('isShowFirseLesson');
        localStorage.clear();
        sessionStorage.clear();
        if (isShowFirseLesson != undefined) { localStorage.setItem('isShowFirseLesson', false); }
        var mainbox = $('.mainbox');
        var usernameLabel = $('.username-label'); //用户名默认值
        var pwdLabel = $('.pwd-label'); //密码默认值
        var userloginbox = $('.userloginbox'); //用户名登录
        var qrcodebox = $('.qrcodebox'); //二维码登录
        var selectlogin = $('.selectlogin'); //选择登录方式
        var qrcode = $('.qrcode'); //二维码切换按钮
        var usernamelogin = $('.usernamelogin'); //二维码区域
        var typename = $('.typename'); //登录类型
        var safetip = $('.safetip'); //二维码登录提醒
        var loginlinks = $('.login-links');//忘记密码
        var followwx = $('.followwx'); //关注微信
        var qrcodeimg = $('.qrcodeimg'); //二维码
        var iconphone = $('.icon-ph'); //手机图片
        var txtbox = $('.txtbox');
        var codeBox = $('.verificationcode');
        var usernameBox = $('.username');
        var username = $('#username'); //用户名
        var pwdBox = $('.pwd');
        var pwd = $('#pwd'); //密码
        var code = $('#code'); //验证码
        var loginbtn = $('#loginbtn'); //登录按钮
        var replacebtn = $('#span_replace'); //换一张验证码图片
        var userNameValue = $.trim(username.val());
        var pwdValue = $.trim(pwd.val());
        var noticeContent = $('.noticeCount');
        var noticeIcon = $('.tips-bottom');
        var notice = $('.notice'); //高校通知
        var message = $('.loginmessage');
        var messsageInfo = $('.loginmessage p');
        var codeImg = $('.codevalue img');
        var validateNum = undefined;
        var isIe8 = false;


        // 滑块验证的值
        var validateCode = common.data.baseData();

        // 初始化sdk
        var verifySDK = new VerifySDK({
            tenant_id: common.data.tenant_id,
            envType: common.data.envType,
        });

        //ie6\ie7\ie8\ie9提示
        if (common.func.checkIE8()) {
            isIe8 = true;
            common.dialogBox.open({
                type: 2,
                title: '友情提示',
                content: '/Html/Common/Browser.html',
                area: ['45%', '80%']
            });

            $('.triangle').hide();
            $('.qrCode,.computer-btn').css({
                'background-position': 'center'
            });

            //ie6 和 ie7
            if (common.func.checkIE6()) {
                $('.login-box-wrap').css('width', 380);
            }

        }

        // ie下
        if (checkIE()) {
            $('.teacher_enter').html('<span style="vertical-align:middle;">教师登录入口</span>');
        }

        // ie6,7,8，9  就显示placeholder的label
        if (common.func.checkIE9()) {
            $('.label-text').show()
            // 给input增加keyup事件
            txtbox.on('keyup', changeInput);
        } else {
            $('.label-text').remove();
        }

        // 如果为ie下，就显示placeholder，否则就不显示
        function checkIE() {
            var a1 = navigator.userAgent;
            if (a1.indexOf("MSIE") != -1 || a1.indexOf('Trident') != -1) { return true; }
            else { return false; }
        }

        //同盾验证码
        //common.func.getCaptchaBlackBoxInfo('bind', '', '.customForm');

        qrcodeimg.loading({
            size: 'medium',
            message: '加载中...'
        });

        username.focus();
        if (userNameValue == '') {
            usernameLabel.show();
            showCodeBox(userNameValue);
        }
        if (pwdValue == '') {
            pwdLabel.show();
            showCodeBox(userNameValue);
        }

        replacebtn.click(function () {
            codeImg.attr("src", "/Account/ValidatePic?" + Math.random());
            //codeImg.click();
        });

        //生成智能验证码
        //function Captcha() {
        //    var ajax = {
        //        type: 'POST',
        //        url: '/Account/CaptchaToken',
        //        dataType: 'json',
        //        success: function (data) {
        //            //window._fmOpt.triggerCaptcha(data.data);
        //        },
        //        error: function (XMLHttpRequest, textStatus, errorThrown) {
        //        }
        //    };
        //    common.ajax.call(ajax);
        //}

        // 手机登录
        $('#loginbtn2').click(function () {
            if (isLoading) {
                return
            }
            isLoading = true;

            var obj = {
                phone: $.trim($('#mobile').val()),
                phoneValidateNum: $.trim($('#mobileCode').val()),
                captchaId: validateCode.captchaId || '1',
                authCode: validateCode.authCode || ''
            }

            var errMsg = undefined;
            if (!obj.phone) {
                errMsg = '请输入手机号'
            } else if (!obj.phoneValidateNum) {
                errMsg = "请输入验证码"
            }
            if (errMsg) {
                layer.msg(errMsg);
                $('#loginbtn2').val('登录');
                isLoading = false;
                return
            }

            layer.load()
            var ajax = {
                type: 'POST',
                url: '/Account/LoginSMS',
                dataType: 'json',
                data: obj,
                success: function (data) {
                    layer.closeAll('loading')
                    isLoading = false;
                    var _data = data.data;
                    if (data.status == "0") {
                        $('#loginbtn2').attr('disabled', 'disabled').val('登录成功正在跳转...');
                        if (data.data.IsCheckStudentCourse) {
                            checkstudentcode();
                        }
                        if (localStorage.getItem('collegesCode')) localStorage.removeItem('collegesCode');
                        if (localStorage.getItem('collegesName')) localStorage.removeItem('collegesName');
                        localStorage.setItem('TY_DISTINCT_ID', data.data.UserName)
                        localStorage.setItem('UserName', data.data.UserName)
                        // 用户名修改  0不可修改  1必须修改  2已修改 
                        localStorage.setItem('NameChangeStatus', data.data.NameChangeStatus)

                        // LoginName 签订协议的时候用
                        var _environmentLogin = _data.Environment;
                        if (_environmentLogin && _environmentLogin.ID != 0) {
                            localStorage.setItem('collegesCode', _environmentLogin.UniversityCode);
                            localStorage.setItem('collegesName', _environmentLogin.UniversityName);
                        }
                        location.href = data.data.Url;
                    } else {
                        //layer.msg(data.message)
                        var _msg = data.message;
                        if (_msg == '不支持手机号登录') {
                            _msg = '暂不支持手机登录，请切换至【账号登录】模式登录，如无账号，请先进行注册！';
                        }
                        layer.msg(_msg);
                    }
                }
            }
            common.ajax.call(ajax);
        })

        //登录
        loginbtn.click(function () {
            var userNameValue = $.trim(username.val());
            var pwdValue = $.trim(pwd.val());
            var codeValue = $.trim(code.val());
            if (userNameValue == '' && pwdValue == '') {
                messsageInfo.html('请输入用户名和密码');
                message.show();
                usernameBox.addClass('item-warning');
                pwdBox.addClass('item-warning');
                username.focus();
            }
            else if (userNameValue == '') {
                messsageInfo.html('请输入用户名');
                message.show();
                username.focus();
            }
            else if (pwdValue == '') {
                messsageInfo.html('请输入密码');
                message.show();
                pwd.focus();
            } else {
                if (codeBox.is(':visible')) {
                    if (codeValue == '') {
                        messsageInfo.html('请输入验证码');
                        message.show();
                        code.focus();
                    }
                    else {
                        message.hide();
                        login(userNameValue, pwdValue, codeValue);
                    }
                }
                else {
                    login(userNameValue, pwdValue, codeValue);
                }
            }
        });
        //_fmOpt.onSuccess = function (validateToken) {
        //    login(userNameValue, pwdValue, validateToken)
        //};

        // 登陆返回需要验证时验证过的参数
        var loginValdate = common.data.baseData();
        function login(loginName, passWord) {
            var ajax = {
                type: 'POST',
                url: '/Account/UnitLogin',
                dataType: 'json',
                data: {
                    loginName: loginName,
                    passWord: passWord,
                    captchaId: loginValdate.captchaId || '1', // validateCode.captchaId,
                    authCode: loginValdate.authCode || ''
                },
                success: function (data) {
                    var _data = data.data;
                    var _validateNum;
                    if (data.status == "0") {
                        try {
                            //SetUserIDLogerr(data.data.UserName);
                        } catch (e) { }
                        if (data.data.IsCheckStudentCourse) {
                            checkstudentcode();
                        }
                        //pushShenceData();
                        if (localStorage.getItem('collegesCode')) localStorage.removeItem('collegesCode');
                        if (localStorage.getItem('collegesName')) localStorage.removeItem('collegesName');
                        localStorage.setItem('TY_DISTINCT_ID', data.data.UserName)
                        localStorage.setItem('UserName', data.data.UserName)

                        // 待办事项
                        localStorage.setItem('UserNeedDealtWith', JSON.stringify(['']))

                        loginbtn.val('登录成功正在跳转...');
                        var _environmentLogin = _data.Environment;
                        if (_environmentLogin && _environmentLogin.ID != 0) {
                            localStorage.setItem('collegesCode', _environmentLogin.UniversityCode);
                            localStorage.setItem('collegesName', _environmentLogin.UniversityName);
                        }

                        location.href = data.data.Url;
                    } else {
                        if (_data && _data.prohibitTeacherLogin) {
                            loginbtn.removeAttr('disabled').removeClass('disabled').val('登录');
                            layer.confirm("教师登录入口已调整，请点击“去登录”按钮，或通过页面“教师登录入口”进入教师登录页！", {
                                btn: ['去登录'], title: '温馨提示'
                            }, function (idx) {
                                var localDatas = {
                                    uname: loginName,
                                    pwd: passWord
                                }
                                var localDatasStr = JSON.stringify(localDatas);
                                localDatasStr = encodeURIComponent(localDatasStr);
                                // 本地存储一下账号密码，用于回显
                                window.sessionStorage.setItem('localDatas', localDatasStr);

                                window.location.href = '/Account/TLogin?from=student&t=' + Math.random();
                            });
                            return;
                        }
                        messsageInfo.html(data.message);
                        message.show();
                        if (_data != undefined) {
                            _validateNum = data.data.IsValidateNum

                            if (_validateNum) {
                                // 显示滑块
                                verifySDK.showVerify().then(function (resData) {
                                    loginValdate = resData;
                                    // 重新登录
                                    login(loginName, passWord)
                                });
                            }
                        }
                        loginbtn.removeAttr('disabled').removeClass('disabled').val('登录');
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    loginbtn.removeAttr('disabled').removeClass('disabled').val('登录');
                }
            };
            loginAjax(ajax);
        }

        // 发送手机号
        function sendMsg() {
            var ajax = {
                type: 'POST',
                url: '/Account/GetSendMsg',
                data: {
                    phone: $.trim($('#mobile').val()),
                    captchaId: validateCode.captchaId,
                    authCode: validateCode.authCode
                },
                dataType: 'json',
                success: function (data) {
                    //layer.msg(data.message);
                    var _msg = data.message;
                    if (_msg == '不支持手机号登录') {
                        _msg = '暂不支持手机登录，请切换至【账号登录】模式登录，如无账号，请先进行注册！';
                    }
                    layer.msg(_msg);
                }

            };
            common.ajax.call(ajax);
            timer()
        }

        //_fmOpt.onSuccess = function (validateToken) {
        //    validateNum = validateToken
        //    var index = $('.tab-list li.select').index();
        //    if(index){//手机号登录
        //        var ajax = {
        //            type: 'POST',
        //            url: '/Account/GetSendMsg',
        //            data: {
        //                phone: $.trim($('#mobile').val()),
        //                black_box: window._fmOpt.getinfo(),
        //                validateNum: validateToken
        //            },
        //            dataType: 'json',
        //            success: function (data) {
        //                //layer.msg(data.message);
        //                var _msg = data.message;
        //                if (_msg == '不支持手机号登录') {
        //                    _msg = '暂不支持手机登录，请切换至【账号登录】模式登录，如无账号，请先进行注册！';
        //                }
        //                layer.msg(_msg);
        //            }

        //        };
        //        common.ajax.call(ajax);
        //        timer()
        //    }else{//账号密码登录
        //        var userNameValue = $.trim(username.val());
        //        var pwdValue = $.trim(pwd.val());
        //        login(userNameValue, pwdValue, validateToken)
        //    }
        //};

        //获取焦点去除警告
        function removeWarning(obj) {
            obj.removeClass('item-warning');
        }
        txtbox.focus(function () {
            $thisparent = $(this).parent();
            removeWarning($thisparent);
            $thisparent.addClass('item-focus');
        })
        txtbox.blur(function () {
            $this = $(this);
            $thisparent = $this.parent();
            if (!$thisparent.hasClass('item-warning') && ($.trim($this.val()) == '')) {
                $thisparent.hasClass('item-warning');
            }
        })

        // 增加当输入框获得内容时，隐藏提示信息的label
        txtbox.on('input propertychange', changeInput);
        function changeInput() {
            var val = $(this).val();

            var parent = $(this).parent();
            if (val) {
                $(this).parent().find('.label-text').hide();

                //显示input输入框的 提示语
                showHideInputLabel(this, true);
            } else {
                $(this).parent().find('.label-text').show();

                //隐藏input输入框的 提示语
                showHideInputLabel(this, false);
            }
        }

        $('.label-text').on('click', function () {
            $(this).parent().find('.txtbox').focus();
        });

        // 显示隐藏input输入框的 提示语
        /* 
            inputElem (当前输入框元素)
            status（添加还是删除）
        */
        function showHideInputLabel(parentElem, status) {
            var parent = $(parentElem).parent(); //当前input的父级 元素 
            var id = $(parentElem).attr('id');// 找到当前input的id
            switch (id) {
                case "username":// 用户名
                    if (status == true) {
                        parent.addClass('login_name_before');
                    } else {
                        parent.removeClass('login_name_before');
                    }
                    break;
                case "pwd":// 密码
                    if (status == true) {
                        parent.addClass('login_pwd_before');
                    } else {
                        parent.removeClass('login_pwd_before');
                    }
                    break;

                case "mobile":// 手机号
                    if (status == true) {
                        parent.addClass('login_phone_before');
                    } else {
                        parent.removeClass('login_phone_before');
                    }
                    break;
                case "mobileCode":// 验证码
                    if (status == true) {
                        parent.addClass('login_code_before');
                    } else {
                        parent.removeClass('login_code_before');
                    }
                    break;
            }
        }

        // 查看密码
        $('.show_pwd_icon').on('click', function () {
            var input = $(this).parent().find('input');
            var type = $(this).attr('data-type'); // 1:密码框 2：文本框

            // 如果是密码框，就改为输入框
            if (type == 1) {
                input.attr('type', 'text');
                $('.show_pwd_icon img').attr('src', '/Content/images/v2/login/show_pwd.png')
                $(this).attr('data-type', '2');
            } else {
                input.attr('type', 'password');
                $('.show_pwd_icon img').attr('src', '/Content/images/v2/login/hide_pwd.png')
                $(this).attr('data-type', '1');
            }
        });

        var boxElem = $('.mainbox')
        $(window).on('resize', resize);

        // 窗口变化时 改变输入框大小
        resize();

        function resize() {
            var width = $(window).width();
            var height = $(window).height();

            var scale = 1;

            if (width < 1200 || height < 800) {
                var scale1 = (width / 1200);
                var scale2 = (height / 800);
                scale = Math.min(scale1, scale2);
            }

            if (scale < 0.5) {
                scale = 0.5;
            }
            if (scale > 1) {
                scale = 1;
            }

            if (isIe8) {
                var boxElemWidth = boxElem.width();
                var boxElemHeight = boxElem.height();

                var newWidth = boxElemWidth * scale;
                var newHeight = boxElemHeight * scale;
                boxElem.css({
                    zoom: scale,
                    'margin-left': -newWidth / 2,
                    'margin-top': -newHeight / 2,
                    'opacity': '1'
                });
            } else {
                boxElem.css({
                    'transform': 'translate(-50%,-50%) scale(' + scale + ')',
                    'opacity': '1'
                });
            }

            setTimeout(function () {
                boxElem.css({
                    'transition': '.2s'
                });
            }, 100);
        }


        //回车登录
        $(document).keypress(function (e) {
            if (e.which == 13) {
                loginbtn.click();
            }
        })

        //执行登录
        function loginAjax(ajax) {
            common.ajax.call(ajax);
            loginbtn.attr('disabled', 'disabled').addClass('disabled').val('登录中...');
        }

        //是否显示验证码
        username.blur(function () {
            var userNameValue = $.trim(username.val());
            if (codeBox.is(":hidden") && !isBeforeValidate) {
                showCodeBox(userNameValue);
            }
        })

        //显示验证码
        function showCodeBox(userName) {
            if (!userName) {
                return;
            }
            var ajax = {
                type: 'GET',
                url: '/Account/GetValidateNumByRedis',
                dataType: 'json',
                data: {
                    loginName: userName
                },
                success: function (data) {
                    var _data = data.data;
                    if (_data) {
                        replacebtn.click();
                        codeBox.show();
                    } else {
                        codeBox.hide();
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            };
            common.ajax.call(ajax);
        }

        //系统维护通知
        getNotice();
        function getNotice() {
            var ajax = {
                type: 'GET',
                url: '/Account/GetPageMsg',
                dataType: 'json',
                data: {
                },
                success: function (data) {
                    if (data.status == "0") {
                        if (data.data != null && data.data != '') {
                            noticeContent.html(data.data);
                            var box_width = Math.round(noticeIcon.width());
                            //noticeIcon.css({ 'margin-left': '-' + box_width / 2 + 'px' });
                            noticeIcon.show();
                        }
                    } else {
                        noticeContent.html('加载失败。');
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            };
            common.ajax.call(ajax);
        }
        var tips = $('.tips-bottom').get(0);

        //查询课程选课是否存在（如果不存在直接从教务取数据）
        function checkstudentcode() {
            var ajax = {
                type: 'POST',
                url: '/StudentCenter/Student/CheckStudentCourse',
                dataType: 'json',
                data: {
                },
                success: function (data) {

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    //_callback(false, errorThrown);
                }
            };
            common.ajax.call(ajax);
        }

        usernameLabel.click(function () {
            $('.username input').focus();
        });
        pwdLabel.click(function () {
            $('.pwd input').focus();
        });
        //$('.username input').on('input propertychange', function () {
        //    if ($.trim($(this).val()) != '') {
        //        usernameLabel.hide();
        //    }
        //    else {
        //        usernameLabel.show();
        //    }
        //});
        //$('.pwd input').on('input propertychange', function () {
        //    if ($.trim($(this).val()) != '') {
        //        pwdLabel.hide();
        //    }
        //    else {
        //        pwdLabel.show();
        //    }
        //});

        function getWeiXinCode() {
            var info;
            var black_box = '';
            try {
                //black_box = _fmOpt.getinfo();
            } catch (e) { }
            var ajax = {
                type: 'post',
                url: '/Account/GetWeiXinCode',
                dataType: 'json',
                data: { black_box: black_box },
                async: false,
                success: function (data) {
                    info = data.data;
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            };
            common.ajax.call(ajax);
            return info;
        }
        mainbox.on('click', '.computer-btn', function () {
            $('.tab_box').show();
            //$('.tab-content li').eq(1).show().siblings().hide();
            $('.tab-content li').hide();
            $('.tab-list li.select')[0].click();
        })
        mainbox.on('click', '.qrCode', function () {
            var info = getWeiXinCode();
            if (info != undefined) {
                $.getScript('https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
                    function () {
                        typename.html('微信扫码登录');
                        userloginbox.hide();
                        selectlogin.removeClass('qrcode').addClass('usernamelogin').attr('title', '密码登录');
                        qrcodebox.show();
                        //生成微信二维码
                        var obj = new WxLogin({
                            id: info.id,
                            appid: info.appid,
                            scope: info.scope,
                            redirect_uri: info.redirect_uri,
                            state: info.state,
                            style: info.style,
                            href: info.href
                        });
                    })
            } else {
                typename.html('微信扫码登录');
                userloginbox.hide();
                selectlogin.removeClass('qrcode').addClass('usernamelogin').attr('title', '密码登录');
                qrcodebox.show();
                qrcodebox.html("<div style='text-align: center;padding-top: 100px;font-size: 18px;'>数据加载失败，请刷新页面重试</div>");
            }
            $('.tab_box').hide();
            $('.tab-content li').eq(2).show().siblings().hide();
        })
        $('#mobile').on('input propertychange', function () {
            // 手机号格式验证  通过才可以发短信 不通过不允许发短信
            var reg_tel = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
            var val = reg_tel.test($('#mobile').val());
            if ($.trim(val)) {
                $('.getCode').removeClass('disable_btn')
            } else {
                $('.getCode').addClass('disable_btn')
            }
        })

        // 获取手机号验证码
        $('.getCode').click(function () {
            if ($('.getCode').hasClass('disable_btn')) {
                return
            }
            // 生成滑块
            verifySDK.showVerify().then(function (resData) {
                validateCode = resData;
                // 发送短信
                sendMsg();
            });
        })

        function timer() {
            if (num >= 1) {
                $('.getCode').html('重新获取(' + num + 's)').addClass('disable_btn')
                num--;
                setTimeout(function () {
                    timer();
                }, 1000);
            } else {
                $('.getCode').html('获取验证码').removeClass('disable_btn')
            }
        }

        $(".tab-list li").click(function () {
            var i = $(this).index();
            $(this).addClass("select").siblings().removeClass("select")
            $('.tab-content li').eq(i).show().siblings().hide();

            // 设置标题下面的线位置
            setLinePosition(i);
        })

        // 设置标题下面的线位置
        function setLinePosition(index) {
            var line = $('.tab_list_line');
            var width = $('.tab-list li').eq(0).outerWidth(true);
            line.css({
                'transform': 'translateX(' + index * width + 'px)'
            })
        }

        mainbox.on('click', '.qrcode', function () {
            var info = getWeiXinCode();
            if (info != undefined) {
                $.getScript('https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
                    function () {
                        typename.html('微信扫码登录');
                        userloginbox.hide();
                        selectlogin.removeClass('qrcode').addClass('usernamelogin').attr('title', '密码登录');
                        qrcodebox.show();
                        //生成微信二维码
                        var obj = new WxLogin({
                            id: info.id,
                            appid: info.appid,
                            scope: info.scope,
                            redirect_uri: info.redirect_uri,
                            state: info.state,
                            style: info.style,
                            href: info.href
                        });
                    })
            } else {
                typename.html('微信扫码登录');
                userloginbox.hide();
                selectlogin.removeClass('qrcode').addClass('usernamelogin').attr('title', '密码登录');
                qrcodebox.show();
                qrcodebox.html("<div style='text-align: center;padding-top: 100px;font-size: 18px;'>数据加载失败，请刷新页面重试</div>");
            }
        });
        mainbox.on('click', '.usernamelogin', function () {
            typename.html('密码登录');
            userloginbox.show();
            selectlogin.removeClass('usernamelogin').addClass('qrcode').attr('title', '微信扫码登录');
            qrcodebox.hide();
        });
        qrcodebox.stop().mouseenter(function () {
            qrcodeimg.stop().animate({
                //这是改变二维码位置
                left: '30px'
            }, function () {
                phoneShow();
            });


        }).mouseleave(function () {
            qrcodeimg.stop().animate({
                //left: '86px'
                //这是改变二维码位置
                left: '92px'
            });
            phoneHide();
        })
        function phoneShow() {
            iconphone.stop().show();
        }
        function phoneHide() {
            iconphone.stop().hide();
        }
    })
})
