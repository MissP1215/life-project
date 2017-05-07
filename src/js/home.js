define(function(require, exports, module){
	var lang   = require('lang').lang;
	var tpl = require('public').public.tpl;
	var home = {
		init: function(){
			this.footer();
			this.randerLive();
		},
		footer: function(){
			tpl('tpl/text.tpl.html', $('footer ul'), lang);
		},
		randerLive: function () {
			$.ajax({
				type: 'GET',
				url: '../../data/home.json',
				data: '',
				dataType: 'json',
				success: function(data){
					console.log(data.data);
					var json = data.data;
					if(parseInt(data.status, 10) === 1 &&
						json.list &&
						json.list.length){
						tpl('tpl/live.tpl.html', $('.content .live-ul'), json);
					}
				}
			});
		}
	}
	home.init();
});