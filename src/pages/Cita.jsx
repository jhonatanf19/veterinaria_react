import React, { useState } from "react";

export default function Cita() {
  const [form, setForm] = useState({ nombre: "", telefono: "", fecha: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cita creada");
  };
  const container = {
    maxWidth: "450px",
    margin: "40px auto",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
  };

  const title = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
    color: "#1e293b",
  };

  const label = {
    fontWeight: "bold",
    display: "block",
    marginBottom: "6px",
    color: "#1e293b",
  };

  const input = {
    width: "100%",
    padding: "12px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    background: "#f8fafc",
    fontSize: "1rem",
    color: "#334155",
    transition: "0.25s",
  };

  const button = {
    width: "100%",
    padding: "12px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    fontSize: "1.1rem",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.25s",
  };

  const buttonHover = {
    background: "#2563eb",
  };

  const [hover, setHover] = useState(false);

  return (
    <div style={container}>
      <h2 style={title}>Reservar Cita</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre" style={label}>
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          style={input}
          value={form.nombre}
          onChange={handleChange}
        />

        <label htmlFor="telefono" style={label}>
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          style={input}
          value={form.telefono}
          onChange={handleChange}
        />

        <label htmlFor="fecha" style={label}>
          Fecha
        </label>
        <input
          id="fecha"
          type="date"
          name="fecha"
          style={input}
          value={form.fecha}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={hover ? { ...button, ...buttonHover } : button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Reservar
        </button>
      </form>
    </div>
  );
}

