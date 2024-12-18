/*
  'Portfolio' content, listing skills, experiences, and projects.
*/
function portfolio() {
  // create the main div
  const portfolio_content = document.createElement("div");
  portfolio_content.classList.add(
    "container", "h-max", "w-full", "flex", "flex-col", "mt-5", "current"
  );
  portfolio_content.id = "portfolio"

  // spacer
  let spacer = document.createElement("div");
  spacer.classList.add("h-20");

  // top-level intro
  let name = document.createElement("h2");
  name.classList.add("text-4xl", "font-bold", "dark:text-white", "text-left", 'mb-6');
  name.innerText = "yabba dabba doo";


  ////////////////////////////////////////////////////////
  // add content to the div
  portfolio_content.appendChild(spacer);
  portfolio_content.appendChild(name);

  // add to main div
  document.getElementById("content").appendChild(portfolio_content);
};