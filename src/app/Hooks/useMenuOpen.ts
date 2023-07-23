"use client"

import { useState, useEffect } from "react";

function useMenuOpen() {
  const [menuClosed, setMenuOpen] = useState(true);

  useEffect(() => {
    const handleButtonClick = () => {
      const buttonsWithOpenedClass = document.querySelectorAll(".opened");
      setMenuOpen(buttonsWithOpenedClass.length > 0);
    };

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    setMenuOpen(buttons.length > 0);

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    };
  }, []);

  return menuClosed;
}

export default useMenuOpen;
