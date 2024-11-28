import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({
  children,
  animationProps,
  triggerProps,
  y = 50,
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const animation = gsap.fromTo(
      element,
      { opacity: 0, y: y },
      {
        opacity: 1,
        y: 0,
        ...animationProps,
        scrollTrigger: {
          trigger: element,
          start: "top bottom", // Начать, когда верх элемента достигает нижней части окна
          end: "bottom top", // Закончить, когда нижняя часть элемента достигает верхней части окна
          toggleActions: "play none none none",
          once: true,
          ...triggerProps,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [animationProps, triggerProps]);

  return <div ref={elementRef}>{children}</div>;
};

export default ScrollAnimation;
