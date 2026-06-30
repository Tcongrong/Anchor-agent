/**
  * jQuery loading plugin
  * Version 1.0
  * @requires jQuery v1.9.1 or later
  * Copyright (c) 2017-2019 Open
  * Data: 2017-7-7 
 */
; (function ($, undefined) {
    $.fn.loading = function (options) {
        var defaults = {
            size: 'small'
        }
        var opts = $.extend({}, defaults, options);
        var loadingClass = '', message = '';
        return this.each(function () {
            switch (opts.size) {
                case 'small': loadingClass = 'smallloading'; break;
                case 'medium': loadingClass = 'mediumloading'; break;
            }

            var $this = $(this);
            var loadingHtml = $('<div class="ms-loading ' + loadingClass + '"></div>');
            if (opts.message != undefined) {
                message = opts.message;
                loadingHtml.append('<p class="message">' + message + '</p>');
            }
            $this.append(loadingHtml);
        })
    };
    $.fn.closeLoading = function () {
        return this.each(function () {
            $(this).find('.ms-loading').remove();
        })
    }
})(jQuery);