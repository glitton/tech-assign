// Attic model js, triggered mith mouseover 
var utils = window.optimizely.get("utils");
       
function hideAtticModal() {
  document.querySelector('.attic-modal').style.display = "none";
  // This sets the Optimizely log
  window['optimizely'] = window['optimizely'] || [];
  window['optimizely'].push({
    type: "event",
    eventName: "close_modal"
  });
}
// Function that triggers the Attic and Button modal
function showAtticModal() {
    document.querySelector('.attic-modal').style.display = "block";
}

//Loads page first before executing events
utils.waitForElement('body').then(function(element) {
  var html = widget.$html;
  element.insertAdjacentHTML('beforeend', html);
  // Hover over Add To Cart button and show modal only once
  $('button#AddToCart.btn').one('mouseover', showAtticModal);
  document.querySelector('span.attic-modal-close').addEventListener('click',
    hideAtticModal);
});

// Function that adds item to cart from the attic modal button
$(function() {
  $('#attic-cart-submit').on('click', function(evt) {
    evt.preventDefault();
    $.ajax({
        type: "POST",
        url: "/cart/add",
        data: $('form.tagForm').serialize(),// what do i put in here??
        success: function(response) {
            alert(response['response']);
        },
        error: function() {
            alert('Error');
        }
    });
    return false;
  });
});


