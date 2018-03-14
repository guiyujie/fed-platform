/**
 * 自定义工具方法
 */

//打开新窗口
export function openWindow(url, target) {
    target = target || '_self';
    url = url || '';
    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.target = target;
    if (document.all || ("ActiveXObject" in window)) {
        $span = $('<span>click</span>');
        $(aLink).append($span);
        $span.click();
    } else {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        aLink.dispatchEvent(evt);
    }
    return true;
}

//构建路由URL
export function makeRouteUrl(data) {
    return `/fx${data.url}`
}


//判断根路由
export function isRouteRoot(routing) {
    const result = (routing.pathname || '')
            .replace(/^\/fx/, '/')
            .replace(/\/+$/, '/')
    return !result || result == '/'
}
