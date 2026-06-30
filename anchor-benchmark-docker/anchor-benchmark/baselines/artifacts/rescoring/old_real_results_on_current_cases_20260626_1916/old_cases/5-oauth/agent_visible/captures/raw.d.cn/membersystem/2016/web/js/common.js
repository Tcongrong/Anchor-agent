"use strict";

$.fn.extend({
  animateCss: function animateCss(animationName, callback) {
    var animationEnd = function (el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    }(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);
      if (typeof callback === 'function') callback();
    });
    return this;
  }
});

function userAgmt(id) {
  /*var bId = '#' + id;*/
  $(document.body).append("\n  <div class=\"modal hidden\" id=\"uaModal\">\n    <div class=\"useragmt\">\n      <div class=\"panel\">\n        <div class=\"head\">\n          <p>\u5F53\u4E50\u7528\u6237\u534F\u8BAE</p>\n          <div class=\"close\">\n            <div class=\"icon cle\"></div>\n          </div>\n        </div>\n        <div class=\"content\"></div>\n        <div class=\"agree\">\n          <button>\u540C\u610F\u5E76\u7EE7\u7EED</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

  function isIe9() {
    return window.navigator.userAgent.indexOf('MSIE 9.0') >= 0;
  }

  function showUa(res) {
    $('#uaModal').removeClass('hidden');
    $('#uaModal .useragmt .panel').animateCss('slideInUp');
  }

  function hideUa() {
    if (isIe9()) {
      $('#uaModal').addClass('hidden');
      return;
    }

    $('#uaModal .useragmt .panel').animateCss('slideOutDown', function () {
      $('#uaModal').addClass('hidden');
    });
  }
  /*classify 1：当乐用户协议 2：隐私政策*/
  $('.dhlink').click(function () {
    var classify = $(this).data('type');
    fetch(`https://antiaddictionsdk.d.cn/uapp/getContent?bid=2&type=${classify}`)
    .then(res => res.json())
    .then(res => {
        const {title = '', content = ''} = res.data
        $('.modal').find('.head>p').text(title)
        $('#uaModal .content').html(content);
        showUa();
    });
  });
  $('#uaModal .agree button').click(hideUa);
  $('#uaModal .close').click(hideUa);
}

function getUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.decodeURIComponent(window.location.search.substr(1)).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}