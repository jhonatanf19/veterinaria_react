import { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-content">

        <h1>
          <img src={Logo} alt="Logo Veterinaria Certus" width="60px" />
          VETERINARIA CERTUS
        </h1>

        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/producto">Productos</Link></li>
            <li><Link to="/medicos">Medicos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/cita">Cita</Link></li>
          </ul>
        </nav>

        {user ? (
          <img
            src={user.photoURL}
            alt="perfil"
            onClick={logout}
            title="Cerrar sesión"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              cursor: "pointer",
              border: "2px solid #000",
            }}
          />
        ) : (
          <Link to="/login" className="cta-button">
            Iniciar Sesion
          </Link>
        )}
      </div>
    </header>
  );
}
