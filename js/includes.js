// script.js
$(document).ready(function() {
    // Load and insert the menu content
    $("#horizontalmenu").load("generic-patterns/html/horizontalmenu.html");

    // Load and insert the footer content
    $("#footer").load("generic-patterns/html/footer.html");
});

const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}