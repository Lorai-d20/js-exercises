document.addEventListener("DOMContentLoaded", function() {
  // Select the links and put them in a variable
  const amountOfLinks = document.querySelectorAll('.link');

  // Select the html tag with the id demo
  const demo = document.getElementById("demo");

  // Change the innerHTML from demo to the links lenght
  demo.innerHTML = amountOfLinks.length;
});