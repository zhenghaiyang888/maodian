$(function() {
		var zhuishu = {
			start: function() {
				this.shows();
				this.content();
				this.mains();
			},
			//		点击脚部目录显示隐藏
			shows: function() {
				$('.zs-footer').click(function() {
					$('.list').slideToggle();
					event.stopPropagation();
				})
			},
			//		点击主体，头部脚部显示隐藏
			mains: function() {
				$('body').click(function() {
					$('.zs-head').slideToggle(0);
					$('.zs-footer').slideToggle(0);
					if($('list').show()) {
						$('.list').hide();
					}

				})
			},
			//		点击目录章节跳转内容
			content: function() {
				$('.list li').click(function() {
					var index = $(this).index(),
						para = $(this).children().data("content");
					//  url=location.href+'#'+para;
					location.hash = '#' + para;
					$('.list').hide();
					//		    $('.con').eq($(this).index()).show().siblings().hide(); 
					var $bott = $('.zs-main div').eq($(this).index());
					var target_top = $bott.offset().top;
					$("body").animate({
						scrollTop: target_top
					}, 500); //带滑动效果的跳转

				})
			}
		}
		zhuishu.start();
	})
  
  //监听滚动事件，目录随内容变化而变化
	$(window).scroll(function() {
		var h = $(window).height();
		var w = $(window).scrollTop();
		if(w >= 200) {
			$(".zs-main div").each(function() {

				if(h + w - $(this).offset().top > h / 2) {
					$(".list li").eq($(this).index()).addClass("active").siblings().removeClass('active');
							
				}
			})
		}
		

	})
