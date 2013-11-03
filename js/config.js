var sourceData = [{
	id : 'input',
	name:'输入框',
	template : '<% _.each(data,function(item){ %>'+
				'<div class="control-group">'+
			   	 	'<label class="control-label" for="input01">输入框</label>'+
			    	'<div class="controls">'+
		              '<input type="text" id="input01" class="input-xlarge">'+
		            '</div>'+
		        '</div>'+
		       '<% }) %>',
},
{
	id : 'chooseList',
	name:'选择列表',
	template : '<% _.each(data,function(item){ %>'+
				'<div class="control-group">'+
		            '<label for="select01" class="control-label">选择列表</label>'+
		            '<div class="controls">'+
		              '<select id="select01">'+
		                '<option>something</option>'+
		                '<option>2</option>'+
		                '<option>3</option>'+
		                '<option>4</option>'+
		                '<option>5</option>'+
		              '</select>'+
		            '</div>'+
		        '</div>'+
		       '<% }) %>',
},
{
	id : 'checkbox',
	name:'复选框',
	template : '<% _.each(data,function(item){ %>'+
				'<div class="control-group">'+
		            '<label for="optionsCheckbox" class="control-label">复选框</label>'+
		            '<div class="controls">'+
		              '<label class="checkbox">'+
		                '<input type="checkbox" value="option1" id="optionsCheckbox">'+
		                '选我不?'+
		              '</label>'+
		              '<label class="checkbox">'+
		                '<input type="checkbox" value="option1" id="optionsCheckbox">'+
		                '还是选他吧?'+
		              '</label>'+
		            '</div>'+
		        '</div>'+
		       '<% }) %>',
},
{
	id : 'file',
	name:'文本上传',
	template : '<% _.each(data,function(item){ %>'+
				'<div class="control-group">'+
		            '<label for="fileInput" class="control-label">文件上传</label>'+
		            '<div class="controls">'+
		              '<input type="file" id="fileInput" class="input-file">'+
		            '</div>'+
		        '</div>'+
		       '<% }) %>',
},
{
	id : 'checkList',
	name:'多选列表',
	template : '<% _.each(data,function(item){ %>'+
				'<div class="control-group">'+
		            '<label for="multiSelect" class="control-label">多选列表</label>'+
		            '<div class="controls">'+
		              '<select id="multiSelect" multiple="multiple">'+
		                '<option>1</option>'+
		                '<option>2</option>'+
		                '<option>3</option>'+
		                '<option>4</option>'+
		                '<option>5</option>'+
		              '</select>'+
		            '</div>'+
		        '</div>'+
		       '<% }) %>',
},
{
	id : 'textarea',
	name:'文本区域',
	template : '<% _.each(data,function(item){ %>'+
				'<div class="control-group">'+
		            '<label for="textarea" class="control-label">文本区域</label>'+
		            '<div class="controls">'+
		              '<textarea rows="3" id="textarea" class="input-xlarge"></textarea>'+
		            '</div>'+
		        '</div>'+
		       '<% }) %>',
}];