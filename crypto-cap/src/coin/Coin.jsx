import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../navigation/navigation";
import "./coin.css";
export default function Coin({ isMobile }) {
  const [coin, setCoin] = useState([]);
  const location = useLocation();
  const urlCoin = location.state;
  console.log(urlCoin);
  console.log(urlCoin.id);
  const getTwitterData = async () => {
    const response = await fetch(
      `https://api.coinpaprika.com/v1/coins/${urlCoin.id}`
    );
    console.log(isMobile);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();

    setCoin(data);
  };

  useEffect(() => {
    getTwitterData();
  }, [urlCoin]);

  console.log(coin);
  return (
    <div>
      <section className="home">
        <Navigation isMobile={isMobile} />
        <section className="coin">
          <div className="coin-container">
            <div className="coin-content-container">
              <img className="coin-img" src={coin.logo} alt="" />
              <h1 className="coin-name-title">{coin.name}</h1>
              <p className="coin-rank">RANK: #{coin.rank}</p>
            </div>
            <div className={isMobile ? "hl" : "vl"}></div>
            <div className="coin-price-content-container">
              <div className="coin-prices">
                <div className="coin-content-24">
                  <p className="coin-text">
                    24 Change:&nbsp;
                    <span
                      className={coin.percent_change_24h < 0 ? "minus" : "plus"}
                    >
                      {Number(urlCoin.percent_change_24h).toFixed(3)} %
                    </span>
                  </p>
                </div>
                <div className="coin-content-current">
                  <p className="coin-text">
                    Price:{" "}
                    <span className="plus">
                      {Number(urlCoin.price_usd).toFixed(5)}
                    </span>
                  </p>
                </div>
                <div className="coin-content-symbol">
                  <p className="coin-text">Symbol: {urlCoin.symbol}</p>
                </div>
              </div>
              <div className="coin-description">
                <p>{coin.description}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
