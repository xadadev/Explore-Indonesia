/* ---------------------------------- */
/*             MOBILE MENU            */
/* ---------------------------------- */
var hamburger = document.querySelector(".humburger");
var siteNav = document.querySelector(".header--navigation");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  hamburger.classList.toggle("is-active");
  slideToggle(siteNav, 200);
});

/*! plain JS slideToggle, slideDown, slideUp */
function slideToggle(t, e) {
  0 === t.clientHeight ? j(t, e, !0) : j(t, e);
}
function slideUp(t, e) {
  j(t, e);
}
function slideDown(t, e) {
  j(t, e, !0);
}
function j(t, e, o) {
  void 0 === e && (e = 400),
    void 0 === o && (o = !1),
    (t.style.overflow = "hidden"),
    o && (t.style.display = "block");
  var i,
    l = window.getComputedStyle(t),
    p = parseFloat(l.getPropertyValue("margin-top")),
    a = parseFloat(l.getPropertyValue("margin-bottom")),
    n = parseFloat(l.getPropertyValue("padding-top")),
    s = parseFloat(l.getPropertyValue("padding-bottom")),
    r = parseFloat(l.getPropertyValue("height")),
    d = p / e,
    g = a / e,
    y = n / e,
    m = s / e,
    u = r / e;
  window.requestAnimationFrame(function l(h) {
    void 0 === i && (i = h);
    var x = h - i;
    o
      ? ((t.style.marginTop = d * x + "px"),
        (t.style.marginBottom = g * x + "px"),
        (t.style.paddingTop = y * x + "px"),
        (t.style.paddingBottom = m * x + "px"),
        (t.style.height = u * x + "px"))
      : ((t.style.marginTop = p - d * x + "px"),
        (t.style.marginBottom = a - g * x + "px"),
        (t.style.paddingTop = n - y * x + "px"),
        (t.style.paddingBottom = s - m * x + "px"),
        (t.style.height = r - u * x + "px")),
      x >= e
        ? ((t.style.marginTop = ""),
          (t.style.marginBottom = ""),
          (t.style.paddingTop = ""),
          (t.style.paddingBottom = ""),
          (t.style.height = ""),
          (t.style.overflow = ""),
          o || (t.style.display = "none"))
        : window.requestAnimationFrame(l);
  });
}

/* -------------- ENDS -------------- */

/* ---------------------------------- */
/*         CURRENT SECTION JS         */
/* ---------------------------------- */

// display progress bar for a current section that we in

const sections = document.querySelectorAll("section");
const progressBar = document.querySelector(".progress-bar");
const currentSection = document.querySelector("#current-section");

let currentSectionIndex = 0;

document.addEventListener("scroll", () => {
  const currentPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach((section, index) => {
    if (
      currentPosition >= section.offsetTop &&
      currentPosition < section.offsetTop + section.offsetHeight
    ) {
      currentSectionIndex = index;
    }
  });

  progressBar.style.height = `${
    (currentSectionIndex + 1) * (100 / sections.length)
  }%`;
  currentSection.innerHTML = `0 ${currentSectionIndex + 1}`;
});
/* -------------- ENDS -------------- */

/* ############################################ */
/*                  BACK TO TOP                 */
/* ############################################ */

// show the back to top btn when it reach the #section3
const backTop = document.querySelector(".back--top");
const section3 = document.querySelector("#our--secret");

window.addEventListener("scroll", function () {
  if (window.scrollY > section3.offsetTop) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
});
/* -------------- ENDS -------------- */

/* -----------Trigger the  BACK TO TOP btn smoothly ---------- */
const back2Top = document.querySelector(".back--top");
const hero = document.querySelector("#hero");

back2Top.addEventListener("click", function () {
  hero.scrollIntoView({ behavior: "smooth" });
});
/* -------------- ENDS -------------- */

/* ############################################ */
/*        GSAP ANIMATION FOR HERO SECTION       */
/* ############################################ */
gsap.from(".box", {
  opacity: 0,
  y: 100,
  duration: 4,
});

gsap.from(".hero--title", { opacity: 0, y: -50, stagger: 0.2, duration: 4 });


/* ------------------- Ends ------------------- */