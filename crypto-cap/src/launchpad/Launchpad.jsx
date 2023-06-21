import { useState, useEffect } from "react";
import Navigation from "../navigation/navigation";
import Hero from "../hero/Hero";
import Market from "../market/Market";
import Choose from "../choose/Choose";
import Join from "../join/Join";
import "./launchpad.css";
import Footer from "../footer/Footer";
function Launchpad({ isMobile, setCoins }) {
  const [top4coins, setTop4Coins] = useState([]);

  const getCoins = async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/ticker");

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    const filteredCoins = data.filter(
      (coin) =>
        coin.percent_change_24h >= 10 && coin.market_cap_usd <= 100000000
    );

    setTop4Coins(filteredCoins);
    console.log(filteredCoins);
  };

  useEffect(() => {}, []);

  return (
    <>
      <section className="home">
        <Navigation isMobile={isMobile} />
        {top4coins.map((coin) => (
          <>
            <p>Name: {coin.name}</p>
            <p>Change: {coin.percent_change_24h}%</p>
            <p>Marketcap: {coin.market_cap_usd}</p>
            <p>Symbol: {coin.symbol}</p>
            <p>Rank: {coin.rank}</p>
          </>
        ))}
        <Hero isMobile={isMobile} />
      </section>
      <section className="market">
        <Market isMobile={isMobile} setCoins={setCoins} />
      </section>
      <section className="choose">
        <Choose isMobile={isMobile} />
      </section>
      <section className="join">
        <Join isMobile={isMobile} />
      </section>
      <footer className="footer">
        <Footer isMobile={isMobile} />
      </footer>
    </>
  );
}

export default Launchpad;
