
$(document).mousemove(function(e){

	$("#moveme").css({"left":`${e.pageX-($("#moveme>img").width()/2)}px`, "top":`${e.pageY-($("#moveme>img").height()/2)}px`}); 
});

$("#moveme>img").on("click",function(){
	$(document).off("mousemove");
	var pos = (window.innerHeight-293);
	$("#moveme").css({"top":pos}).fadeOut(2000).fadeIn(800);

})