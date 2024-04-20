import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const resultsAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".results__title", {
    scrollTrigger: {
      trigger: ".results",
      start: "-10% center",
      end: "+=150px",
    },
    y: -30,
    opacity: 0,
  });

  gsap.from(".results__text", {
    scrollTrigger: {
      trigger: ".results",
      start: "top center",
      end: "+=250px",
    },
    y: 30,
    opacity: 0,
  });

  let resultItems = document.querySelectorAll(".results__item");
  resultItems.forEach((item) => {
    let count = item.getAttribute("data-count");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "30% bottom",
        end: "+=250px",
      },
    });
    tl.to(item.querySelector(".results__item-title"), {
      innerText: count,
      duration: 1,
      snap: {
        innerText: 1,
      },
    });
  });
};

export default resultsAnimation;
