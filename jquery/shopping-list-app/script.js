$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  console.log('form');
  const item = $(event.currentTarget).find('#shopping-list-entry');
  $('.cart').append(`<div class="cartEntry"><h3>${item.val()}</h3><input type="button" value="check" class="checkBtn">
          <input type="button" value="delete" class="deleteBtn"></div>`);
  item.val('');
});


$('.cart').on('click', '.deleteBtn', function(event) {
  $(this).parent().remove();
});

$('.cart').on('click', '.checkBtn', function(event) {
  $(this).parent().find('h3').toggleClass('check');
});