import React from "react";
import { useState, useEffect } from "react";

import "./hero.css";
import HeroTitle from "./molecules/HeroTitle";
export default function Hero({ titleText, titleSpan }) {
  const [topCoins, setTopCoins] = useState([]);

  const getTop4Coins = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h&locale=en"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTopCoins(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTop4Coins();
  }, []);

  return (
    <div className="hero-container">
      <HeroTitle
        titleText={titleText || "Track and Trade"}
        titleSpan={titleSpan || "Crypto Currencies"}
      />
      <div className="top-4-container">
        {topCoins.map((coin) => (
          <div className="hero-coins" key={coin.id}>
            <img className="top-4-images" src={coin.image} alt={coin.name} />
            <p className="coin-name-hero">
              {coin.name}&nbsp;
              <span
                className={
                  coin.price_change_percentage_24h.toFixed(2) < 0
                    ? "minus"
                    : "plus"
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </p>
            <p className="coin-current-hero">
              ${coin.current_price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
