import React from "react";
import "./footer.css";

//icons
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

//images
import costura from "../../images/costura2.png";

function Footer() {
  return (
    <div className="footer">
      <section className="redes-sociais">
        <div className="links-redes">
          <FaInstagram />
          <h4>Instagram:</h4> <span>@rovieatelie</span>
        </div>
        <div className="links-redes">
          <FaFacebook /> <h4>Facebook:</h4> <span> rovieatelie.facebook </span>
        </div>
        <div className="links-redes">
          <FaWhatsapp /> <h4>Whatsapp: </h4> <span>(19)9 9999-9999 </span>
        </div>
      </section>
      <section className="image-footer">
        <img src={costura} className="costura-png" />
      </section>
    </div>
  );
}

export default Footer;
