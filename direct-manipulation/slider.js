(($) => {
    $.fn.slider = function (options) {
        const $this = this;

        let $current = null;
        let anchorX = 0;

        $this.addClass("slider").mousedown(function (event) {
            $current = $(this);
            anchorX = event.clientX - ($current.data('slider-position') || 0);
        });

        $(document).mousemove(event => {
            if ($current) {
                const currentPosition = $current.data('slider-position') || 0;
                const newPosition = event.clientX - anchorX;
                const newCss = ``

                $current.css({
                    'background-color': newCss
                }).data({
                    'slider-position': newPosition
                });

                if ($.isPlainObject(options) && $.isFunction(options.change)) {
                    options.change.call($current, newPosition);
                }
            }
        }).mouseup(() => {
            $current = null;
        });

        return $this;
    };
})(jQuery);
