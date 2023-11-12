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
  const newText = "Upcoming event !";
  const delay = 3000;

  let i = 0;

  function swapText() {
      if(i) swapTextAfterDelay(originalTextElement, originalText, delay);
      else swapTextAfterDelay(originalTextElement, newText, delay);
      i = (i + 1) % 2; // Assuming you want to toggle between original and new text
  }

  // Call swapText to start the swapping
  setInterval(swapText, delay);

});


$(document).ready(function() {
    // Load and insert the menu content
    $("#horizontalmenu").load("generic-patterns/html/horizontalmenu.html");

    // Load and insert the footer content
    $("#footer").load("generic-patterns/html/footer.html");

    $(".label").on("click", function() {
      $(this).parent().toggleClass("active");
    });

    // $(".project-1").on("mouseenter", function() {
    //   $(".hover-image1").toggleClass("active");
    // });
    // $(".project-1").on("mouseleave", function() {
    //   $(".hover-image1").toggleClass("active");
    // });

    // $(".project-2").on("mouseenter", function() {
    //   $(".hover-image2").toggleClass("active");
    // });
    // $(".project-2").on("mouseleave", function() {
    //   $(".hover-image2").toggleClass("active");
    // });

    // $(".project-3").on("mouseenter", function() {
    //   $(".hover-image3").toggleClass("active");
    // });
    // $(".project-3").on("mouseleave", function() {
    //   $(".hover-image3").toggleClass("active");
    // });

    // $(".project-4").on("mouseenter", function() {
    //   $(".hover-image4").toggleClass("active");
    // });
    // $(".project-4").on("mouseleave", function() {
    //   $(".hover-image4").toggleClass("active");
    // });

});
