(function (doc, win, undefined) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (clientWidth === undefined) return;
            var fontSize = 100 * (clientWidth / 1920);
            docEl.style.fontSize = (fontSize>60?fontSize:60) + 'px';
//      console.log(docEl.style.fontSize);
        };
    if (doc.addEventListener === undefined) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
//    setHeight();
})(document, window);

