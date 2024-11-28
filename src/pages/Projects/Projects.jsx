import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Projects.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Together from "../../components/Together/Together";
import { useProject } from "../../context/ProjectContext";
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation";

function Projects() {
  const navigate = useNavigate();
  const { setSelectedProjectIndex } = useProject();
  const [jsonData, setJsonData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 488);
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
  let i = 1;
  return (
    <div>
      <section className={style.damper}>
        <div></div>
      </section>
      <Header />
      <main className={` ${style.main}`} id="main">
        <div className={style.mainContainer}>
          <div className={style.mainContainerText}>
            <ScrollAnimation animationProps={{ delay: 0.1 }}>
              <h2 className={`black-color ${style.mainProjectsTitle}`}>
                ITTCON delivers innovative solutions for the world’s leading
                organizations every day. Find out how we've helped companies
                meet their goals.
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animationProps={{ delay: 0.2 }}>
              <Button text="CONTACT US" path="/contact" />
            </ScrollAnimation>
          </div>
        </div>
      </main>
      <section className={`gray-bg ${style.projects}`}>
        <div className={style.projectsContainer}>
          {isMobile ? (
            <ScrollAnimation>
              <select
                className={style.dropdownSelect}
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="all">All</option>
                <option value="Agency and Brokerage">
                  Agency and Brokerage
                </option>
                <option value="Green Investment">Green Investment</option>
                <option value="Startup Services">Startup Services</option>
                <option value="EUDR and Sustainable Schemes">
                  EUDR and Sustainable Schemes
                </option>
              </select>
            </ScrollAnimation>
          ) : (
            <div className={style.projectsButtons}>
              <ScrollAnimation animationProps={{ delay: 0.1 }}>
                <p
                  className={`${style.projectsButtonsItem} ${
                    selectedCategory === "all" ? style.activ : ""
                  }`}
                  onClick={() => handleCategoryChange("all")}
                >
                  All
                </p>
              </ScrollAnimation>
              <ScrollAnimation animationProps={{ delay: 0.2 }}>
                <p
                  className={`${style.projectsButtonsItem} ${
                    selectedCategory === "Agency and Brokerage"
                      ? style.activ
                      : ""
                  }`}
                  onClick={() => handleCategoryChange("Agency and Brokerage")}
                >
                  Agency and Brokerage
                </p>
              </ScrollAnimation>
              <ScrollAnimation animationProps={{ delay: 0.3 }}>
                <p
                  className={`${style.projectsButtonsItem} ${
                    selectedCategory === "Green Investment" ? style.activ : ""
                  }`}
                  onClick={() => handleCategoryChange("Green Investment")}
                >
                  Green Investment
                </p>
              </ScrollAnimation>
              <ScrollAnimation animationProps={{ delay: 0.4 }}>
                <p
                  className={`${style.projectsButtonsItem} ${
                    selectedCategory === "Startup Services" ? style.activ : ""
                  }`}
                  onClick={() => handleCategoryChange("Startup Services")}
                >
                  Startup Services
                </p>
              </ScrollAnimation>
              <ScrollAnimation animationProps={{ delay: 0.5 }}>
                <p
                  className={`${style.projectsButtonsItem} ${
                    selectedCategory === "EUDR and Sustainable Schemes"
                      ? style.activ
                      : ""
                  }`}
                  onClick={() =>
                    handleCategoryChange("EUDR and Sustainable Schemes")
                  }
                >
                  EUDR and Sustainable Schemes
                </p>
              </ScrollAnimation>
            </div>
          )}
          <div className={style.projectsWraper}>
            {filteredProjects.map((project, index) => (
              <ScrollAnimation animationProps={{ delay: `0.${i}` }}>
                {i++}
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
              </ScrollAnimation>
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
