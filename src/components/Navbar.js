import React, { useState, useEffect } from "react";
import "../Navbar.css";

function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`navbar ${isScrolling && "nav-scroll"}`}>
      <a href="">netflix</a>
      <div className="nav-btn">
        <button>sign in</button>
        <button>sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
