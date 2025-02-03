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

  const routeTitles = [
    "Introduction",
    "Constant Time",
    "Linear Time",
    "Quadratic Time",
    "Logarithmic Time",
    "Linearithmic Time",
    "Exponential Time",
    "Factorial Time",
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
        className="backButton"
        aria-label="Previous Page">
        <ArrowBackIosRoundedIcon />
      </button>
      <h1>{routeTitles[currentIndex]}</h1>
      <button
        onClick={() => handleNavigation("next")}
        disabled={currentIndex === routes.length - 1}
        className="nextButton"
        aria-label="Next Page">
        <ArrowForwardIosRoundedIcon />
      </button>
    </div>
  );
};

export default NavButtons;
