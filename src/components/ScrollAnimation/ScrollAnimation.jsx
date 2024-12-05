import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({
  children,
  animationProps,
  triggerProps,
  y = 30,
  blur = 0,
  clearProps = "all", // Указываем, какие стили нужно очистить
}) => {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false); // Флаг для отслеживания, запускалась ли анимация
  if (!children) {
    console.error("ScrollAnimation requires valid children.");
    return null;
  }
  useEffect(() => {
    if (hasAnimated.current) return; // Если анимация уже запускалась, ничего не делаем

    let animation = null; // Инициализируем переменную
    try {
      const element = elementRef.current;

      animation = gsap.fromTo(
        element,
        { opacity: 0, y: y },
        {
          opacity: 1,
          y: 0,
          blur: blur,
          ...animationProps,
          onComplete: () => {
            hasAnimated.current = true; // Отмечаем, что анимация завершена
            if (clearProps) {
              gsap.set(element, { clearProps }); // Удаляем указанные стили
            }
          },
          scrollTrigger: {
            trigger: element,
            start: "top bottom", // Начать, когда верх элемента достигает нижней части окна
            end: "top bottom", // Закончить, когда нижняя часть элемента достигает верхней части окна
            toggleActions: "play none none none",
            once: true,
            ...triggerProps,
          },
        }
      );
    } catch (error) {
      console.error("ScrollTrigger Error:", error);
    }

    // Возвращаем функцию очистки
    return () => {
      if (animation) {
        animation.scrollTrigger?.kill();
        animation.kill();
      }
    };
  }, [animationProps, triggerProps, y, clearProps]);

  // return (
  //   <div className="scroll-animation" ref={elementRef}>
  //     {children}
  //   </div>
  // );
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ref: elementRef });
  } else {
    console.error(
      "ScrollAnimation requires a valid React element as children."
    );
    return <div ref={elementRef}>{children}</div>;
  }
};

export default ScrollAnimation;
