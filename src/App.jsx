import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
