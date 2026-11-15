// @ts-nocheck

class Utils {

    static onClick(selector, callback) {
        $(document)
            .off('click', selector)
            .on("click", selector, (e) => {
                e.preventDefault();
                callback(e);
            });
    }

    static onShowTab(selector, callback) {
        $(document).on('shown.bs.tab', (event) => {
            event.preventDefault();
            callback(event);
        });
    }

    static onMouseDownTouchStart(selector, callback) {
        $(selector).on('mousedown touchstart', (e) => {
            e.preventDefault();
            callback(e);
        });
    }

    static onMouseUpOnTouchCancel(selector, callback) {
        $(selector).on('mouseup touchend touchcancel', (e) => {
            e.preventDefault();
            callback(e);
        });
    }

    static kodiImageToUrl(url) {
        return '/image/' + encodeURI(url);
    }

    static getNotifications(text) {
        $.toast({
            text: text,
            showHideTransition: 'slide',
            bgColor: '#1d3047',
            textColor: '#eee',
            allowToastClose: true,
            hideAfter: 3000,
            stack: 5,
            textAlign: 'left',
            position: 'top-right'
        });
    }

}