import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "./sobre.css";

function Sobre() {
  return (
    <div className="container-landpage">
      <div className="section-header">
        <Header />
      </div>
      <section className="title-screen">
        <h1>Sobre RovieAteliê</h1>
      </section>
      <section className="history">
        <p>
          Tudo começou com uma moça e uma paixão: a costura. Entre linhas,
          tecidos e pequenos sonhos, ela descobriu que podia transformar pedaços
          de pano em algo cheio de vida — e amor. No início, eram apenas
          consertos simples, ajustes pra família, pequenos projetos feitos nas
          horas vagas. Mas a cada ponto, veio a vontade de aprender mais, de
          fazer melhor, de ver o sorriso de quem vestia algo feito com carinho.
          Com o tempo, o que era um hobby virou propósito. A agulha se tornou
          companheira de todos os dias, e a costura, uma extensão do coração.
          Hoje, o Rovie Ateliê nasce desse amor — da vontade de continuar
          crescendo, de atender mais pessoas, de espalhar beleza e cuidado em
          cada detalhe. Aqui, cada peça tem uma história, e cada cliente é parte
          dela. Feito com amor, paciência e aquele toque que só o olhar feminino
          tem. 💖
        </p>
        <p className="signature">Feito com amor e agulha na mão.</p>
      </section>
      <Footer />
    </div>
  );
}

export default Sobre;
