"use client";

import { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openPopup = (project) => {
    setCurrentProject(project);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setCurrentProject(null);
  };

  return (
    <PopupContext.Provider value={{ isOpen, currentProject, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
