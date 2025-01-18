import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
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
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
