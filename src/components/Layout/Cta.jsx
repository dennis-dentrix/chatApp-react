import "./cta.css";
import { Link } from "react-router-dom";

export const Cta = () => {
  return (
    <nav className="cta">
      <ul className="cta__list">
        <Link to="/login" className="cta__link">
          Login
        </Link>
        <Link to="/register" className="cta__link">
          Register
        </Link>
        <Link to="/" className="cta__link">
          Settings
        </Link>
      </ul>
    </nav>
    // {/*  */}
  );
};
