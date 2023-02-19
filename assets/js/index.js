const featuresList = document.querySelectorAll(".features-list > li");

const features = [
  {
    img: "./assets/img/illustration-features-tab-1.svg",
    h2: "Bookmark in one click",
    p: "Organize your bookmarks however you like. Our wimple drag-and-drop inetrface gives you complete control over how you manage your favourite sites.",
  },
  {
    img: "./assets/img/illustration-features-tab-2.svg",
    h2: "Intelligent search",
    p: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    img: "./assets/img/illustration-features-tab-3.svg",
    h2: "Share your bookmarks",
    p: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

featuresList.forEach((element, index) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".features-list > li.active")
      .classList.remove("active");
    element.classList.add("active");

    document
      .querySelector(".section-features-container img")
      .setAttribute("src", features[index].img);
    document.querySelector(".section-features-container h2").innerHTML =
      features[index].h2;
    document.querySelector(".section-features-container p").innerHTML =
      features[index].p;
  });
});

// For the navbar button

const openNav = () => {
  const navbar = document.createElement("div");
  navbar.classList.add(
    "navbar-mobile-screen",
    "position-fixed",
    "w-100",
    "h-100",
    "top-0",
    "start-0",
    "d-flex",
    "flex-column",
    "justify-content-between",
    "pb-5",
  );
  navbar.style.backgroundColor = "hsla(229, 31%, 21%, 90%)";
  navbar.style.zIndex = "99";
  navbar.onclick = closeNav;
  navbar.innerHTML = `
        <div class="d-flex justify-content-between w-100 p-4">
            <div><img src="./assets/img/logo-bookmark.svg" class="bookmark-icon-white" alt=""></div>
            <div><img src="./assets/img/icon-close.svg" class="close-nav-icon" alt="" onclick="closeNav()"></div>
        </div>
        <div class="mobile-nav-buttons d-flex flex-column align-items-center justify-content-center">
          <a href="#features" class="text-decoration-none text-white w-75 p-4 border-top text-center">FEATURES</a>
          <a href="#" class="text-decoration-none text-white w-75 p-4 border-top text-center">PRICING</a>
          <a href="#contact" class="text-decoration-none text-white w-75 p-4 border-top text-center">CONTACT</a>
          <div class="w-75 border"><button class="btn btn-login w-100 text-center">LOGIN</button></div>
        </div>
        <div class="platforms-icons d-flex justify-content-center gap-5">
          <img src="./assets/img/icon-facebook.svg" alt="">
          <img src="./assets/img/icon-twitter.svg" alt="">
        </div>
    `;
  document.body.insertBefore(navbar, document.body.firstChild);
};

document.querySelector(".nav-bars-button").addEventListener("click", () => {
  // document.querySelector('.nav-buttons').classList.toggle('d-none');
  openNav();
});

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("click", () => {
    const element = document.querySelector("details[open]");
    if (element != detail) element.removeAttribute("open");
  });
});

const closeNav = () => {
  document.body.removeChild(document.body.firstChild);
};
