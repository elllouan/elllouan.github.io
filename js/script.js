// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Define the countWhenClicked function
  function count() {
    counter++;
    $('#counter').html(counter);
    return count;
  }

  function reset() {
    counter = 0;
    $('#counter').html(counter);
    return reset;
  }

  // Create a clickCounter by calling countWhenClicked()
  var counter = 0;

  // Attach a click event handler to the 'clickMe' button
  $('#clickMe').click(function() {
    count(); // This will increment and display the count
  });

  $('#resetMe').click(function() {
    reset(); // This will reset the count to zero
  });

  function swapTextAfterDelay(textElement, newText, delay) {
      setTimeout(function() {
          textElement.text(newText);
      }, delay);
  }

  const originalTextElement = $(".header-annoucement");
  const originalText = originalTextElement.text();
  const newText = "Upcoming event!! Click to learn more :)";
  const delay = 3000;

  let i = 0;

  function swapText() {
      if(i) swapTextAfterDelay(originalTextElement, originalText, delay);
      else swapTextAfterDelay(originalTextElement, newText, delay);
      i = (i + 1) % 2; // Assuming you want to toggle between original and new text
  }

  // Call swapText to start the swapping
  setInterval(swapText, delay);

  var illustrationHoriz = document.querySelector('.illustration-horiz');
  var images = illustrationHoriz.querySelectorAll('img');
  var numImages = images.length;

  // You can adjust the sizes based on the number of images
  if (numImages === 2) {
      // Set larger size for 2 images
      images.forEach(function (img) {
          img.style.width = '50%';
      });
  } else if (numImages === 3) {
      // Set smaller size for 3 images
      images.forEach(function (img) {
          img.style.width = '33%';
      });
  }

});



$(document).ready(function() {
    // Load and insert the menu content
    $("#horizontalmenu").load("generic-patterns/html/horizontalmenu.html");

    // Load and insert the footer content
    $("#footer").load("generic-patterns/html/footer.html");

    $(".label").on("click", function() {
      $(this).parent().toggleClass("active");
    });

});
