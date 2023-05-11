import { HomeOutlined, InboxOutlined } from "@mui/icons-material";

import "./nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="#" className="nav__link">
            <div className="icon">
              <HomeOutlined fontSize="large" width="2rem" />
            </div>
            <span>Home</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/inbox" href="#" className="nav__link">
            <div className="icon">
              <InboxOutlined width="2rem" fontSize="large" />
            </div>
            <span>Inbox</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
