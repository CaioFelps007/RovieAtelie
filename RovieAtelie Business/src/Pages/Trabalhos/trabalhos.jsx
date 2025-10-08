import React from "react";
import Header from "../../components/Header/header";
import "./trabalhos.css";

//components
import ItemsCatalogo from "../../components/ItemsCatalogo/catalogo";

function Trabalhos() {
  return (
    <div className="container-landpage">
      <div className="section-header">
        <Header />
      </div>
      <section className="title-screen">
        <h1>Catálogo de Serviços</h1>
      </section>
      <section className="section-trabalhos">
        <ItemsCatalogo />
      </section>
    </div>
  );
}

export default Trabalhos;
