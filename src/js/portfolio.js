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
  spacer.classList.add("h-16");

  ////////////////////////////////////////////////////////
  // Programming languages section
  let language_section = document.createElement("div")
  language_section.classList.add("container", "flex", "flex-row", "w-full")
  let language_head = document.createElement("h2");
  language_head.classList.add("text-4xl", "font-bold", "dark:text-white", "text-left", 'mb-8');
  language_head.innerText = "Programming languages";

  // subsection1: most recently used
  let language_sub1 = document.createElement("div");
  language_sub1.classList.add("container", "basis-1/2")
  let language_sub1head = document.createElement("h3");
  language_sub1head.classList.add("text-2xl", "font-normal", "dark:text-white", "text-left", "mb-2", "h-16");
  language_sub1head.innerText = "Most recently used:"

  let languages1 = ["Python", "Kotlin", "OCaml", "Java", "C"];
  let language_list1 = document.createElement("ul");
  language_list1.classList.add("mb-4");
  for (let idx in languages1) {
    let list_item = document.createElement("li");
    list_item.classList.add("text-lg", "dark:text-white", "text-left", "ml-10");
    list_item.innerText = languages1[idx];
    language_list1.appendChild(list_item);
  }

  // subsection2: previously learned languages
  let language_sub2 = document.createElement("div");
  language_sub2.classList.add("container", "basis-1/2")
  let language_sub2head = document.createElement("h3");
  language_sub2head.classList.add("text-2xl", "font-normal", "dark:text-white", "text-left", "mb-2", "h-16");
  language_sub2head.innerText = "Previously learned (need refreshing):"

  let languages2 = ["HTML/CSS", "Javascript", "C++"];
  let language_list2 = document.createElement("ul");
  for (let idx in languages2) {
    let list_item = document.createElement("li");
    list_item.classList.add("text-lg", "dark:text-white", "text-left", "ml-10");
    list_item.innerText = languages2[idx];
    language_list2.appendChild(list_item);
  }

  language_sub1.appendChild(language_sub1head);
  language_sub1.appendChild(language_list1);
  language_section.appendChild(language_sub1);
  language_sub2.appendChild(language_sub2head);
  language_sub2.appendChild(language_list2);
  language_section.appendChild(language_sub2);


  ////////////////////////////////////////////////////////
  // add content to the div
  portfolio_content.appendChild(spacer);
  portfolio_content.appendChild(language_head);
  portfolio_content.appendChild(language_section);

  // add to main div
  document.getElementById("content").appendChild(portfolio_content);
};