document.addEventListener("DOMContentLoaded", function() {
  // Select the links and put them in a variable
  const links = document.querySelectorAll('.link');

  // Select the html tag with the id demo
  const demo = document.getElementById("demo");

  // Change the innerHTML from demo to the links length
  demo.innerHTML = links.length;
});