import React, { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(() => {
    // Получаем значение из localStorage при загрузке компонента
    const savedIndex = localStorage.getItem('selectedProjectIndex');
    return savedIndex !== null ? JSON.parse(savedIndex) : 0;
  });

  useEffect(() => {
    // Сохраняем значение в localStorage при каждом изменении selectedProjectIndex
    localStorage.setItem('selectedProjectIndex', JSON.stringify(selectedProjectIndex));
  }, [selectedProjectIndex]);

  return (
    <ProjectContext.Provider value={{ selectedProjectIndex, setSelectedProjectIndex }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  return useContext(ProjectContext);
};

