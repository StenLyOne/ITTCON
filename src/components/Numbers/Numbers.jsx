import React, { useEffect, useRef } from "react";
import "./Numbers.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Number() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const triggers = []; // Сохраняем все созданные триггеры

    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      onEnter: () => {
        itemsRef.current.forEach((item) => {
          if (!item) return;

          const numberElement = item.querySelector(".numbers-number");
          if (!numberElement) return;

          const targetText = numberElement.textContent.trim();
          const match = targetText.match(/^(\d+)(\D*)$/);
          if (!match) return;

          const numericValue = parseInt(match[1], 10);
          const suffix = match[2] || "";

          // GSAP анимация
          const animation = gsap.to(
            { value: 0 },
            {
              value: numericValue,
              duration: 2,
              ease: "power2.out",
              onUpdate: function() {
                const currentValue = Math.round(this.targets()[0].value);
                numberElement.textContent = `${currentValue}${suffix}`;
              },
            }
          );

          triggers.push(animation); // Добавляем анимацию в список
        });
      },
      once: true,
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill()); // Удаляем только эти триггеры
    };
  }, []);

  return (
    <div className="numbers-container-items" ref={containerRef}>
      {[
        { name: "Wood Sold", value: "360k M³" },
        { name: "Partners", value: "47+" },
        { name: "Countries", value: "20+" },
        { name: "Years of Experience", value: "10+" },
      ].map((item, index) => (
        <div
          className="numbers-item"
          key={index}
          ref={(el) => (itemsRef.current[index] = el)} // Привязка элементов
        >
          <p className="numbers-name">{item.name}</p>
          <p className="numbers-number">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Number;
