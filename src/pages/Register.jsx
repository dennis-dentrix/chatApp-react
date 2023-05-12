import { Link } from "react-router-dom";
import {
  Google,
  PhoneIphoneOutlined,
  EmailOutlined,
  PasswordOutlined,
  LockOpenOutlined,
  LockOutlined,
  PhoneOutlined,
  Person,
} from "@mui/icons-material";
import img from "../assets/chat.svg";
export const Register = () => {
  return (
    <main className="main">
      <section className="login">
        <div className="form__part">
          <div className="login__text">
            <h1 className="login__heading">Sign up tubonge</h1>
            {/* <p className="login__welcome">Karibu tubonge</p> */}
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

          {/*form  */}
          <form action="post" className="form">
            <div className="form__details">
              <Person />
              <input
                type="text"
                placeholder="John Doe"
                className="form__input"
              />
            </div>

            <div className="form__details">
              <PhoneOutlined />
              <input
                type="text"
                placeholder="0701234567"
                className="form__input"
              />
            </div>

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
                Register
              </Link>
              <p className="form__option">
                <Link to="/login" className="form__option--link">
                  Login
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
