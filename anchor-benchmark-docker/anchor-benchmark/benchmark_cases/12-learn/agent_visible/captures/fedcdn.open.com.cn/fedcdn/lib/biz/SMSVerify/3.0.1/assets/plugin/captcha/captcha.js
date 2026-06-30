function screen_width() {
    return window.screen.width;
}

function screen_height() {
    return window.screen.height;
}


(function () {
    var head = document.getElementsByTagName("head")[0];
    var loadScript = function (url, async, next) {
        var script = document.createElement("script");
        script.async = async;
        script.onerror = function () {
            next && next(true)
        };
        var loaded = false;
        script.onload = script.onreadystatechange = function () {
            if (!loaded && (!script.readyState || "loaded" === script.readyState || "complete" === script.readyState)) {
                loaded = true;
                setTimeout(function () {
                    next && next(false)
                }, 0)
            }
        };
        script.src = url;
        head.appendChild(script)
    };
    var loadCss = function (url, next) {
        var style = document.createElement("link");
        style.href = url;
        style.rel = "stylesheet";
        style.type = "text/css";
        style.onerror = function () {
            next && next(true)
        };
        var loaded = false;
        style.onload = style.onreadystatechange = function () {
            if (!loaded && (!style.readyState || "loaded" === style.readyState || "complete" === style.readyState)) {
                loaded = true;
                setTimeout(function () {
                    next && next(false)
                }, 0)
            }
        };
        head.appendChild(style)
    };

    /**
     * 获取当前鼠标轨迹
     * @param event 事件
     * @returns {{x: number, y: number}}
     */
    var getMouseTrack = function (event, eventType, startTime) {
        let startX, startY;
        if (event.pageX) {
            startX = event.pageX;
            startY = event.pageY;
        }
        let targetTouches;
        if (event.changedTouches) {
            // 抬起事件
            targetTouches = event.changedTouches;
        } else if (event.targetTouches) {
            // pc 按下事件
            targetTouches = event.targetTouches;
        } else if (event.originalEvent && event.originalEvent.targetTouches) {
            // 鼠标触摸事件
            targetTouches = event.originalEvent.targetTouches;
        }
        if (!startX && targetTouches[0].pageX) {
            startX = targetTouches[0].pageX;
            startY = targetTouches[0].pageY;
        }
        if (!startX && targetTouches[0].clientX) {
            startX = targetTouches[0].clientX;
            startY = targetTouches[0].clientY;
        }
        if (startX && startY) {
            startX = Math.round(startX);
            startY = Math.round(startY);
        }
        return {
            x: startX,
            y: startY,
            e: eventType,
            t: (new Date().getTime() - startTime.getTime())
        }
    }
    if (window.SMSVerifyConfig.TENANT_ID === undefined) {
        alert("请设置租户ID");
    }

    loadCss(window.SMSVerifyConfig.captchaCssPath, function () {
    });
    loadScript(window.SMSVerifyConfig.captchaJsPath, true, function () {

        // 缓存
        wasm_bindgen(window.SMSVerifyConfig.captchaWasmPath).then(function () {
            // 滑块验证码
            const SliderCaptcha = function (_element, _opt) {
                this.$element = _element,
                    this.defaults = {
                        serverUrl: 'http://localhost:8080',
                        tenantId: window.SMSVerifyConfig.TENANT_ID,
                        mode: 'embed',	// 触发式float，嵌入式embed，弹出式popup
                        explain: '向右滑动完成验证',
                        vSpace: 0,	//间隔
                        imgSize: {
                            width: '319px',
                            height: '195px',
                        },
                        blockSize: {
                            width: '59px',
                            height: '195px',
                        },
                        barSize: {
                            width: '319px',
                            height: '40px',
                        },
                        circleRadius: '0px',
                        ready: function () {
                        },
                        success: function (captchaId, authCode) {
                        },
                        error: function (msg) {
                        }

                    },
                    this.options = $.extend({}, this.defaults, _opt)
            }
            // 定义 滑块验证码 的方法
            SliderCaptcha.prototype = {

                init: function () {
                    var _this = this;

                    // 初始化Doc
                    this.loadDocument();
                    // 刷新验证码
                    this.refresh();
                    this.options.ready();

                    this.$element[0].onselectstart = document.body.ondrag = function () {
                        return false;
                    };

                    if (this.options.mode == 'float') {
                        this.$element.on('mouseover', function (e) {
                            _this.showImg();
                        });

                        this.$element.on('mouseout', function (e) {
                            _this.hideImg();
                        });


                        this.htmlDoms.out_panel.on('mouseover', function (e) {
                            _this.showImg();
                        });

                        this.htmlDoms.out_panel.on('mouseout', function (e) {
                            _this.hideImg();
                        });
                    }

                    //按下
                    this.htmlDoms.move_block.on('touchstart', function (e) {
                        _this.start(e);
                    });

                    this.htmlDoms.move_block.on('mousedown', function (e) {
                        _this.start(e);
                    });

                    //拖动
                    window.addEventListener("touchmove", function (e) {
                        _this.move(e);
                    });


                    window.addEventListener("mousemove", function (e) {
                        _this.move(e);
                    });

                    //鼠标松开
                    window.addEventListener("touchend", function (e) {
                        _this.end(e);
                    });
                    window.addEventListener("mouseup", function (e) {
                        _this.end(e);
                    });

                    //刷新
                    _this.$element.find('.verify-refresh').on('click', function () {
                        _this.refresh();
                    });
                },

                // 初始化
                loadDialog: function () {
                    var _this = this;
                    var staticTimestamp = ((new Date).getTime() / 36e5).toFixed(0);
                    var id = "captcha-" + staticTimestamp;
                    this.id = id;
                    var template = '<div id="' + id + '" class="open-yundun-model-bg"style="display:none;z-index:1000"><div class=" open-yundun-model open-yundun-model-350 fade show"style="display: block;"><div class="open-yundun-model-dialog open-yundun-model-dialog-centered"><div class="open-yundun-model-content"><div class="open-yundun-model-header"><h1 class="open-yundun-model-title fs-6">请完成安全验证</h1><span class="btn-close"><i class="iconfont icon-close"></i></span></div><div class="open-yundun-model-body"style="text-align: center;"></div></div></div></div></div>';
                    this.$element.before(template);
                    var isFirst = true;
                    this.$element.click(function () {
                        $("#" + id).show();
                        if (!isFirst) {
                            _this.refresh();
                        }
                        isFirst = false;

                    });
                    this.$element = $("#" + id).find('.open-yundun-model-body');

                    $("#" + id).find('.btn-close').click(function () {
                        $("#" + id).hide();
                    });
                },

                // 初始化Doc
                loadDocument: function () {

                    this.captchaId = ""; //
                    this.status = false;	//鼠标状态
                    this.isEnd = false;		// 滑动验证是否完成
                    this.setSize = this.resetSize(this);	// 重新设置宽度高度
                    this.plusWidth = 0;
                    this.plusHeight = 0;
                    var panelHtml = '';
                    var tmpHtml = '';
                    this.lengthPercent = (parseInt(this.setSize.img_width) - parseInt(this.setSize.block_width) - parseInt(this.setSize.circle_radius) - parseInt(this.setSize.circle_radius) * 0.8) / (parseInt(this.setSize.img_width) - parseInt(this.setSize.bar_height));

                    panelHtml += '<div class="verify-img-out"><div class="verify-img-panel"><div class="verify-refresh" style="z-index:0"><i class="iconfont icon-refresh"></i></div><canvas  class="verify-img-canvas" width="' + this.setSize.img_width + '" height="' + this.setSize.img_height + '"></canvas></div></div>';

                    this.plusWidth = parseInt(this.setSize.block_width) + parseInt(this.setSize.circle_radius) * 2 - parseInt(this.setSize.circle_radius) * 0.2;
                    this.plusHeight = parseInt(this.setSize.block_height) + parseInt(this.setSize.circle_radius) * 2 - parseInt(this.setSize.circle_radius) * 0.2;

                    tmpHtml = '<canvas class="verify-sub-block"  width="' + this.plusWidth + '" height="' + this.plusHeight + '" style="left:0; position:absolute;" ></canvas>';

                    // 滑块
                    panelHtml += tmpHtml + '<div class="verify-bar-area"><span  class="verify-msg">' + this.options.explain + '</span><div class="verify-left-bar"><span  class="verify-msg"></span><div  class="verify-move-block"><i  class="verify-icon iconfont icon-right"></i></div></div></div>';
                    if (this.options.mode == 'popup') {
                        this.loadDialog();
                    }

                    this.$element.append(panelHtml);

                    this.htmlDoms = {
                        sub_block: this.$element.find('.verify-sub-block'),
                        out_panel: this.$element.find('.verify-img-out'),
                        img_panel: this.$element.find('.verify-img-panel'),
                        img_canvas: this.$element.find('.verify-img-canvas'),
                        bar_area: this.$element.find('.verify-bar-area'),
                        move_block: this.$element.find('.verify-move-block'),
                        left_bar: this.$element.find('.verify-left-bar'),
                        msg: this.$element.find('.verify-msg'),
                        icon: this.$element.find('.verify-icon'),
                        refresh: this.$element.find('.verify-refresh')
                    };


                    this.$element.css('position', 'relative');
                    if (this.options.mode == 'float') {
                        this.htmlDoms.out_panel.css({ 'display': 'none', 'position': 'absolute', 'bottom': '42px' });
                        this.htmlDoms.sub_block.css({ 'display': 'none' });
                    } else {
                        this.htmlDoms.out_panel.css({ 'position': 'relative' });
                    }

                    this.htmlDoms.out_panel.css('height', parseInt(this.setSize.img_height) + this.options.vSpace + 'px');
                    this.htmlDoms.img_panel.css({ 'width': this.setSize.img_width, 'height': this.setSize.img_height });
                    this.htmlDoms.bar_area.css({
                        'width': this.setSize.bar_width,
                        'height': this.setSize.bar_height,
                        'line-height': this.setSize.bar_height
                    });
                    this.htmlDoms.move_block.css({ 'width': this.setSize.bar_height, 'height': this.setSize.bar_height });
                    this.htmlDoms.left_bar.css({ 'width': this.setSize.bar_height, 'height': this.setSize.bar_height });

                    this.randSet();
                },

                drawImg: function (obj, bgImg, blockImg) {

                    // this.htmlDoms.sub_block.css('background-color', 'red');

                    var bgImgCanvas = this.htmlDoms.img_canvas[0];
                    if (bgImgCanvas) {
                        var bgImgCtx = bgImgCanvas.getContext("2d");
                        bgImgCtx.drawImage(bgImg, 0, 0, parseInt(this.setSize.img_width), parseInt(this.setSize.img_height));
                    }

                    var blockImgCanvas = this.htmlDoms.sub_block[0];
                    if (blockImgCanvas) {
                        var blockImgCtx = blockImgCanvas.getContext("2d");
                        blockImgCtx.clearRect(0, 0, parseInt(this.setSize.block_width), parseInt(this.setSize.block_height));
                        blockImgCtx.drawImage(blockImg, 0, 0, parseInt(this.setSize.block_width), parseInt(this.setSize.block_height));
                        blockImgCtx.save();
                        blockImgCtx.globalCompositeOperation = "destination-atop";
                    }
                },

                //鼠标按下
                start: function (e) {
                    if (this.isEnd == false) {
                        this.startTime = new Date();
                        this.htmlDoms.msg.text('');
                        this.htmlDoms.move_block.css('background-color', '#337ab7');
                        this.htmlDoms.left_bar.css('border-color', '#337AB7');
                        this.htmlDoms.icon.css('color', '#fff');
                        e.stopPropagation();
                        this.status = true;
                    }
                },

                //鼠标移动
                move: function (e) {
                    if (this.startTime != null) {
                        // console.log(getMouseTrack(e, "move", this.startTime));
                    }
                    if (this.status && this.isEnd == false) {
                        if (this.options.mode == 'float') {
                            this.showImg();
                        }

                        if (!e.touches) {    //兼容移动端
                            var x = e.clientX;
                        } else {     //兼容PC端
                            var x = e.touches[0].pageX;
                        }
                        var bar_area_left = SliderCaptcha.prototype.getLeft(this.htmlDoms.bar_area[0]);
                        var move_block_left = x - bar_area_left; //小方块相对于父元素的left值


                        if (move_block_left >= (this.htmlDoms.bar_area[0].offsetWidth - parseInt(this.setSize.bar_height) + parseInt(parseInt(this.setSize.block_width) / 2) - 1)) {
                            move_block_left = (this.htmlDoms.bar_area[0].offsetWidth - parseInt(this.setSize.bar_height) + parseInt(parseInt(this.setSize.block_width) / 2) - 1);
                        }

                        if (move_block_left <= parseInt(parseInt(this.setSize.block_width) / 2)) {
                            move_block_left = parseInt(parseInt(this.setSize.block_width) / 2);
                        }


                        //拖动后小方块的left值
                        this.htmlDoms.move_block.css('left', move_block_left - parseInt(parseInt(this.setSize.block_width) / 2) + "px");
                        this.htmlDoms.left_bar.css('width', move_block_left - parseInt(parseInt(this.setSize.block_width) / 2) + "px");
                        this.htmlDoms.sub_block.css('left', (move_block_left - parseInt(parseInt(this.setSize.block_width) / 2)) * this.lengthPercent + "px");

                    }
                },

                //鼠标松开
                end: function (e) {

                    var _this = this;

                    if (this.startTime != null) {
                        console.log(getMouseTrack(e, "end", this.startTime));
                        this.startTime = null;
                    }

                    //判断是否重合
                    if (this.status && this.isEnd == false) {
                        console.log("滑行坐标 ==> " + parseInt(this.htmlDoms.sub_block.css('left')));

                        let bodyData = JSON.stringify({
                            "i": _this.captchaId,
                            "v": {
                                value: parseInt(_this.htmlDoms.sub_block.css('left')) + "",
                                img_w: parseInt(_this.options.imgSize.width),
                                img_h: parseInt(_this.options.imgSize.height),
                            },
                            "d": "dddddd"
                        });
                        wasm_bindgen.get_code(this.options.serverUrl, this.options.tenantId, bodyData).then(function (data) {
                            let dataObj = JSON.parse(data);
                            let success = dataObj.code == 200;
                            if (success) {
                                let code = dataObj.data.code;
                                _this.htmlDoms.move_block.css('background-color', '#5cb85c');
                                _this.htmlDoms.left_bar.css({ 'border-color': '#5cb85c', 'background-color': '#fff' });
                                _this.htmlDoms.icon.css('color', '#fff');
                                _this.htmlDoms.icon.removeClass('icon-right');
                                _this.htmlDoms.icon.addClass('icon-check');
                                _this.htmlDoms.refresh.hide();
                                _this.isEnd = true;
                                _this.options.success(_this.captchaId, code);
                            } else {
                                _this.htmlDoms.move_block.css('background-color', '#d9534f');
                                _this.htmlDoms.left_bar.css('border-color', '#d9534f');
                                _this.htmlDoms.icon.css('color', '#fff');
                                _this.htmlDoms.icon.removeClass('icon-right');
                                _this.htmlDoms.icon.addClass('icon-close');
                                setTimeout(function () {
                                    _this.refresh();
                                }, 400);

                                _this.options.error(this);
                            }
                        });

                        this.status = false;
                    }
                },

                //弹出式
                showImg: function () {
                    this.htmlDoms.out_panel.css({ 'display': 'block' });
                    this.htmlDoms.sub_block.css({ 'display': 'block' });
                },

                //固定式
                hideImg: function () {
                    this.htmlDoms.out_panel.css({ 'display': 'none' });
                    this.htmlDoms.sub_block.css({ 'display': 'none' });
                },


                resetSize: function (obj) {
                    var img_width, img_height, bar_width, bar_height, block_width, block_height, circle_radius;	//图片的宽度、高度，移动条的宽度、高度
                    var parentWidth = obj.$element.parent().width() || $(window).width();
                    var parentHeight = obj.$element.parent().height() || $(window).height();

                    if (obj.options.imgSize.width.indexOf('%') != -1) {
                        img_width = parseInt(obj.options.imgSize.width) / 100 * parentWidth + 'px';
                    } else {
                        img_width = obj.options.imgSize.width;
                    }

                    if (obj.options.imgSize.height.indexOf('%') != -1) {
                        img_height = parseInt(obj.options.imgSize.height) / 100 * parentHeight + 'px';
                    } else {
                        img_height = obj.options.imgSize.height;
                    }

                    if (obj.options.barSize.width.indexOf('%') != -1) {
                        bar_width = parseInt(obj.options.barSize.width) / 100 * parentWidth + 'px';
                    } else {
                        bar_width = obj.options.barSize.width;
                    }

                    if (obj.options.barSize.height.indexOf('%') != -1) {
                        bar_height = parseInt(obj.options.barSize.height) / 100 * parentHeight + 'px';
                    } else {
                        bar_height = obj.options.barSize.height;
                    }

                    if (obj.options.blockSize) {
                        if (obj.options.blockSize.width.indexOf('%') != -1) {
                            block_width = parseInt(obj.options.blockSize.width) / 100 * parentWidth + 'px';
                        } else {
                            block_width = obj.options.blockSize.width;
                        }


                        if (obj.options.blockSize.height.indexOf('%') != -1) {
                            block_height = parseInt(obj.options.blockSize.height) / 100 * parentHeight + 'px';
                        } else {
                            block_height = obj.options.blockSize.height;
                        }
                    }

                    if (obj.options.circleRadius) {
                        if (obj.options.circleRadius.indexOf('%') != -1) {
                            circle_radius = parseInt(obj.options.circleRadius) / 100 * parentHeight + 'px';
                        } else {
                            circle_radius = obj.options.circleRadius;
                        }
                    }

                    return {
                        img_width: img_width,
                        img_height: img_height,
                        bar_width: bar_width,
                        bar_height: bar_height,
                        block_width: block_width,
                        block_height: block_height,
                        circle_radius: circle_radius
                    };
                },

                //随机出生点位
                randSet: function () {
                    this.x = 0;
                    if (this.options.mode == 'float') {
                        this.htmlDoms.sub_block.css({ 'top': '-' + (parseInt(this.setSize.img_height) + this.options.vSpace + parseInt(this.setSize.circle_radius) + parseInt(this.setSize.circle_radius) * 0.8 - 1) + 'px' });
                    } else {
                        this.htmlDoms.sub_block.css({ 'top': 1 + 'px' });
                    }


                },

                //刷新
                refresh: function () {
                    var _this = this;
                    this.htmlDoms.refresh.show();
                    this.$element.find('.verify-msg:eq(1)').text('');
                    this.$element.find('.verify-msg:eq(1)').css('color', '#000');
                    this.htmlDoms.move_block.animate({ 'left': '0px' }, 'fast');
                    this.htmlDoms.left_bar.animate({ 'width': parseInt(this.setSize.bar_height) }, 'fast');
                    this.htmlDoms.left_bar.css({ 'border-color': '#ddd' });

                    this.htmlDoms.move_block.css('background-color', '#fff');
                    this.htmlDoms.icon.css('color', '#000');
                    this.htmlDoms.icon.removeClass('icon-close');
                    this.htmlDoms.icon.addClass('icon-right');
                    this.$element.find('.verify-msg:eq(0)').text(this.options.explain);

                    this.randSet();
                    var bgImg = new Image();
                    var blockImg = new Image();

                    wasm_bindgen.gen_captcha(this.options.serverUrl, this.options.tenantId, "2").then(function (data) {

                        let dataObj = JSON.parse(data);

                        if (dataObj.code !== 200) {
                            console.log(dataObj.message);
                            return;
                        }
                        let captchaData = wasm_bindgen.decrypt_captcha(_this.options.tenantId, dataObj.data);

                        let captchaDataObj = JSON.parse(captchaData);
                        bgImg.src = captchaDataObj.img;
                        blockImg.src = captchaDataObj.fImg;
                        _this.captchaId = captchaDataObj.captchaId;
                        // 加载完成开始绘制
                        $(bgImg).on('load', function (e) {
                            $(blockImg).on('load', function (e) {
                                _this.drawImg(_this, bgImg, blockImg);
                                _this.isEnd = false;
                                _this.htmlDoms.sub_block.css('left', "0px");
                            });
                        });
                    })

                    _this.isEnd = false;
                    _this.htmlDoms.sub_block.css('left', "0px");
                },

                //获取left值
                getLeft: function (node) {
                    var left = $(node).offset().left;
                    return left;
                }
            };

            //定义Points的构造函数
            var PointCaptcha = function (_element, _opt) {
                this.$element = _element,
                    this.defaults = {
                        serverUrl: 'http://localhost:8080',
                        tenantId: window.SMSVerifyConfig.TENANT_ID,
                        mode: 'embed',	// 触发式float，嵌入式embed，弹出式popup
                        defaultNum: 4,	//默认的文字数量
                        checkNum: 3,	//校对的文字数量
                        vSpace: 5,	//间隔
                        imgSize: {
                            width: '400px',
                            height: '200px',
                        },
                        barSize: {
                            width: '400px',
                            height: '40px',
                        },
                        ready: function () {
                        },
                        success: function (captchaId, authCode) {
                        },
                        error: function (msg) {
                        }
                    },
                    this.options = $.extend({}, this.defaults, _opt)
            };

            //定义PointCaptcha的方法
            PointCaptcha.prototype = {
                init: function () {

                    var _this = this;

                    //加载页面
                    _this.loadDom();

                    _this.refresh();
                    _this.options.ready();

                    this.$element[0].onselectstart = document.body.ondrag = function () {
                        return false;
                    };


                    if (this.options.mode == 'float') {
                        this.$element.on('mouseover', function (e) {
                            _this.showImg();
                        });

                        this.$element.on('mouseout', function (e) {
                            _this.hideImg();
                        });


                        this.htmlDoms.out_panel.on('mouseover', function (e) {
                            _this.showImg();
                        });

                        this.htmlDoms.out_panel.on('mouseout', function (e) {
                            _this.hideImg();
                        });
                    }


                    //点击事件比对
                    _this.$element.find('.verify-img-panel canvas').on('click', function (e) {

                        _this.checkPosArr.push(_this.getMousePos(this, e));

                        if (_this.num == _this.options.checkNum) {

                            _this.num = _this.createPoint(_this.getMousePos(this, e));
                            setTimeout(function () {
                                var flag = _this.comparePos(_this.fontPos, _this.checkPosArr);

                                if (flag == false) {	//验证失败

                                    _this.options.error(_this);
                                    _this.$element.find('.verify-bar-area').css({
                                        'color': '#d9534f',
                                        'border-color': '#d9534f'
                                    });
                                    _this.$element.find('.verify-msg').text('验证失败');

                                    setTimeout(function () {
                                        _this.$element.find('.verify-bar-area').css({
                                            'color': '#000',
                                            'border-color': '#ddd'
                                        });
                                        _this.refresh();
                                    }, 400);

                                } else {	//验证成功
                                    _this.$element.find('.verify-bar-area').css({
                                        'color': '#4cae4c',
                                        'border-color': '#5cb85c'
                                    });
                                    _this.$element.find('.verify-msg').text('验证成功');
                                    _this.$element.find('.verify-refresh').hide();
                                    _this.$element.find('.verify-img-panel').unbind('click');
                                    _this.options.success(_this);
                                }
                            }, 400);

                        }

                        if (_this.num < _this.options.checkNum) {
                            _this.num = _this.createPoint(_this.getMousePos(this, e));
                        }

                    });

                    //刷新
                    _this.$element.find('.verify-refresh').on('click', function () {
                        _this.refresh();
                    });

                },


                //加载页面
                loadDom: function () {

                    this.fontPos = [];	//选中的坐标信息
                    this.checkPosArr = [];	//用户点击的坐标
                    this.num = 1;	//点击的记数

                    var panelHtml = '';
                    var tmpHtml = '';

                    this.setSize = SliderCaptcha.prototype.resetSize(this);	//重新设置宽度高度

                    panelHtml += '<div class="verify-img-out"><div class="verify-img-panel"><div class="verify-refresh" style="z-index:3"><i class="iconfont icon-refresh"></i></div><canvas width="' + this.setSize.img_width + '" height="' + this.setSize.img_height + '"></canvas></div></div><div class="verify-bar-area"><span  class="verify-msg"></span></div>';

                    this.$element.append(panelHtml);


                    this.htmlDoms = {
                        out_panel: this.$element.find('.verify-img-out'),
                        img_panel: this.$element.find('.verify-img-panel'),
                        bar_area: this.$element.find('.verify-bar-area'),
                        msg: this.$element.find('.verify-msg'),
                    };

                    this.$element.css('position', 'relative');
                    if (this.options.mode == 'float') {
                        this.htmlDoms.out_panel.css({ 'display': 'none', 'position': 'absolute', 'bottom': '42px' });
                    } else {
                        this.htmlDoms.out_panel.css({ 'position': 'relative' });
                    }

                    this.htmlDoms.out_panel.css('height', parseInt(this.setSize.img_height) + this.options.vSpace + 'px');
                    this.htmlDoms.img_panel.css({
                        'width': this.setSize.img_width,
                        'height': this.setSize.img_height,
                        'background-size': this.setSize.img_width + ' ' + this.setSize.img_height,
                        'margin-bottom': this.options.vSpace + 'px'
                    });
                    this.htmlDoms.bar_area.css({
                        'width': this.options.barSize.width,
                        'height': this.setSize.bar_height,
                        'line-height': this.setSize.bar_height
                    });

                },

                //绘制合成的图片
                drawImg: function (obj, img, tips) {
                    //准备canvas环境
                    var canvas = this.$element.find('canvas')[0];
                    //var canvas=document.getElementById("myCanvas");
                    var ctx = canvas.getContext("2d");

                    // 绘制图片
                    ctx.drawImage(img, 0, 0, parseInt(this.setSize.img_width), parseInt(this.setSize.img_height));

                    this.htmlDoms.msg.text(tips);

                    return this.fontPos;
                },

                //获取坐标
                getMousePos: function (obj, event) {
                    var e = event || window.event;
                    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                    var x = e.clientX - ($(obj).offset().left - $(window).scrollLeft());
                    var y = e.clientY - ($(obj).offset().top - $(window).scrollTop());

                    return { 'x': x, 'y': y };
                },

                //递归去重
                getChars: function (fontStr, fontChars) {

                    var tmp_rand = parseInt(Math.floor(Math.random() * fontStr.length));
                    if (tmp_rand > 0) {
                        tmp_rand = tmp_rand - 1;
                    }

                    tmp_char = fontStr.charAt(tmp_rand);
                    if ($.inArray(tmp_char, fontChars) == -1) {
                        return tmp_char;
                    } else {
                        return PointCaptcha.prototype.getChars(fontStr, fontChars);
                    }
                },

                //洗牌数组
                shuffle: function (arr) {
                    var m = arr.length, i;
                    var tmpF;
                    while (m) {
                        i = (Math.random() * m--) >>> 0;
                        tmpF = arr[m];
                        arr[m] = arr[i];
                        arr[i] = tmpF;
                        //[arr[m], arr[i]] = [arr[i], arr[m]];	//低版本浏览器不支持此写法
                    }
                    return arr;
                },

                //创建坐标点
                createPoint: function (pos) {
                    this.htmlDoms.img_panel.append('<div class="point-area" style="background-color:#1abd6c;color:#fff;z-index:3;width:30px;height:30px;text-align:center;line-height:30px;border-radius: 50%;position:absolute;top:' + parseInt(pos.y - 10) + 'px;left:' + parseInt(pos.x - 10) + 'px;">' + this.num + '</div>');
                    return ++this.num;
                },

                //比对坐标点
                comparePos: function (fontPos, checkPosArr) {

                    var flag = true;
                    for (var i = 0; i < fontPos.length; i++) {
                        if (!(parseInt(checkPosArr[i].x) + 40 > fontPos[i].x && parseInt(checkPosArr[i].x) - 40 < fontPos[i].x && parseInt(checkPosArr[i].y) + 40 > fontPos[i].y && parseInt(checkPosArr[i].y) - 40 < fontPos[i].y)) {
                            flag = false;
                            break;
                        }
                    }

                    return flag;
                },

                //弹出式
                showImg: function () {
                    this.htmlDoms.out_panel.css({ 'display': 'block' });
                },

                //固定式
                hideImg: function () {
                    this.htmlDoms.out_panel.css({ 'display': 'none' });
                },

                //刷新
                refresh: function () {
                    var _this = this;
                    this.$element.find('.point-area').remove();
                    this.fontPos = [];
                    this.checkPosArr = [];
                    this.num = 1;
                    var img = new Image();

                    wasm_bindgen.gen_captcha(this.options.serverUrl, this.options.tenantId, "3").then(function (data) {
                        let dataObj = JSON.parse(data);
                        if (dataObj.code !== 200) {
                            console.log(dataObj.message);
                            return;
                        }

                        img.src = dataObj.data.img;
                        // 加载完成开始绘制
                        $(img).on('load', function (e) {
                            this.fontPos = _this.drawImg(_this, this, dataObj.data.tips);
                        });
                    });

                    _this.$element.find('.verify-bar-area').css({ 'color': '#000', 'border-color': '#ddd' });
                    _this.$element.find('.verify-msg').text('加载中...');
                    _this.$element.find('.verify-refresh').show();
                },

            };

            // 滑块验证码注册为jQuery插件
            $.fn.sliderCaptcha = function (options, callbacks) {
                const sliderCaptcha = new SliderCaptcha(this, options);
                sliderCaptcha.init();
            };

            // 定选验证码
            $.fn.pointCaptcha = function (options, callbacks) {
                const pointCaptcha = new PointCaptcha(this, options);
                pointCaptcha.init();
            };

            // 验证码初始化完成
            if (window.captchaInitCompleted !== undefined) {
                captchaInitCompleted();
            }

        });
    })

})();