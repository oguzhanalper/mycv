import { React, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//? Components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  const [theme, setTheme] = useState(getTheme());

  function getTheme() {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "light";
  }

  const themeProvider = () => {
    localStorage.setItem("theme", theme);
  };

  const handleDarkMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    themeProvider();
    getTheme();
  }, [theme]);

  const formSuccess = () => {
    toast.success(
      "I am glad you reached out to me and I will get back to you as soon as possible"
    );
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToastContainer position="top-center" />
      <Header handleDarkMode={handleDarkMode} />
      <Intro />
      <Skills />
      <Profile />
      <Projects />
      <Footer formSuccess={formSuccess} theme={theme} id="hire-me" />
    </ThemeProvider>
  );
}

export default App;
