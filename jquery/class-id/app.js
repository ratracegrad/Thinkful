function textTitle() {
	var headerTitle = $('h1').text();
	var idTitle = $('#title').text();
	var classTitle = $('.myClass').text();

	console.log(title);
	console.log(idTitle);
	console.log(classTitle);
}

$(textTitle);
// $(document).ready(textTitle);