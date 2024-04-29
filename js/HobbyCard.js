// JavaScript Document

$(function(){
	//语音通知手风琴效果
	$(".item_box ul li").each(function(){
		var fold = $(this).find(".fold");
		var unfold = $(this).find(".unfold");
		if(fold.is(":hidden")){
			$(this).width("50%");
		}else{
			$(this).width("10%");
		}
	})

	$(".item_box ul li").click(function(){
		var li_index = $(this).index();
		$(this).animate({width:"50%"}, 200);
		$(this).find(".unfold").show();
		$(this).find(".fold").hide();
		$(this).siblings().animate({width:"10%"},200);
		$(this).siblings().find(".unfold").hide();
		$(this).siblings().find(".fold").show();
	})
})
