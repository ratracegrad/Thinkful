$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  console.log('submit');
  const item = $(event.currentTarget).find('#shopping-list-entry');
  $('.cart').append(`<div class="cartEntry"><h3>${item}</h3><input type="button" value="check" class="checkBtn">
          <input type="button" value="delete" class="deleteBtn"></div>`);
  $('#shopping-list-entry').val('');
  item.val("");

  // const item = $('#shopping-list-entry').val();
  // $('.cart').append(`<div class="cartEntry"><h3>${item}</h3><input type="button" value="check" class="checkBtn">
  // <input type="button" value="delete" class="deleteBtn"></div>`);
  // $('#shopping-list-entry').val('');
});


$('.cart').on('click', '.deleteBtn', function(event) {
  $(this).parent().remove();
});

$('.cart').on('click', '.checkBtn', function(event) {
  $(this).parent().find('h3').toggleClass('check');
});

