(function (window) {
    var uexp = new Date().getTime() + (1000 * 60 * 60 * 24 * 30);
    var domainName = "caixin.com";
    if (document.domain.indexOf("caixinglobal.com") > -1) {
        domainName = "caixinglobal.com";
    }else if(document.domain.indexOf("ccxe.com.cn") > -1) {
        domainName = "ccxe.com.cn";
    }

    function setCookie(name, value, expires) {
        var expdate = new Date();
        var argv = setCookie.arguments;
        var argc = setCookie.arguments.length;
        if(typeof expires == 'number'){
            expdate.setTime(expires);
        }else{
            if (!expires) {
                expires = 15768000;
            }
            expdate.setTime(uexp);
        }
        var path = (argc > 3) ? argv[3] : '/';
        var domain = (argc > 4) ? argv[4] : domainName;
        var secure = (argc > 5) ? argv[5] : false;
        if (expires != null) {
            document.cookie = name + "=" + escape(value) + ((expires == "setnull") ? "" : ("; expires=" + expdate.toGMTString()))
                +((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domainName ))
                + ((secure == true) ? "; secure=" : "");
        }
    }
    function delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
    }
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        }
    }

    function getCookieValue() {
        var guid = getCookie("GUID");
        if (guid != null) {
            return guid;
        }
        else {
            return "noCookie";
        }
    }

    function addFnToGlobal(name) {
        if(typeof window[name] !== 'function'){
            window[name]=eval(name);
        }
    }
    addFnToGlobal('setCookie');
    addFnToGlobal('delCookie');
    addFnToGlobal('getCookie');
    addFnToGlobal('getCookieValue');

    //cookie标记
    if(!getCookie('CX_COOKIE_TAG')){
        setCookie("CX_COOKIE_TAG", Date.now(), Date.now() + 1000 * 60 * 60 * 24 * 365);
    }

//获取当前地址的中的参数
    function getUrlParm(name) {
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var tmpURL = location.href;
        var results = regex.exec(tmpURL);
        if (results == null) {
            return "";
        }else {
            return results[1];
        }
    }
    var referrerData = {};
    var pageOpen = new Date();
    var GUID = Math.round(Math.random() * 2147483647);
    var title = document.title;
    var poin = new Date(pageOpen.getFullYear(), pageOpen.getMonth(), pageOpen.getDate(), 23, 59, 59);
    var pointime = poin.getTime();
    var Para_;
    var brower = new Array();
    var keyMap={
        about: "terms",
        alltheweb: "q",
        altavista: "q",
        aol: "query",
        ask: "q",
        baidu: "wd",
        caixin: "keyword",
        cnn: "query",
        earthlink: "q",
        excite: "qkw",
        gigablast: "q",
        google: "q",
        'google.com': "q",
        looksmart: "key",
        lycos: "query",
        mamma: "query",
        msn: "q",
        netscape: "query",
        search: "q",
        'search.live.com': "q",
        soso: "w",
        teoma: "q",
        virgilio: "qs",
        voila: "kw",
        yahoo: "p"
    }
    String.prototype.replaceAll = stringReplaceAll;
    function stringReplaceAll(AFindText, ARepText) {
        raRegExp = new RegExp(AFindText, "g");
        return this.replace(raRegExp, ARepText)
    }
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    function GetResident() {
        var filename = location.pathname;
        var cx_from = location.search;
        filename = filename.substr(filename.lastIndexOf("/") + 1);
        cx_from = GetQueryString("CX_FROM");
        if (filename.lastIndexOf('_') >= 0) {
            filename = filename.substr(0, filename.lastIndexOf("_"));
        } else {
            filename = filename.substr(0, filename.lastIndexOf("."));
        }
        if (cx_from == '' || cx_from == undefined || cx_from == null) {
            //获得来源
            var ref = '';
            if (document.referrer.length > 0) {
                ref = document.referrer;
            }
            try {
                if (ref.length == 0 && opener.location.href.length > 0) {
                    ref = opener.location.href;
                }
            } catch (e) {
            }
            if (ref.indexOf("360.cn") > -1) {
                cx_from = "360.cn";
            } else if (ref.indexOf("sh.qihoo.com") > -1) {
                cx_from = "sh.qihoo.com";
            }
        }
        if (getCookie("CX_FROM") == '' || getCookie("CX_FROM") == undefined || getCookie("CX_FROM") == null) {
            setCookie("ENTITY_ID", filename);
            setCookie("ENTITY_COUNT", 0);
            setCookie("CX_FROM", cx_from);
        } else {
            if (getCookie("ENTITY_ID") == filename) {
                setCookie("ENTITY_COUNT", parseInt(getCookie("ENTITY_COUNT")) + 1);
            } else {
                setCookie("ENTITY_ID", filename);
                setCookie("ENTITY_COUNT", 0);
                setCookie("CX_FROM", cx_from);
            }
        }
        //如果cxform为空则设置为浏览器关闭就失效。
        //var c = document.cookie.indexOf("CX_FROM"+"=");
        //if (c == -1) {
        //setCookie("CX_FROM",'cx_from',"setnull");
        //}
        //noCookie
        if (getCookieValue() == "noCookie") {
            setCookie("GUID", GUID);
            setCookie("T_GUID", pageOpen.getTime());
            setCookie("GID30", GUID);
            setCookie("lastTime", pageOpen.getTime());
            setCookie("firstTime", pageOpen.getTime());
            setCookie("point", pointime);
        }
        //30day
        else if ((getCookie("firstTime") * 1 + 1000 * 60 * 60 * 24 * 30) < pageOpen.getTime()) {
            setCookie("GUID", GUID);
            setCookie("T_GUID", pageOpen.getTime());
            setCookie("GID30", GUID);
            setCookie("lastTime", pageOpen.getTime());
            setCookie("firstTime", pageOpen.getTime());
            setCookie("point", pointime);
        }
        //  <30minute
        else if ((getCookie("lastTime") * 1 + 1000 * 60 * 30) > pageOpen.getTime()) {
            setCookie("lastTime", pageOpen.getTime());
            setCookie("firstTime", pageOpen.getTime());
            setCookie("point", pointime);
        } else {	// >30minute
            setCookie("GID30", GUID);
            setCookie("lastTime", pageOpen.getTime());
            setCookie("firstTime", pageOpen.getTime());
            setCookie("point", pointime);
        }
        if (typeof(getCookie("T_GUID")) == "undefined") {
            setCookie("T_GUID", pageOpen.getTime());
        }
    }
    function jsonToUrl(base, json) {
        var data, url;
        if (typeof base === "object") {
            data = base;
            url = 'https://apollo.caixin.com/count.gif';
        } else if (typeof base === "string") {
            data = json;
            url = base;
        }
        var params = [];
        for (var key in data) {
            params.push(key + '=' + encodeURIComponent(data[key]===undefined?'':data[key]))
        }
        params = params.join('&');
        if (url === '') {
            return params
        } else {
            return /\?/.test(url) ? (url + '&' + params) : (url + '?' + params)
        }
    }
    
    function getEntity(t) {
        if(typeof entity !== 'undefined' && entity[t]){
            return entity[t]
        }else{
            ''
        }
    }

    function addCookie(sName, sValue, iDay, domain) {
        var setDomain = domainName;
        var expdate = new Date();
        iDay && iDay !== 0 ? expdate.setDate(expdate.getDate() + iDay) : expdate.setTime(uexp);
        document.cookie = sName + '=' + sValue + '; path=/; domain=' + setDomain + '; EXPIRES=' + expdate.toGMTString();
    }
    (function(){
        var sourceDomain = [
            'baidu.com', 'google.com', 'so.com', 'sogou.com', 'sm.cn', 'facebook.com', 'twitter.com', 'linkedin.com', 'bing.com', 'caixin.com', 'mailchi.mp', 'flipboard.com'
        ];
        var referrer = document.referrer;
        var domainReg = /^https?:\/\/.*\.(\w+\.\w+)\//;
        var domainArr = referrer.match(domainReg);
        if (getUrlParm('originReferrer')) {
            addCookie('originReferrer', getUrlParm('originReferrer'), 1);
            return;
        }
        if (referrer && domainArr && domainArr[1] !== domainName) {
            if (sourceDomain.indexOf(domainArr[1]) > -1) {
                addCookie('originReferrer', domainArr[1].split('.')[0], 1)
            }
        } else if (referrer === '') {
            // addCookie('originReferrer', '', -1)
        } else if (referrer && domainArr && domainArr[1] === domainName) {
        }
        addCookie('BIS_CODE', '', -1)
    })()

    function GetResidentTime() {
        var pageClose = new Date();
        GetResident();
        try {
            var href = top.location.href;
        } catch (e) {
            var href = location.href;
        }
        if (href.indexOf("#") > 0) {
            href = href.substring(0, href.indexOf("#"));
        }
        var time_bam = 0;
        var curhref = location.href;
        if (curhref.indexOf("#") > 0) {
            curhref = curhref.substring(0, curhref.indexOf("#"));
        }
        if (title.indexOf("#") > 0) {
            title = title.substring(0, title.indexOf("#"));
        }
        var logLocation='中国';
        if(getCookie("FROM_CHINA")){
            logLocation=getCookie("FROM_CHINA") === 'true'?'中国':'海外'
        }
        var data = {
            GUID: getCookieValue("GUID"),
            GID30: getCookie("GID30"),
            TGUID: getCookie("T_GUID"),
            ENTITY_FROM: getCookie("CX_FROM"),
            ENTITY_COUNT: getCookie("ENTITY_COUNT"),
            cur: curhref.match(/[^\?]+/g)[0],
            title: title.replaceAll("'", " "),
            // urr: document.referrer.match(/[^\?]*/g)[0],
            urr: document.referrer,
            email: getCookie("SA_USER_UID"),
            keyWord: getKeyword(gethn(document.referrer)),
            st: time_bam,
            daye: pageClose.getTime() + '' +Math.round(Math.random() * 2147483647),
            pageurl: href,
            id:getEntity('id'),
            channel:getEntity('channel'),
            category:getEntity('category'),
            tags:getEntity('tags'),
            tagNames:getEntity('tagNames'),
            type:getEntity('type'),
            rootId:getEntity('rootId'),
            location:logLocation,
            originReferrer:getCookie('originReferrer')
        };
        if (domainName == "caixinglobal.com") {
            data.email = getCookie("CAIXINGLB_LOGIN_USID")
        }
        if (document.location.href.indexOf("cx_from") > 0) {
            data['CX_FROM'] = getUrlParm("cx_from");
        }
        if(getCookie('contract_id')&&getCookie('batch_id')){
            data['contract_id']=getCookie('contract_id');
            data['batch_id']=getCookie('batch_id')
        }

        //add attr
        if (typeof(entity) != "undefined" && typeof(entity.attr) != "undefined") {
            data['extNum2'] = entity.attr;
        } else if (typeof(attr) != "undefined") {
            data['extNum2'] = attr;
        }
        //new log start
        var newLogPage = "https://apollo.caixin.com/count.gif";
        var newLogUrl = jsonToUrl(newLogPage, data)
        if (!(typeof(vjp) == 'boolean' && vjp == true)) {
            var img = document.createElement("img");
            img.src = newLogUrl;
            img.style.display = "none";
            document.body.appendChild(img);
            //document.write("<img src='" + newLogUrl + "' style=display:none />");
        }
        window.statisticsAuthNewLogUrl = newLogUrl;
    }
    function LoadVoid() {
        return;
    }
    function getKeyword(url) {
        var hostname=getHostName(url);
        for (var i in keyMap) {
            if (hostname.indexOf(i) > -1) {
                return referrerData[keyMap[i]]||'';
            }
        }
        return "";
    }
    function gethn(url) {
        if (!url || url == "") return "";
        var para = url.match(/\?([^#]*)/);
        if(para){
            para[1].match(/[^\?=&]+=*[^&\?#]*/g).forEach(function(item){
                var arr=item.split('=');
                referrerData[arr[0]]=arr[1]
            })
        }
        return url.match(/[^\?#]+/)[0]
    }
    function getHostName(url) {
        var h = url.match(/:\/\/([^\/]+)/);
        return h ? h[1]:''
    }

    function $ajax(option){
        /**
         * option.url
         * option.type
         * option.success
         * option.error
         * option.data
         * */
        option = option || {}
        if(!option.url) return;
        option.type = option.type || 'GET'
        var data = option.data;
        var xhr=new XMLHttpRequest();
        if (option.corsCookies) {
            xhr.withCredentials = true;
        }
        xhr.open(option.type,option.url,true);
        if(data){
            if (typeof data === 'string') {
                //参数时字符串类型
                xhr.setRequestHeader(
                    'Content-type',
                    'application/x-www-form-urlencoded'
                );
            } else if (data instanceof FormData) {
                //参数是FormData时，不需要在请求头中设置数据格式
            } else if (typeof data === 'object') {
                //参数为对象
                xhr.setRequestHeader('Content-type', 'application/json');
                data = JSON.stringify(data);
            }
        }
        
        xhr.onreadystatechange=function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                var res=JSON.parse(xhr.responseText)
                option.success && option.success(res)
            }else{
                option.error && option.error()
            }
        }
        xhr.send(data);
    }

    GetResidentTime();

    $ajax({
        url:'https://file.caixin.com/api/getlocation',
        type:'GET',
        success:function(res){
            if(res){
                addCookie('FROM_CHINA',!!res.china,1)
            }
        }

    })
    var cx_bc_id = getCookie('cx_bc_id')
    var cx_uid = getCookie('SA_USER_UID') || getCookie("CAIXINGLB_LOGIN_USID")
    if((cx_bc_id != cx_uid) || (!getCookie('contract_id') && !getCookie('batch_id'))){
        var url = 'https://gateway.caixin.com/api/app-api/enterprise/findEnterpriseByParm';
        var type = 'GET';
        var data ;
        if (domainName == "caixinglobal.com"){
            url = 'https://u.caixinglobal.com/group/findEnterprise';
        }
        $ajax({
            url: url,
            type: type,
            data:data,
            corsCookies: true,
            success: function (res) {
                if (res.code == 0) {
                    var contract_id = [];
                    var batch_id = [];
                    res.data.forEach(function (item) {
                        contract_id.push(item.contract_id)
                        batch_id.push(item.batch_id)
                    })
                    addCookie('cx_bc_id', cx_uid,1)
                    addCookie('contract_id', contract_id.join(','), 1)
                    addCookie('batch_id', batch_id.join(','), 1)
                }
            }

        })
        



        // $.ajax({
        //     url:'https://gateway.caixin.com/api/app-api/enterprise/findEnterpriseByParm',
        //     type:'get',
        //     dataType: 'jsonp',
        //     // xhrFields: {withCredentials: true},
        //     success:function(res){
        //         if(res.code==0){
        //             var contract_id=[];
        //             var batch_id=[];
        //             res.data.forEach(function(item){
        //                 contract_id.push(item.contract_id)
        //                 batch_id.push(item.batch_id)
        //             })
        //             addCookie('contract_id',contract_id.join(','),1)
        //             addCookie('batch_id',batch_id.join(','),1)
        //         }
        //     }
        // })
    }

    window.GetResidentTime=GetResidentTime;

    try{
        if(getUrlParm('readAddIntegral')){
            $.ajax({
                url:'https://gateway.caixin.com/api/integral/userEvent/readAddIntegral',
                type:'post',
                contentType:'application/json;charset=utf-8',
                xhrFields:{
                    withCredentials: true
                },
                data:JSON.stringify({
                    readAddIntegral:getUrlParm('readAddIntegral'),
                    sharePlatform:getUrlParm('Sfrom'),
                    articleId:getUrlParm('articleId'),
                    system:getUrlParm('system'),
                    source:getUrlParm('cxw'),
                })
            })
        }
    }catch (e) {
        console.log(e);
    }

})(window);