import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const aboutAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".about__title", {
    scrollTrigger: {
      trigger: ".about",
      start: "-10% center",
      end: "+=150px",
    },
    y: -30,
    opacity: 0,
  });

  gsap.from(".about__text", {
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "+=250px",
    },
    y: 30,
    opacity: 0,
  });

  const aboutItems = document.querySelectorAll(".about__item");
  aboutItems.forEach((item) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "30% bottom",
        end: "+=250px",
      },
    });

    tl.from(item.querySelector("img"), {
      transform: "rotateY(90deg)",
    })
      .from(item.querySelector(".about__item-title"), {
        y: 30,
        opacity: 0,
      })
      .from(item.querySelector(".about__item-text"), {
        y: 30,
        opacity: 0,
      });
  });
};

export default aboutAnimation;
