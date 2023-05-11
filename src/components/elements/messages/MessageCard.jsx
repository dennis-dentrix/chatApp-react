import { PersonOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import img from "../../../assets/cave.avif";
import img2 from "../../../assets/stairs.avif";
// import { useState } from "react";

export function MessageCard(props) {
  const name = props.name;
  const message = props.message;
  function handleShowMessage() {}

  const calender = new Date();
  const day = calender.getDay();
  const date = calender.getDate();
  const year = calender.getFullYear();
  return (
    <>
      <Link to="/" className="message__text" onClick={handleShowMessage}>
        <img src={img || <PersonOutlined />} alt="" className="user__img" />
        <div className="user__details">
          <p className="user__name">{name}</p>
          <p className="user__text">{message}</p>
        </div>
        <p className="text__date">
          {day}/{date}/{year}
        </p>
      </Link>

      <Link to="/" className="message__text active" onClick={handleShowMessage}>
        <img src={img2 || <PersonOutlined />} alt="" className="user__img" />
        <div className="user__details">
          <p className="user__name">{name}</p>
          <p className="user__text">{message}</p>
        </div>
        <p className="text__date">
          {day}/{date}/{year}
        </p>
      </Link>
    </>
  );
}
