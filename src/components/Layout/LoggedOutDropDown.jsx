import "./loggedOutDropdown.css";
import { Link } from "react-router-dom";

export const LoggedOutDropDown = ({ setIsShown }) => {
  return (
    <nav className="dropdown">
      <ul className="dropdown__list">
        <Link
          to="/login"
          className="dropdown__link"
          onClick={() => setIsShown(false)}
        >
          Login
        </Link>
        <Link to="/register" className="dropdown__link">
          Register
        </Link>
        <Link to="/" className="dropdown__link">
          Settings
        </Link>
      </ul>
    </nav>
  );
};
