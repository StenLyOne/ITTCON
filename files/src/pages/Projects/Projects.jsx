import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Projects.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Together from "../../components/Together/Together";
import { useProject } from "../../context/ProjectContext";

function Projects() {
  const navigate = useNavigate();
  const { setSelectedProjectIndex } = useProject();
  const [jsonData, setJsonData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("/src/json/works.json")
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

  const handleButtonClick = (index) => {
    setSelectedProjectIndex(index);
    navigate("/project");
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };

  const filteredProjects =
    selectedCategory === "all"
      ? jsonData
      : jsonData.filter((project) => project.category === selectedCategory);

  return (
    <div>
      <Header />
      <main className={` ${style.main}`} id="main">
        <div className={style.mainContainer}>
          <div className={style.mainContainerText}>
            <h2 className={`black-color ${style.mainProjectsTitle}`}>
              ITTCON delivers innovative solutions for the world’s leading
              organizations every day. Find out how we've helped companies meet
              their goals.
            </h2>
            <Button text="CONTACT US" />
          </div>
        </div>
      </main>
      <section className={`gray-bg ${style.projects}`}>
        <div className={style.projectsContainer}>
          {isMobile ? (
            <select
              className={style.dropdownSelect}
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Agency and Brokerage">Agency and Brokerage</option>
              <option value="Green Investment">Green Investment</option>
              <option value="Startup Services">Startup Services</option>
              <option value="EUDR and Sustainable Schemes">
                EUDR and Sustainable Schemes
              </option>
            </select>
          ) : (
            <div className={style.projectsButtons}>
              <p
                className={`${style.projectsButtonsItem} ${
                  selectedCategory === "all" ? style.activ : ""
                }`}
                onClick={() => handleCategoryChange("all")}
              >
                All
              </p>
              <p
                className={`${style.projectsButtonsItem} ${
                  selectedCategory === "Agency and Brokerage" ? style.activ : ""
                }`}
                onClick={() => handleCategoryChange("Agency and Brokerage")}
              >
                Agency and Brokerage
              </p>
              <p
                className={`${style.projectsButtonsItem} ${
                  selectedCategory === "Green Investment" ? style.activ : ""
                }`}
                onClick={() => handleCategoryChange("Green Investment")}
              >
                Green Investment
              </p>
              <p
                className={`${style.projectsButtonsItem} ${
                  selectedCategory === "Startup Services" ? style.activ : ""
                }`}
                onClick={() => handleCategoryChange("Startup Services")}
              >
                Startup Services
              </p>
              <p
                className={`${style.projectsButtonsItem} ${
                  selectedCategory === "EUDR and Sustainable Schemes" ? style.activ : ""
                }`}
                onClick={() => handleCategoryChange("EUDR and Sustainable Schemes")}
              >
                EUDR and Sustainable Schemes
              </p>
            </div>
          )}
          <div className={style.projectsWraper}>
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={style.projectsItem}
                onClick={() => handleButtonClick(index)}
              >
                <div className={style.projectsImg}>
                  <img src={project.img} alt={project.case_study} />
                </div>
                <div className={style.projectsItemBot}>
                  <h5>{project.case_study}</h5>
                  <div className={style.arrow}>
                    <img src="/src/assets/arrowG.svg" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Together />
      <Footer />
    </div>
  );
}

export default Projects;
