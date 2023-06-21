import React from "react";

export default function HeroTitle({ titleText, titleSpan }) {
  return (
    <div className="hero-text-title">
      <img className="btc-coin" src="./btc-coin.png" alt="" />
      <h1 className="title-text">
        {titleText} <br />
        <span className="title-span">{titleSpan}</span>
      </h1>
      <img className="eth-coin" src="./eth-coin.png" alt="" />
    </div>
  );
}
