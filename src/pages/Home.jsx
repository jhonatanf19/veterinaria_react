import React from "react";
import banner1 from "../img/Centro-Veterinario-Huellas-banner2.jpg";
import banner2 from "../img/banner3.jpg";
import servi1 from "../img/clínica-veterinaria.jpg";
import servi2 from "../img/cirugia3.jpg";
import servi3 from "../img/clínica-veterinaria.jpg";
import servi4 from "../img/cirugia3.jpg";
<img src={banner1} />


export default function Home() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
        }

        .hero {
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: white;
          background-color: #005f73;
          position: relative;
          overflow: hidden;
        }

        .slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .slider ul {
          display: flex;
          margin: 0;
          padding: 0;
          width: 200%;
          animation: slide 8s infinite alternate linear;
        }

        .slider li {
          width: 100%;
          list-style: none;
        }

        .slider img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes slide {
          0% { margin-left: 0; }
          55% { margin-left: 0; }
          60% { margin-left: -100%; }
          100% { margin-left: -100%; }
        }

        #servicios {
          padding: 4em 2em;
          background: white;
          text-align: center;
        }

        #servicios h2 {
          font-size: 2.5em;
          color: #005f73;
        }

        .servicios-container {
          display: flex;
          justify-content: center;
          gap: 2em;
          flex-wrap: wrap;
        }

        .servicio {
          width: 300px;
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-radius: 10px;
          padding: 1em;
          transition: .3s;
        }

        .servicio:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 15px rgba(0,0,0,0.2);
        }

        .servicio img {
          width: 100%;
          border-radius: 10px;
        }

        #especialidades {
          padding: 4em 2em;
          background-color: #f9f9f9;
          text-align: center;
        }

        .especialidades-container {
          display: flex;
          flex-wrap: wrap;
          gap: 2em;
          justify-content: center;
        }

        .especialidad {
          width: 300px;
          background: white;
          padding: 1em;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: 0.3s;
        }

        .especialidad:hover {
          transform: scale(1.05);
        }

        .map iframe {
          width: 100%;
          height: 450px;
          border: 1px solid black;
        }
      `}</style>

      <main style={{ marginTop: "0px" }}>
        <section id="inicio" className="hero">
          <div className="slider">
            <ul>
              <li>
                <img src={banner1} />
              </li>
              <li>
                <img src={banner2}/>
              </li>
            </ul>
          </div>

          <p>Tu aliado en el cuidado de tu mascota</p>
        </section>

        <section id="servicios">
          <h2>Nuestros Servicios</h2>
          <p>Tenemos todo lo que tu mascota necesita.</p>

          <div className="servicios-container">
            <div className="servicio">
              <img src={servi1} />
              <h3>Consulta</h3>
              <p>Revisiones completas y diagnósticos precisos.</p>
            </div>

            <div className="servicio">
              <img src={servi2} />
              <h3>Cuidados Preventivos</h3>
              <p>Vacunación y desparasitación para tu mascota.</p>
            </div>

            <div className="servicio">
              <img src={servi3} />
              <h3>Emergencias</h3>
              <p>Atención urgente para tu mascota.</p>
            </div>

            <div className="servicio">
              <img src={servi4} />
              <h3>Cirugías</h3>
              <p>Procedimientos quirúrgicos con seguridad.</p>
            </div>
          </div>
        </section>

        <section id="especialidades">
          <h2>¿Qué ofrecemos?</h2>

          <div className="especialidades-container">
            <div className="especialidad"><h3>Acupuntura</h3><p>Tratamientos complementarios.</p></div>
            <div className="especialidad"><h3>Anestesia</h3><p>Evaluación preoperatoria completa.</p></div>
            <div className="especialidad"><h3>Cardiología</h3><p>Diagnóstico del corazón.</p></div>
            <div className="especialidad"><h3>Cirugía Especializada</h3><p>Procedimientos avanzados.</p></div>
            <div className="especialidad"><h3>Cirugía General</h3><p>Esterilizaciones y más.</p></div>
            <div className="especialidad"><h3>Endocrinología</h3><p>Tratamiento hormonal.</p></div>
            <div className="especialidad"><h3>Medicina Regenerativa</h3><p>Terapias innovadoras.</p></div>
            <div className="especialidad"><h3>Dermatología</h3><p>Piel, uñas y pelo.</p></div>
            <div className="especialidad"><h3>Neurología</h3><p>Sistema nervioso.</p></div>
            <div className="especialidad"><h3>Nutrición Clínica</h3><p>Dieta profesional.</p></div>
            <div className="especialidad"><h3>Odontología</h3><p>Cuidado dental.</p></div>
            <div className="especialidad"><h3>Oftalmología</h3><p>Salud visual.</p></div>
          </div>
        </section>
      </main>
    </>
  );
}
