import { Link } from "react-router-dom";

export const LoggedInDropDown = ({ setIsShown }) => {
  return (
    <nav className="dropdown">
      <ul className="dropdown__list">
        <Link to="/" className="dropdown__link">
          About
        </Link>
        <Link to="/" className="dropdown__link">
          Mode
        </Link>
        <Link
          to="/inbox"
          className="dropdown__link"
          onClick={() => setIsShown(true)}
        >
          Logout
        </Link>
      </ul>
    </nav>
  );
};
