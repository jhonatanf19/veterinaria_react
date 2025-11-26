import React from "react";
import cambo from "../img/canbo-cachorro-cordero-razas-med-gran-768x768.jpg";
import product1 from "../img/shampoo.jpg";
import product2 from "../img/comidadeperro.jpg";
import product3 from "../img/antirabica.jpg";
import product4 from "../img/cordero.png"

//importas las imagenes
export default function Producto() {
  const productos = [
    {
      id: 1,
      nombre: "Alimento Premium",
      descripcion: "Nutrición balanceada para mascotas.",
      img: cambo,
    },
    {
      id: 2,
      nombre: "Alimento Premium",
      descripcion: "Nutrición balanceada para mascotas.",
      img: product1,
    },
     {
      id: 2,
      nombre: "Alimento Premium",
      descripcion: "Nutrición balanceada para mascotas.",
      img: product2,
    },
     {
      id: 2,
      nombre: "Alimento Premium",
      descripcion: "Nutrición balanceada para mascotas.",
      img: product3
    },
     {
      id: 2,
      nombre: "Alimento Premium",
      descripcion: "Nutrición balanceada para mascotas.",
      img: product4
    },
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2em",
    justifyContent: "center",
    padding: "2em 1em",
  };

  const cardStyle = {
    width: "250px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const btnStyle = {
    backgroundColor: "#94d2bd",
    color: "#005f73",
    border: "none",
    borderRadius: "5px",
    padding: "0.5em 1em",
    margin: "1em 0",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };

  const btnHover = {
    backgroundColor: "#005f73",
    color: "#fff",
  };

  const [hoveredId, setHoveredId] = React.useState(null);

  return (
    <div style={{ padding: "2em 1em", textAlign: "center" }}>
      <h2 style={{ color: "#005f73", marginBottom: "1em" }}>Productos</h2>
      <div style={containerStyle}>
        {productos.map((p) => (
          <div
            key={p.id}
            style={cardStyle}
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img src={p.img} alt={p.nombre} style={imgStyle} />
            <h3>{p.nombre}</h3>
            <p style={{ padding: "0 10px" }}>{p.descripcion}</p>
            <button
              style={hoveredId === p.id ? { ...btnStyle, ...btnHover } : btnStyle}
            >
              Pedir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
