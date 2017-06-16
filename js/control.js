function createRotateBtn() {
	$("#world").append('<div class="leftbtn"><img class="btnImg" src="img/leftBtn.png" /></div><div class="rightbtn"><img class="btnImg" src="img/rightBtn.png" /></div>')

	$(".leftbtn").bind("click", function() {
		if (!clickMove) {
			targetAnger += Math.PI / 2;
		}
	})

	$(".leftbtn>img").bind("touchend", function() {
		if (!clickMove) {
			targetAnger += Math.PI / 2;
		}
	})

	$(".rightbtn").bind("click", function() {
		if (!clickMove) {
			targetAnger -= Math.PI / 2;
		}
	})

	$(".rightbtn>img").bind("touchend", function() {
		if (!clickMove) {
			targetAnger -= Math.PI / 2;
		}
	})
}

var timeOut;

function addEffect(x, y) {
	clearTimeout(timeOut);
	$(".halo").remove();
	$(document.body).append('<div class="halo" style="top:'+y+'px;left: '+x+'px;position: fixed;"></div>');
	timeOut=setTimeout(function(){
		$(".halo").remove();
	}, 500);
}