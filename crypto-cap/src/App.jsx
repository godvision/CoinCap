import { useState, useEffect } from "react";
import Marketcap from "./Marketcap/MarketCap";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Launchpad from "./launchpad/Launchpad";
import Coin from "./coin/Coin";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsCoins, setSearchResultsCoins] = useState([]);
  const [searchTermCoins, setSearchTermCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [coins, setCoins] = useState([]);
  const [topTenCoins, setTopTenCoins] = useState([]);
  const [topTenSmallCoins, setTopTenSmallCoins] = useState([]);
  const [smallCoins, setSmallCoins] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/marketcap"
            element={
              <Marketcap
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
                isMobile={isMobile}
              />
            }
          />
          <Route
            path="/"
            element={
              <Launchpad
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
                isMobile={isMobile}
              />
            }
          />
          <Route path="/coin/:name" element={<Coin isMobile={isMobile} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
