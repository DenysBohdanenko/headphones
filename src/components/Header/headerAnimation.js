import gsap from "gsap";

export const headerAnimation = () => {
  const viewportWidth = window.innerWidth;
  const tl = gsap.timeline({ defaults: { delay: 0.8 } });
  tl.from(".header__logo", { y: -20, opacity: 0 });
  if (viewportWidth > 768) {
    tl.from(
      ".header__nav-link",
      {
        y: -20,
        opacity: 0,
        stagger: 0.15,
      },
      "-=1.5"
    );
  } else {
    tl.from(".header", { y: 5, opacity: 0, delay: 0 }).from(
      ".burger",
      {
        x: 20,
        opacity: 0,
      },
      "-=1.1"
    );
  }
};
