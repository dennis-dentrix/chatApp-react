import { Link } from "react-router-dom";
import { Message, Chat } from "../components";
import { Nav } from "./../components/Layout/Nav";
import { Header } from "./../components/Layout/Header";
export const Inbox = () => {
  return (
    <div id="root">
      <Nav />
      <main className="main">
        <Header />
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
        </section>
      </main>
    </div>
  );
};
