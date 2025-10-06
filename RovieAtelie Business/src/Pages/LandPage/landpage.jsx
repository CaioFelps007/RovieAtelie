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
        <h3>Catálogo</h3>
        <div className="images-trabalhos">images</div>
      </section>
      <section className="bibliografia">
        <h2> quem sou eu?</h2>
        <p>Mini texto</p>
      </section>
      <section className="localizacao">
        <h2>Local onde atuo</h2>
        <p>Vila Flores, ... ...</p>
      </section>
      <section className="Certificados">
        <h2>Possuo certificações, de uma olhada:</h2>
        <div className="certificados-links"></div>
      </section>
    </div>
  );
}

export default Home;
