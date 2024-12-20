/*
  Create the top 'navbar'.
*/
function topbar() {
  // create main div
  let div = document.createElement("div");
  div.classList.add("container", "w-full", "h-30", "flex", "items-center", "mt-5", "fade-in");

  // name
  let name = document.createElement("h1");
  name.classList.add("h-fit", "w-max", "text-4xl", "text-left", "dark:text-white", "basis-4/6");
  name.innerText = "{ calvin.lee }";

  // about
  let about = document.createElement("p");
  about.classList.add("h-fit", "w-max", "text-2xl", "dark:text-white", "cursor-pointer", "basis-1/6");
  about.id = "about";
  about.innerText = "About";

  // portfolio
  let portfolio = document.createElement("p");
  portfolio.classList.add("h-fit", "w-max", "text-2xl", "dark:text-white", "cursor-pointer", "basis-1/6");
  portfolio.id = "portfolio";
  portfolio.innerText = "Portfolio";

  // contact
  // let contact = document.createElement("p");
  // contact.classList.add("h-fit", "w-max", "text-2xl", "dark:text-white", "cursor-pointer", "basis-1/5");
  // contact.id = "contact";
  // contact.innerText = "Contact";

  ////////////////////////////////////////////////////////
  // add to navbar
  div.appendChild(name);
  div.appendChild(about);
  div.appendChild(portfolio);
  // div.appendChild(contact);

  // display to screen
  document.getElementById("content").appendChild(div);
}
topbar();


function links() {
  let link_bar = document.createElement("div");
  link_bar.classList.add(
    "container", "flex", "flex-row", "w-full", "h-6", "mt-4", "items-center", "text-left", "fade-in"
  );

  // LinkedIn 
  let linked = document.createElement("a");
  linked.href = "https://www.linkedin.com/in/calvin-lee-677440151/";
  linked.target = "_blank";
  linked.rel = "noreferrer noopener";
  linked.innerText = "LinkedIn";
  linked.classList.add("basis-1/6", "text-md", "dark:text-white");

  // Github
  let github = document.createElement("a");
  github.href = "https://github.com/calvinnleeee/";
  github.target = "_blank";
  github.rel = "noreferrer noopener";
  github.innerText = "Github";
  github.classList.add("basis-1/6", "text-md", "dark:text-white");

  // Email
  let email = document.createElement("a");
  email.href = "mailto:calvinnleeee@gmail.com";
  email.target = "_blank";
  email.innerText = "Email";
  email.classList.add("basis-1/6", "text-md", "dark:text-white");

  // add the links to the container
  link_bar.appendChild(linked);
  link_bar.appendChild(github);
  link_bar.appendChild(email);

  // display to screen
  document.getElementById("content").appendChild(link_bar);
}
links()