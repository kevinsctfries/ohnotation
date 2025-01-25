import { useEffect, useRef, useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({ closeDropdown }: { closeDropdown: () => void }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true); // Activate the dropdown when it mounts

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false); // Deactivate the dropdown with animation
        setTimeout(closeDropdown, 300); // Wait for animation to finish before closing
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [closeDropdown]);

  return (
    <div
      ref={dropdownRef}
      className={`dropdownMenu ${isActive ? "active" : ""}`}>
      <ul>
        <li>
          <span>Test</span>
        </li>
        <li>
          <span>Test</span>
        </li>
        <li>
          <span>Test</span>
        </li>
        <li>
          <span>Test</span>
        </li>
        <li>
          <span>Test</span>
        </li>
        <li>
          <span>Test</span>
        </li>
        <li>
          <span>Test</span>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
