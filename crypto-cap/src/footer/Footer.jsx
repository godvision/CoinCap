import React from "react";
import "./footer.css";
export default function Footer({ isMobile }) {
  return (
    <div className="footer-container">
      <div className="footer-cotent-socials">
        <i className="fa-brands footer-icons fa-twitter"></i>
        <i className="fa-brands footer-icons fa-discord"></i>
        <i className="fa-brands footer-icons fa-facebook"></i>
        <i className="fa-brands footer-icons fa-youtube"></i>
      </div>
      <div className="footer-content-text">
        <p>Privacy</p>
        <p>Terms of Use</p>
      </div>
      {!isMobile && (
        <>
          <img className="footer-img1" src="crypto-chest.png" alt="" />
          <img className="footer-img2" src="crypto-vault.png" alt="" />
        </>
      )}
    </div>
  );
}
