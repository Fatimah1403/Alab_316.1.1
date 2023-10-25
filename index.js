// import "./styles.css";
// Menu data structure
const log = console.log;
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


let mainEl = document.querySelector("main");
mainEl.style.setProperty("background-color",  "var(--main-bg)");
const h1 = document.createElement("h1");
h1.textContent = "DOM Manipulation";
mainEl.appendChild(h1);
// document.body.appendChild(mainEl);
mainEl.classList.add("flex-ctr");

// part 2 Creating a Menu Bar.

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.setProperty("background-color",  "var(--top-menu-bg)");
topMenuEl.classList.add("flex-around");

// part 3 Adding Menu Buttons
// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach(link => {
   const anchor = document.createElement("a");
   anchor.setAttribute("href", link.href);
   anchor.textContent = link.text;
   topMenuEl.appendChild(anchor);
})
//---------------------------------------------------------------------------------//
//--- part2--Creating the Submenu--------of the LAB
let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.setProperty("background-color", "var(--sub-menu-bg)")
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//select the a tag in topMenuEl.---
 let topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.tagName !== "A") 
    return;

  topMenuLinks.forEach(function(link) {
    link.classList.remove("active");
  });
  event.target.classList.toggle("active");
  log(event.target.textContent);
// getting the link in menuLinks.
//const linkObj = menuLinks.find(link => link.link === event.target.textContent);

  const linkObj = {};
  for (let i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].text === event.target.textContent) {
      linkObj = menuLinks[i];
      break;
    }
  }
  if (linkObj && !event.target.classList.contains("active")) {
    if (linkObj.subLinks) {
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  }
  function clearSubMenuEl() {
    subMenuEl.innerHTML = "";
  }
  
  function buildSubMenu(subLinks) {
    clearSubMenuEl();

   const anchor = document.createElement("a");
    subLinks.forEach(link => {
      anchor.setAttribute("href", link.href);
      anchor.text = link.textContent;
      subMenuEl.appendChild(anchor);

    })
  }
  buildSubMenu();

  subMenuEl.style.top = "0";
  topMenuLinks.forEach(function (anchor) {
    anchor.classList.remove("active");
  });
  mainEl.innerHTML = <h1>${event.target.textContent}</h1>
});

