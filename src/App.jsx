import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { AboutUs } from "./components/About Us/AboutUs";
import { Founder } from "./components/Founder/Founder";
import { MissionAndValues } from "./components/Mission&Values/MissionAndValues";
import { BoardOfDirectors } from "./components/Board Of Directors/BoardOfDirectors";
import { BusinessPortfolio } from "./components/Business Portfolio/BusinessPortfolio";
import { AllBrands } from "./components/All Brands/AllBrands";
import { Tvc } from "./components/Tvc/Tvc";
import { ContactUs } from "./components/Contact Us/ContactUs";


export const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="founder">
          <Founder />
        </section>
        <section id="mission-values">
          <MissionAndValues />
        </section>
        <section id="board-of-directors">
          <BoardOfDirectors />
        </section>
        <section id="business-portfolio">
          <BusinessPortfolio />
        </section>
        <section id="all-brands">
          <AllBrands />
        </section>
        <section id="tvc">
          <Tvc />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
