// import "./styles.css";
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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