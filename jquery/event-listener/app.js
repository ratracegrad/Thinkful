function handleClicks() {
	var clickCount = 0;

	$('.js-click-counter').text(clickCount);
	$('.js-clicker').click(function(event)  {
		clickCount += 1;
		$('.js-click-counter').text(clickCount);
	});
}

//$(document).ready(handleClicks); // deprecated in jQuery 3 so use below instead
$(handleClicks);