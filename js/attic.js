// Reference version do not use
var utils = window.optimizely.get("utils");
       
function hideAtticModal() {
  document.querySelector('.attic-modal').style.display = "none";
  window['optimizely'] = window['optimizely'] || [];
  window['optimizely'].push({
    type: "event",
    eventName: "close_modal"
  });
};

function showAtticModal() {
    document.querySelector('.attic-modal').style.display = "block";
};

utils.waitForElement('body').then(function(element) {
  var html = widget.$html;
  element.insertAdjacentHTML('beforeend', html);

  document.querySelector('div.product-single__meta').addEventListener('mouseover', showAtticModal);

  document.querySelector('span.attic-modal-close').addEventListener('click',
    hideAtticModal);
});
