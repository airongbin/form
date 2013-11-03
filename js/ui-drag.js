var Drag = function(node, options){
	
	this.node = node;
	this.options = options;

	this._bindEvent();
};

Drag.prototype = {
	_bindEvent : function(){
		var startX, startY, _object, obejctX, objectY, objectWidth, objectHight, self = this;
		this.node.on('mousedown.ui-drag',function(e){
			if(e.which != 1 || $(e.target).is("input, textarea")) return;
			var tempTime = new Date().getTime();
			e.preventDefault;
			startX = e.pageX; 
			startY = e.pageY;
			_object = $(this);//点中的对象
			objectX = _object.offset().left;
			objectY = _object.offset().top;
			objectWidth = _object.width();
			objectHight = _object.height();
			_object.after(_object.clone(true));
			_object.css({'position':'absolute','left':objectX,'top':objectY,'z-index':9999,'width':objectWidth,'height':objectHight,'opactiy':0.7});
			$(document).on('mousemove.ui-drag',move);
			$(document).on('mouseup.ui-drag',mouseup);

		});

		function move(e){
			e.preventDefault;
			var nowX = e.pageX,
				nowY = e.pageY,
				distanceX = nowX - startX,
				distanceY = nowY - startY;
			_object.centerX = (objectWidth / 2) + objectX + distanceX;
			_object.centerY = (objectHight / 2) + objectY + distanceY;
			_object.leftPoint = objectX + distanceX;
			_object.css({'left':(objectX + distanceX), 'top':(objectY + distanceY)});

			self._detectCollision.call(self, _object, $('.formList li'));

		}

		function mouseup(e){
			e.preventDefault;
			$(document).off('mouseup.ui-drag').off('mousemove.ui-drag');
			_object.remove();
			if(self.$holder && self.options.mouseup){
				self.options.mouseup(_object, self.$holder);
			}
		}
	},
	/*
	 * 用于检查一个元素是否进入另一个元素（元素组中的每一项）的内部。只要一半进入就算进入。
	 */
	_detectCollision : function(node, bumpeds){
		var self = this;
		$.each(bumpeds, function(item, i){
			var bumped = $(this);
			if(node.leftPoint > $('.content').offset().left ) {
				if(bumped[0].id != 'kp_widget_holder'){
					var offset = bumped.offset();
					var a1 = offset.left;
					var a2 = offset.left + bumped.width();
					var a3 = offset.top;
					var a4 = offset.top + bumped.height();
					if(a1 < node.centerX && node.centerX < a2 && a3 < node.centerY && node.centerY < a4){
					//在这个节点上前插入一个虚线框
						if($('#kp_widget_holder').size() == 0){
							self.$holder = $('<li id="kp_widget_holder"></li>').css({"border":"2px dashed #ccc", "height":bumped.outerHeight(true)-4,'margin-bottom':'17px'});
						}
						if(bumped.next("#kp_widget_holder").length == 0) {
							bumped.after(self.$holder);
						}else{
							bumped.before(self.$holder);
						}
						return false;
					}
					
				}
			}
			
		});
	}
};