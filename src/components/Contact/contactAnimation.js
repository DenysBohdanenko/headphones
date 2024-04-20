import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const contactAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".contact__title", {
    scrollTrigger: {
      trigger: ".contact",
      start: "-10% center",
      end: "+=150px",
    },
    y: -30,
    opacity: 0,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact__title",
      start: "180% center",
      end: "+=250px",
    },
  });
  tl.from("fieldset", {
    x: 30,
    opacity: 0,
    stagger: 0.2,
  }).from("button[type]", {
    y: 30,
    opacity: 0,
  });
};
