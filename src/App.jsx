import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cita from "./pages/Cita";
import Producto from "./pages/Producto";
import Medicos from "./pages/Medicos";
import Contacto from "./pages/Contacto";
import Login from "./pages/login";


export default function App() {
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const mainStyle = {
    flex: 1,
    padding: "20px",
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cita" element={<Cita />} />
            <Route path="/producto" element={<Producto />} />
            <Route path="/medicos" element={<Medicos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
           

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
<Route path="/login" element={<Login />} />
