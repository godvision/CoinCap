import React from "react";
import "./join.css";
export default function Join({ isMobile }) {
  return (
    <div className="join-container">
      <div className="join-title-container">
        {!isMobile && (
          <>
            <img className="join-btc-coin" src="./btc-coin.png" alt="" />
          </>
        )}

        <h2 className="join-title-text">
          JOIN US VIA <br />
          <span className="join-title-text-span">DISCORD</span>
        </h2>
        {!isMobile && (
          <>
            <img className="join-eth-coin" src="./eth-coin.png" alt="" />
          </>
        )}

        <div className="join-sub-text">
          <p>Invest and manage all your crypto at one place. </p>
          <button className="join-button">Join via Discord</button>
        </div>
      </div>
    </div>
  );
}
