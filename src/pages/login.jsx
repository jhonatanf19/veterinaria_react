
import React, { useState } from "react";
import "../styles/login.css";

import { auth, googleProvider } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate("/"); 
    } catch (error) {
      setErrorMsg("❌ Error: " + error.message);
    }
  };


  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/"); 
    } catch (error) {
      setErrorMsg("❌ Error: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} required />

          <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required />

          {errorMsg && <p className="error">{errorMsg}</p>}

          <button type="submit">
            {isLogin ? "Entrar" : "Crear cuenta"}
          </button>
        </form>

        <button className="google-btn" onClick={loginWithGoogle}>
          Iniciar con Google
        </button>

        <p className="switch" onClick={toggleForm}>
          {isLogin ? "¿No tienes cuenta? Registrarse" : "¿Ya tienes cuenta? Iniciar sesión"}
        </p>
      </div>
    </div>
  );
}
