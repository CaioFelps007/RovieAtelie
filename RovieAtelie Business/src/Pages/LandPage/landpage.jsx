import React from "react";
import "./landpage.css";
import "../../App.css";

import Header from "../../components/Header/header";

//images
import RovieAtelieLogo from "../../images/RovieAteliê.png";

function Home() {
  return (
    <div className="container-landpage">
      <div className="section-header">
        <Header />
      </div>
      <div className="title-section">
        <img src={RovieAtelieLogo} className="LogoRovie" />
      </div>
      <section className="section-trabalhos-resume">
        <h3>Bordados</h3>
      </section>
    </div>
  );
}

export default Home;
