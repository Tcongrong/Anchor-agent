/* eslint-disable */
// 判断浏览器是否支持 service worker
(function () {
  if ('serviceWorker' in navigator) {
    // load 事件完成之后才注册 service worker
    window.addEventListener('load', function () {
      // 注册 sw.jsinstall
      navigator.serviceWorker
        .register('/service-worker.js', { scope: '/' })
        .then(function (registration) {
          // console.log('success', registration.scope);
        })
        .catch(function (err) {});
      navigator.serviceWorker.oncontrollerchange = function (e) {
        // 内容已更新 需要用户重新加载内容
        //   console.log('内容更新了，请重新加载');
      };

      if (!navigator.onLine) {
        console.log('网络已断开，请检查网络环境...');

        window.addEventListener('online', function (event) {
          console.log('网络已连接, 请刷新...');
        });
      }
    });

    let savePrompt = null;
    let explorer = window.navigator.userAgent;
    const pwaButton = window.document.getElementById('pwa');
    const install = () => {
      if (savePrompt) {
        savePrompt.prompt();
        savePrompt.userChoice.then((result) => {
          if (result.outcome == 'dismissed') {
            // console.log("用户拒绝安装")
          } else if (result.outcome == 'accepted') {
            // console.log("用户接受了安装")
          }
        });
      }
    };
    try {
      pwaButton.addEventListener('click', install);
      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        if (explorer.indexOf('Chrome') >= 0 || explorer.indexOf('Edg') >= 0) {
          pwaButton.setAttribute('style', 'display: flex');
        }
        savePrompt = event;
      });
    } catch (e) {}

    window.addEventListener('appinstalled', (evt) => {
      // 安装成功之后回调
      // console.log("安装成功");
    });

    // 卸载serviceWorker
    // navigator.serviceWorker.ready.then(registration => {
    //   registration.unregister();
    // });
  }
})();
