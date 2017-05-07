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
					if(parseInt(data.status, 10) === 1 && json.list){  //强行将status转化为十进制，判断status等于1时，与json文件里面的status值一致
						
						$.each(json.list, function(k, v) {  //循环list里面的内容出来。
							if(parseInt(k, 10) === textId){ //用json.list的键k与id匹配
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