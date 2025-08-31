import { useState } from "react";
import "./App.css";
import { DarkModeProvider } from "./components/ThemeModeContext";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  

  return (
    <DarkModeProvider>
      <Header />
  <Home/>
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
