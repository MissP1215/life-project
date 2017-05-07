
define(function(require, exports, module) {
	// require('jquery')

	// rem配置
	;(function (doc, win, undefined) {
		var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
			recalc = function () {
				var clientWidth = docEl.clientWidth;

				if (clientWidth === undefined) return;

				docEl.style.fontSize = 16 * (clientWidth / 375) + 'px';
			};

			if (doc.addEventListener === undefined) return;

			win.addEventListener(resizeEvt, recalc, false);
			doc.addEventListener('DOMContentLoaded', recalc, false);

	})(document, window);

	// 版本配置
	// if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
	// 	document.head.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi" />');
	// } else if (/(Android)/i.test(navigator.userAgent)) {
	// 	document.head.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />');
	// }

	// console.log(document.head)
});