
$(document).ready(function() {
	$("#radio-stations li").click(function() {
		$.ajax({
			url: "/start",
			data:{url: $(this).data("url")},
		context: this,
		success: function(data) {
			$(".playback-contrls").fadeIn();
			$("#radio-stations li.active").removeClass("active")
			$(this).addClass("active")
		}
		});

	});

function stop() {
	$.ajax({
		url: "/stop", 
		context: this,
		success: function(data) {
		  $(".playback-controls").fadeOut();
		  $("#radio-stations li.active").removeClass("active")
		}
	});
}


