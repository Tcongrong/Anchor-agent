/**
 * 站长相关：苏州互方得信息科技有限公司
 * @date 2019-09-21
 * @date 2020-03-03
 * @date 2020-07-03
 * @date 2020-11-22
 * @date 2021-04-26
 * @url 发现报告 https://www.fxbaogao.com/
 * @description 发现报告SEO专用版本
 */

function zzReady() {
  var host = String(window.location.host);
  var search = window.location.search || '';
  var curProtocol = window.location.protocol.split(':')[0];

  window.HFD_ZZPC_LOADED = true;

  if (search.indexOf('nozz=1') !== -1) {
    return;
  }

  function getUser() {
    var user = localStorage.getItem('user');
    try {
      user = JSON.parse(user);
      if (!user || !user.id) {
        return null;
      }
      if (!user.token && user.accessToken) {
        user.token = user.accessToken;
      }
      if (!user.name && user.userName) {
        user.name = user.userName;
      }
      return user;
    } catch (e) {
      return null;
    }
    return null;
  }

  function findByTag0(name) {
    var s = document.getElementsByTagName(name);
    return s && s.length ? s : [0];
  }

  function insertScript(sdom) {
    var s =
      findByTag0('script')[0] ||
      findByTag0('style')[0] ||
      findByTag0('link')[0];
    if (!s) {
      return console.error('God Page!');
    }
    s.parentNode.insertBefore(sdom, s);
  }
  // 内联 JavaScript 代码
  function innerScript(codes, type) {
    var sct = document.createElement('script');
    sct.type = type || 'text/javascript';
    try {
      sct.appendChild(codes);
    } catch (e) {
      // ie
      sct.text = codes;
    }
    document.body.appendChild(sct);
  }
  // 百度搜索资源自动推送
  function baiduSEO() {
    var sct = document.createElement('script');
    if (curProtocol === 'https') {
      sct.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
      sct.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    insertScript(sct);
  }
  // 百度站长统计
  function bdhmFxbaogao(uuid) {
    window._hmt = window._hmt || [];

    var sct = document.createElement('script');
    if (curProtocol === 'https') {
      sct.src = 'https://hm.baidu.com/hm.js?' + uuid;
    } else {
      sct.src = 'http://hm.baidu.com/hm.js?' + uuid;
    }
    insertScript(sct);
  }

  function moorKF() {
    var user = getUser();
    if (user) {
      window.qimoClientId = {
        userId: user.id,
        nickName: user.name,
        customField: {
          用户ID: user.id,
          用户名称: user.name,
          手机: user.mobile || '-',
          标准VIP: user.bVipOld || '-',
          高级VIP: user.vipOld || '-',
          报告豆余额: String(user.downloadBeans || 0),
        },
      };
    }

    var sct = document.createElement('script');
    sct.src =
      'https://ykf-webchat.7moor.com/javascripts/7moorInit.js?accessId=46342b60-90e7-11e9-8076-231cf970360a&autoShow=true&language=ZHCN';
    sct.async = true;
    sct.charset = 'UTF-8';

    insertScript(sct);
  }

  // IP环境
  if (/\d+\.\d+\.\d+\.\d+/.test(host)) {
    return;
  }
  // 本地开发环境
  if (host.indexOf('localhost') !== -1) {
    return;
  }
  // 测试环境、预发布环境
  if (/\.(test|release)\./gi.test(host)) {
    return;
  }
  if (!window.isNoBDSEO && host.indexOf('v2') === -1) {
    baiduSEO();
  }
  if (
    !window.isNoBDZZ &&
    ['fxbaogao.com', 'www.fxbaogao.com'].indexOf(host) !== -1
  ) {
    bdhmFxbaogao('589fe1fd93299981d481b553eaf629f8');
  }
  // 8月8日下线
  // var s64 = 0;
  // var t64 = setInterval(() => {
  //   s64 += 1;
  //   if (s64 > 30) {
  //     clearInterval(t64);
  //     return;
  //   }
  //   try {
  //     var links = document.querySelector('.style_tryList__214K9');
  //     if (!links || !links.textContent) {
  //       links = document.querySelector('.style_tryList__OOLjY');
  //     }
  //     if (!links || !links.textContent) {
  //       return;
  //     }
  //     if (links.textContent.indexOf('科创者大会') !== -1) {
  //       return;
  //     }
  //     links.innerHTML = [
  //       links.innerHTML,
  //       '<a target="_blank" href="/security-tpw?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FO8vuAw3J4nbP758ZqVjq_Q" style="background: linear-gradient(45deg, rgba(0,34,113,.32), rgba(0,34,113,.92));"><img src="https://static.fxbaogao.com/pub/fxbaogao-seo/link.png" height="12" style="margin: 0 2px 0 0;">科创者大会</a>',
  //     ].join('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, 1000);
  // TODO 解决 7moor 客服不可用的情况
  var s65 = 31;
  var t65 = setInterval(() => {
    s65 += 1;
    if (s65 > 30) {
      clearInterval(t65);
      return;
    }
    try {
      var $iframe = document.getElementsByClassName('_3vBICAyPjnX32tUaBZ7zbP');
      var $root = document.getElementsByClassName('_3WZqEk2-nArRBAkIdDyDch');
      if (!$iframe || !$iframe.length || !$root || !$root.length) {
        return;
      }
      clearInterval(t65);
      var tt = setTimeout(function() {
        $root[0].innerHTML = $root[0].innerHTML.replace(
          $iframe[0].outerHTML,
          '<p style="position: absolute;top: 20px;">在线客服暂时不可用，请联系微信客服👇👇👇</p><img height="256" alt="微信客服" src="https://static.fxbaogao.com/pub/img/service/kf-02.jpg">',
        );
      }, 30000);
      $iframe[0].onload = function() {
        // TODO 这里貌似永远进不来，即使 iframe 加载正常
        clearTimeout(tt);
      };
    } catch (err) {
      console.error(err);
    }
  }, 1000);
  // try {
  //   var sct = document.createElement('script');
  //   sct.src = 'https://static.fxbaogao.com/js/font_1716782_6h271mwmz4d.js';
  //   insertScript(sct);
  // } catch (err) {
  //   // err
  // }
}
// 启动
try {
  if (window.__wxjs_environment !== 'miniprogram') {
    var zzTimer = setTimeout(zzReady, 3000);
    document.addEventListener('DOMContentLoaded', function() {
      if (window.HFD_ZZPC_LOADED) {
        // 已经在 setTimeout 中执行
        return;
      }
      clearTimeout(zzTimer);
      zzReady();
    });
  }
  window.ZZ_ERRORS = [];
  window.onerror = function name(...args) {
    window.ZZ_ERRORS.push(args);
  };
} catch (error) {
  console.error(error);
}


(function() {
  window.addEventListener('load', () => {
    try {
      const time = new Date();
      const year = time.getFullYear();
      const month = time.getMonth() + 1;
      const day = time.getDate();
      const hours = time.getHours();

      if (year < 2026 || month < 4 || day < 15) return;
      if (year > 2026 || month > 4 || day > 17) return;

      if (window.location.pathname !== '/') return;

      const list = document.querySelector('.tryList__app-containers-Fxbaogao-Home-SearchBanner-style-module__U7ich');
      list.style.width = "auto"
      const a = document.createElement('a');
      a.target = '_blanck';
      a.style.display = 'flex';
      a.style.alignItems = 'center';
      a.style.backgroundImage = 'linear-gradient(90deg,#5023b3,#8a5cc0)';
      a.href = 'https://www.huodongxing.com/event/6842643493500?coupon=8hOxT88';
      a.innerHTML =
        '<svg style="margin-right: 6px;"  t="1663904070055" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5655" width="16px" height="16px"><path d="M573.44 640a187.68 187.68 0 0 1-132.8-55.36L416 560l45.28-45.28 24.64 24.64a124.32 124.32 0 0 0 170.08 5.76l1.44-1.28a49.44 49.44 0 0 0 4-3.84l101.28-101.28a124.16 124.16 0 0 0 0-176l-1.92-1.92a124.16 124.16 0 0 0-176 0l-51.68 51.68a49.44 49.44 0 0 0-3.84 4l-20 24.96-49.92-40L480 276.32a108.16 108.16 0 0 1 8.64-9.28l51.68-51.68a188.16 188.16 0 0 1 266.72 0l1.92 1.92a188.16 188.16 0 0 1 0 266.72l-101.28 101.28a112 112 0 0 1-8.48 7.84 190.24 190.24 0 0 1-125.28 48z" fill="#ffffff" p-id="5656"></path><path d="M350.72 864a187.36 187.36 0 0 1-133.28-55.36l-1.92-1.92a188.16 188.16 0 0 1 0-266.72l101.28-101.28a112 112 0 0 1 8.48-7.84 188.32 188.32 0 0 1 258.08 7.84L608 464l-45.28 45.28-24.64-24.64A124.32 124.32 0 0 0 368 478.88l-1.44 1.28a49.44 49.44 0 0 0-4 3.84l-101.28 101.28a124.16 124.16 0 0 0 0 176l1.92 1.92a124.16 124.16 0 0 0 176 0l51.68-51.68a49.44 49.44 0 0 0 3.84-4l20-24.96 50.08 40-20.8 25.12a108.16 108.16 0 0 1-8.64 9.28l-51.68 51.68A187.36 187.36 0 0 1 350.72 864z" fill="#ffffff" p-id="5657"></path></svg>GTC2026 全球流量大会（深圳）';

      list.appendChild(a);
    } catch (err) {}
  });
})();
