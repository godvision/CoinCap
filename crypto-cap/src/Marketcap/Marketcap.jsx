import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/navigation";
import Hero from "../hero/Hero";
import Market from "../market/Market";

export default function Marketcap({
  searchResults,
  searchTerm,
  coins,
  topTenCoins,
  topTenSmallCoins,
  smallCoins,
  setSearchResults,
  setSearchTerm,
  setCoins,
  setTopTenCoins,
  setTopTenSmallCoins,
  setSmallCoins,
  searchResultsCoins,
  setSearchResultsCoins,
  searchTermCoins,
  setSearchTermCoins,
  isMobile,
}) {
  return (
    <div>
      <section className="home">
        <Navigation isMobile={isMobile} />
        <Hero
          titleText="hundred Million"
          titleSpan="marketcap Crypto Currencies"
        />
      </section>

      <section className="market">
        <Market
          searchTermCoins={searchTermCoins}
          setSearchTermCoins={setSearchTermCoins}
          searchResultsCoins={searchResultsCoins}
          setSearchResultsCoins={setSearchResultsCoins}
          setSearchResults={setSearchResults}
          setSearchTerm={setSearchTerm}
          setCoins={setCoins}
          setTopTenCoins={setTopTenCoins}
          setTopTenSmallCoins={setTopTenSmallCoins}
          setSmallCoins={setSmallCoins}
          searchResults={searchResults}
          searchTerm={searchTerm}
          coins={coins}
          topTenCoins={topTenCoins}
          topTenSmallCoins={topTenSmallCoins}
          smallCoins={smallCoins}
        />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
