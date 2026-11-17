import Header from "./Components/Header.jsx";
import ExtensionsSection from "./Components/ExtensionsSection.jsx";
import Footer from "./Components/Footer.jsx";
import data from "./data/data.js";
import { useState } from "react";

function App() {
  const [extension, setExtension] = useState(() => {
    const savedExtension = localStorage.getItem("extension");
    if (savedExtension) {
      return JSON.parse(savedExtension);
    }
    return [...data];
  });

  const [extensionFilter, setExtensionFilter] = useState("all");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });
  const extensionFilterHandler = (valuebutton) => {
    setExtensionFilter(valuebutton);
  };
  const changeThemeHandler = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  const changeActiveCardHandler = (id) => {
    const updatedCard = extension.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: !item.isActive };
      }
      return item;
    });
    setExtension(updatedCard);

    localStorage.setItem("extension", JSON.stringify(updatedCard));
  };
  const removeCardHandler = (id) => {
    const updatedExtension = extension.filter((item) => item.id !== id);
    setExtension(updatedExtension);

    localStorage.setItem("extension", JSON.stringify(updatedExtension));
  };

  return (
    <div className={`app ${theme}`}>
      <Header onChangeTheme={changeThemeHandler} theme={theme} />
      <ExtensionsSection
        data={extension}
        onClickFilter={extensionFilterHandler}
        extensionFilter={extensionFilter}
        changeCard={changeActiveCardHandler}
        onClickRemoveCard={removeCardHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
