import React from "react";

import medico1 from "../img/dcotor4.PNG";
import medico2 from "../img/doctora2.PNG";
import medico3 from "../img/dctorgeneral.PNG";
import medico4 from "../img/doctor5.PNG";
import medico5 from "../img/doctora3.PNG";
import medico6 from "../img/medica1.PNG";

export default function Medicos() {
  const medicos = [
    {
      id: 1,
      nombre: "Dr. Carlos Ramírez",
      especialidad: "Veterinaria general",
      img: medico1,
    },
    {
      id: 2,
      nombre: "Dra. Laura Fernández",
      especialidad: "Cirugía",
      img: medico2,
    },
    {
      id: 3,
      nombre: "Dr. Miguel Torres",
      especialidad: "Animales exóticos",
      img: medico3,
    },
        {
      id: 4,
      nombre: "Dr. Miguel Tds",
      especialidad: "Animales exóticos",
      img: medico4,
    },
        {
      id: 5,
      nombre: "Dr. Miguel T",
      especialidad: "Animales exóticos",
      img: medico5,
    },
        {
      id: 6,
      nombre: "Dr. Miguel Tos",
      especialidad: "Animales exóticos",
      img: medico6,
    },
    
  ];

  const container = {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "20px",
  };

  const title = {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2rem",
    color: "#1e293b",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  };

  const card = {
    background: "#ffffff",
    padding: "18px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
    textAlign: "center",
    transition: "0.25s",
  };

  const cardHover = {
    transform: "scale(1.03)",
    boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    borderRadius: "10px",
    marginBottom: "15px",
  };

  

  const nameStyle = {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: "5px",
  };

  const espStyle = {
    fontSize: "1rem",
    color: "#64748b",
  };

  const [hovered, setHovered] = React.useState(null);

  return (
    <div style={container}>
      <h2 style={title}>Médicos</h2>

      <div style={grid}>
        {medicos.map((m) => (
          <div
            key={m.id}
            style={hovered === m.id ? { ...card, ...cardHover } : card}
            onMouseEnter={() => setHovered(m.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={m.img} alt={m.nombre} style={imgStyle} />
            <h3 style={nameStyle}>{m.nombre}</h3>
            <p style={espStyle}>{m.especialidad}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
