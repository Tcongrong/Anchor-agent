/*((function () {
    var callbacks = [], timeLimit = 50, open = false;
    setInterval(loop, 1);
    return {
        addListener: function (fn) {
            callbacks.push(fn);
        },
        cancleListenr: function (fn) {
            callbacks = callbacks.filter(function (v) {
                return v !== fn;
            });
        }
    }
    function loop() {
        var startTime = new Date();
        debugger;
        if (new Date() - startTime > timeLimit) {
            if (!open) {
                callbacks.forEach(function (fn) {
                    fn.call(null);
                });
            }
            open = true;
            window.stop();
            alert('没事别老研究人家东西，做好自己，我们一起学习进步，一起做少先队员！');
            document.body.innerHTML="";
        } else {
            open = false;
        }
    }
})()).addListener(function () {
    window.location.reload();
});
*/