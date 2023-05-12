import { Link } from "react-router-dom";
import { Message, Chat } from "../components";
// import { LoggedInDropDown } from "./../components/Layout/LoggedInDropdown";

export const Inbox = ({ setIsShown }) => {
  return (
    <>
      <section className="main__body">
        <div className="main__header">
          <Link to="inbox" className="header__link active">
            Inbox
          </Link>
          <Link to="/" className="header__link">
            Drafts
          </Link>
        </div>
        <div className="main__box">
          <Message />
          <Chat />
        </div>
        {/* <LoggedInDropDown setIsShown={setIsShown} /> */}
      </section>
    </>
  );
};
