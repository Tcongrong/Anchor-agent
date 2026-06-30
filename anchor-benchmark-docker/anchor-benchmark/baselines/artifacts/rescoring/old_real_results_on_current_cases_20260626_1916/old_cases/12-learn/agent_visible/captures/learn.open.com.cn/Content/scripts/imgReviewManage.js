// 图片预览
define(['jquery', 'utils/xhr', 'viewer'], function ($, xhr, Viewer) {


    function ImgViewer(opts) {
        this.opts = opts;

        // 创建结构
        this.createHtml();

        this.init();
    }

    // 创建结构
    ImgViewer.prototype.createHtml = function () {
        $('#img-box').remove();

        var imgs = this.opts.imgs;
        if (imgs.length == 0) {
            return;
        }
        var imgBox = $('<div id="img-box" style="display:none;"></div>')
        for (var i = 0; i < imgs.length; i++) {
            var item = imgs[i]
            var img = $('<img src="' + item + '">')
            imgBox.append(img);
        }

        $('body').append(imgBox);
    }

    ImgViewer.prototype.init = function () {
        var imBox = $('#img-box');

        // 显示图片预览
        var viewer = new Viewer(imBox[0], {
            //url: imBox.eq(0).attr('src'),
            inline: false,
            movable: true,
            zoomable: true,
            button: true,
            title: true,
            zIndex: 9999,
        })

        // 显示图片
        viewer.show();
        // 跳转到指定图片
        viewer.view(this.opts.index || 0);
    }

    return ImgViewer
})