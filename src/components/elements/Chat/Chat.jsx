// import { Form } from "react-router-dom";
import {
  SendOutlined,
  MyLocationOutlined,
  VoiceChatOutlined,
  ImageOutlined,
  AttachFileOutlined,
  CalendarViewDayOutlined,
} from "@mui/icons-material";
import { User } from "./User";
import "./chat.css";

export const Chat = () => {
  return (
    <section className="chat">
      <div className="chat__space">
        <div className="chat__space--header">
          <div className="chat__user">
            <p className="user__name">Denis Kyusya</p>
            <p className="user__status">Online</p>
          </div>

          <div className="chat__option">
            <button className="btn btn--choice">Email</button>
            <button className="btn">chat</button>
          </div>
        </div>

        <div className="chat__space--messages">
          <div className="all__messages">
            <p className="message__sent chat__message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, illo dolore
            </p>
            <p className="message__received chat__message">Received</p>
          </div>
          <form method="post" className="message__form">
            <input type="text" className="message__input" />
            <div className="message__actions">
              <div className="message__actions--all">
                <div className="icon">
                  <AttachFileOutlined width="2rem" />
                </div>
                <div className="icon">
                  <MyLocationOutlined width="2rem" />
                </div>
                <div className="icon">
                  <ImageOutlined width="2rem" />
                </div>
                <div className="icon">
                  <CalendarViewDayOutlined width="2rem" />
                </div>
                <div className="icon">
                  <VoiceChatOutlined width="2rem" />
                </div>
              </div>

              <div className="icon">
                <SendOutlined width="4rem" sx={{ color: "#fca311" }} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <User />
    </section>
  );
};
