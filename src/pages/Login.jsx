import { Link } from "react-router-dom";
import {
  EmailOutlined,
  Google,
  PhoneIphoneOutlined,
  PasswordOutlined,
  LockOpenOutlined,
  LockOutlined,
} from "@mui/icons-material";
import img from "../assets/chat.svg";
import "./login.css";

export const Login = () => {
  return (
    <main className="main">
      <section className="login">
        <div className="form__part">
          <div className="login__text">
            <h1 className="login__heading">Log in to your account</h1>
            <p className="login__welcome">Karibu tubonge</p>
          </div>
          <div className="login__btns">
            <Link to="gmail.com" className="login__link">
              <Google />
              <span>Google</span>
            </Link>
            <Link to="gmail.com" className="login__link">
              <PhoneIphoneOutlined />
              <span>Apple</span>
            </Link>
          </div>
          <form action="post" className="form">
            <div className="form__details">
              <EmailOutlined />
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                className="form__input"
              />
            </div>

            <div className="form__details">
              <PasswordOutlined />
              <input
                type="text"
                placeholder="password"
                className="form__input"
              />
              <LockOpenOutlined />
              <LockOutlined />
            </div>

            <div className="action__links">
              <Link to="/inbox" className="form__link form__submit">
                Login
              </Link>
              <p className="form__option">
                <Link to="/register" className="form__option--link">
                  Create an account
                </Link>{" "}
                instead
              </p>
            </div>
          </form>
        </div>
        <div className="login__img">
          <img src={img} alt="" className="form__img" />
        </div>
      </section>
    </main>
  );
};
