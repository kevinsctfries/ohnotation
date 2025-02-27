import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"; // Import icon
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import "./Sidebar.css";

const Sidebar = ({
  isActive,
  toggleSidebar,
}: {
  isActive: boolean;
  toggleSidebar: () => void;
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        tabRef.current &&
        !tabRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    if (isActive) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isActive, toggleSidebar]);

  return (
    <div className="sidebar-container">
      <div
        ref={tabRef}
        className={`sidebar-tab ${isActive ? "active" : ""}`}
        onClick={toggleSidebar}>
        {isActive ? (
          <KeyboardDoubleArrowLeftRoundedIcon fontSize="large" />
        ) : (
          <KeyboardDoubleArrowRightRoundedIcon fontSize="large" />
        )}
      </div>
      <div ref={sidebarRef} className={`sidebar ${isActive ? "active" : ""}`}>
        <span>Navigation</span>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Introduction
                <ChevronRightRoundedIcon className="icon" />
              </NavLink>
            </li>
            <li>
              <span>Algorithms</span>
            </li>
            <li>
              <NavLink
                to="/constant"
                className={({ isActive }) => (isActive ? "active" : "")}>
                O(1)
                <ChevronRightRoundedIcon className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/linear"
                className={({ isActive }) => (isActive ? "active" : "")}>
                O(n)
                <ChevronRightRoundedIcon className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quadratic"
                className={({ isActive }) => (isActive ? "active" : "")}>
                O(n²)
                <ChevronRightRoundedIcon className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logarithmic"
                className={({ isActive }) => (isActive ? "active" : "")}>
                O(log n)
                <ChevronRightRoundedIcon className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/linearithmic"
                className={({ isActive }) => (isActive ? "active" : "")}>
                O(n log n)
                <ChevronRightRoundedIcon className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exponential"
                className={({ isActive }) => (isActive ? "active" : "")}>
                O(2ⁿ)
                <ChevronRightRoundedIcon className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/factorial"
                className={({ isActive }) => (isActive ? "active" : "")}>
                O(n!)
                <ChevronRightRoundedIcon className="icon" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
