import { MessageCard } from "./MessageCard";
import { Sort } from "@mui/icons-material";
import { Search } from "../../Search";
import "./message.css";
import { Link } from "react-router-dom";

export const Message = () => {
  return (
    <div className="messages">
      <div className="message__actions">
        <Search />
        <Link to="/" className="link">
          <Sort sx={{ color: "#000000" }} />
        </Link>
      </div>
      <div className="message__card">
        <MessageCard
          name="Denis Kyusya"
          message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa laboriosam quasi dolorem"
        />
      </div>
    </div>
  );
};
