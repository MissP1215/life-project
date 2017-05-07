define(function(require, exports, module){
	var public      = require('public').public;
	var tpl         = public.tpl;
	var getUrlParam = public.getUrlParam;
	var textId      = 0;
	var detail      = {
		init: function(){
			textId = parseInt(getUrlParam('text_id'), 10);
			this.content();
		},
		content: function(){
			
			$.ajax({
				type: 'GET',
				url: '../data/detail.json',
				data: '',
				dataType: 'json',
				success: function(data) {
					var json = data.data;
					var obj  = {};
					if(parseInt(data.status, 10) === 1 && json.list){  
						
						$.each(json.list, function(k, v) {
							if(parseInt(k, 10) === textId){
								obj.list = v;
							}
						});
						if(obj.list.images.length > obj.list.text.length){
							obj.flag = obj.list.images.length;
						} else {
							obj.flag = obj.list.text.length;
						}
					}
					tpl('tpl/detail.tpl.html', $('.content'), obj);
				}
			});
		}
	}
	detail.init();
});