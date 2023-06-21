import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./market.css";
export default function Market({
  searchResults,
  searchTerm,
  coins,
  topTenCoins,
  setTopTenCoins,
  topTenSmallCoins,
  smallCoins,
  setSearchResults,
  setSearchTerm,
  setCoins,
  setTopTenSmallCoins,
  searchResultsCoins,
  setSearchResultsCoins,
  searchTermCoins,
  setSearchTermCoins,
  setSmallCoins,
}) {
  let location = useLocation();

  const [activeButtonState, setActiveButtonState] = useState(false);

  const getSmallCoins = async () => {
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
    if (smallCoins) {
      setSmallCoins(filteredCoins);
      console.log(filteredCoins);
    }
  };

  const getAllCoins = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCoins(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCoinsStart = () => {
    if (topTenCoins) {
      if (topTenCoins.length === 0) {
        const tempCoins = coins.slice(0, 10);
        setTopTenCoins(tempCoins);
      }
    }
  };

  const handleSmallCoinsStart = () => {
    if (topTenSmallCoins) {
      if (topTenSmallCoins.length === 0) {
        console.log(smallCoins);
        console.log("length is 0");
        const tempCoins = smallCoins.slice(0, 10);

        setTopTenSmallCoins(tempCoins);
      }
    }
  };

  const handleGetTenCoins = (count, button) => {
    if (location.pathname === "/marketcap") {
      const tempCoins = smallCoins.slice(count, count + 10);
      console.log(tempCoins);
      setTopTenSmallCoins(tempCoins);
      setActiveButtonState(button);
      console.log(topTenSmallCoins);
      console.log("MARKET CAP");
    } else {
      const tempCoins = coins.slice(count, count + 10);
      setTopTenCoins(tempCoins);
      setActiveButtonState(button);
      console.log(topTenCoins);
    }
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (location.pathname === "/marketcap") {
      let result = smallCoins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(result);
      setSearchResults(result);
    } else if (coins) {
      let result = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(result);
      setSearchResults(result);
    }
  }, [searchTerm]);

  console.log(searchResults);
  useEffect(() => {
    getAllCoins();
    getSmallCoins();
  }, []);

  useEffect(() => {
    handleCoinsStart();
  }, [coins]);

  useEffect(() => {
    handleSmallCoinsStart();
  }, [smallCoins]);

  return (
    <div className="market-container">
      <h2 className="market-title">Market Update</h2>

      <div className="market-content-container">
        <div className="market-content">
          <div>
            <div className="market-coins">
              <p>Coin</p>
            </div>
          </div>

          <div className="market-coins-prices">
            <p>Price</p>
            <p>24h Change</p>
            <p>Market Cap</p>
          </div>
        </div>

        <div className="market-coins-row-container">
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={handleInput}
          />
          {location.pathname === "/marketcap" &&
            searchTerm.length === 0 &&
            topTenSmallCoins.map((coin) => (
              <>
                <div className="coin-row">
                  <div className="market-img-text-container">
                    <Link to={`/coin/${coin.name}`} state={coin}>
                      {coin.name}
                    </Link>
                  </div>
                  <div className="market-coins-prices">
                    <p>$ {Number(coin.price_usd).toFixed(6)}</p>
                    <p
                      className={coin.percent_change_24h < 0 ? "minus" : "plus"}
                    >
                      {Number(coin.percent_change_24h).toFixed(2)} %
                    </p>

                    <p> ${coin.market_cap_usd.toLocaleString()}</p>
                  </div>
                </div>
              </>
            ))}
          {location.pathname === "/marketcap" &&
            searchTerm.length !== 0 &&
            searchResults.map((coin) => (
              <>
                <div className="coin-row">
                  <div className="market-img-text-container">
                    <Link to={`/coin/${coin.name}`} state={coin}>
                      {coin.name}
                    </Link>
                  </div>
                  <div className="market-coins-prices">
                    <p>$ {Number(coin.price_usd).toFixed(6)}</p>
                    <p
                      className={coin.percent_change_24h < 0 ? "minus" : "plus"}
                    >
                      {Number(coin.percent_change_24h).toFixed(2)} %
                    </p>

                    <p> ${coin.market_cap_usd.toLocaleString()}</p>
                  </div>
                </div>
              </>
            ))}
          {searchTerm &&
            searchTerm.length === 0 &&
            topTenCoins.map((coin) => (
              <>
                <div className="coin-row">
                  <div className="market-img-text-container">
                    <img className="market-coins-img" src={coin.image} alt="" />
                    <p className="market-coins">{coin.name}</p>
                  </div>
                  <div className="market-coins-prices">
                    <p>$ {coin.current_price.toFixed(2)}</p>
                    <p
                      className={
                        coin.price_change_percentage_24h.toFixed(2) < 0
                          ? "minus"
                          : "plus"
                      }
                    >
                      {coin.price_change_percentage_24h.toFixed(2)} %
                    </p>

                    <p> ${coin.market_cap.toLocaleString()}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
      <div className="market-coins-selector">
        <button
          onClick={() => handleGetTenCoins(0, "button1")}
          className={
            activeButtonState === "button1"
              ? "active"
              : "market-button-selector"
          }
        >
          1
        </button>
        <button
          onClick={() => handleGetTenCoins(10, "button2")}
          className={
            activeButtonState === "button2"
              ? "active"
              : "market-button-selector"
          }
        >
          2
        </button>
        <button
          onClick={() => handleGetTenCoins(20, "button3")}
          className={
            activeButtonState === "button3"
              ? "active"
              : "market-button-selector"
          }
        >
          3
        </button>
        <button
          onClick={() => handleGetTenCoins(30, "button4")}
          className={
            activeButtonState === "button4"
              ? "active"
              : "market-button-selector"
          }
        >
          4
        </button>
        <button
          onClick={() => handleGetTenCoins(40, "button5")}
          className={
            activeButtonState === "button5"
              ? "active"
              : "market-button-selector"
          }
        >
          5
        </button>
      </div>
    </div>
  );
}
