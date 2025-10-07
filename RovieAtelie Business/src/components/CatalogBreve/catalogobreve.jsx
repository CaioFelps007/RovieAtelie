import React from "react";
import "./catalogobreve.css";

//imagens
import exemplo1 from "../../images/exemplo1.png";
import exemplo2 from "../../images/exemplo2.png";
import exemplo3 from "../../images/exemplo3.png";

function CatalogBreve() {
  const catalogosbreves = [
    {
      ilustracao: exemplo1,
      titulo: "Zíper",
      descript: "Zíper colocado no vestido",
    },
    {
      ilustracao: exemplo2,
      titulo: "Bordado",
      descript: "Bordado do vestido corrigido",
    },
    {
      ilustracao: exemplo3,
      titulo: "Costura",
      descript: "Reparo nas costuras do vestido",
    },
  ];

  return (
    <>
      <div className="container-catalogoland">
        {catalogosbreves.map((item, index) => (
          <div key={index} className="card-catalogoland">
            <img
              src={item.ilustracao}
              alt={item.titulo}
              className="imagem-catalogoland"
            />
            <h3>{item.titulo}</h3>
            <p>{item.descript}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CatalogBreve;
