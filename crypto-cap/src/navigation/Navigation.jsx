import React from "react";
import { useState, useEffect } from "react";
import "./navigation.css";
export default function Navigation({ isMobile }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  console.log(mobileMenu);

  return (
    <>
      <div className="nav-bar">
        <div>
          <p className="coincap">COINCAP</p>
        </div>
        {!isMobile && (
          <>
            <ul className="nav-ul">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/marketcap">Market</a>
              </li>
              <li>
                <a href="">Choose Us</a>
              </li>
              <li>
                <a href="">Join</a>
              </li>
            </ul>
            <div className="twitter-discord-icon">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-discord"></i>
            </div>
          </>
        )}
        {isMobile && (
          <i
            onClick={() => setMobileMenu(true)}
            className="fa-solid fa-bars-staggered hamburger-menu"
          ></i>
        )}
      </div>

      <nav
        className={`nav-mobile-menu ${
          mobileMenu === true ? "active-mobile" : null
        }`}
      >
        <i
          onClick={() => setMobileMenu(false)}
          className="fa-solid fa-xmark close-mobile"
        ></i>
        <>
          <ul className="nav-mobile-ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/marketcap">Market</a>
            </li>
            <li>
              <a href="">Choose Us</a>
            </li>
            <li>
              <a href="">Join</a>
            </li>
          </ul>
        </>
      </nav>
    </>
  );
}
