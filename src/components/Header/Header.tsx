import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="headerLink">
        <h1 className="title">
          oh, no<span className="subTitle">tation</span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
