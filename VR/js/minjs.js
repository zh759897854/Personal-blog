$("#navword a").mouseover(function () {
	$(this).css("top", "-20px").css("background", "#d6f0bb")
});
$("#navword a").mouseout(function () {
	$(this).css("top", "0px").css("background", "")
});
//-------------------------------------------------------------------nav
for (var i = 0; i < $(".cricles").length; i++) {
	$(".cricles").eq(i).mouseover(function () {
		$(this).css("width", "750px").css("zIndex", "2")
	})
	$(".cricles").eq(i).mouseout(function () {
		$(this).css("width", "150px").css("zIndex", "1")
	})
	$(".spcricles").eq(i).mouseover(function () {
		$(this).css("width", "750px").css("zIndex", "2")
	})
	$(".spcricles").eq(i).mouseout(function () {
		$(this).css("width", "150px").css("zIndex", "1")
	})
};
//-------------------------------------------------------------------yingyong
for (var i = 0; i < $("#btn span").length; i++) {
	$("#btn span").eq(i).mouseover(function () {
		$(this).find("a").css("border", "4px solid rgba(27, 27, 27, 0.5)")
	})
	$("#btn span").eq(i).mouseout(function () {
		$(this).find("a").css("border", "4px solid #f4eeee")
	})
	$("#btn span").eq(i).click(function () {
		for (var i = 0; i < $("#btn span").length; i++) {
			$("#btn img").eq(i).css("left", "-155px")
		}
		for (var i = 0; i < $("#box img").length; i++) {
			$("#box img").eq(i).removeClass();
			$("#box img").eq(i).stop().animate({
				top: "0px",
			}, 800)
		}
		$(this).find("img").css("left", "-14px")
		$("#box img").eq($(this).index() + 1).addClass("activeimg")
		$("#box").css("left", -450 * ($(this).index()))
		$(".activeimg").stop().animate({
			top: "50px",
		}, 1000)
	})
};

//------------------------------------------------------------------------btn
