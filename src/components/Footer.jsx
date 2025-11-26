import React from "react";
import FacebookIcon from "../img/facebook.png";
import InstagramIcon from "../img/instagram.png";
import TiktokIcon from "../img/tiktok.png";

export default function Footer() {
  return (
    <>
      <style>{`
        footer {
          padding: 2em;
          background-color: #333;
          color: #fff;
          text-align: center;
          border-top: 2px solid #005f73;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        footer p {
          margin: 1em 0 0 0;
        }

        footer .footer-content {
          display: flex;
          gap: 2em;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          max-width: 1100px;
        }

        footer .locales-contacto, footer .horario_atencion {
          text-align: left;
          margin-top: 1em;
        }

        footer .locales-contacto h3, footer .horario_atencion h3 {
          margin-bottom: 0.5em;
        }

        footer .locales-contacto p, footer .horario_atencion p {
          margin: 0.5em 0;
        }

        footer .footer-bottom {
          margin-top: 2em;
          text-align: center;
        }

        footer .social-icons {
          display: flex;
          gap: 1em;
          justify-content: center;
          margin: 0.5em 0;
        }

        footer .social-icons img {
          width: 35px;
          height: 35px;
        }
      `}</style>

      <footer>
        <div className="footer-content">
          <div className="locales-contacto">
            <h3>Locales y Contacto</h3>
            <p><strong>Av. Pedro Miotta 620, SJM</strong><br />Teléfono: +51 932 008 081</p>
            <p><strong>Av. Militar 2026, Lince</strong><br />Teléfono: +51 932 008 081</p>
          </div>

          <div className="horario_atencion">
            <h3>Horario de Atención</h3>
            <p><strong>San Juan de Miraflores</strong><br />Lunes a Sábado: 8 a.m. - 8 p.m.<br />Domingos: 9 a.m. - 6 p.m.</p>
            <p><strong>Lince</strong><br />Lunes a Sábado: 8 a.m. - 8 p.m.<br />Domingos: 9 a.m. - 6 p.m.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p><strong>Email:</strong> contacto@veterinariacertus.com</p>
          <div className="social-icons">
            <a href="https://www.facebook.com">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com">
              <img src={TiktokIcon} alt="TikTok" />
            </a>
          </div>
          <p> {new Date().getFullYear()} Veterinaria Certus. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
