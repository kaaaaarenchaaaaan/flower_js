"use strict";

{
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const fixedText = document.querySelectorAll(".load-anim-slide");
  const topLandscape = document.querySelectorAll(
    ".load-anim-slide-delaySecond"
  );
  const opacityText = document.querySelector(".opacity-load-anim");
  const transformNavBox = document.querySelectorAll(".marginTop-loadーanim");
  const transformNumber = document.querySelector(".transform-loadーanim");
  const transformNumberDelay = document.querySelector(
    ".transform-loadーanim-delay"
  );
  const MessageNumber = document.querySelector(".number-anim");
  const MessageNumberDelay = document.querySelector(".number-anim-delay");
  const topImg = document.querySelectorAll(".load-anim-slide-delay-Third");
  const topImgLeft = document.querySelectorAll(
    ".load-anim-slide-delay-Third-early"
  );
  const peoplePageDivImg = document.querySelectorAll(".transform-left");
  const peoplePageDivImgEarly = document.querySelector(".transform-left-early");
  const anotherImgEarly = document.querySelectorAll(".anim-another-early");
  const anotherImg = document.querySelectorAll(".anim-another");
  const PeopleImg = document.querySelectorAll(".peoplePage_img");
  const test = document.querySelector(".slide-left");
  const opacityAnim = document.querySelectorAll(".opacity-anim");
  const TopSlide = document.querySelectorAll(".bottom ");
  const centerImg = document.querySelector(".center-img");
  const body = document.querySelector("body");

  const ZoomOutImgResetFunc = () => {
    PeopleImg.forEach((e) => {
      e.classList.remove("zoomOut");
    });
  };

  const loadFirst = () => {
    fixedText.forEach((e) => {
      e.classList.add("fadeIn");
      e.style.opacity = 1;
    });
  };
  const loadFirstFadeOut = () => {
    fixedText.forEach((e) => {
      e.classList.add("fadeOut");
      e.style.opacity = 1;
    });
  };

  const loadFirstReset = () => {
    fixedText.forEach((e) => {
      e.classList.remove("fadeIn");
      e.style.opacity = 0;
    });
    fixedText.forEach((e) => {
      e.classList.remove("fadeOut");
      e.style.opacity = 0;
    });
  };

  const loadSecond = () => {
    topLandscape.forEach((e) => {
      e.classList.add("fadeIn");
    });
    opacityText.classList.add("fadeIn");
    transformNavBox.forEach((e) => {
      e.classList.add("fadeIn");
    });
    MessageNumber.classList.add("fadeIn");
    MessageNumberDelay.classList.add("fadeIn");
  };

  const loadSecondReset = () => {
    topLandscape.forEach((e) => {
      e.classList.remove("fadeIn");
    });
    opacityText.classList.remove("fadeIn");
    transformNavBox.forEach((e) => {
      e.classList.remove("fadeIn");
    });
    transformNumber.classList.remove("fadeIn");
    transformNumberDelay.classList.remove("fadeIn");
  };

  const loadThirdEarly = () => {
    topImgLeft.forEach((e) => {
      e.classList.add("fadeIn");
    });
  };

  const loadThirdEarlyReset = () => {
    topImgLeft.forEach((e) => {
      e.classList.remove("fadeIn");
    });
  };

  const loadThirdEarlyAnother = () => {
    anotherImgEarly.forEach((e) => {
      e.classList.add("fadeIn");
    });
  };
  const loadThirdEarlyAnotherReset = () => {
    anotherImgEarly.forEach((e) => {
      e.classList.remove("fadeIn");
    });
  };

  const loadThird = () => {
    topImg.forEach((e) => {
      e.classList.add("fadeIn");
    });
  };

  const loadThirdReset = () => {
    topImg.forEach((e) => {
      e.classList.remove("fadeIn");
    });
  };

  const loadThirdAnother = () => {
    anotherImg.forEach((e) => {
      e.classList.add("fadeIn");
    });
  };

  const loadThirdAnotherReset = () => {
    anotherImg.forEach((e) => {
      e.classList.remove("fadeIn");
    });
  };

  const peoplePageImgAnimEarly = () => {
    peoplePageDivImgEarly.classList.add("fadeIn");
  };

  const peoplePageImgAnimEarlyReset = () => {
    peoplePageDivImgEarly.classList.remove("fadeIn");
  };

  const peoplePageImgAnim = () => {
    peoplePageDivImg.forEach((e) => {
      e.classList.add("fadeIn");
    });
  };
  const peoplePageImgAnimReset = () => {
    peoplePageDivImg.forEach((e) => {
      e.classList.remove("fadeIn");
    });
  };

  const loadFadeIn = () => {
    test.classList.add("fadeIn");
  };
  const loadFadeOut = () => {
    test.classList.add("fadeOut");
  };

  const opacityRoadAnim = () => {
    opacityAnim.forEach((e) => {
      e.classList.add("appear");
    });
  };

  const transformTopBottom = () => {
    TopSlide.forEach((e) => {
      e.classList.add("active");
    });
  };

  function timer(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  const asyncFunc = async () => {
    loadFirst();
    await timer(1000);
    loadSecond();
    await timer(800);
    loadThirdEarly();
    await timer(150);
    loadThird();
  };

  const loadAnimMainPeoplePage = () => {
    const scrollTop = () => {
      window.scroll({
        top: 0,
        instant: "smooth",
      });
    };

    loadAnimPeoplePageResetFunc();
    scrollTop();
  };

  const peoplePageLoadAnim = async () => {
    await timer(500);
    loadFadeIn();
    await timer(2400);
    loadFadeOut();
    await timer(1000);
    transformTopBottom();
    opacityRoadAnim();
  };

  const peopleImgFunc = async () => {
    await timer(1800);
    peoplePageImgAnimEarly();
    await timer(80);
    peoplePageImgAnim();
  };

  const anotherImgFunc = async () => {
    await timer(1800);
    loadThirdEarlyAnother();
    await timer(185);
    loadThirdAnother();
  };

  const loadAnimResetFunc = () => {
    loadFirstReset();
    loadSecondReset();
    loadThirdReset();
    loadThirdEarlyReset();
  };

  const loadAnimPeoplePageResetFunc = () => {
    loadFirstReset();
    loadSecondReset();
    peoplePageImgAnimEarlyReset();
    peoplePageImgAnimReset();
  };

  const loadAnimAnotherPageResetFunc = () => {
    setTimeout(() => {
      loadFirstReset();
      loadSecondReset();
    }, 0);

    setTimeout(() => {
      loadThirdAnotherReset();
      loadThirdEarlyAnotherReset();
    }, 10);
  };

  window.addEventListener("DOMContentLoaded", () => {
    asyncFunc();
    anotherImgFunc();
    peoplePageLoadAnim();
    peopleImgFunc();
  });

  const slideUp = (el, duration = 300) => {
    el.style.height = el.offsetHeight + "px";
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease-in-out";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("height");
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
      el.classList.remove("is-open");
    }, duration);
  };

  const slideDown = (el, duration = 300) => {
    el.classList.add("is-open");
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
      display = "block";
    }
    el.style.display = display;
    let height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    setTimeout(() => {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
  };

  const slideToggle = (el, duration = 300) => {
    if (window.getComputedStyle(el).display === "none") {
      return slideDown(el, duration);
    } else {
      return slideUp(el, duration);
    }
  };

  const accordions = document.querySelectorAll(".js-accordion");

  const accordionsArr = Array.prototype.slice.call(accordions);

  accordionsArr.forEach((accordion) => {
    const accordionTriggers = accordion.querySelectorAll(
      ".js-accordion-trigger"
    );

    const accordionTriggersArr = Array.prototype.slice.call(accordionTriggers);

    accordionTriggersArr.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        trigger.classList.toggle("is-active");

        const content = trigger.querySelector(".dd_toggle");

        slideToggle(content);
      });
    });
  });

  {
    const hunbergerMenu = document.querySelector(".hunbergerMenu");
    const humbergerMenuIcon = document.querySelector(".humbergerMenu_icon");
    const humbergerMenuIconClose = document.querySelector(
      ".humbergerMenu_icon_close"
    );
    const humbergerMenuIconToggle = document.querySelector(
      ".humbergerMenu_icon_toggle"
    );
    const headerRight = document.querySelector(".header-right");
    const iconBorder = document.querySelectorAll(".close-icon");
    const navLink = document.querySelectorAll(".a_navLink");

    const trueActionTimingFirst = () => {
      hunbergerMenu.classList.remove("is-slide");
      humbergerMenuIconClose.classList.add("is-left");
      humbergerMenuIconClose.classList.remove("is-right");
    };
    const trueActionTimingSecond = () => {
      hunbergerMenu.classList.remove("open");
      humbergerMenuIconToggle.classList.remove("show");
    };
    const trueActionTimingThird = () => {
      hunbergerMenu.classList.remove("show");
    };
    const trueActionTimingFourth = () => {
      humbergerMenuIconClose.classList.remove("hide");
      headerRight.classList.remove("hide");
    };
    const trueActionTimingFifth = () => {
      hunbergerMenu.classList.remove("active");
    };
    const trueActionTimingSixth = () => {
      iconBorder.forEach((e) => {
        e.classList.add("keyframes-anim");
      });
    };

    const falseActionTimingFirst = () => {
      iconBorder.forEach((e) => {
        e.classList.remove("keyframes-anim");
      });
      hunbergerMenu.classList.add("active");
      hunbergerMenu.classList.add("is-slide");
      humbergerMenuIconClose.classList.remove("is-left");
      humbergerMenuIconClose.classList.add("is-right");
    };

    const falseActionTimingSecond = () => {
      hunbergerMenu.classList.add("open");
      humbergerMenuIconClose.classList.add("hide");
      headerRight.classList.add("hide");
    };
    const falseActionTimingThird = () => {
      hunbergerMenu.classList.add("show");
    };
    const falseActionTimingFourth = () => {
      humbergerMenuIconToggle.classList.add("show");
    };
    const opacityChange = () => {
      navLink.forEach((e) => {
        e.style.opacity = 0.3;
      });
    };
    const opacityBefore = () => {
      navLink.forEach((e) => {
        e.style.opacity = 1;
      });
    };

    function noscroll(e) {
      e.preventDefault();
    }

    const NoScrollFunc = () => {
      document.addEventListener("touchmove", noscroll, { passive: false });
      document.addEventListener("wheel", noscroll, { passive: false });
    };
    const PlayScrollFunc = () => {
      document.removeEventListener("touchmove", noscroll, { passive: false });
      document.removeEventListener("wheel", noscroll, { passive: false });
    };

    const AsynchronousFunc = () => {
      falseActionTimingFirst();
      falseActionTimingSecond();
      falseActionTimingThird();
      falseActionTimingFourth();
      opacityChange();
    };

    function timer(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    }
    const trueFunc = async () => {
      trueActionTimingFirst();
      await timer(300);
      trueActionTimingSecond();
      await timer(200);
      trueActionTimingThird();
      await timer(200);
      trueActionTimingFourth();
      await timer(300);
      trueActionTimingFifth();
      await timer(300);
      trueActionTimingSixth();
    };
    const falseFunc = async () => {
      falseActionTimingFirst();
      await timer(300);
      falseActionTimingSecond();
      await timer(300);
      falseActionTimingThird();
    };

    const hashFunc = async () => {
      AsynchronousFunc();
      trueFunc();
      await timer(1300);
      opacityBefore();
    };

    if (window.matchMedia("(min-width: 1026px)").matches) {
      humbergerMenuIcon.addEventListener("click", () => {
        if (hunbergerMenu.classList.contains("active")) {
          PlayScrollFunc();
        } else {
          NoScrollFunc();
        }
      });
    }

    if (window.matchMedia("(max-width: 1025px)").matches) {
      humbergerMenuIcon.addEventListener("click", () => {
        if (hunbergerMenu.classList.contains("active")) {
          body.classList.remove("active");
        } else {
          body.classList.add("active");
        }
      });
    }

    humbergerMenuIcon.addEventListener("click", () => {
      const body = document.querySelector("body");

      if (hunbergerMenu.classList.contains("active")) {
        trueFunc();
      } else {
        falseFunc();
      }
      if (hunbergerMenu.classList.contains("show")) {
        humbergerMenuIconToggle.classList.remove("show");
      } else {
        setTimeout(() => {
          humbergerMenuIconToggle.classList.add("show");
        }, 800);
      }
    });

    const changeText = document.querySelector(".js-change-text");
    const rinkBtn = document.querySelectorAll(".a_navLink");
    rinkBtn.forEach((e) => {
      const url = e.getAttribute("href");
      e.addEventListener("click", () => {
        if (
          url == "#people2" ||
          url == "#talk2" ||
          url == "#" ||
          url == "#top" ||
          url == "#top2" ||
          url == "#top3"
        ) {
          trueFunc();
          PlayScrollFunc();
        }
      });
    });

    const urlHash = location.hash;

    if (
      urlHash == "#nav" ||
      urlHash == "#nav2" ||
      urlHash == "#nav3" ||
      urlHash == "#nav4" ||
      urlHash == "#nav5" ||
      urlHash == "#people2" ||
      urlHash == "#talk2"
    ) {
      hashFunc();
    }
    if (urlHash == "#people" || urlHash == "#people2") {
      changeText.innerHTML = "<span>PEOPLE</span>";
    }
    if (urlHash == "#talk" || urlHash == "#talk2") {
      changeText.innerHTML = "<span>TALK</span>";
    }
    if (window.matchMedia("(max-width: 1025px)").matches) {
      var ColorClass = [
        "Color1",
        "Color2",
        "Color3",
        "Color4",
        "Color5",
        "Color6",
        "Color7",
        "Color8",
        "Color9",
        "Color10",
        "Color11",
        "Color12",
      ];
      var colorBoxes = document.querySelectorAll(".span-color-box");
      const Index = Math.floor(Math.random() * colorBoxes.length);
      if (urlHash == "#nav") {
        const messagePageColorBox = document.querySelector(
          ".messagePage_colorBox_link"
        );
        const messagePageColorBox1 =
          messagePageColorBox.children[0].firstElementChild;
        const messagePageColorBox2 =
          messagePageColorBox.children[1].firstElementChild;
        messagePageColorBox1.classList.remove("change-bgColor-01");
        messagePageColorBox2.classList.remove("change-bgColor-02");
        messagePageColorBox1.classList.add(ColorClass[11]);
        messagePageColorBox2.classList.add(ColorClass[1]);
      }
      if (urlHash == "#nav3" || urlHash == "#nav4" || urlHash == "#nav5") {
        const anotherPageColorBox = document.querySelector(
          ".anotherPage_colorBox_link"
        );
        const anotherPageColorBox1 =
          anotherPageColorBox.children[0].firstElementChild;
        const anotherPageColorBox2 =
          anotherPageColorBox.children[1].firstElementChild;
        anotherPageColorBox1.classList.remove("change-bgColor-01");
        anotherPageColorBox2.classList.remove("change-bgColor-02");
        anotherPageColorBox1.classList.add(ColorClass[Index]);

        if (Index == 11) {
          anotherPageColorBox2.classList.add(ColorClass[0]);
        } else {
          anotherPageColorBox2.classList.add(ColorClass[Index + 1]);
        }
      }
    }
  }

  {
    function callback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    }
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);
    const opacityTargets = document.querySelectorAll(".scroll-anim-opacity");

    opacityTargets.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      opacityTargets.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) target.classList.remove("appear");
      });
    });
  }

  {
    function callback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    }

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);

    const slideTargets = document.querySelectorAll(".slide-from-left");

    slideTargets.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      slideTargets.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) {
          target.classList.remove("appear");
        }
      });
    });
  }

  {
    const fixedTarget = document.querySelector(".target-fixed");
    const transformLeft = document.querySelector(".div-transform-left");
    const fixedSelector = document.querySelector(".div-fixed");

    const fadeInFunc = () => {
      transformLeft.classList.add("fadeIn");
    };
    const fadeOutFunc = () => {
      transformLeft.classList.remove("fadeIn");
      transformLeft.classList.add("fadeOut");
      setTimeout(() => {
        transformLeft.classList.remove("fadeOut");
      }, 1000);
    };

    function callback(entries) {
      if (entries[0].isIntersecting) {
        fadeInFunc();
      } else if (
        !entries[0].isIntersecting &&
        transformLeft.classList.contains("fadeIn")
      ) {
        fadeOutFunc();
      }
    }

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(fixedTarget);
  }

  {
    function callback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          asyncFunc();
        }
      });
    }

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);
    const zoomOutAnim = document.querySelectorAll(".observeTarget-zoomOutAnim");
    const slideOutIn = document.querySelectorAll(".slide-rightHide-leftShow");

    const rightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("right");
      });
    };
    const hideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-0");
      });
    };

    const leftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("left");
      });
    };

    const showFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-100");
      });
    };

    const removeRightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("right");
      });
    };
    const removeHideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-0");
      });
    };
    const removeLeftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("left");
      });
    };
    const removeShowFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-100");
      });
    };

    function timer(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    }
    const asyncFunc = async () => {
      rightFunc();
      await timer(100);
      hideFunc();
      await timer(410);
      leftFunc();
      await timer(200);
      showFunc();
    };

    const allRemoveFunc = () => {
      removeRightFunc();
      removeHideFunc();
      removeLeftFunc();
      removeShowFunc();
    };

    zoomOutAnim.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      zoomOutAnim.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) {
          target.classList.remove("active");
          allRemoveFunc();
        }
      });
    });
  }

  {
    function callback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          asyncFunc();
        }
      });
    }

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);
    const zoomOutAnim = document.querySelectorAll(
      ".observeTarget-zoomOutAnim02"
    );
    const slideOutIn = document.querySelectorAll(".slide-rightHide-leftShow02");

    const rightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("right");
      });
    };
    const hideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-0");
      });
    };

    const leftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("left");
      });
    };

    const showFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-100");
      });
    };

    const removeRightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("right");
      });
    };
    const removeHideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-0");
      });
    };
    const removeLeftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("left");
      });
    };
    const removeShowFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-100");
      });
    };

    function timer(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    }
    const asyncFunc = async () => {
      rightFunc();
      await timer(100);
      hideFunc();
      await timer(410);
      leftFunc();
      await timer(200);
      showFunc();
    };

    const allRemoveFunc = () => {
      removeRightFunc();
      removeHideFunc();
      removeLeftFunc();
      removeShowFunc();
    };

    zoomOutAnim.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      zoomOutAnim.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) {
          target.classList.remove("active");
          allRemoveFunc();
        }
      });
    });
  }

  {
    function callback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          asyncFunc();
        }
      });
    }

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);
    const zoomOutAnim = document.querySelectorAll(
      ".observeTarget-zoomOutAnim02-2rows"
    );
    const slideOutIn = document.querySelectorAll(
      ".slide-rightHide-leftShow02-2rows"
    );

    const rightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("right");
      });
    };
    const hideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-0");
      });
    };

    const leftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("left");
      });
    };

    const showFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-100");
      });
    };

    const removeRightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("right");
      });
    };
    const removeHideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-0");
      });
    };
    const removeLeftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("left");
      });
    };
    const removeShowFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-100");
      });
    };

    function timer(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    }

    const asyncFunc = async () => {
      rightFunc();
      await timer(100);
      hideFunc();
      await timer(410);
      leftFunc();
      await timer(200);
      showFunc();
    };

    const allRemoveFunc = () => {
      removeRightFunc();
      removeHideFunc();
      removeLeftFunc();
      removeShowFunc();
    };

    zoomOutAnim.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      zoomOutAnim.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) {
          target.classList.remove("active");
          allRemoveFunc();
        }
      });
    });
  }

  {
    function callback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          asyncFunc();
        }
      });
    }

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);
    const zoomOutAnim = document.querySelectorAll(
      ".observeTarget-zoomOutAnim03"
    );
    const slideOutIn = document.querySelectorAll(".slide-rightHide-leftShow03");

    const rightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("right");
      });
    };
    const hideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-0");
      });
    };

    const leftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("left");
      });
    };

    const showFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-100");
      });
    };

    const removeRightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("right");
      });
    };
    const removeHideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-0");
      });
    };
    const removeLeftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("left");
      });
    };
    const removeShowFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-100");
      });
    };

    function timer(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    }
    const asyncFunc = async () => {
      rightFunc();
      await timer(100);
      hideFunc();
      await timer(410);
      leftFunc();
      await timer(200);
      showFunc();
    };

    const allRemoveFunc = () => {
      removeRightFunc();
      removeHideFunc();
      removeLeftFunc();
      removeShowFunc();
    };

    zoomOutAnim.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      zoomOutAnim.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) {
          target.classList.remove("active");
          allRemoveFunc();
        }
      });
    });
  }

  {
    function callback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          asyncFunc();
        }
      });
    }

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);
    const zoomOutAnim = document.querySelectorAll(
      ".observeTarget-zoomOutAnim03"
    );
    const slideOutIn = document.querySelectorAll(".slide-rightHide-leftShow03");

    const rightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("right");
      });
    };
    const hideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-0");
      });
    };

    const leftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("left");
      });
    };

    const showFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-100");
      });
    };

    const removeRightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("right");
      });
    };
    const removeHideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-0");
      });
    };
    const removeLeftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("left");
      });
    };
    const removeShowFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-100");
      });
    };

    function timer(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    }
    const asyncFunc = async () => {
      rightFunc();
      await timer(100);
      hideFunc();
      await timer(410);
      leftFunc();
      await timer(200);
      showFunc();
    };

    const allRemoveFunc = () => {
      removeRightFunc();
      removeHideFunc();
      removeLeftFunc();
      removeShowFunc();
    };

    zoomOutAnim.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      zoomOutAnim.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) {
          target.classList.remove("active");
          allRemoveFunc();
        }
      });
    });
  }

  {
    function callback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          asyncFunc();
        }
      });
    }

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);
    const zoomOutAnim = document.querySelectorAll(
      ".observeTarget-zoomOutAnim03-2rows"
    );
    const slideOutIn = document.querySelectorAll(
      ".slide-rightHide-leftShow03-2rows"
    );

    const rightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("right");
      });
    };
    const hideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-0");
      });
    };

    const leftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("left");
      });
    };

    const showFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.add("w-100");
      });
    };

    const removeRightFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("right");
      });
    };
    const removeHideFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-0");
      });
    };
    const removeLeftFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("left");
      });
    };
    const removeShowFunc = () => {
      slideOutIn.forEach((e) => {
        e.classList.remove("w-100");
      });
    };

    function timer(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    }
    const asyncFunc = async () => {
      rightFunc();
      await timer(100);
      hideFunc();
      await timer(410);
      leftFunc();
      await timer(200);
      showFunc();
    };

    const allRemoveFunc = () => {
      removeRightFunc();
      removeHideFunc();
      removeLeftFunc();
      removeShowFunc();
    };

    zoomOutAnim.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      zoomOutAnim.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) {
          target.classList.remove("active");
          allRemoveFunc();
        }
      });
    });
  }

  {
    function callback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);

    const slideOutInTargets = document.querySelectorAll(
      ".observeTarget-anim-slideOutIn"
    );

    slideOutInTargets.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      slideOutInTargets.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) {
          target.classList.remove("active");
        }
      });
    });
  }

  {
    function callback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    }

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);

    const transformTargets = document.querySelectorAll(
      ".observeTarget-transform-anim"
    );

    transformTargets.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      transformTargets.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) {
          target.classList.remove("appear");
        }
      });
    });
  }

  {
    const fixedTarget = document.querySelectorAll(".observeTarget-fixed-hide");
    const fixedText = document.querySelector(".load-anim-slide");

    function callback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fixedText.classList.remove("fadeIn");
          fixedText.classList.add("fadeOut");
        }
      });
    }

    const options = {
      threshold: 0.0,
    };

    const observer = new IntersectionObserver(callback, options);
    fixedTarget.forEach((target) => {
      observer.observe(target);
    });

    window.addEventListener("scroll", function () {
      fixedTarget.forEach((target) => {
        const windowHeight = window.innerHeight;
        const elem_Y = target.getBoundingClientRect().top;
        if (windowHeight < elem_Y) {
          fixedText.classList.remove("fadeOut");
          fixedText.classList.add("fadeIn");
        }
      });
    });
  }

  {
    const liAnim = document.querySelectorAll(".mouseover-anim");

    liAnim.forEach((target) => {
      const hoverAction = () => {
        target.classList.add("active");
        setTimeout(() => {
          target.classList.remove("active");
        }, 1000);
      };
      target.addEventListener("mouseover", function () {
        if (window.matchMedia("(min-width: 1026px)").matches) {
          if (!target.classList.contains("active")) {
            hoverAction();
          }
        }
      });
    });
  }

  {
    const hoverAnim = document.querySelectorAll(".hover-anim");

    hoverAnim.forEach((e) => {
      const hoverImg = e.querySelector(".hover-img");
      e.addEventListener("mouseover", function () {
        if (window.matchMedia("(min-width: 1026px)").matches) {
          hoverImg.animate(
            {
              transform: ["scale(1.00, 1.00)", "scale(1.08, 1.08)"],
            },
            {
              fill: "both",
              duration: 800,
              easing: "ease-in-out",
            }
          );
        }
      });

      e.addEventListener("mouseout", function () {
        if (window.matchMedia("(min-width: 1026px)").matches) {
          hoverImg.animate(
            {
              transform: ["scale(1.08, 1.08)", "scale(1.00, 1.00)"],
            },
            {
              fill: "both",
              duration: 800,
              easing: "ease-in-out",
            }
          );
        }
      });
    });
  }

  {
    const links = document.querySelectorAll(".bottom");
    let sample_array = [].slice.call(links);
    if (window.matchMedia("(min-width: 1026px)").matches) {
      links.forEach((e) => {
        let mouseover_function = () => {
          if (!e.classList.contains("not-hover")) {
            e.style.transformOrigin = "center bottom";

            var time1 = setTimeout(() => {
              e.classList.add("slideOut");
            }, 400);

            setTimeout(() => {
              e.style.transformOrigin = "center top";
            }, 800);

            setTimeout(() => {
              e.classList.add("slideIn");
            }, 830);

            setTimeout(() => {
              e.classList.remove("slideIn");
              e.classList.remove("slideOut");
            }, 1500);

            e.addEventListener("click", () => {
              clearTimeout(time1);
            });
          }
        };

        if (!e.classList.contains("not-hover")) {
          for (let i = 0; i < links.length; i++) {
            let faviconFunc = () => {
              var Pass = [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
              ];
              let get_index = sample_array.indexOf(links[i]);
              var obj = document.getElementById("fav");
              obj.href = `img/Profile/grid ${Pass[get_index]}.svg`;
            };

            links[i].addEventListener("mouseover", faviconFunc, false);
            setTimeout(() => {
              links[i].removeEventListener("mouseover", faviconFunc, false);
            }, 10000);
          }

          e.addEventListener("mouseover", mouseover_function, false);
          e.addEventListener("click", () => {
            e.removeEventListener("mouseover", mouseover_function, false);
          });
        }
      });
    }
  }

  {
    window.addEventListener("scroll", function updateBar() {
      const windowScroll = window.pageYOffset;
      const docHeight = document.body.clientHeight;
      const windowHeight = window.innerHeight;
      const scrollUnit = (windowScroll / (docHeight - windowHeight)) * 100;
      topLandscape.forEach((e) => {
        e.style.width = 100 - scrollUnit + "%";
      });
    });
  }

  {
    var links = document.querySelectorAll(".bottom");
    const test = document.querySelector(".loading-animation");
    const ul = document.querySelector(".color-link");
    const MainBgColor = document.querySelectorAll(".change-bgColor-js");
    const SecondBgColor = document.querySelectorAll(
      ".change-Second-bgColor-js"
    );
    const MainColor = document.querySelectorAll(".change-mainColor-js");
    const SecondColor = document.querySelectorAll(".change-secondColor-js");
    const BorderColor = document.querySelectorAll(".change-BorderColor-js");
    const parent = document.querySelector(".ul-border-Color-js");
    const li = document.querySelectorAll(".li-border-Color-js");
    const HeaderLogo = document.querySelector(".header-logo-img-parent");
    const HeaderIcon = document.querySelector(".header-icon-img-parent");
    const ChangeText = document.getElementById("name");
    const ColorBox = document.querySelector(".colorBox_link");
    const ChangeNumber = document.getElementById("number");
    const changeRightImg = document.querySelector(".change-img-right");
    const changeLeftImg = document.querySelector(".change-img-left");
    const changeCenterImg = document.querySelector(".change-img-center");
    const changeBigText = document.querySelector(".js-change-text");
    const colorBoxBtn = document.querySelectorAll(".a_colorBox");
    const changeImgClass = document.querySelector(".img-transform-right");
    const changeTextColor = document.querySelector(
      ".js-changeColor-text-first"
    );

    function noscroll(e) {
      e.preventDefault();
    }

    const NoScrollFunc = () => {
      document.addEventListener("touchmove", noscroll, { passive: false });
      document.addEventListener("wheel", noscroll, { passive: false });
    };
    const PlayScrollFunc = () => {
      document.removeEventListener("touchmove", noscroll, { passive: false });
      document.removeEventListener("wheel", noscroll, { passive: false });
    };

    test.classList.add("not-scroll");
    if (test.classList.contains("not-scroll")) {
      NoScrollFunc();
    }

    var Colors = [
      "#4C4C4C",
      "#893888",
      "#6eb4dc",
      "#277fa3",
      "#aecf01",
      "#006eb8",
      "#e23283",
      "#27c8dc",
      "#fb7fa4",
      "#b1650c",
      "#edbe09",
      " #60a274",
    ];
    var rgb = [
      "rgb(76, 76, 76)",
      "rgb(137, 56, 136)",
      "rgb(110, 180, 220)",
      "rgb(39, 127, 163)",
      "rgb(174, 207, 1)",
      "rgb(0, 110, 184)",
      "rgb(226, 50, 131)",
      "rgb(39, 200, 220)",
      "rgb(251, 127, 164)",
      "rgb(177, 101, 12)",
      "rgb(237, 190, 9)",
      "rgb(96, 162, 116)",
    ];
    var SecondColors = [
      "#a5a5a5",
      "#c49bc2",
      "#b6d9ed",
      "#93bfd1",
      "#d7e680",
      "#80b6db",
      "#f091bd",
      "#93e3ed",
      "#fdabc3",
      "#d8b185",
      "#f6dd7f",
      "#afd1b9",
    ];
    var ThirdColor = [
      "#a4a4a4",
      "#c49bc3",
      "#b5d9ed",
      "#93bfd1",
      "#d7e680",
      "#7fb6db",
      "#f098c1",
      "#93e3ed",
      "#fdbfd1",
      "#d8b284",
      "#f5dd82",
      "#b1d1b9",
    ];

    var iconPass = [
      "grid 01.svg",
      "grid 02.svg",
      "grid 03.svg",
      "grid 04.svg",
      "grid 05.svg",
      "grid 06.svg",
      "grid 07.svg",
      "grid 08.svg",
      "grid 09.svg",
      "grid 10.svg",
      "grid 11.svg",
      "grid 12.svg",
    ];
    var ColorClass = [
      "Color1",
      "Color2",
      "Color3",
      "Color4",
      "Color5",
      "Color6",
      "Color7",
      "Color8",
      "Color9",
      "Color10",
      "Color11",
      "Color12",
    ];
    var BorderColorClass = [
      "Color01",
      "Color02",
      "Color03",
      "Color04",
      "Color05",
      "Color06",
      "Color07",
      "Color08",
      "Color09",
      "Color010",
      "Color011",
      "Color012",
    ];
    var Pass = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    var Pass2 = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "61",
      "71",
      "81",
      "91",
      "101",
      "111",
      "121",
    ];
    var PassClass = [
      "pass01",
      "pass02",
      "pass03",
      "pass04",
      "pass05",
      "pass06",
      "pass07",
      "pass08",
      "pass09",
      "pass10",
      "pass11",
      "pass12",
    ];
    var works = [
      "代表取締役",
      "不動産仲介事業部 店長",
      "経理 課長",
      "不動産仲介事業部 課長",
      "受付",
      "受付 主任",
      "買取再販事業部 部長",
      "セカンドカラー 代表取締役",
      "不動産仲介事業部 店長",
      "不動産仲介事業部 課長",
      "不動産仲介事業部 係長",
      "メディア事業部",
    ];
    var LastNameJa = [
      "石垣",
      "中川",
      "宮崎",
      "菅野",
      "小比類巻",
      "石川",
      "宮崎",
      "亀山",
      "武藤",
      "平山",
      "菊地",
      "春木",
    ];
    var LastNameEn = [
      "ISHIGAKI",
      "NAKAGAWA",
      "MIYAZAKI",
      "KANNO",
      "KOHIRUIMAKI",
      "ISHIKAWA",
      "MIYAZAKI",
      "KAMEYAMA",
      "MUTO",
      "HIRAYAMA",
      "KIKUCHI",
      "AOKI",
      "COLOR&nbsp;12",
      "PEOPLE",
      "TALK",
    ];
    var FirstNames = [
      "智浩",
      "恵介",
      "松絹",
      "幸太郎",
      "睢愛",
      "愛理",
      "浩希",
      "裕史",
      "大樹",
      "幸太",
      "弘貴",
      "友栄",
    ];
    var Number1 = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"];
    var Number2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2"];

    const changeTextFunc = (p, b) => {
      const LastName = "<span>" + LastNameEn[b] + "</span>";
      const text =
        '<p class="fz-16">' +
        works[p] +
        "</p>" +
        '<p class="fz-24">' +
        LastNameJa[p] +
        "&nbsp;" +
        FirstNames[p] +
        "</p>";
      const headerLogoPass =
        '<img class="header-logo" src="img/Profile/header-logo' +
        Pass[p] +
        '.jpg" alt="ヘッダーのロゴ">';
      const headerIconPass =
        '<img class="header-icon" src="img/Profile/header-icon' +
        Pass[p] +
        '.jpg" alt="ヘッダーのアイコン">';

      ChangeText.innerHTML = text;
      changeBigText.innerHTML = LastName;
      HeaderLogo.innerHTML = headerLogoPass;
      HeaderIcon.innerHTML = headerIconPass;

      if (p == 0) {
        changeImgClass.classList.remove(PassClass[11]);
      } else {
        changeImgClass.classList.remove(PassClass[p - 1]);
      }
      setTimeout(() => {
        changeImgClass.classList.add(PassClass[p]);
      }, 250);
    };

    const changeImgFunc = (a, b, c) => {
      const rightImgPass =
        '<img src="img/Profile/list_img' +
        Pass2[a - 1] +
        'm.jpg" class="peoplePage_img hover-img"  alt="スタッフの顔写真">';
      const centerImgPass =
        '<img src="img/Profile/list_img' +
        Pass2[b] +
        'm.jpg" class="peoplePage_img hover-img"   alt="スタッフの顔写真">';
      const leftImgPass =
        '<img  src="img/Profile/list_img' +
        Pass2[c + 1] +
        'm.jpg" class="peoplePage_img  hover-img center-img"  alt="スタッフの顔写真">';

      changeRightImg.innerHTML = rightImgPass;
      changeCenterImg.innerHTML = centerImgPass;
      changeLeftImg.innerHTML = leftImgPass;
    };

    const changeColorFunc = (z) => {
      MainBgColor.forEach((k) => {
        k.classList.add(ColorClass[z]);
      });
      SecondBgColor.forEach((k) => {
        k.style.backgroundColor = ThirdColor[z];
      });
      MainColor.forEach((k) => {
        k.style.color = Colors[z];
      });
      SecondColor.forEach((k) => {
        k.style.color = SecondColors[z];
      });
      BorderColor.forEach((k) => {
        k.style.borderColor = SecondColors[z];
      });

      if (window.matchMedia("(min-width: 1026px)").matches) {
        for (var i = 0; i < 4; i++) {
          parent.children[i].style.borderColor = SecondColors[z];
        }

        li[0].classList.add(BorderColorClass[z]);
        li[3].classList.add(BorderColorClass[z]);

        if (z == 0) {
          li[0].classList.remove(BorderColorClass[11]);
          li[3].classList.remove(BorderColorClass[11]);
        } else {
          li[0].classList.remove(BorderColorClass[z - 1]);
          li[3].classList.remove(BorderColorClass[z - 1]);
        }
      }

      if (window.matchMedia("(max-width: 1025px)").matches) {
        for (var i = 0; i < parent.children.length; i++) {
          parent.children[i].style.borderColor = SecondColors[z];
        }

        for (var i = 0; i < li.length; i++) {
          li[i].classList.add(BorderColorClass[z]);

          if (z == 0) {
            li[i].classList.remove(BorderColorClass[11]);
          } else {
            li[i].classList.remove(BorderColorClass[z - 1]);
          }
        }
      }
    };

    const ColorResetFunc = (a) => {
      MainBgColor.forEach((k) => {
        k.classList.remove(ColorClass[a]);
      });
    };

    const NumberFadeInFunc = () => {
      const children = ChangeNumber.children;

      children[0].classList.add("fadeIn");
      setTimeout(() => {
        children[1].classList.add("fadeIn");
      }, 120);
    };

    const NumberChangeFunc = (p) => {
      const stockList =
        '<span class="transform-loadーanim fadeIn">' +
        Number1[p] +
        "</span>" +
        '<span class="transform-loadーanim-delay fadeIn">' +
        Number2[p] +
        "</span>";
      ChangeNumber.innerHTML = stockList;
    };

    const imgFadeOutFunc = () => {
      peoplePageDivImgEarly.classList.add("fadeOut");
      peoplePageDivImg.forEach((e) => {
        e.classList.add("fadeOut");
      });
    };

    const imgFadeOutResetFunc = () => {
      peoplePageDivImgEarly.classList.remove("fadeOut");
      peoplePageDivImg.forEach((e) => {
        e.classList.remove("fadeOut");
      });
    };

    const zoomImgFunc = () => {
      changeRightImg.children[0].classList.add("zoomOut");
      changeLeftImg.children[0].classList.add("zoomOut");
      changeCenterImg.children[0].classList.add("zoomOut");
    };

    const NumberFadeOutFunc = () => {
      const children = ChangeNumber.children;
      children[0].classList.add("fadeOut");
      setTimeout(() => {
        children[1].classList.add("fadeOut");
      }, 120);
    };

    const NumberFadeOutResetFunc = () => {
      const children = ChangeNumber.children;
      children[0].classList.remove("fadeIn");
      children[1].classList.remove("fadeIn");
      children[0].classList.remove("fadeOut");
      children[1].classList.remove("fadeOut");
    };

    const miniTextFadeOutFunc = () => {
      opacityText.classList.add("fadeOut");
    };

    const miniTextFadeOutResetFunc = () => {
      opacityText.classList.remove("fadeOut");
    };

    const AllFadeOutFunc = () => {
      NumberFadeOutFunc();

      miniTextFadeOutFunc();

      imgFadeOutFunc();
    };

    const AllResetFunc = () => {
      peoplePageImgAnimEarlyReset();
      peoplePageImgAnimReset();
      miniTextFadeOutResetFunc();
      imgFadeOutResetFunc();
    };

    function showBoxes() {
      const box = document.querySelector(".observeTarget-textFixed");

      const triggerBottom = (window.innerHeight / 5) * 4;

      const boxTop = box.getBoundingClientRect().top;

      fixedText.forEach((e) => {
        if (boxTop > triggerBottom) {
          e.classList.add("fadeIn");
          e.style.opacity = 1;
        } else if (boxTop < triggerBottom && e.classList.contains("fadeIn")) {
          loadFirstFadeOut();
          setTimeout(() => {
            loadFirstReset();
          }, 500);
        }
      });
    }

    const ColorBoxTwoFunc = (p) => {
      if (window.matchMedia("(max-width: 1025px)").matches) {
        const ColorBox1 = ColorBox.children[0].firstElementChild;
        const ColorBox2 = ColorBox.children[1].firstElementChild;
        ColorBox1.classList.remove("change-bgColor-01");
        ColorBox2.classList.remove("change-bgColor-02");
        if (p == 0) {
          ColorBox1.classList.add(ColorClass[11]);
          ColorBox2.classList.add(ColorClass[1]);
          ColorBox1.classList.remove(ColorClass[10]);
          ColorBox2.classList.remove(ColorClass[0]);
        }
        if (p == 1) {
          ColorBox1.classList.add(ColorClass[p - 1]);
          ColorBox2.classList.add(ColorClass[p + 1]);
          ColorBox1.classList.remove(ColorClass[11]);
          ColorBox2.classList.remove(ColorClass[p]);
        }
        if (p == 11) {
          ColorBox1.classList.add(ColorClass[10]);
          ColorBox2.classList.add(ColorClass[0]);
          ColorBox1.classList.remove(ColorClass[9]);
          ColorBox2.classList.remove(ColorClass[11]);
        } else {
          ColorBox1.classList.add(ColorClass[p - 1]);
          ColorBox2.classList.add(ColorClass[p + 1]);
          ColorBox1.classList.remove(ColorClass[p + 2]);
          ColorBox1.classList.remove(ColorClass[p - 2]);
          ColorBox2.classList.remove(ColorClass[p]);
        }
      }
    };

    const BeforeColorBoxFunc = (p) => {
      if (window.matchMedia("(max-width: 1025px)").matches) {
        const ColorBox1 = ColorBox.children[0].firstElementChild;
        const ColorBox2 = ColorBox.children[1].firstElementChild;
        ColorBox1.classList.remove("change-bgColor-01");
        ColorBox2.classList.remove("change-bgColor-02");
        ColorBox1.classList.remove(ColorClass[p]);
        if (p == 0) {
          ColorBox1.classList.add(ColorClass[11]);
          ColorBox2.classList.add(ColorClass[p + 1]);
          ColorBox2.classList.remove(ColorClass[p + 2]);
        }
        if (p == 10) {
          ColorBox1.classList.add(ColorClass[p - 1]);
          ColorBox2.classList.add(ColorClass[p + 1]);
          ColorBox2.classList.remove(ColorClass[0]);
        }
        if (p == 11) {
          ColorBox1.classList.add(ColorClass[p - 1]);
          ColorBox2.classList.add(ColorClass[0]);
          ColorBox2.classList.remove(ColorClass[1]);
        } else {
          ColorBox1.classList.add(ColorClass[p - 1]);
          ColorBox2.classList.add(ColorClass[p + 1]);
          ColorBox2.classList.remove(ColorClass[p + 2]);
        }
      }
    };

    const ColorBoxResetFunc = (p) => {
      const ColorBox1 = ColorBox.children[0].firstElementChild;
      const ColorBox2 = ColorBox.children[1].firstElementChild;
      ColorBox1.classList.remove(ColorClass[p]);
      ColorBox2.classList.remove(ColorClass[p]);
    };

    const faviconFunc = (p) => {
      var obj = document.getElementById("fav");
      obj.href = `img/Profile/grid ${Pass[p]}.svg`;
    };

    const func = (e) => {
      const TopMove = () => {
        window.scroll({
          top: 0,
          instant: "smooth",
        });
      };

      const ColorLinkFirstAnimFunc = () => {
        const secondAnim = (n) => {
          links[n].style.transformOrigin = "center bottom";
          links[n].animate(
            {
              transform: ["scaleY(100%)", "scaleY(0)"],
            },
            {
              fill: "both",
              duration: 500,
              delay: n * 25,
              easing: "cubic-bezier(1, 0, 0, 1)",
            }
          );

          setTimeout(() => {
            links[n].parentElement.style.display = "none";
          }, 600);
        };

        for (var i = e + 1; i < links.length; i++) {
          secondAnim(i);
        }
        for (var i = 0; i < e; i++) {
          secondAnim(i);
        }
      };

      const ColorLinkSecondAnimFunc = () => {
        links[e].parentElement.animate(
          {
            left: ["calc(100% / 11 * (e-1))", "50%"],
            transform: [" translate(0%,-50%)", " translate(-50%,-50%)"],
          },
          {
            fill: "forwards",
            duration: 1000,
            easing: "cubic-bezier(1, 0, 0, 1)",
          }
        );
      };

      const ColorLinkThirdAnimFunc = () => {
        const imgFunc = (a, b, c, d) => {
          links[e].parentElement.animate(
            {
              width: [a, b],
              height: [c, d],
            },

            {
              fill: "forwards",
              duration: 1000,
              easing: "cubic-bezier(1, 0, 0, 1)",
            }
          );
        };

        if (window.matchMedia("(min-width: 1026px)").matches) {
          imgFunc(
            "30px",
            "calc((100vh * 0.52408))",
            "200px",
            "calc((100vh * 0.67))"
          );
        }

        if (window.matchMedia("(max-width: 1025px)").matches) {
          imgFunc("30px", "480px", "200px", "570px");
        }

        if (window.matchMedia("(max-width: 600px)").matches) {
          imgFunc(
            "20px",
            "calc((100vh * 0.3768267))",
            "100px",
            "calc((100vh * 0.4655172))"
          );
        }
      };

      const ulCenterFunc = () => {
        if (window.matchMedia("(max-width: 1025px)").matches) {
          ul.style.left = "50%";
        }
      };

      const opacityImgFunc = () => {
        links[e].firstElementChild.animate(
          {
            opacity: ["0", "1"],
          },

          {
            fill: "forwards",
            duration: 1000,
            easing: "ease-in-out",
          }
        );
      };

      const loadingFadeOutFunc = () => {
        test.animate(
          {
            opacity: ["1", "0"],
          },
          {
            fill: "forwards",
            duration: 1000,
            easing: "cubic-bezier(1, 0, 0, 1)",
          }
        );
      };

      const ColorLinkForwardAnimFunc = () => {
        links[e].firstElementChild.children[0].animate(
          {
            transform: ["scale(1.18,1.18)", "scale(1.0,1.0)"],
          },
          {
            fill: "forwards",
            duration: 5000,
            easing: "ease-in-out",
          }
        );
        links[e].firstElementChild.children[0].animate(
          {
            top: ["0", "0"],
          },
          {
            fill: "forwards",
            duration: 1,
            easing: "ease-in-out",
          }
        );
      };

      const zoomImgResetFunc = () => {
        changeRightImg.children[0].classList.remove("zoomOut");
        changeLeftImg.children[0].classList.remove("zoomOut");
        changeCenterImg.children[0].classList.remove("zoomOut");
      };

      const FirstChangeImg = () => {
        changeImgFunc(e, e, e);
        if (e == 11) {
          changeImgFunc(e, e, -1);
        }
        if (e == 0) {
          changeImgFunc(12, e, e);
        }
      };

      const fadeOutResetFunc = () => {
        NumberFadeOutResetFunc();

        miniTextFadeOutResetFunc();

        imgFadeOutResetFunc();
      };

      const loopResetFunc = () => {
        ZoomOutImgResetFunc();
        opacityText.classList.remove("fadeIn");
        peoplePageImgAnimEarlyReset();
        peoplePageImgAnimReset();
      };

      const sumFunc = async () => {
        faviconFunc(e);

        loadAnimPeoplePageResetFunc();

        links[e].classList.add("not-hover");

        changeTextFunc(e, e);

        changeColorFunc(e);

        TopMove();

        ColorBoxTwoFunc(e);

        ColorLinkFirstAnimFunc();
        centerImg.style.display = "none";

        await timer(10);

        FirstChangeImg();

        await timer(1000);

        ColorLinkSecondAnimFunc();

        await timer(1000);

        ul.style.position = "absolute";
        ul.style.width = "100%";
        ul.style.height = "100Vh";

        ColorLinkThirdAnimFunc();

        opacityImgFunc();

        loadingFadeOutFunc();

        await timer(500);

        ulCenterFunc();

        await timer(1000);

        test.style.display = "none";

        PlayScrollFunc();

        ul.style.zIndex = "0";
      };

      sumFunc();

      setTimeout(ColorLinkForwardAnimFunc, 3000);

      setTimeout(zoomImgFunc, 3000);

      var timeout1 = setTimeout(loadAnimMainPeoplePage, 3000);

      var timeout2 = setTimeout(() => {
        window.addEventListener("scroll", showBoxes);
        showBoxes();
        loadSecond();
      }, 3010);

      var timeout3 = setTimeout(() => {
        peoplePageImgAnimEarly();
      }, 3500);

      var timeout4 = setTimeout(() => {
        changeLeftImg.parentElement.classList.add("fadeIn");
      }, 3580);

      var timeout5 = setTimeout(() => {
        NumberFadeInFunc();
        NumberChangeFunc(e);
      }, 3000);

      var timeout6 = setTimeout(() => {
        links[e].style.backgroundColor = "transparent";
        loadFirstReset();
      }, 8100);

      var timeout7 = setTimeout(AllFadeOutFunc, 8100);

      var timeout8 = setTimeout(() => {
        links[e].classList.add("fadeOut");
        links[e].firstElementChild.animate(
          {
            top: ["0", "0"],
          },
          {
            fill: "forwards",
            duration: 1,
            easing: "ease-in-out",
          }
        );
      }, 8100);

      var timeout9 = setTimeout(() => {
        links[e].style.display = "none";
      }, 8600);

      var timeout10 = setTimeout(() => {
        fadeOutResetFunc();
        loopResetFunc();
        zoomImgResetFunc();
      }, 8600);

      var timeout11 = setTimeout(() => {
        if (e == 11) {
          changeFunc(0, 0);
          ColorBoxTwoFunc(0);
        } else {
          changeFunc(e + 1, e + 1);
          ColorBoxTwoFunc(e + 1);
        }
      }, 8100);

      var timeout12 = setTimeout(() => {
        opacityText.classList.add("fadeIn");
      }, 9600);

      const changeFunc = (i, p) => {
        var time0 = setTimeout(() => {
          for (var e = 0; e < colorBoxBtn.length; e++) {
            ColorResetFunc(e);
            changeImgClass.classList.remove(PassClass[e]);
          }
        }, 0);

        var time1 = setTimeout(() => {
          NumberFadeOutResetFunc();
          changeTextFunc(i, p);
        }, 10);

        var time2 = setTimeout(() => {
          changeColorFunc(i);
          faviconFunc(i);
        }, 10);

        var time3 = setTimeout(() => {
          window.addEventListener("scroll", showBoxes);
          showBoxes();
        }, 20);

        var time4 = setTimeout(() => {
          NumberFadeInFunc();
          NumberChangeFunc(i);
        }, 1500);

        var time5 = setTimeout(() => {
          peoplePageImgAnimEarly();
        }, 2500);

        var time6 = setTimeout(() => {
          peoplePageImgAnim();
        }, 2580);

        var time7 = setTimeout(() => {
          changeImgFunc(i, i, i);
          if (i == 0) {
            changeImgFunc(12, 0, 0);
          }
          if (i == 11) {
            changeImgFunc(11, 11, -1);
          }
        }, 2000);

        var time8 = setTimeout(() => {
          changeRightImg.firstElementChild.animate(
            {
              transform: ["scale(1.18,1.18)", "scale(1.0,1.0)"],
              top: ["0", "0"],
            },
            {
              fill: "forwards",
              duration: 5000,
              easing: "ease-in-out",
            }
          );

          changeLeftImg.firstElementChild.animate(
            {
              transform: ["scale(1.18,1.18)", "scale(1.0,1.0)"],
              top: ["0", "0"],
            },
            {
              fill: "forwards",
              duration: 5000,
              easing: "ease-in-out",
            }
          );

          changeCenterImg.firstElementChild.animate(
            {
              transform: ["scale(1.18,1.18)", "scale(1.0,1.0)"],
              top: ["0", "0"],
            },
            {
              fill: "forwards",
              duration: 5000,
              easing: "ease-in-out",
            }
          );
        }, 2300);

        var time9 = setTimeout(() => {
          AllFadeOutFunc();
          loadFirstReset();

          if (i == 11) {
            changeColorFunc(0);
            faviconFunc(0);
            ColorBoxTwoFunc(0);
            ColorResetFunc(11);
            changeTextFunc(0, 0);
          } else {
            changeColorFunc(i + 1);
            faviconFunc(i + 1);
            ColorBoxTwoFunc(i + 1);
            ColorResetFunc(i);
            changeTextFunc(i + 1, i + 1);
          }
        }, 7300);

        var time10 = setTimeout(() => {
          window.addEventListener("scroll", showBoxes);
          showBoxes();
        }, 7320);

        var time11 = setTimeout(() => {
          fadeOutResetFunc();
          loopResetFunc();
        }, 7800);

        const IntervalAnim = () => {
          let count = i + 1;
          if (count > 11) {
            count = 0;
          }

          const countUp = () => {
            var time00 = setTimeout(() => {
              changeImgFunc(count, count, count);
              if (count == 11) {
                changeImgFunc(11, 11, -1);
              }
              if (count == 0) {
                changeImgFunc(12, 0, 0);
              }
            }, 10);

            var time01 = setTimeout(() => {
              opacityText.classList.add("fadeIn");
              NumberFadeInFunc();
              NumberChangeFunc(count);
            }, 500);

            var time02 = setTimeout(() => {
              zoomImgFunc();
              peoplePageImgAnimEarly();
            }, 1000);

            var time03 = setTimeout(() => {
              peoplePageImgAnim();
            }, 1080);

            var time04 = setTimeout(() => {
              AllFadeOutFunc();
              count++;
              if (count > 11) {
                count = 0;
              }

              loadFirstReset();
              changeTextFunc(count, count);

              if (count == 0) {
                changeColorFunc(0);
                faviconFunc(0);
                ColorBoxTwoFunc(0);
                ColorResetFunc(11);
              } else {
                changeColorFunc(count);
                faviconFunc(count);
                ColorBoxTwoFunc(count);
                ColorResetFunc(count - 1);
              }
            }, 5100);

            var time05 = setTimeout(() => {
              window.addEventListener("scroll", showBoxes);
              showBoxes();
            }, 5120);

            var time06 = setTimeout(() => {
              fadeOutResetFunc();
              loopResetFunc();
              zoomImgResetFunc();
            }, 5700);

            const resetTimeFunc = () => {
              clearTimeout(time00);
              clearTimeout(time01);
              clearTimeout(time02);
              clearTimeout(time03);
              clearTimeout(time04);
              clearTimeout(time05);
              clearTimeout(time06);
            };

            for (let i = 0; i < scrollBtn.length; i++) {
              const href = scrollBtn[i].getAttribute("href");
              scrollBtn[i].addEventListener("click", () => {
                if (
                  href == "#people" ||
                  href == "#talk" ||
                  href == "#top" ||
                  href == "#people2" ||
                  href == "#talk2" ||
                  href == "#top2" ||
                  href == "#top3"
                ) {
                  resetTimeFunc();
                }
              });
            }

            for (let i = 0; i < colorBoxBtn.length; i++) {
              colorBoxBtn[i].addEventListener("click", () => {
                resetTimeFunc();
              });
            }
          };

          var interval = setInterval(countUp, 6180);

          for (let i = 0; i < scrollBtn.length; i++) {
            const href = scrollBtn[i].getAttribute("href");
            scrollBtn[i].addEventListener("click", () => {
              if (
                href == "#people" ||
                href == "#talk" ||
                href == "#top" ||
                href == "#people2" ||
                href == "#talk2" ||
                href == "#top2" ||
                href == "#top3"
              ) {
                clearInterval(interval);
              }
            });
          }

          for (let i = 0; i < colorBoxBtn.length; i++) {
            colorBoxBtn[i].addEventListener("click", () => {
              clearInterval(interval);
            });
          }
        };

        var time12 = setTimeout(IntervalAnim, 1620);

        const clearAllFunc = () => {
          clearTimeout(time0);
          clearTimeout(time1);
          clearTimeout(time2);
          clearTimeout(time3);
          clearTimeout(time4);
          clearTimeout(time5);
          clearTimeout(time6);
          clearTimeout(time7);
          clearTimeout(time8);
          clearTimeout(time9);
          clearTimeout(time10);
          clearTimeout(time11);
          clearTimeout(time12);
        };

        for (let i = 0; i < scrollBtn.length; i++) {
          const href = scrollBtn[i].getAttribute("href");
          scrollBtn[i].addEventListener("click", () => {
            if (
              href == "#people" ||
              href == "#talk" ||
              href == "#top" ||
              href == "#people2" ||
              href == "#talk2" ||
              href == "#top2" ||
              href == "#top3"
            ) {
              clearAllFunc();
            }
          });
        }

        for (let i = 0; i < colorBoxBtn.length; i++) {
          colorBoxBtn[i].addEventListener("click", () => {
            clearAllFunc();
          });
        }
      };

      for (let i = 0; i < scrollBtn.length; i++) {
        const href = scrollBtn[i].getAttribute("href");
        scrollBtn[i].addEventListener("click", () => {
          const RandomIndex = Math.floor(Math.random() * links.length);
          const clickResetFunc = () => {
            body.classList.remove("active");
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            clearTimeout(timeout7);
            clearTimeout(timeout8);
            clearTimeout(timeout9);
            clearTimeout(timeout10);
            clearTimeout(timeout11);
            clearTimeout(timeout12);
            loadAnimPeoplePageResetFunc();
            for (var i = 0; i < colorBoxBtn.length; i++) {
              ColorBoxResetFunc(i);
            }
            ColorBoxTwoFunc(RandomIndex);
            links[e].style.display = "none";

            setTimeout(() => {
              fadeOutResetFunc();
              loopResetFunc();
            }, 10);
            setTimeout(() => {
              loadSecond();
            }, 1500);
          };

          if (href == "#people" || href == "#people2") {
            clickResetFunc();
            changeFunc(RandomIndex, 13);
          }
          if (href == "#talk" || href == "#talk2") {
            clickResetFunc();
            changeFunc(RandomIndex, 14);
          }
          if (href == "#top" || href == "#top2" || href == "#top3") {
            clickResetFunc();
            changeFunc(RandomIndex, 12);
          }
        });
      }

      for (let i = 0; i < colorBoxBtn.length; i++) {
        colorBoxBtn[i].addEventListener("click", () => {
          let colorBoxBtn_array = [].slice.call(colorBoxBtn);
          let Btn_index = colorBoxBtn_array.indexOf(colorBoxBtn[i]);

          clearTimeout(timeout1);
          clearTimeout(timeout2);
          clearTimeout(timeout3);
          clearTimeout(timeout4);
          clearTimeout(timeout5);
          clearTimeout(timeout6);
          clearTimeout(timeout7);
          clearTimeout(timeout9);
          clearTimeout(timeout10);
          clearTimeout(timeout11);
          clearTimeout(timeout12);
          clearTimeout(time1);
          clearTimeout(time2);
          clearTimeout(time3);
          AllFadeOutFunc();
          loadFirstReset();
          links[e].style.backgroundColor = "transparent";

          var time1 = setTimeout(() => {
            links[e].style.opacity = 0;
          }, 400);

          var time2 = setTimeout(() => {
            fadeOutResetFunc();
            loopResetFunc();
          }, 500);

          var time3 = setTimeout(() => {
            opacityText.classList.add("fadeIn");
          }, 1500);

          setTimeout(() => {
            links[e].classList.add("fadeOut");
            links[e].firstElementChild.animate(
              {
                top: ["0", "0"],
              },
              {
                fill: "forwards",
                duration: 1,
                easing: "ease-in-out",
              }
            );
          }, 100);

          if (window.matchMedia("(min-width: 1026px)").matches) {
            changeFunc(Btn_index, Btn_index);
          }

          if (window.matchMedia("(max-width: 1025px)").matches) {
            const ColorBox = colorBoxBtn[i].firstElementChild;
            const getColor = getComputedStyle(ColorBox).backgroundColor;
            let ColorBox_index = rgb.indexOf(getColor);
            changeFunc(ColorBox_index, ColorBox_index);

            if (Btn_index == 1) {
              setTimeout(() => {
                ColorBoxTwoFunc(ColorBox_index);
              }, 10);
            }
            if (Btn_index == 0) {
              setTimeout(() => {
                BeforeColorBoxFunc(ColorBox_index);
              }, 10);
            }
          }
        });
      }
    };

    const hashLoadFunc = (i) => {
      NumberFadeOutResetFunc();
      var time1 = setTimeout(() => {
        changeColorFunc(i);
        faviconFunc(i);
      }, 10);

      var time2 = setTimeout(() => {
        NumberFadeInFunc();
        NumberChangeFunc(i);
      }, 1000);

      var time3 = setTimeout(() => {
        changeImgFunc(i, i, i);
        if (i == 0) {
          changeImgFunc(12, i, i);
        }
        if (i == 11) {
          changeImgFunc(i, i, -1);
        }
      }, 1000);

      var time4 = setTimeout(() => {
        changeRightImg.firstElementChild.animate(
          {
            transform: ["scale(1.18,1.18)", "scale(1.0,1.0)"],
            top: ["0", "0"],
          },
          {
            fill: "forwards",
            duration: 5000,
            easing: "ease-in-out",
          }
        );

        changeLeftImg.firstElementChild.animate(
          {
            transform: ["scale(1.18,1.18)", "scale(1.0,1.0)"],
            top: ["0", "0"],
          },
          {
            fill: "forwards",
            duration: 5000,
            easing: "ease-in-out",
          }
        );

        changeCenterImg.firstElementChild.animate(
          {
            transform: ["scale(1.18,1.18)", "scale(1.0,1.0)"],
            top: ["0", "0"],
          },
          {
            fill: "forwards",
            duration: 5000,
            easing: "ease-in-out",
          }
        );
      }, 2000);

      var time5 = setTimeout(() => {
        AllFadeOutFunc();
      }, 6000);

      var time6 = setTimeout(() => {
        loadFirstReset();
        ColorResetFunc(i);
        changeTextFunc(i + 1, i + 1);

        if (i == 11) {
          changeTextFunc(0, 0);
        }
        loadFirstReset();
      }, 6000);

      var time7 = setTimeout(() => {
        faviconFunc(i + 1);
        changeColorFunc(i + 1);
        ColorBoxTwoFunc(i + 1);
        if (i == 11) {
          faviconFunc(0);
          changeColorFunc(0);
          ColorBoxTwoFunc(0);
        }
      }, 6010);

      var time8 = setTimeout(() => {
        window.addEventListener("scroll", showBoxes);
        showBoxes();
      }, 6020); //◎

      var time9 = setTimeout(() => {
        changeCenterImg.firstElementChild.style.opacity = 0;
      }, 6400);

      setTimeout(() => {
        IntervalAnim();
      }, 0);

      const resetTimeFunc = () => {
        clearTimeout(time1);
        clearTimeout(time2);
        clearTimeout(time3);
        clearTimeout(time4);
        clearTimeout(time5);
        clearTimeout(time6);
        clearTimeout(time7);
        clearTimeout(time8);
        clearTimeout(time9);
      };

      for (let i = 0; i < scrollBtn.length; i++) {
        const href = scrollBtn[i].getAttribute("href");
        scrollBtn[i].addEventListener("click", () => {
          if (
            href == "#people" ||
            href == "#talk" ||
            href == "#top" ||
            href == "#people2" ||
            href == "#talk2" ||
            href == "#top2" ||
            href == "#top3"
          ) {
            resetTimeFunc();
          }
        });
      }

      for (let i = 0; i < colorBoxBtn.length; i++) {
        colorBoxBtn[i].addEventListener("click", () => {
          resetTimeFunc();
        });
      }

      const IntervalAnim = () => {
        let count = i + 1;
        if (count > 11) {
          count = 0;
        }

        const countUp = () => {
          var time00 = setTimeout(() => {
            opacityText.classList.remove("fadeIn");
            NumberFadeOutResetFunc();
          }, 0);

          var time01 = setTimeout(() => {
            AllResetFunc();
            changeImgFunc(count, count, count);
            if (count == 0) {
              changeImgFunc(12, count, count);
            }
            if (count == 11) {
              changeImgFunc(count, count, 0);
            }
          }, 500);

          var time02 = setTimeout(() => {
            opacityText.classList.add("fadeIn");
          }, 500);

          var time03 = setTimeout(() => {
            NumberFadeInFunc();
            NumberChangeFunc(count);
          }, 500);

          var time04 = setTimeout(() => {
            zoomImgFunc();
          }, 1500);

          var time05 = setTimeout(() => {
            peoplePageImgAnimEarly();
          }, 1500);

          var time06 = setTimeout(() => {
            peoplePageImgAnim();
          }, 1580);

          var time07 = setTimeout(() => {
            AllFadeOutFunc();
            ColorResetFunc(count);
          }, 6500);

          var time08 = setTimeout(() => {
            count++;
            if (count > 11) {
              count = 0;
            }
            changeColorFunc(count);
            faviconFunc(count);
            ColorBoxTwoFunc(count);
            changeTextFunc(count, count);
            loadFirstReset();
          }, 6510);

          var time09 = setTimeout(() => {
            window.addEventListener("scroll", showBoxes);
            showBoxes();
          }, 6530);

          const resetLoopTimeFunc = () => {
            clearTimeout(time00);
            clearTimeout(time01);
            clearTimeout(time02);
            clearTimeout(time03);
            clearTimeout(time04);
            clearTimeout(time05);
            clearTimeout(time06);
            clearTimeout(time07);
            clearTimeout(time08);
            clearTimeout(time09);
          };

          for (let i = 0; i < scrollBtn.length; i++) {
            const href = scrollBtn[i].getAttribute("href");
            scrollBtn[i].addEventListener("click", () => {
              if (
                href == "#people" ||
                href == "#talk" ||
                href == "#top" ||
                href == "#people2" ||
                href == "#talk2" ||
                href == "#top2" ||
                href == "#top3"
              ) {
                resetLoopTimeFunc();
              }
            });
          }

          for (let i = 0; i < colorBoxBtn.length; i++) {
            colorBoxBtn[i].addEventListener("click", () => {
              resetLoopTimeFunc();
            });
          }
        };

        var interval = setInterval(countUp, 7000);

        for (let i = 0; i < scrollBtn.length; i++) {
          const href = scrollBtn[i].getAttribute("href");
          scrollBtn[i].addEventListener("click", () => {
            if (
              href == "#people" ||
              href == "#talk" ||
              href == "#top" ||
              href == "#people2" ||
              href == "#talk2" ||
              href == "#top2" ||
              href == "#top3"
            ) {
              clearInterval(interval);
            }
          });
        }

        for (let i = 0; i < colorBoxBtn.length; i++) {
          colorBoxBtn[i].addEventListener("click", () => {
            clearInterval(interval);
          });
        }
      };
    };

    window.addEventListener("DOMContentLoaded", function () {
      let sample_array = [].slice.call(links);
      const RandomIndex = Math.floor(Math.random() * links.length);
      const RandomIndex2 = Math.floor(Math.random() * links.length);
      changeTextColor.style.color = Colors[RandomIndex2];
      faviconFunc(RandomIndex2);

      var timeout_id = null;

      timeout_id = setTimeout(() => {
        func(RandomIndex);
        faviconFunc(RandomIndex);
      }, 10000);

      if (urlHash) {
        const PlayScrollFunc = () => {
          document.removeEventListener("touchmove", noscroll, {
            passive: false,
          });
          document.removeEventListener("wheel", noscroll, { passive: false });
        };

        PlayScrollFunc();
        const loadingAnimation = document.querySelector(".loading-animation");
        const target = document.querySelector(".color-link");
        loadingAnimation.style.display = "none";
        target.style.display = "none";
        clearTimeout(timeout_id);
        hashLoadFunc(RandomIndex);
        ColorBoxTwoFunc(RandomIndex);
        if (urlHash == "#nav2") {
          changeTextFunc(RandomIndex, 12);
        }
        if (urlHash == "#people" || urlHash == "#people2") {
          changeTextFunc(RandomIndex, 13);
        }
        if (urlHash == "#talk" || urlHash == "#talk2") {
          changeTextFunc(RandomIndex, 14);
        }

        for (let i = 0; i < scrollBtn.length; i++) {
          const href = scrollBtn[i].getAttribute("href");
          scrollBtn[i].addEventListener("click", () => {
            const RandomIndex2 = Math.floor(Math.random() * links.length);

            const clickFunc = () => {
              body.classList.remove("active");
              for (var e = 0; e < colorBoxBtn.length; e++) {
                ColorResetFunc(e);
                ColorBoxResetFunc(e);
                changeImgClass.classList.remove(PassClass[e]);
              }

              loadAnimPeoplePageResetFunc();
              hashLoadFunc(RandomIndex2);
              ColorBoxTwoFunc(RandomIndex2);
              loadFirstReset();
              var time1 = setTimeout(() => {
                window.addEventListener("scroll", showBoxes);
                showBoxes();
              }, 20);

              var time2 = setTimeout(() => {
                loadSecond();
              }, 1000);

              var time3 = setTimeout(() => {
                peoplePageImgAnimEarly();
              }, 2000);

              var time4 = setTimeout(() => {
                peoplePageImgAnim();
              }, 2080);
            };

            if (href == "#top" || href == "#top2" || href == "#top3") {
              clickFunc();
              changeTextFunc(RandomIndex2, 12);
            }
            if (href == "#people" || href == "#people2") {
              clickFunc();
              changeTextFunc(RandomIndex2, 13);
            }
            if (href == "#talk" || href == "#talk2") {
              clickFunc();
              changeTextFunc(RandomIndex2, 14);
            }
          });
        }

        for (let i = 0; i < colorBoxBtn.length; i++) {
          colorBoxBtn[i].addEventListener("click", () => {
            let colorBoxBtn_array = [].slice.call(colorBoxBtn);
            let Btn_index = colorBoxBtn_array.indexOf(colorBoxBtn[i]);
            clearTimeout(time1);
            clearTimeout(time2);
            clearTimeout(time3);
            clearTimeout(time4);
            clearTimeout(time5);
            loadFirstReset();
            AllFadeOutFunc();
            setTimeout(() => {
              links[e].classList.add("fadeOut");
              links[e].firstElementChild.animate(
                {
                  top: ["0", "0"],
                },
                {
                  fill: "forwards",
                  duration: 1,
                  easing: "ease-in-out",
                }
              );
            }, 100);

            for (var e = 0; e < colorBoxBtn.length; e++) {
              ColorResetFunc(e);
            }

            if (window.matchMedia("(min-width: 1026px)").matches) {
              hashLoadFunc(Btn_index);
              ColorBoxTwoFunc(Btn_index);
              changeTextFunc(Btn_index, Btn_index);
            }

            if (window.matchMedia("(max-width: 1025px)").matches) {
              const ColorBox = colorBoxBtn[i].firstElementChild;
              const getColor = getComputedStyle(ColorBox).backgroundColor;
              let ColorBox_index = rgb.indexOf(getColor);
              hashLoadFunc(ColorBox_index);
              changeTextFunc(ColorBox_index, ColorBox_index);
              if (Btn_index == 1) {
                setTimeout(() => {
                  ColorBoxTwoFunc(ColorBox_index);
                }, 10);
              }
              if (Btn_index == 0) {
                setTimeout(() => {
                  BeforeColorBoxFunc(ColorBox_index);
                }, 10);
              }
            }

            var time1 = setTimeout(() => {
              window.addEventListener("scroll", showBoxes);
              showBoxes();
            }, 20);

            var time2 = setTimeout(() => {
              AllResetFunc();
              opacityText.classList.remove("fadeIn");
            }, 500);

            var time3 = setTimeout(() => {
              opacityText.classList.add("fadeIn");
            }, 1000);

            var time4 = setTimeout(() => {
              peoplePageImgAnimEarly();
            }, 2000);

            var time5 = setTimeout(() => {
              peoplePageImgAnim();
            }, 2080);
          });
        }
      }

      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", () => {
          clearTimeout(timeout_id);
          let get_index = sample_array.indexOf(links[i]);
          func(get_index);
        });
      }
    });

    const scrollBtn = document.querySelectorAll('a[href^="#"]');
    const headerHeight = document.querySelector("header").offsetHeight;
    const urlHash = location.hash;
    const changeText = document.querySelector(".js-change-text");

    for (let i = 0; i < scrollBtn.length; i++) {
      scrollBtn[i].addEventListener("click", (e) => {
        e.preventDefault();

        const href = scrollBtn[i].getAttribute("href");
        const target = document.getElementById(href.replace("#", ""));
        const position =
          window.pageYOffset +
          target.getBoundingClientRect().top -
          headerHeight;
        const transformLeft = document.querySelector(".div-transform-left");
        const scrollTop = () => {
          window.scroll({
            top: 0,
            instant: "smooth",
          });
        };
        const scrollPosition = () => {
          window.scroll({
            top: position,
            behavior: "smooth",
          });
        };

        const TopPositionFunc = async () => {
          loadAnimResetFunc();
          await timer(100);
          asyncFunc();
        };
        const TopPositionAnotherFunc = async () => {
          loadAnimAnotherPageResetFunc();
          await timer(100);
          asyncFunc();
          anotherImgFunc();
        };

        if (
          href == "#people" ||
          href == "#talk" ||
          href == "#top" ||
          href == "#people2" ||
          href == "#talk2"
        ) {
          setTimeout(() => {
            scrollTop();
          }, 500);
          setTimeout(() => {
            scrollPosition();
          }, 2100);
        } else if (href == "#top2") {
          TopPositionFunc();
        } else if (href == "#top3") {
          TopPositionAnotherFunc();
        } else {
          scrollPosition();
        }

        if (href == "#people" || href == "#people2") {
          changeText.innerHTML = "<span>PEOPLE</span>";
        } else if (href == "#talk" || href == "#talk2") {
          changeText.innerHTML = "<span>TALK</span>";
        } else if (href == "#top") {
          changeText.innerHTML = "<span>COLOR&nbsp;12</span>";
        }

        if (href == "#people" || href == "#talk") {
          setTimeout(() => {
            transformLeft.classList.remove("fadeOut");
            transformLeft.classList.remove("fadeIn");
          }, 500);
        }
      });
    }

    window.addEventListener("DOMContentLoaded", () => {
      if (urlHash) {
        setTimeout(() => {
          window.scrollTo({ top: 0 }, 0);
        });
      }
      setTimeout(() => {
        const urlTarget = document.getElementById(urlHash.replace("#", ""));
        const urlPosition =
          window.pageYOffset +
          urlTarget.getBoundingClientRect().top -
          headerHeight;
        window.scroll({
          top: urlPosition,
          behavior: "smooth",
        });
      }, 2000);
    });
  }
}
