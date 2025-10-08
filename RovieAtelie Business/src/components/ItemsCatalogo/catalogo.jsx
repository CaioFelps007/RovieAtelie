import React from "react";
import "./catalogo.css";

//images
import exemplo1 from "../../images/exemplo1.png";
import exemplo2 from "../../images/exemplo2.png";
import exemplo3 from "../../images/exemplo3.png";

function ItemsCatalogo() {
  const itemscatalogo = [
    { id: 1, image: exemplo1, titulo: "titulo1", descricao: "descricao1" },
    { id: 2, image: exemplo2, titulo: "titulo2", descricao: "descricao2" },
    { id: 3, image: exemplo3, titulo: "titulo3", descricao: "descricao3" },
  ];

  return (
    <section className="container-catalogo">
      {itemscatalogo.map((item) => (
        <article className="card-item-catalogo" key={item.id}>
          <div className="image-card">
            <img className="image-item" src={item.image} alt={item.titulo} />
          </div>
          <div className="text-item-catalogo">
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ItemsCatalogo;
