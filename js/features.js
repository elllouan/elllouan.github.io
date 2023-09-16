var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var subject = this.nextElementSibling;
    if (subject.style.display === "block") {
      subject.style.display = "none";
    } else {
      subject.style.display = "block";
    }
  });
}