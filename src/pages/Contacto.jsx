import React, { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado");
  };

  const container = {
    maxWidth: "500px",
    margin: "40px auto",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
  };

  const title = {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "1.8rem",
    color: "#1e293b",
  };

  const label = {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
    color: "#1e293b",
  };

  const input = {
    width: "100%",
    padding: "12px",
    marginBottom: "18px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    background: "#f8fafc",
    fontSize: "1rem",
    color: "#334155",
    transition: "0.25s",
  };

  const textarea = {
    ...input,
    height: "120px",
    resize: "none",
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
    transition: "0.2s",
  };

  const buttonHover = {
    background: "#2563eb",
  };

  const [hover, setHover] = useState(false);

  return (
    <div style={container}>
      <h2 style={title}>Contacto</h2>

      <form onSubmit={handleSubmit}>
        <label style={label}>Nombre</label>
        <input
          type="text"
          name="nombre"
          style={input}
          value={form.nombre}
          onChange={handleChange}
        />

        <label style={label}>Correo</label>
        <input
          type="email"
          name="email"
          style={input}
          value={form.email}
          onChange={handleChange}
        />

        <label style={label}>Mensaje</label>
        <textarea
          name="mensaje"
          style={textarea}
          value={form.mensaje}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          style={hover ? { ...button, ...buttonHover } : button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
