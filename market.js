const brandSamsung = document.querySelector(".brand--samsung");
const sectionSamsung = document.querySelector(".commodity--sumsung");
brandSamsung.addEventListener("click", function (e) {
  sectionSamsung.scrollIntoView({ behavior: "smooth" });
});
//login
const binlog = document.querySelector(".btn--login");
const pan = document.querySelector(".logiin");
const overlay = document.querySelector(".overlay");
binlog.addEventListener("click", function () {
  pan.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 900,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 5,
  spaceBetween: "20",
});
//choose
const tabs = document.querySelectorAll(".btn--choose");
const tabsCantainer = document.querySelector(".select--button");
const tabsContent = document.querySelectorAll(".chooses__content");
tabsCantainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn--choose");
  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove("chooses__tab--active"));
  clicked.classList.add("chooses__tab--active");
  tabsContent.forEach((c) => c.classList.remove("chooses__content--active"));
  document
    .querySelector(`.chooses__content--${clicked.dataset.tab}`)
    .classList.add("chooses__content--active");
});
//دسته بندی محصولات
const category = document.querySelector(".category");
const brands = document.querySelector(".brands");
const off = document.querySelector(".off");
const productsOff = document.querySelector(".products--off");
category.addEventListener("click", function () {
  brands.scrollIntoView({ behavior: "smooth" });
});
off.addEventListener("click", function () {
  productsOff.scrollIntoView({ behavior: "smooth" });
});
//sticky nav
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(header);
//login
account1 = {
  name: "m",
  password: "1",
  phoneNumber: 9186350984,
  gmail: "monibsalehi@gmail.com",
};
account2 = {
  name: "artinahmadi",
  password: "As2004",
  phoneNumber: 9186663919,
  gmail: "artinahmadi@gmail.com",
};

account3 = {
  name: "mahanmoradyan",
  password: "Mm2004",
  phoneNumber: 9182462809,
  gmail: "mahanmoradyan@gmail.com",
};
account4 = {
  name: "sohailamiri",
  password: "Sa2004",
  phoneNumber: 9185557441,
  gmail: "sohailamiri@gmail.com",
};
const accounts = [account1, account2, account3, account4];
const body = document.querySelector("body");
const autoBox = document.querySelector(".autobox");
const header1 = document.querySelector(".header");
const main = document.querySelector("main");
const pageLogin = document.querySelector(".page--login");
const userNameInput = document.querySelector(".username--input");
const passWordInput = document.querySelector(".password--input");
const btnPageLogin = document.querySelector(".btn--page--login");
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    return (acc.username = acc.name);
  });
};
createUsername(accounts);
let findAccount;
btnPageLogin.addEventListener("click", function (e) {
  e.preventDefault();
  findAccount = accounts.find((acc) => {
    return acc.username === userNameInput.value;
  });
  if (
    findAccount.username === userNameInput.value &&
    findAccount.password === passWordInput.value
  ) {
    autoBox.classList.remove("hidden");
    header1.classList.remove("hidden");
    main.classList.remove("hidden");
    pageLogin.classList.add("hidden");
    body.style.backgroundColor = "white";
  }
});

//part see all
const posters = document.querySelectorAll(".secret");
const seeAll = document.querySelector(".see--all");
for (let i = 0; i < posters.length; i++) {
  seeAll.addEventListener("click", function () {
    posters[i].classList.remove("secret");
  });
}
