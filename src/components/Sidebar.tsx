import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <div
        className={`sidebar-tab ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}>
        {isSidebarOpen ? "Close" : "Open"}
      </div>
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <h2>Navigation</h2>
        <nav>
          <ul>
            <li>
              <a href="/">Introduction</a>
            </li>
            <li>
              <span>Algorithms</span>
            </li>
            <li>
              <a href="/constant">O(1)</a>
            </li>
            <li>
              <a href="/linear">O(n)</a>
            </li>
            <li>
              <a href="/quadratic">O(n^2)</a>
            </li>
            <li>
              <a href="/logarithmic">O(log n)</a>
            </li>
            <li>
              <a href="/linearithmic">O(n log n)</a>
            </li>
            <li>
              <a href="/exponential">O(2^n)</a>
            </li>
            <li>
              <a href="/factorial">O(n!)</a>
            </li>
          </ul>
        </nav>
        <span>Made by: kevinsctfries</span>
      </div>
    </div>
  );
};

export default Sidebar;
