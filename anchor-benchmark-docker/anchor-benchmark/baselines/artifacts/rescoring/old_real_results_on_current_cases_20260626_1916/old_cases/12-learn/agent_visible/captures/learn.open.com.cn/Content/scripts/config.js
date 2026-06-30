/// <reference path="../oes_components/echarts/echarts.all.js" />
require.config({
    baseUrl: '/Content/scripts/',
    waitSeconds: 600,
    urlArgs: 'ver=20240819',// + (new Date()).getTime(),
    //urlArgs:'',
    paths: {
        'jquery': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery/1.9.1/jquery.min',
        //jqueryui
        'jqueryui': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-ui/1.9.2-oes/ui/jquery-ui',
        //layer
        'layer': 'https://fedcdn.open.com.cn/fedcdn/vendor/layer/3.0.1-oes/src/layer',
        //跑马灯插件
        'jqueryMarqueePlugin': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-plugin-marquee/1.0.0/js/jquery-marquee-plugin',
        //handlebars
        'handlebars': 'https://fedcdn.open.com.cn/fedcdn/vendor/handlebars/4.0.2/handlebars.min',
        'jqueryPager': '../oes_components/jquery-pager-plugin/jquery.pager',
        //分页插件
        'pagination': '../oes_components/Mricode.Pagination/mricode.pagination',
        //局部加载插件
        'loading': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-ms-loading/1.0.0/loading',
        //试卷渲染插件
        'paperJs': '../oes_components/jquery-ms-paper/exampaper',
        //统考试卷渲染
        'ExamspaperJs': '../oes_components/jquery-ms-paper/exampaper-examination',
        //ztree
        //'ztree': '../oes_components/ztree/js/jquery.ztree.all-3.5',
        'ztree': 'https://fedcdn.open.com.cn/fedcdn/vendor/zTree/3.5.0-oes/js/jquery.ztree.all-3.5',
        'jquerycookie': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-cookie/1.4.1/jquery.cookie',
        //视频插件
        'videoJs': '../oes_components/video.js/dist/video-js/video.dev',
        //日期插件
        'datetimepicker': 'https://fedcdn.open.com.cn/fedcdn/vendor/smalot-bootstrap-datetimepicker-oes/2.3.4/js/bootstrap-datetimepicker.min',
        'language': 'https://fedcdn.open.com.cn/fedcdn/vendor/smalot-bootstrap-datetimepicker-oes/2.3.4/js/locales/bootstrap-datetimepicker.zh-CN',
        //日期插件datetimepicker4.7
        'bootstrapdatetimepicker': '../oes_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min',
        //日期格式化
        'moment': 'https://fedcdn.open.com.cn/fedcdn/vendor/moment/2.20.1/moment',
        //日期汉字
        'datezhcn': '../oes_components/moment/locale/zh-cn',
        //bootstrap下拉框
        'bootstrapDropdown': '../oes_components/bootstrap/js/dropdown',
        'bootstrapModal': '../oes_components/bootstrap/js/modal',
        'bootstrapPopover': '../oes_components/bootstrap/js/popover',
        'bootstrapTooltip': '../oes_components/bootstrap/js/tooltip',
        'bootstrapTransition': '../oes_components/bootstrap/js/transition',
        //弹出层控件
        'bootbox': 'https://fedcdn.open.com.cn/fedcdn/vendor/bootbox/4.4.0/bootbox',
        //富文本控件
        'ueditorConfig': '../oes_components/ueditor/ueditor.config',
        // 富文本公式插件
        'addKityFormulaDialog': '../oes_components/ueditor/kityformula-plugin/addKityFormulaDialog',
        'getKfContent': '../oes_components/ueditor/kityformula-plugin/getKfContent',
        'defaultFilterFix': '../oes_components/ueditor/kityformula-plugin/defaultFilterFix',
        'zeroClipboard': '../oes_components/ueditor/third-party/zeroclipboard/ZeroClipboard',
        'formdesign': '../oes_components/ueditor/formdesign/leipi.formdesign.v4',
        'ueditor': '../oes_components/ueditor/ueditor.all',
        //上传插件
        'webuploader': '../oes_components/webuploader/webuploader.min',
        // 星星插件
        'raty': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-raty/2.7.1/jquery.raty',
        //滚动条插件
        'slimScroll': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-slimscroll/1.3.8/jquery.slimscroll',
        //另一个滚动条插件
        'niceScroll': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-nicescroll/3.7.6/jquery.nicescroll.min',
        //分页插件
        'pager': '../oes_components/Mricode.Pagination/mricode.pagination',
        //jquery-browser插件
        'browser': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-browser/jquery.browser',
        //iframe高度自适应插件
        'iframeautoheight': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-iframe-auto-height/2.0.0/jquery-iframe-auto-height',
        //echart
        'echart': '../oes_components/echarts/dist/echarts',
        'echarts': '../oes_components/echarts/dist/echarts',//首页排名使用
        'liquidfill': '../oes_components/echarts/dist/echarts-liquidfill',//首页排名使用
        //圆圈进度
        'circle': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-circle-progress/1.1.2/circle-progress',
        //数字滚动
        'scrollJs': 'https://fedcdn.open.com.cn/fedcdn/vendor/scrollerjs-oes/1.0.0/scroller',
        //增强下拉菜单
        'selectPicker': 'https://fedcdn.open.com.cn/fedcdn/vendor/bootstrap-select/1.12.4/dist/js/bootstrap-select',
        //滑动菜单插件
        'menuslide': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-ms-menuslide/1.0.0/menuslide',
        //datatable 表格插件
        'datatable': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-datatable/1.10.16/js/jquery.dataTables.min',
        //chart扩展插件
        'openchart': 'https://fedcdn.open.com.cn/fedcdn/vendor/jquery-ms-chart/1.0.0/openchart',
        //摄像插件支持IE9以上,需要https
        'webcam': '../oes_components/webcam/webcam.min',
        //videojs
        'video': '../oes_components/vjs-open-master/dist/video.min',
        'videoopen': '../oes_components/vjs-open-master/dist/videojs-open',
        'videoplugin': '../oes_components/vjs-open-master/src/plugin',
        //下拉搜索框
        'searchableSelect': 'https://fedcdn.open.com.cn/fedcdn/vendor/searchableSelect/0.0.1/jquery.searchableSelect',
        'jQueryRotate': '../oes_components/jQueryRotate',
        'lodash': 'https://fedcdn.open.com.cn/fedcdn/vendor/lodash/3.10.1/lodash.min',
        // 验证sdk
        'verifySDK': 'https://fedcdn.open.com.cn/fedcdn/lib/biz/SMSVerify/3.0.2/SMSVerify',
        // 验证软件安装
        'protocolcheck': 'areas/common/homework/protocolcheck',
        //OSS上传控件
        'plupload': 'https://fedcdn.open.com.cn/fedcdn/vendor/plupload/2.1.2/plupload.full.min',
        //COS上传
        'COS': 'https://fedcdn.open.com.cn/fedcdn/lib/biz/open-unioss/1.0.0/open-unioss',
        // 人脸识别
        'faceDetectionManage': './faceDetectionManage',
        // 省市县管理
        'cityManage': './cityManage',
        // 图片预览
        'viewer': '../oes_components/viewer/viewer.min',
        // 弹窗
        'dialogManage': './dialogManage',
    },
    map: {
        '*': {
            'css': '../oes_components/require-css/css'
        }
    },
    shim: {
        jqueryui: {
            deps: ['jquery']
        },
        jQueryRotate: {
            deps: ['jquery']
        },
        jqueryPager: {
            deps: ['jquery', 'css!../oes_components/jquery-pager-plugin/Pager.css']
        },
        pagination: {
            deps: ['jquery', 'css!../oes_components/Mricode.Pagination/mricode.pagination.css']
        },
        layer: {
            deps: ['jquery', 'css!../oes_components/layer/src/skin/default/layer.css']
        },
        loading: {
            deps: ['jquery', 'css!../oes_components/jquery-ms-loading/skin/loading.css']
        },
        paperJs: {
            deps: ['jquery', 'css!../oes_components/jquery-ms-paper/skin/paper.css']
        },
        ztree: {
            deps: ['jquery']
        },
        jquerycookie: {
            deps: ['jquery']
        },
        videoJs: {
            deps: ['css!../oes_components/video.js/dist/video-js/video-js.css'],
            init: function () {
                alert('video-init');
            }
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapModal: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapPopover: {
            deps: ['jquery', 'bootstrapTooltip']
        },
        bootstrapTransition: {
            deps: ['jquery']
        },
        datetimepicker: {
            deps: ['jquery', 'css!../oes_components/smalot-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css']
        },
        language: {
            deps: ['datetimepicker']
        },
        bootstrapdatetimepicker: {
            deps: ['jquery', 'moment', 'datezhcn', 'css!../oes_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min']
        },
        ueditor: {
            deps: ['ueditorConfig', 'utils/clipboard']
        },
        addKityFormulaDialog: {
            deps: ['ueditor']
        },
        getKfContent: {
            deps: ['addKityFormulaDialog']
        },
        defaultFilterFix: {
            deps: ['getKfContent', 'formdesign']
        },
        formdesign: {
            deps: ['ueditor']
        },
        jqueryMarqueePlugin: {
            deps: ['jquery', 'css!../oes_components/jquery-plugin-marquee/css/main.css']
        },
        webuploader: {
            deps: ['css!../oes_components/webuploader/webuploader.css']
        },
        raty: {
            deps: ['jquery', 'css!https://fedcdn.open.com.cn/fedcdn/vendor/jquery-raty/2.7.1/jquery.raty.css']
        },
        slimScroll: {
            deps: ['jquery']
        },
        niceScroll: {
            deps: ['jquery']
        },
        pager: {
            deps: ['jquery', 'css!../oes_components/Mricode.Pagination/mricode.pagination.css']
        },
        browser: {
            deps: ['jquery']
        },
        iframeautoheight: {
            deps: ['jquery', 'browser']
        },
        circle: {
            deps: ['jquery']
        },
        scrollJs: {
            deps: ['css!../oes_components/scrollerjs/scroller.css']
        },
        selectPicker: {
            deps: ['jquery', 'css!../oes_components/bootstrapselect/dist/css/bootstrap-select.min.css']
        },
        menuslide: {
            deps: ['jquery', 'css!../oes_components/jquery-ms-menuslide/skin/menuslide.css']
        },
        datatable: {
            deps: ['jquery', 'css!../oes_components/jquery-datatable/css/jquery.dataTables.min.css']
        },
        openchart: {
            deps: ['echart']
        },
        searchableSelect: {
            deps: ['jquery', 'css!../oes_components/searchableSelect/jquery.searchableSelect.css']
        },
        liquidfill: {
            deps: ['echarts']
        },
        viewer: {
            deps: ['css!../oes_components/viewer/viewer.min.css']
        },
    }
});

