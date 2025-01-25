import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavButtons.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const NavButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    "/",
    "/constant",
    "/linear",
    "/quadratic",
    "/logarithmic",
    "/linearithmic",
    "/exponential",
    "/factorial",
  ];

  const [currentIndex, setCurrentIndex] = useState(
    routes.indexOf(location.pathname)
  );

  useEffect(() => {
    setCurrentIndex(routes.indexOf(location.pathname));
  }, [location.pathname, routes]);

  const handleNavigation = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex >= 0 && newIndex < routes.length) {
      navigate(routes[newIndex]);
    }
  };

  return (
    <div className="navButtons">
      <button
        onClick={() => handleNavigation("prev")}
        disabled={currentIndex === 0}
        className="navButton"
        aria-label="Previous Page">
        <ArrowBackIosRoundedIcon />
      </button>
      <button
        onClick={() => handleNavigation("next")}
        disabled={currentIndex === routes.length - 1}
        className="navButton"
        aria-label="Next Page">
        <ArrowForwardIosRoundedIcon />
      </button>
    </div>
  );
};

export default NavButtons;
