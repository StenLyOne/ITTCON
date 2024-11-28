import React, { useEffect, useRef } from "react";
import styles from "./AboutUsNumbers.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutUsNumbersContainer() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]); // Массив для хранения рефов чисел

  const numbersData = [
    { name: "Forest Land", number: "1,500 ha" },
    { name: "Green investments", number: "€40M" },
    { name: "Reforestation trees", number: "2,25M" },
    { name: "40’ Containers loaded", number: "10k+" },
    { name: "Truck loads", number: "12,000" },
    { name: "Trains loaded", number: "€40M" },
    { name: "EUDR Compliance", number: "95%" },
    { name: "Continents Served", number: "4" },
  ];

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const triggers = [];

    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      onEnter: () => {
        itemsRef.current.forEach((item) => {
          if (!item) return;

          const numberElement = item.querySelector(`.${styles.numbersNumber}`);
          if (!numberElement) return;

          const targetText = numberElement.textContent.trim();

          // Обновлённое регулярное выражение для чисел с запятыми и префиксами
          const match = targetText.match(/^([^\d]*)([\d,\.]+)(.*)$/);
          if (!match) return;

          const prefix = match[1] || ""; // Префикс (например, €)
          const numericValue = parseFloat(match[2].replace(/,/g, "")); // Преобразуем число, удаляя запятые
          const suffix = match[3] || ""; // Суффикс (например, ha, M)

          // GSAP анимация
          const animation = gsap.to(
            { value: 0 },
            {
              value: numericValue,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                const currentValue = Math.round(this.targets()[0].value);
                numberElement.textContent = `${prefix}${currentValue.toLocaleString()}${suffix}`;
              },
            }
          );

          triggers.push(animation);
        });
      },
      once: true,
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* Первая группа чисел */}
      <div className={styles.numbersContainerItems}>
        <div className={`${styles.numbersItems} ${styles.numbersLeft}`}></div>
        <div className={styles.numbersItemsWrapper}>
          {numbersData.slice(0, 2).map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={styles.container}
            >
              <p className={`black-color ${styles.numbersName}`}>{item.name}</p>
              <p className={`black-color ${styles.numbersNumber}`}>
                {item.number}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.numbersItemsWrapper}>
          {numbersData.slice(2, 4).map((item, index) => (
            <div
              key={index + 2}
              ref={(el) => (itemsRef.current[index + 2] = el)}
              className={styles.container}
            >
              <p className={`black-color ${styles.numbersName}`}>{item.name}</p>
              <p className={`black-color ${styles.numbersNumber}`}>
                {item.number}
              </p>
            </div>
          ))}
        </div>
        <div className={`${styles.numbersItems} ${styles.numbersRight}`}></div>
      </div>

      {/* Вторая группа чисел */}
      <div className={styles.numbersContainerItems}>
        <div className={`${styles.numbersItems} ${styles.numbersLeft}`}></div>
        <div className={styles.numbersItemsWrapper}>
          {numbersData.slice(4, 6).map((item, index) => (
            <div
              key={index + 4}
              ref={(el) => (itemsRef.current[index + 4] = el)}
              className={styles.container}
            >
              <p className={`black-color ${styles.numbersName}`}>{item.name}</p>
              <p className={`black-color ${styles.numbersNumber}`}>
                {item.number}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.numbersItemsWrapper}>
          {numbersData.slice(6).map((item, index) => (
            <div
              key={index + 6}
              ref={(el) => (itemsRef.current[index + 6] = el)}
              className={styles.container}
            >
              <p className={`black-color ${styles.numbersName}`}>{item.name}</p>
              <p className={`black-color ${styles.numbersNumber}`}>
                {item.number}
              </p>
            </div>
          ))}
        </div>
        <div className={`${styles.numbersItems} ${styles.numbersRight}`}></div>
      </div>
    </div>
  );
}

export default AboutUsNumbersContainer;
