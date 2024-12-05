import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Скроллим страницу наверх
  }, [pathname]); // Выполняется при изменении пути

  return null; // Этот компонент не рендерит ничего
};

export default ScrollToTop;
