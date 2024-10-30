import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Projects.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/button/Button";
import Together from "../../components/Together/Together";
import { useProject } from "../../context/ProjectContext";

function Projects() {
  const navigate = useNavigate();
  const { setSelectedProjectIndex } = useProject();
  const [jsonData, setJsonData] = useState([]);

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
        console.log("Загруженные проекты:", projects); // Добавьте отладку
      })
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  const handleButtonClick = (index) => {
    console.log("Мы внутри"); // Отладка нажатия кнопки
    setSelectedProjectIndex(index);
    navigate("/project");
  };

  return (
    <div>
      <Header />
      <main className={style.main} id="main">
        <div className={style.mainContainer}>
          <div className={style.mainContainerText}>
            <h2>
              ITTCON delivers innovative solutions for the world’s leading
              organizations every day. Find out how we've helped companies meet
              their goals.
            </h2>
          </div>
        </div>
      </main>
      <section className={`gray-bg ${style.projects}`}>
        <div className={style.projectsContainer}>
          <div className={style.projectsWraper}>
            {jsonData.map((project, index) => {
              console.log("Индекс карты:", index); // Логирование индекса на каждой итерации map
              return (
                <div key={index} className={style.projectsItem}>
                  <div className={style.projectsImg}>
                    <img src={project.img} alt={project.case_study} />
                  </div>
                  <h5>{project.case_study}</h5>
                  <div onClick={() => handleButtonClick(index)}>
                    <Button text="MORE" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Together />
      <Footer />
    </div>
  );
}

export default Projects;
