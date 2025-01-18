 // Select the sun element
 const sun = document.getElementById('sun');

 // Add click event listener
 sun.addEventListener('click', function() {
   // Check if body color is red
   if (document.body.style.backgroundColor === 'red') {
     // Reset body color
     document.body.style.backgroundColor = 'inherit';
   } else {
     // Change body color to red
     document.body.style.backgroundColor = 'red';
   }
 });