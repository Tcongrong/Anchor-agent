(function() {
    angular.module('login', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap', 'LocalStorageModule', 'iq_common'])

    function config($iq_configProvider, $stateProvider, $locationProvider,
        $urlRouterProvider, $ocLazyLoadProvider, localStorageServiceProvider) {

        $locationProvider.html5Mode(true);

        $iq_configProvider.config({
            version: iquicker_version
        })

        $ocLazyLoadProvider.config({
            version: iquicker_version,
            debug: false
        });

        localStorageServiceProvider.setPrefix('iquicker');
        localStorageServiceProvider.setStorageType('sessionStorage');

        $stateProvider
            .state('login', {
                url: "/",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/login.html"
                    }
                },
            	data: { pageTitle: '登录' }
            })
            .state('register', {
                url: "/register",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/register.html"
                    }
                },
            	data: { pageTitle: '注册' }
            })
            .state('register.step1', {
                url: "/step1/:mobile",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/register-process-step1.html"
                    }
                },
            	data: { pageTitle: '注册' }
            })
            .state('register.step2', {
                url: "/step2/:mobile/:vcode",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/register-process-step2.html"
                    }
                }
            })
            .state('register.step3', {
                url: "/step3/:mobile",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/register-process-step3.html"
                    }
                }
            })
            .state('wechat-select-org', {
            	url: "/wechat-select-org/:mobile",
            	views: {
                    "ui-index@": {
                        templateUrl: "templates/wechat-select-org.html"
                    }
                }
            })
            .state('wechat-binding-select',{
            	url: "/wechat-binding-select",
            	views: {
                    "ui-index@": {
                        templateUrl: "templates/wechat-binding-select.html"
                    }
                }
            })
            .state('wechat-register-binding',{
            	url: "/wechat-register-binding",
            	views: {
            		"ui-index@": {
                        templateUrl: "templates/wechat-register-binding.html"
                    }
            	}
            })
            .state('wechat-register-binding.wait',{
            	url: "/wait/:mobile",
            	views: {
            		"ui-index@": {
                        templateUrl: "templates/wechat-select-org.html"
                    }
            	}
            })
            .state('wechat-login-binding',{
            	url: "/wechat-login-binding",
            	views: {
            		"ui-index@": {
                        templateUrl: "templates/wechat-login-binding.html"
                    }
            	}
            })
            .state('wechat-login-binding.wait',{
            	url: "/wait/:mobile",
            	views: {
            		"ui-index@": {
                        templateUrl: "templates/wechat-select-org.html"
                    }
            	}
            })
            .state('register-or-login-join', {
                url: "/register-or-login-join/:yname/:orgcode",
                views: {
                    "ui-index@": {
                    	templateUrl: "templates/register-or-login-join.html"
                    }
                }
            })
            .state('register-join', {
                url: "/register-join/:yname/:orgname/:orgcode",
                views: {
                    "ui-index@": {
                    	templateUrl: "templates/register-join.html"
                    }
                },
            	data: { pageTitle: '注册并加入公司' }
            })
            .state('register-join.wait', {
                url: "/wait/:orgName",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/join-company-wait.html"
                    }
                }
            })
            .state('login-special',{
            	url: "/login-special/:yname/:orgname/:orgcode",
            	views: {
            		"ui-index@": {
                    	templateUrl: "templates/login-special.html"
                    }
            	},
            	data: { pageTitle: '登录并加入公司' }
            })
            .state('join-company-special',{
            	url: "/join-company-special/:mobile/:orgcode",
            	views: {
            		"ui-index@": {
                    	templateUrl: "templates/join-company-special.html"
                    }
            	},
            	data: { pageTitle: '加入公司' }
            })
            .state('join-company-special.wait',{
            	url: "/wait/:orgName",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/join-company-wait.html"
                    }
                }
            })
            .state('forget-password', {
                url: "/forget-password",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/forget-password.html"
                    }
                },
            	data: { pageTitle: '忘记密码' }
            })
            .state('forget-password.step1', {
                url: "/step1/:mobile",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/forget-password-step1.html"
                    }
                }
            })
            .state('forget-password.step2', {
                url: "/step2/:mobile/:vcode",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/forget-password-step2.html"
                    }
                }
            })
            .state('forget-password.step3', {
                url: "/step3",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/forget-password-step3.html"
                    }
                }
            })
            .state('create-company', {
                url: "/create-company/:mobile/:username",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/create-company.html"
                    }
                },
            	data: { pageTitle: '创建公司' }
            })
            .state('create-company.ok', {
                url: "/ok/:orgName",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/create-company-ok.html"
                    }
                }
            })
            .state('join-company', {
                url: "/jojn-company/:mobile/:username",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/join-company.html"
                    }
                },
            	data: { pageTitle: '加入公司' }
            })
            .state('join-company.wait', {
                url: "/wait/:orgName",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/join-company-wait.html"
                    }
                }
            })
            .state('join-or-create-company', {
                url: "/join-or-create-company/:mobile/:username",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/join-or-create-company.html"
                    }
                },
                data: { pageTitle: '加入或创建公司' }
            })
            .state('trial', {
                url: "/trial",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/login-trial.html"
                    }
                },
            	data: { pageTitle: 'iQuicker|在线体验|登录' }
            })
            .state('register.qingcloud', {
                url: "/qingcloud",
                views: {
                    "ui-index@": {
                        templateUrl: "templates/register-qingcloud.html"
                    }
                }
            })

        $urlRouterProvider.when("", "/");
    }
    config.$injector = ["$iq_configProvider", "$stateProvider", "$locationProvider",
        "$urlRouterProvider", "$ocLazyLoadProvider", "localStorageServiceProvider"
    ];

    angular.module('login').config(config).run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });

})();
