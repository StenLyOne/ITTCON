import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Projects.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Together from "../../components/Together/Together";
import { useProject } from "../../context/ProjectContext";

function Project() {
  const { selectedProjectIndex } = useProject(0); // Получите выбранный индекс
  const [jsonData, setJsonData] = useState([]);
  const navigate = useNavigate(); // Инициализируем хук

  const handleClick = (path) => {
    if (path) {
      navigate(path); // Переключаемся на указанный путь
      // Убедитесь, что ваш элемент с id "main" присутствует на странице
      setTimeout(() => {
        const element = document.getElementById("main");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // Прокрутка к элементу
        }
      }, 0);
    }
  };

  useEffect(() => {
    fetch("src/json/works.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const projects = Object.values(data.services).flat();
        setJsonData(projects);
      })
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  // Проверяем, что индекс в допустимых пределах
  if (
    selectedProjectIndex === null ||
    selectedProjectIndex < 0 ||
    selectedProjectIndex >= jsonData.length
  ) {
    console.log(selectedProjectIndex)
    return <div>Project not found</div>;
  }

  const currentProject = jsonData[selectedProjectIndex];

  return (
    <div>
      <Header />
      <main
        className={style.main}
        id="main"
        style={{
          backgroundImage: currentProject.img
            ? `url(${currentProject.img})`
            : "none",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
        }}
      >
        <div className={style.mainContainer}>
          <div className={style.mainContainerText}>
            <h2>{currentProject.case_study || "Заголовок"}</h2>
          </div>
        </div>
      </main>
      <section className={`gray-bg ${style.back}`}>
        <div className={`${style.backContainer}`} onClick={() => handleClick('/projects')}>
          <img className={style.arrow} src="src/assets/back.svg" alt="" />
          <p className="black-color">All projects</p>
        </div>
      </section>
      <section className={`white-bg ${style.case}`}>
        <div className={style.caseContainer}>
          <div className={style.caseItem}>
            <h5>Client:</h5>
            <p className="black-color">{currentProject.client}</p>
          </div>
          <div className={style.caseItem}>
            <h5>Challenge:</h5>
            <p className="black-color">{currentProject.challenge}</p>
          </div>
          <div className={style.caseItem}>
            <h5>Approach:</h5>
            <p className="black-color">{currentProject.approach}</p>
          </div>
          <div className={style.caseItem}>
            <h5>Value:</h5>
            <p className="black-color">{currentProject.value}</p>
          </div>
          <div className={style.caseItem}>
            <h5>Outcome:</h5>
            <p className="black-color">{currentProject.outcome}</p>
          </div>
        </div>
      </section>
      <Together />
      <Footer />
    </div>
  );
}

export default Project;
