// import "./styles.css";
// Menu data structure
const log = console.log;
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" }
    ]
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" }
    ]
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" }
    ]
  }
];

// 1.1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
// document.body.appendChild(mainEl);
mainEl.classList.add("flex-ctr");

// part  1.2 Creating a Menu Bar.
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// part  1.3 Menu Buttons
// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((elem) => {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", elem.href);
  anchor.textContent = elem.text;
  topMenuEl.appendChild(anchor);
  anchor.classList.add("top-link");
});
// -------------- part two --------------------------
// 2.2
const newNav = document.createElement("nav");
newNav.setAttribute("id", "sub-menu");
document.querySelector("header").appendChild(newNav);

// 2.3
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//2.4
const topMenuLinks = document.querySelectorAll(".top-link");
// console.log(topMenuLinks);
topMenuEl.addEventListener("click", eventClick);

function eventClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("top-link")) {
    return;
  }
  topMenuLinks.forEach((el) => {
    el.classList.remove("active");
  });
  e.target.classList.add("active");
  console.log(e.target.innerText.toLowerCase());

  menuLinks.forEach((l) => {
    if (l.text === e.target.innerText.toLowerCase()) {
      subMenuEl.innerHTML = "";
      if (l.subLinks) {
        l.subLinks.forEach((element) => {
          const anchor = document.createElement("a");
          anchor.setAttribute("href", element.href);
          anchor.textContent = element.text;
          subMenuEl.appendChild(anchor);
          anchor.classList.add("top-link");
        });
      }
    }
  });
  subMenuEl.style.top = "100%";
}
