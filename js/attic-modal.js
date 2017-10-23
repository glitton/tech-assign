// Attic model js, triggered mith mouseover 
var utils = window.optimizely.get("utils");

function hideAtticModal() {
  document.querySelector('.attic-modal').style.display = "none";
  // This creates a log about when users close the modal
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

// Captures the Add To Cart click event
function modalAddToCart(evt) {
  evt.preventDefault();
  //Access the item in the Add To Cart array
  $('#AddToCart')[0].click();
}

//Loads page first before executing events
utils.waitForElement('body').then(function(element) {
  var html = widget.$html;
  element.insertAdjacentHTML('beforeend', html);
  
  // Hover over Add To Cart button and show modal only once
  $('button#AddToCart.btn').one('mouseover', showAtticModal);
  document.querySelector('span.attic-modal-close').addEventListener('click',
    hideAtticModal);
  
  document.getElementById('modal-add-to-cart').addEventListener('click', modalAddToCart); 
});



