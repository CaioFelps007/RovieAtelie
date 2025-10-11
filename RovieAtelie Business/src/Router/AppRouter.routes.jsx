import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "../Pages/LandPage/landpage";
import Sobre from "../Pages/Sobre/sobre";
import Trabalhos from "../Pages/Trabalhos/trabalhos";
import Preco from "../Pages/Preços/preco";
import Contatos from "../Pages/Contato/contato";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Trabalhos" element={<Trabalhos />} />
        {/* <Route path="/Precos" element={<Preco />} /> */}
        {/* <Route path="/Contatos" element={<Contatos />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
