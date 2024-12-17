/*
  Create the top 'navbar'.
*/
function topbar() {
  // create main div
  let div = document.createElement("div");
  div.classList.add("container", "w-full", "h-36", "flex", "items-center", "mt-5", "fade-in");

  // name
  let name = document.createElement("h1");
  name.classList.add("h-fit", "w-max", "text-4xl", "text-left", "dark:text-white", "basis-2/5");
  name.innerText = "{ calvin.lee }";

  // about
  let about = document.createElement("p");
  about.classList.add("h-fit", "w-max", "text-2xl", "dark:text-white", "cursor-pointer", "basis-1/5");
  about.innerText = "About";
  about.addEventListener("click", function (e) {
    // navigate to home
  });

  // portfolio
  let portfolio = document.createElement("p");
  portfolio.classList.add("h-fit", "w-max", "text-2xl", "dark:text-white", "cursor-pointer", "basis-1/5");
  portfolio.innerText = "Portfolio";
  portfolio.addEventListener("click", function (e) {
    // navigate to skills/experiences
  });

  // contact
  let contact = document.createElement("p");
  contact.classList.add("h-fit", "w-max", "text-2xl", "dark:text-white", "cursor-pointer", "basis-1/5");
  contact.innerText = "Contact";
  contact.addEventListener("click", function (e) {
    // navigate to contact links
  });

  ////////////////////////////////////////////////////////
  // add to navbar
  div.appendChild(name);
  div.appendChild(about);
  div.appendChild(portfolio);
  div.appendChild(contact);

  // display to screen
  document.getElementById("content").appendChild(div);
}
topbar();
