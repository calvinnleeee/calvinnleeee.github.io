/*
  Create the top navbar to hold links
 */

function topbar() {
  const content_div = document.getElementById("content");

  // create main div
  let div = document.createElement("div");
  div.classList.add("container", "w-full", "h-36", "flex", "items-center", "mt-5", "fade-in");

  // name
  let name = document.createElement("h1");
  name.classList.add("h-fit", "w-max" ,"text-4xl", "text-left", "dark:text-white", "basis-2/5");
  name.innerText = "{calvin.lee}";

  // about
  let about = document.createElement("p");
  about.classList.add("h-fit", "w-max" ,"text-2xl", "dark:text-white", "cursor-pointer", "basis-1/5");
  about.innerText = "About me";

  // portfolio
  let portfolio = document.createElement("p");
  portfolio.classList.add("h-fit", "w-max" ,"text-2xl", "dark:text-white", "cursor-pointer", "basis-1/5");
  portfolio.innerText = "Portfolio";

  // links
  let links = document.createElement("p");
  links.classList.add("h-fit", "w-max" ,"text-2xl", "dark:text-white", "cursor-pointer", "basis-1/5");
  links.innerText = "Links";

  // add to navbar
  div.appendChild(name);
  div.appendChild(about);
  div.appendChild(portfolio);
  div.appendChild(links);

  // display to screen
  content_div.appendChild(div);
}
topbar();
