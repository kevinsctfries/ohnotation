import { useNavigate, useLocation } from "react-router-dom";
import "./NavButtons.css";

const NavButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define your routes in order
  const routes = [
    "/",
    "/constant",
    "/linear",
    "/logarithmic",
    "/quadratic",
    "/linearithmic",
    "/exponential",
    "/factorial",
  ];
  const currentIndex = routes.indexOf(location.pathname);

  const handleNavigation = direction => {
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex >= 0 && newIndex < routes.length) {
      navigate(routes[newIndex]);
    }
  };

  return (
    <div className="navButtons">
      <button
        onClick={() => handleNavigation("prev")}
        disabled={currentIndex === 0}>
        Previous
      </button>
      <button
        onClick={() => handleNavigation("next")}
        disabled={currentIndex === routes.length - 1}>
        Next
      </button>
    </div>
  );
};

export default NavButtons;
