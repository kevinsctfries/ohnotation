import "./Header.css";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header>
      <Link to="/" className="headerLink">
        <h1 className="title">
          oh, no<span className="subTitle">tation</span>
        </h1>
      </Link>
      <div className="menuContainer">
        <MenuRoundedIcon
          fontSize="large"
          className="menuIcon"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && <DropdownMenu closeDropdown={closeDropdown} />}
      </div>
    </header>
  );
};

export default Header;
