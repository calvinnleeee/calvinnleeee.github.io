/*
  'Portfolio' content, listing skills, experiences, and projects.
*/

// Support function to create the list of skills
function createList(data) {
  const list = [];
  for (let idx in data) {
    const point_div = document.createElement("div");
    if (idx != data.length - 1) {
      point_div.classList.add("border-b-2", "border-stone-500", "dark:border-sky-50", "my-3");
    }
    point_div.classList.add("flex", "flex-row", "w-full", "h-fit", "gap-4");

    const point = data[idx]
    const list_item = document.createElement("div");
    list_item.classList.add("text-left", "basis-2/5");
    const list_item_main = document.createElement("h3");
    list_item_main.classList.add("text-2xl", "dark:text-white", "font-semibold", "mb-4");
    list_item_main.innerText = point["main"];
    list_item.appendChild(list_item_main);
    if (point["secondary"]) {
      const list_item_role = document.createElement("h4");
      list_item_role.classList.add("text-lg", "dark:text-white");
      list_item_role.innerText = point["secondary"];
      list_item.appendChild(list_item_role);
    }

    const list_desc = document.createElement("ul");
    list_desc.classList.add("text-xl", "dark:text-white", "text-left", "basis-3/5");
    for (let idx in point["desc"]) {
      const dsc = point["desc"][idx];
      const item = document.createElement("li");
      item.classList.add("mb-4");
      item.innerText = dsc;
      list_desc.appendChild(item);
    }
    point_div.appendChild(list_item);
    point_div.appendChild(list_desc);
    list.push(point_div);
  }

  return list;
}

function portfolio() {
  // create the main div
  const portfolio_content = document.createElement("div");
  portfolio_content.classList.add(
    "container", "h-max", "w-full", "flex", "flex-col", "mt-5", "current"
  );
  portfolio_content.id = "portfolio"

  // spacer
  let spacer = document.createElement("div");
  spacer.classList.add("h-12");

  ////////////////////////////////////////////////////////
  // Languages section
  const language_section = document.createElement("div");
  language_section.classList.add("container", "flex", "flex-row", "w-full");
  const language_head = document.createElement("h2");
  language_head.classList.add("text-4xl", "font-bold", "dark:text-white", "text-left", 'mb-5');
  language_head.innerText = "Programming languages";

  // subsection1: most recently used / most proficient
  const language_sub1 = document.createElement("div");
  language_sub1.classList.add("container", "basis-1/2");
  const language_sub1head = document.createElement("h3");
  language_sub1head.classList.add("text-2xl", "font-normal", "dark:text-white", "text-left", "mb-2", "h-12");
  language_sub1head.innerText = "Main languages:";
  language_sub1head.classList.add("border-b-2", "border-stone-500", "dark:border-sky-50", "my-3");

  const languages1 = ["TypeScript/JavaScript", "HTML"];
  const language_list1 = document.createElement("ul");
  language_list1.classList.add("mb-4");
  for (let idx in languages1) {
    let list_item = document.createElement("li");
    list_item.classList.add("text-lg", "dark:text-white", "text-left", "ml-10");
    list_item.innerText = languages1[idx];
    language_list1.appendChild(list_item);
  }

  // subsection2: previously learned languages
  const language_sub2 = document.createElement("div");
  language_sub2.classList.add("container", "basis-1/2");
  const language_sub2head = document.createElement("h3");
  language_sub2head.classList.add("text-2xl", "font-normal", "dark:text-white", "text-left", "mb-2", "h-12");
  language_sub2head.innerText = "Limited experience in:";
  language_sub2head.classList.add("border-b-2", "border-stone-500", "dark:border-sky-50", "my-3");

  const languages2 = ["Python", "C", "Elixir", "Java"];
  const language_list2 = document.createElement("ul");
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
  // Experience section
  const exp_section = document.createElement("div");
  exp_section.classList.add("container", "flex", "flex-col", "w-full");
  const exp_head = document.createElement("h2");
  exp_head.classList.add("text-4xl", "font-bold", "dark:text-white", "text-left", 'mb-5');
  exp_head.innerText = "Experience";

  fetch("./src/json/experience.json").then(res => res.json()).then(data => {
    const elements = createList(data);
    for (let idx in elements) {
      exp_section.appendChild(elements[idx]);
    }
  })


  ////////////////////////////////////////////////////////
  // Skills section
  const skills_section = document.createElement("div");
  skills_section.classList.add("container", "flex", "flex-col", "w-full");
  const skills_head = document.createElement("h2");
  skills_head.classList.add("text-4xl", "font-bold", "dark:text-white", "text-left", 'mb-5');
  skills_head.innerText = "Skills";

  fetch("./src/json/skills.json").then(res => res.json()).then(data => {
    const elements = createList(data);
    for (let idx in elements) {
      skills_section.appendChild(elements[idx]);
    }
  })


  ////////////////////////////////////////////////////////
  // add content to the div
  portfolio_content.appendChild(spacer);
  portfolio_content.appendChild(language_head);
  portfolio_content.appendChild(language_section);
  portfolio_content.appendChild(spacer.cloneNode());
  portfolio_content.appendChild(exp_head);
  portfolio_content.appendChild(exp_section);
  portfolio_content.appendChild(spacer.cloneNode());
  portfolio_content.appendChild(skills_head);
  portfolio_content.appendChild(skills_section);
  portfolio_content.appendChild(spacer.cloneNode());

  // add to main div
  document.getElementById("content").appendChild(portfolio_content);
};