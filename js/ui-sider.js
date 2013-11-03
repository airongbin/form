var Sider = function (config) {
	
	var defaults = {
		node : $('.sider'),
		data : [],
		template : '<ul>'+
		'<% _.each(items,function(item){ %>'+
			'<li class="siderItem" data-type="<%= item.id %>"><%= item.name %></li>'+
		'<% }) %>'+
		'<ul>'
	};
	$.extend(true, defaults, config);
	this.data = defaults.data;
	this.node = defaults.node;
	this.template = defaults.template;

	this._render();
};

Sider.prototype = {
	
	_render : function(){
		var html = _.template(this.template, {items:this.data});
		this.node.html(html);
	},

	bindEvent : function(){},


};