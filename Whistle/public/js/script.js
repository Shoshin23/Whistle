
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


