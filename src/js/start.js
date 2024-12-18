/*
  Put the about content on the screen when the script first loads.
*/
about();

/*
  Add an onclick function for the about button to load the about content if it's
  not already on screen.
*/
document.getElementById("about").addEventListener("click", function (e) {
  let current = document.querySelector(".current");
  if (current.id != "about") {
    document.getElementById("content").removeChild(current);
    about();
  }
});

/*
  Add an onclick function for the portfolio button to load the portofolio content if it's
  not already on screen.
*/
document.getElementById("portfolio").addEventListener("click", function (e) {
  let current = document.querySelector(".current");
  if (current.id != "portfolio") {
    document.getElementById("content").removeChild(current);
    portfolio();
  }
});