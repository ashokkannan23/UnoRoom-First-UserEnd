
$(document).ready(function () {
	$("#Search").on("click", function () {
		
		// window.location.href = 'http://localhost/unorooms-front/secondpage/index.html';

		var city = $("#city").val();
		var locality = $("#location").val();
		var room = $("#room").val();
		var wifi = $("#wifi-click").attr('at');
		var gym = $("#gym-yoga-click").attr('at');
		var swimmingpool = $("#pool-click").attr('at');
		var relax = $("#spa-click").attr('at');
		var outdoorindoor = $("#outdoor-indoor-click").attr('at');
		var datepickerstartdate = $(".t-input-check-in").val();
		var datepickerenddate = $(".t-input-check-out").val();

		window.location.href = 'http://localhost/unorooms-front/secondpage/index.html?city=' + city + "&locality=" + locality + "&room-type=" + room + "&wifi=" + wifi + "&gymyoga=" + gym + "&pool=" + swimmingpool + "&spa=" + relax + "&outin=" + outdoorindoor + "&startdate=" + datepickerstartdate + "&enddate=" + datepickerenddate;

	});
});
