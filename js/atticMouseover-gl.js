// My version without Opty tools, used for testing only
document.addEventListener("DOMContentLoaded", function(){
       
// Hover over Add To Cart button and show modal only once
$('button#AddToCart.btn').one('mouseover', showAtticModal);
  document.querySelector('span.attic-modal-close').addEventListener('click',
    hideAtticModal);
});

// Function that triggers the Attic and Button modal
function showAtticModal() {
    document.querySelector('.attic-modal').style.display = "block";
}

function hideAtticModal() {
  document.querySelector('.attic-modal').style.display = "none";
  });
}

// // Function that adds item to cart from the attic modal button
// $(function() {
//   $('#attic-cart-submit').on('click', function(evt) {
//     evt.preventDefault();
//     $.ajax({
//         type: "POST",
//         url: "/cart/add",
//         data: $('form.tagForm').serialize(),// what do i put in here??
//         success: function(response) {
//             alert(response['response']);
//         },
//         error: function() {
//             alert('Error');
//         }
//     });
//     return false;
//   });
// });
  
}); // end of DOMContentLoad


