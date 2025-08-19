/*
  Template Name: Suruchi - Fashion eCommerce HTML Template
  Author Name: Hook theme
  Author URL: https://themeforest.net/user/hooktheme
  Version: 1.0.0
*/

AOS.init({
  once: true,
  disable: function () {
    var maxWidth = 767;
    return window.innerWidth < maxWidth;
  },
});

// getSiblings
var getSiblings = function (elem) {
  const siblings = [];
  let sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/* Slide Up */
var slideUp = (target, time) => {
  const duration = time ? time : 500;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/* Slide Down */
var slideDown = (target, time) => {
  const duration = time ? time : 500;
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

// Get window top offset
function TopOffset(el) {
  let rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}

// Scroll up activation
const scrollTop = document.getElementById("scroll__top");
scrollTop.addEventListener("click", function () {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
});

// elementor widget activation
var swiper = new Swiper(".elementor__widget--swiper", {
  slidesPerView: 1,
  loop: true,
  clickable: true,
  speed: 700,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// elementor widget activation
var swiper = new Swiper(".elementor__widget--mobail__swiper", {
  spaceBetween: 10,
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".elementor__widget--desktop__swiper", {
  spaceBetween: 10,
  clickable: true,
  speed: 700,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// CounterUp Activation
const wrapper = document.getElementById("funfactId");
if (wrapper) {
  const counters = wrapper.querySelectorAll(".js-counter");
  const duration = 400;

  let isCounted = false;
  document.addEventListener("scroll", function () {
    const wrapperPos = wrapper.offsetTop - window.innerHeight;
    if (!isCounted && window.scrollY > wrapperPos) {
      counters.forEach((counter) => {
        const countTo = counter.dataset.count;

        const countPerMs = countTo / duration;

        let currentCount = 0;
        const countInterval = setInterval(function () {
          if (currentCount >= countTo) {
            clearInterval(countInterval);
          }
          counter.textContent = Math.round(currentCount);
          currentCount = currentCount + countPerMs;
        }, 1);
      });
      isCounted = true;
    }
  });
}

/* Offcanvas Mobile Menu Function */
const offcanvasHeader = function () {
  const offcanvasOpen = document.querySelector(
      ".offcanvas__header--menu__open--btn"
    ),
    offcanvasClose = document.querySelector(".offcanvas__close--btn"),
    offcanvasHeader = document.querySelector(".offcanvas-header"),
    offcanvasMenu = document.querySelector(".offcanvas__menu"),
    body = document.querySelector("body");
  /* Offcanvas SubMenu Toggle */
  if (offcanvasMenu) {
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu")
      .forEach(function (ul) {
        const subMenuToggle = document.createElement("button");
        subMenuToggle.classList.add("offcanvas__sub_menu_toggle");
        ul.parentNode.appendChild(subMenuToggle);
      });
  }
  /* Open/Close Menu On Click Toggle Button */
  if (offcanvasOpen) {
    offcanvasOpen.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvasHeader.classList.add("open");
      body.classList.add("mobile_menu_open");
    });
  }
  if (offcanvasClose) {
    offcanvasClose.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvasHeader.classList.remove("open");
      body.classList.remove("mobile_menu_open");
    });
  }
  /* Open/Close Sub Menu On Click Toggle Button */
  if (offcanvasMenu) {
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu_toggle")
      .forEach(function (toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          const parent = this.parentElement;
          if (parent.classList.contains("active")) {
            this.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".offcanvas__sub_menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            this.classList.add("active");
            parent.classList.add("active");
            slideDown(this.previousElementSibling);
            getSiblings(parent).forEach(function (item) {
              item.classList.remove("active");
              item
                .querySelectorAll(".offcanvas__sub_menu")
                .forEach(function (subMenu) {
                  subMenu.parentElement.classList.remove("active");
                  subMenu.nextElementSibling.classList.remove("active");
                  slideUp(subMenu);
                });
            });
          }
        });
      });
  }
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".offcanvas__header--menu__open--btn") &&
      !event.target.classList.contains(
        ".offcanvas__header--menu__open--btn".replace(/\./, "")
      )
    ) {
      if (
        !event.target.closest(".offcanvas-header") &&
        !event.target.classList.contains(".offcanvas-header".replace(/\./, ""))
      ) {
        offcanvasHeader.classList.remove("open");
        body.classList.remove("mobile_menu_open");
      }
    }
  });
  /* Remove Mobile Menu Open Class & Hide Mobile Menu When Window Width in More Than 991 */
  window.addEventListener("resize", function () {
    if (window.outerWidth >= 992) {
      offcanvasHeader.classList.remove("open");
      body.classList.remove("mobile_menu_open");
    }
  });
};
/* Mobile Menu Active */
offcanvasHeader();

// lightbox Activation
const customLightboxHTML = `<div id="glightbox-body" class="glightbox-container">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
    <div id="glightbox-slider" class="gslider"></div>
    <button class="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>
    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>
    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>
    </div>
    </div>`;
const lightbox = GLightbox({
  touchNavigation: true,
  lightboxHTML: customLightboxHTML,
  loop: true,
});

// Get window top offset
function TopOffset(el) {
  let rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}
// Header sticky activation
const headerStickyWrapper = document.querySelector("header");
const headerStickyTarget = document.querySelector(".header__sticky");

if (headerStickyTarget) {
  window.addEventListener("scroll", function () {
    let StickyTargetElement = TopOffset(headerStickyWrapper);
    let TargetElementTopOffset = StickyTargetElement.top;

    if (window.scrollY > TargetElementTopOffset) {
      headerStickyTarget.classList.add("sticky");
    } else {
      headerStickyTarget.classList.remove("sticky");
    }
  });
}
