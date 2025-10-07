import React from "react";
import "./landpage.css";
import "../../App.css";

//icons
import { FaWhatsapp } from "react-icons/fa";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

//pages
import CatalogBreve from "../../components/CatalogBreve/catalogobreve";

//images
import RovieAtelieLogo from "../../images/RovieAteliê.png";
import VilaFlora from "../../images/VilaFlora.png";
import divisao from "../../images/DivisaoImage.png";
import certificado from "../../images/certificado.png";

function Home() {
  const handleWhatsapp = () => {
    const phoneNumber = "5519989942730";
    const message = encodeURIComponent("Olá Caio, deu certo sua mensagem!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="container-landpage">
      <div className="section-header">
        <Header />
      </div>
      <div className="title-section">
        <h1>Bem vindo à</h1>
        <img src={RovieAtelieLogo} className="LogoRovie" />
      </div>

      <section className="section-trabalhos-resume">
        <h3>Catálogo</h3>
        <div className="images-trabalhos">
          <CatalogBreve />
        </div>
        <h3>Ver Resultados</h3>
        <button className="btn-landpagecatalogo">Ver mais...</button>
      </section>
      {/* <div className="divisao-img">
        <img src={divisao} className="imagem-divisao" />
      </div> */}
      <section className="bibliografia">
        <h2> Quem sou eu?</h2>
        <p>
          Sou Rosângela, tenho 40 anos, sempre tive talento na costura e agora
          comecei a explorar esse mundo com o intúito de melhorar minhas
          habilidades e fazer um ótimo trabalho para meus clientes...
        </p>
      </section>
      <section className="localizacao">
        <div className="text-localizacao">
          <h2>Local onde atuo:</h2>
          <p>
            Faço meu trabalho na cidade de Sumaré, no parque Vila Flores, no
            portal Rosas!
          </p>
        </div>
        <div className="img-localizacao">
          <img src={VilaFlora} className="imgVila" />
        </div>
      </section>
      <section className="Certificados">
        <h1>Certificados</h1>
        <div className="certificados-links">
          <img src={certificado} className="img-certificado" />
        </div>
      </section>
      <button className="whats-button" onClick={handleWhatsapp}>
        <FaWhatsapp />
      </button>
      <Footer />
    </div>
  );
}

export default Home;
