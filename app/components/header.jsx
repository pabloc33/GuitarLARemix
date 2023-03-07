import { Link } from "@remix-run/react";
import Logo from "../../public/img/logo.svg";
import Navegacion from "./navegacion";

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img src={Logo} alt="Imagen logo" className="logo" />
        </Link>

        <Navegacion />
      </div>
    </header>
  );
}

export default Header;
