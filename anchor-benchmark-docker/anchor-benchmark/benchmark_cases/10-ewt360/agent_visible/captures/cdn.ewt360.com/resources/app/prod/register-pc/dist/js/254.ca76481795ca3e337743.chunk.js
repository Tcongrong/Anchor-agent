"use strict";
(self["webpackChunkregister_pc"] = self["webpackChunkregister_pc"] || []).push([[254],{

/***/ 73259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ Encrypt)
/* harmony export */ });
/* unused harmony export Decrypt */
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76433);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94199);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20741);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);



var key = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().enc.Utf8.parse("20171109124536982017110912453698");
var iv = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().enc.Utf8.parse('2017110912453698'); //十六位十六进制数作为密钥偏移量
/**
 * @return {string}
 */
function Decrypt(word) {
  var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  var decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

/**
 * @return {string}
 */
function Encrypt(word) {
  var srcs = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().enc.Utf8.parse(word);
  var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().AES.encrypt(srcs, key, {
    iv: iv,
    mode: (crypto_js__WEBPACK_IMPORTED_MODULE_2___default().mode).CBC,
    padding: (crypto_js__WEBPACK_IMPORTED_MODULE_2___default().pad).Pkcs7
  });
  return encrypted.ciphertext.toString().toUpperCase();
}


/***/ }),

/***/ 61254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Login)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(12196);
// EXTERNAL MODULE: ../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(95893);
// EXTERNAL MODULE: ../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(85098);
// EXTERNAL MODULE: ../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(24380);
// EXTERNAL MODULE: ../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__(14953);
// EXTERNAL MODULE: ../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4195);
// EXTERNAL MODULE: ../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(84650);
// EXTERNAL MODULE: ../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(88401);
// EXTERNAL MODULE: ../node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(56285);
// EXTERNAL MODULE: ../node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(93340);
// EXTERNAL MODULE: ../node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(91917);
// EXTERNAL MODULE: ../node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(83874);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(87363);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: ../node_modules/.pnpm/antd@4.24.16_react-dom@17.0.2_react@17.0.2/node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(92379);
// EXTERNAL MODULE: ../node_modules/.pnpm/antd@4.24.16_react-dom@17.0.2_react@17.0.2/node_modules/antd/es/modal/index.js + 25 modules
var modal = __webpack_require__(85771);
// EXTERNAL MODULE: ../node_modules/.pnpm/antd@4.24.16_react-dom@17.0.2_react@17.0.2/node_modules/antd/es/input/index.js + 19 modules
var input = __webpack_require__(29465);
// EXTERNAL MODULE: ../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(76400);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(15484);
;// CONCATENATED MODULE: ./src/components/PasswordTip/index.jsx








function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }




var PasswordTip = /*#__PURE__*/function (_Component) {
  function PasswordTip() {
    (0,classCallCheck/* default */.Z)(this, PasswordTip);
    return _callSuper(this, PasswordTip, arguments);
  }
  (0,inherits/* default */.Z)(PasswordTip, _Component);
  return (0,createClass/* default */.Z)(PasswordTip, [{
    key: "render",
    value: function render() {
      var text = this.props.text;
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "password-extra"
      }, text);
    }
  }]);
}(external_React_.Component);
(0,defineProperty/* default */.Z)(PasswordTip, "defaultProps", {
  text: ''
});
(0,defineProperty/* default */.Z)(PasswordTip, "propTypes", {
  history: (prop_types_default()).object.isRequired
});
/* harmony default export */ const components_PasswordTip = ((0,react_router/* withRouter */.EN)(PasswordTip));
// EXTERNAL MODULE: ../node_modules/.pnpm/js-cookie@2.2.1/node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__(23095);
// EXTERNAL MODULE: ./src/common/cryptograph.js
var cryptograph = __webpack_require__(73259);
// EXTERNAL MODULE: ../node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(51511);
// EXTERNAL MODULE: ../node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(94199);
// EXTERNAL MODULE: ../node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(8318);
;// CONCATENATED MODULE: ./src/components/InitialPasswordModal/validate.js






// 因业务调整，所有规则从后端服务层获取，不再写死
// 2019-10-12
// const passwordReg = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%&])[0-9a-zA-Z!@#%&]{6,16}$/;
var validatePassword = function validatePassword(val) {
  var regexpText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (regexpText) {
    var reg = new RegExp(regexpText);
    return reg.test(val);
  }
  return true;
};

/**
 * 删除当前url中指定参数
 * @param names 数组或字符串
 * @returns {string}
 */
var delUrlParams = function delUrlParams(names) {
  if (typeof names == 'string') {
    names = [names];
  }
  var loca = window.location;
  var obj = {};
  var arr = loca.search.substr(1).split("&");
  //获取参数转换为object
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("=");
    obj[arr[i][0]] = arr[i][1];
  }
  ;
  //删除指定参数
  for (var i = 0; i < names.length; i++) {
    delete obj[names[i]];
  }
  //重新拼接url
  var url = loca.origin + loca.pathname + "?" + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
  return url;
};
// EXTERNAL MODULE: ./src/common/apis.js + 1 modules
var apis = __webpack_require__(1920);
;// CONCATENATED MODULE: ./src/components/InitialPasswordModal/index.jsx








function InitialPasswordModal_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }








var InitialPasswordModal = /*#__PURE__*/function (_React$Component) {
  function InitialPasswordModal(props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, InitialPasswordModal);
    _this = InitialPasswordModal_callSuper(this, InitialPasswordModal, [props]);
    (0,defineProperty/* default */.Z)(_this, "handleNext", function () {});
    (0,defineProperty/* default */.Z)(_this, "handleOldPasswordChange", function (e) {
      var value = e.target.value;
      _this.setState({
        oldPassword: value
      });
    });
    (0,defineProperty/* default */.Z)(_this, "handleValueChange", function (e) {
      var value = e.target.value;
      _this.setState({
        password: value
      });
    });
    (0,defineProperty/* default */.Z)(_this, "handleComfirmValueChange", function (e) {
      var value = e.target.value;
      _this.setState({
        confirmPassword: value
      });
    });
    (0,defineProperty/* default */.Z)(_this, "resetPassword", function () {
      var _this$props = _this.props,
        onSuccess = _this$props.onSuccess,
        account = _this$props.account;
      var _this$state = _this.state,
        oldPassword = _this$state.oldPassword,
        password = _this$state.password;
      if (!account) {
        _this.setState({
          errorMsg: '没有账号信息'
        });
      }
      if (_this.validate()) {
        return apis/* updatePassword */.gQ({
          data: {
            account: account,
            oldPassword: (0,cryptograph/* Encrypt */.Q)(oldPassword),
            newPassword: (0,cryptograph/* Encrypt */.Q)(password)
          }
        }).then(function (res) {
          debugger;
          if (res.code === '200') {
            message/* default */.ZP.success('修改成功~');
            onSuccess();
          } else {
            _this.setState({
              errorMsg: res.msg
            });
          }
        }).catch(function (_ref) {
          var _ref$response = _ref.response,
            response = _ref$response === void 0 ? {} : _ref$response;
          var _ref2 = response || {},
            _ref2$data = _ref2.data,
            data = _ref2$data === void 0 ? {} : _ref2$data;
          var _data$msg = data.msg,
            msg = _data$msg === void 0 ? '未知错误' : _data$msg;
          _this.setState({
            errorMsg: msg
          });
        });
      }
    });
    (0,defineProperty/* default */.Z)(_this, "validate", function () {
      var _this$state2 = _this.state,
        oldPassword = _this$state2.oldPassword,
        password = _this$state2.password,
        confirmPassword = _this$state2.confirmPassword,
        regexpText = _this$state2.regexpText,
        messageText = _this$state2.messageText;
      var msg = '';
      if (!oldPassword) {
        msg = '请填写原密码';
      } else if (!password) {
        msg = '请填写正确的密码';
      } else if (!confirmPassword) {
        msg = '请再次填写密码';
      } else if (!validatePassword(password, regexpText)) {
        msg = messageText;
      } else if (password !== confirmPassword) {
        msg = '两次密码不一致';
      }
      _this.setState({
        errorMsg: msg
      });
      return !msg;
    });
    (0,defineProperty/* default */.Z)(_this, "handleClose", function () {
      var onCancel = _this.props.onCancel;
      onCancel();
    });
    _this.state = {
      text: '',
      regexpText: '',
      messageText: '',
      oldPassword: '',
      password: '',
      confirmPassword: '',
      errorMsg: ''
    };
    return _this;
  }
  (0,inherits/* default */.Z)(InitialPasswordModal, _React$Component);
  return (0,createClass/* default */.Z)(InitialPasswordModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      apis/* getPasswordRule */.Rc().then(function (res) {
        var _res$data = res.data,
          regexp = _res$data.regexp,
          tips = _res$data.tips,
          toast = _res$data.toast;
        _this2.setState({
          text: tips,
          regexpText: regexp,
          messageText: toast
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
        text = _this$state3.text,
        errorMsg = _this$state3.errorMsg;
      return /*#__PURE__*/external_React_default().createElement(modal/* default */.Z, {
        className: "initial-modal",
        maskClosable: false,
        width: 350,
        visible: this.props.visible,
        onCancel: this.handleClose,
        footer: /*#__PURE__*/external_React_default().createElement("div", {
          className: "initial-button",
          onClick: this.resetPassword
        }, "\u786E\u5B9A\u4FEE\u6539")
      }, /*#__PURE__*/external_React_default().createElement("div", null, /*#__PURE__*/external_React_default().createElement("p", {
        className: "tip-title"
      }, "\u4FEE\u6539\u5BC6\u7801"), /*#__PURE__*/external_React_default().createElement("p", {
        className: "tip-small-title"
      }, "\u4E3A\u4E86\u8D26\u53F7\u5B89\u5168\uFF0C\u8BF7\u4FEE\u6539\u521D\u59CB\u5BC6\u7801"), /*#__PURE__*/external_React_default().createElement("p", {
        className: "tip-msg"
      }, errorMsg)), /*#__PURE__*/external_React_default().createElement("div", {
        className: "find-password-content "
      }, /*#__PURE__*/external_React_default().createElement(input/* default */.Z, {
        className: "initial-input",
        type: "password",
        onChange: this.handleOldPasswordChange,
        placeholder: "\u8F93\u5165\u521D\u59CB\u5BC6\u7801"
      }), /*#__PURE__*/external_React_default().createElement(input/* default */.Z, {
        className: "initial-input",
        type: "password",
        onChange: this.handleValueChange,
        placeholder: "\u8F93\u5165\u65B0\u5BC6\u7801"
      }), /*#__PURE__*/external_React_default().createElement(input/* default */.Z, {
        className: "initial-input",
        type: "password",
        onChange: this.handleComfirmValueChange,
        placeholder: "\u518D\u6B21\u8F93\u5165\u5BC6\u7801"
      }), /*#__PURE__*/external_React_default().createElement(components_PasswordTip, null), !!text && /*#__PURE__*/external_React_default().createElement(components_PasswordTip, {
        text: text
      })));
    }
  }]);
}((external_React_default()).Component);

// EXTERNAL MODULE: ./src/common/util.js
var util = __webpack_require__(9640);
// EXTERNAL MODULE: ../../packages/ewt-login/src/Login/index.ts + 31 modules
var src_Login = __webpack_require__(48498);
;// CONCATENATED MODULE: ./src/img/login-slogan.png
/* harmony default export */ const login_slogan = (__webpack_require__.p + "img/login-slogan.66fd10c.png");
// EXTERNAL MODULE: ./src/utils/quickTrack.config.ts
var quickTrack_config = __webpack_require__(13458);
;// CONCATENATED MODULE: ./src/routes/Login/index.jsx












function Login_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e)); }





// import MstLogin from '@ewt360-biz-fe/login';




message/* default */.ZP.config({
  top: 400
});
var Login = /*#__PURE__*/function (_Component) {
  function Login() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Login);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = Login_callSuper(this, Login, [].concat(args));
    (0,defineProperty/* default */.Z)(_this, "state", {
      userName: '',
      visible: false
    });
    (0,defineProperty/* default */.Z)(_this, "componentDidMount", function () {
      var _getQueryByUrlSearch = (0,util/* getQueryByUrlSearch */.z7)(_this.props.location.search),
        _getQueryByUrlSearch$ = _getQueryByUrlSearch.initial,
        initial = _getQueryByUrlSearch$ === void 0 ? false : _getQueryByUrlSearch$,
        _getQueryByUrlSearch$2 = _getQueryByUrlSearch.account,
        account = _getQueryByUrlSearch$2 === void 0 ? '' : _getQueryByUrlSearch$2;
      if (initial) {
        _this.setState({
          visible: true,
          userName: account || ''
        });
        return;
      }
      try {
        (0,quickTrack_config/* pageTrack */.El)({
          eventCode: "ewt_pc_base_personalcenter_login_view",
          pageCode: 'ewt_pc_base_personalcenter_login_view',
          config: {
            page_title: 'web登录',
            page_type: 'web'
          }
        });
      } catch (_unused) {}
    });
    (0,defineProperty/* default */.Z)(_this, "handleInitialCancel", function () {
      _this.setState({
        visible: false
      });
    });
    (0,defineProperty/* default */.Z)(_this, "handleInitialSuccess", function () {
      message/* default */.ZP.success('修改成功！');
      var history = _this.props.history;
      _this.setState({
        visible: false
      });
      history.replace({
        pathname: '/login'
      });
    });
    return _this;
  }
  (0,inherits/* default */.Z)(Login, _Component);
  return (0,createClass/* default */.Z)(Login, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
        visible = _this$state.visible,
        userName = _this$state.userName;
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "login--wrapper"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "common--content"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "login--slogan"
      }, /*#__PURE__*/external_React_default().createElement("img", {
        src: login_slogan,
        alt: ""
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: "login--box"
      }, /*#__PURE__*/external_React_default().createElement(src_Login/* MstLoginComp */.wi, {
        pageType: "loginPage"
      }), /*#__PURE__*/external_React_default().createElement("div", {
        id: "captchaWrapper"
      }))), /*#__PURE__*/external_React_default().createElement(InitialPasswordModal, {
        visible: visible,
        onCancel: this.handleInitialCancel,
        onSuccess: this.handleInitialSuccess,
        account: userName
      }));
    }
  }]);
}(external_React_.Component);


/***/ })

}]);