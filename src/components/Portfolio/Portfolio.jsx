import "./Portfolio.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { useProject } from "../../context/ProjectContext";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import Optimizing from "../../assets/Optimizing.png";

function Portfolio({ selectedCategory }) {
  const navigate = useNavigate();
  const { selectedProjectIndex, setSelectedProjectIndex } = useProject();
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch("/src/json/works.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setJsonData(data.services)) // Получаем данные из JSON и сразу обращаемся к ключу services
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  if (!jsonData) {
    return <h5>Loading...</h5>; // Пока данные загружаются
  }

  const getRandomProjects = (projects, num) => {
    const shuffled = projects.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  // Логика выбора проектов в зависимости от наличия категории
  let selectedProjects = [];
  const matchingCategory = jsonData[selectedCategory];

  if (matchingCategory) {
    const firstTwoProjects = matchingCategory.slice(0, 4);
    const otherProjects = Object.keys(jsonData)
      .filter((key) => key !== selectedCategory)
      .map((key) => jsonData[key])
      .flat();
    const randomProjects = getRandomProjects(otherProjects, 2);
    selectedProjects = [...firstTwoProjects];
  }

  // Если категория не передана или не найдена, показываем 4 случайных проекта
  if (selectedProjects.length === 0) {
    selectedProjects = getRandomProjects(Object.values(jsonData).flat(), 4);
  }

  // Функция для установки индекса проекта и перехода на страницу проекта

  const handleButtonClick = (index) => {
    setSelectedProjectIndex(index);
    console.log(selectedProjectIndex); // Отладка нажатия кнопкиse
  };

  let delay = 1; // Начальное значение

  return (
    <div className="portfolio-wrap">
      {selectedProjects.length > 0 ? (
        selectedProjects.map((project, index) => {
          delay += 1; // Увеличиваем задержку

          return (
            <ScrollAnimation
              key={index}
              animationProps={{ delay: `0.${delay}` }}
            >
              <div className="item-wrap">
                <div
                  id={project.id}
                  className={`item item-${index + 1}`}
                  style={{
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: "cover",
                  }}
                >
                  <p className="portfolio-p">{project.case_study}</p>
                  <div onClick={() => handleButtonClick(project.id)}>
                    <Button path='/project' />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          );
        })
      ) : (
        <h5>No projects available</h5>
      )}
    </div>
  );
}

export default Portfolio;
