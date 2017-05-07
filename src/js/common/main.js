require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'lib/jquery.min',
		template: 'lib/template',
		// 公共
		domConfig: 'common/domConfig',
		public: 'common/public',
		lang: 'common/lang',
		// 私有
		home: 'home',
		detail: 'detail'
	}
});
require(['jquery', 'template', 'domConfig'], function ($, tpl) {
	// 配置各页html对应引入js
	// 获取当前访问页面文件名 -- 根据页面文件名在config里面配置对应的js
	var getUrlFileName = function () {
		var strUrl = window.location.pathname;		
		var arrUrl = strUrl.split("/");
		var fileName = arrUrl[arrUrl.length - 1].split("?")[0];
		return fileName.replace('.html', '');
	}
	// 加载页面对应JS
	var pageJs = getUrlFileName();	
	require([pageJs], function (pageJS) {
		console.log('ok');
	});
});

