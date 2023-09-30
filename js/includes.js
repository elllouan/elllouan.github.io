// script.js
$(document).ready(function() {
    // Load and insert the menu content
    $("#horizontalmenu").load("generic-patterns/html/horizontalmenu.html");

    // Load and insert the footer content
    $("#footer").load("generic-patterns/html/footer.html");

    $(".subject-container").on("click", function() {
      $(this).toggleClass("subj-active");
    });

    $(".current-project").on("click", function() {
      $(this).toggleClass("proj-active");
    });

});