import {
  NotificationsOutlined,
  AddRounded,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { Search } from "../Search";
import "./header.css";
import { Cta } from "./Cta";
import { useState } from "react";

export const Header = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsShown(!isShown);
  };

  return (
    <header className="header">
      <div className="header__left">
        <h2 className="page__title">Tubonge</h2>
        <div className="user">User</div>
        <Search />
      </div>
      <div className="header__right">
        <div className="icon">
          <AddRounded width="2rem" />
        </div>
        <div className="icon">
          <NotificationsOutlined width="2rem" />
        </div>
        <div className="user__access">
          <div className="icon">
            <AccountCircleOutlined width="2rem" onClick={handleClick} />
          </div>

          {isShown && <Cta />}
        </div>
      </div>
    </header>
  );
};
