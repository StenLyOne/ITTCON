import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  return (
    <ProjectContext.Provider value={{ selectedProjectIndex, setSelectedProjectIndex }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  return useContext(ProjectContext);
};


