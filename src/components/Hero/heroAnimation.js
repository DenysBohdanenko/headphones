import gsap from "gsap";

const heroAnimation = () => {
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.from(".hero__title", {
    x: 30,
    opacity: 0,
  })
    .from(".hero__subtitle", { x: -30, opacity: 0 }, "-=0.8")
    .from(".hero__button", { y: 20, opacity: 0 }, "-=0.7");
};
export default heroAnimation;
