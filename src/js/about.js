/*
  'About' content, introducing myself and maybe some interesting tidbits.
*/
function about() {
  // create the main div
  const about_content = document.createElement("div");
  about_content.classList.add(
    "container", "h-max", "w-full", "flex", "flex-col", "mt-5", "current"
  );
  about_content.id = "about"

  // spacer
  let spacer = document.createElement("div");
  spacer.classList.add("h-20");

  // top-level intro
  let name = document.createElement("h2");
  name.classList.add("text-4xl", "font-bold", "dark:text-white", "text-left", 'mb-6');
  name.innerText = "Hi, I'm Calvin :) I am 👇";

  ////////////////////////////////////////////////////////
  // intro list
  let intro = document.createElement("ul");
  intro.classList.add("list-none", "ml-16");

  fetch("./src/json/intro.json").then(res => res.json()).then(data => {
    for (let idx in data) {
      let point = data[idx]
      let list_item = document.createElement("li");
      list_item.classList.add("text-3xl", "dark:text-white", "text-left");
      list_item.innerText = point["main"];
  
      let list_desc = document.createElement("ul");
      list_desc.classList.add("text-xl", "dark:text-white", "text-left", "ml-12", "my-2");
      for (let idx in point["desc"]) {
        let dsc = point["desc"][idx]
        let item = document.createElement("li");
        item.classList.add("mb-2");
        item.innerText = dsc;
        list_desc.appendChild(item);
      }
      list_item.appendChild(list_desc);
      intro.appendChild(list_item);
    }
  })
  
  ////////////////////////////////////////////////////////
  // additional tidbits
  let tidbits = document.createElement("ul");
  tidbits.classList.add("text-4xl", "font-bold", "dark:text-white", "text-left");
  tidbits.innerText = "I also ...";
  fetch("./src/json/tidbits.json").then(res => res.json()).then(data => {
    for (let idx in data) {
      console.log(data[idx]);
      let list_item = document.createElement("li");
      list_item.classList.add(
        "text-xl", "dark:text-white", "font-normal", "text-left", "ml-14", "my-2", "list-disc"
      );
      list_item.innerText = data[idx];
      tidbits.appendChild(list_item);
    }
  });

  ////////////////////////////////////////////////////////
  // add content to the div
  about_content.appendChild(spacer);
  about_content.appendChild(name);
  about_content.appendChild(intro);
  about_content.appendChild(spacer.cloneNode());
  about_content.appendChild(tidbits);

  // add to main div
  document.getElementById("content").appendChild(about_content);
};