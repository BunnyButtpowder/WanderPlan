import { Link } from "react-router-dom";
import "../styles/Default.css";
import Login from "./Login";
import Popup from "reactjs-popup";

export default function Header() {
  return (
    <div id="header">
      <div className="logo-section">
        <Link to="/">
          <img src="/img/Logo.jpg" alt="Logo" style={{ height: "47px" }} />
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/galery">Galery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="auth-links">
        <Link to="/register">Register</Link>
        {/* <Popup modal trigger={<button className="loginbtn">Login</button>}>
          {(close) => <Login close={close} />}
        </Popup> */}
        <Link to="/login"><button className="loginbtn">Login</button></Link>
      </div>
    </div>
  );
}
