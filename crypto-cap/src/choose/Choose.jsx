import React from "react";
import "./choose.css";
export default function Choose() {
  return (
    <div className="choose-container">
      <h2 className="choose-title">
        WHY <span className="choose-choose-us-text">CHOOSE US</span>
      </h2>
      <div className="choose-content-container">
        <div className="choose-content-container-1">
          <div className="choose-box">
            <div className="choose-icon">
              <i className="fa-solid fa-wallet"></i>
            </div>
            <div className="choose-box-text">
              <h4>CONNECT YOUR WALLET</h4>
              <p>Use Trust Wallet, Metamask or to connect to te app.</p>
            </div>
          </div>
          <div className="choose-box">
            <div className="choose-icon">
              <i className="fa-solid fa-pen-ruler"></i>
            </div>
            <div className="choose-box-text">
              <h4>CONNECT YOUR WALLET</h4>
              <p>Use Trust Wallet, Metamask or to connect to te app.</p>
            </div>
          </div>
          <div className="choose-box">
            <div className="choose-icon">
              <i className="fa-solid fa-bolt-lightning"></i>
            </div>
            <div className="choose-box-text">
              <h4>CONNECT YOUR WALLET</h4>
              <p>Use Trust Wallet, Metamask or to connect to te app.</p>
            </div>
          </div>
        </div>
        <div className="choose-content-container-2">
          <img
            className="choose-content-hand-img"
            src="hand-bitcoin.png"
            alt=""
          />
        </div>
        <div className="choose-content-container-3">
          <div className="choose-box">
            <div className="choose-icon">
              <i className="fa-sharp fa-solid fa-satellite-dish"></i>
            </div>
            <div className="choose-box-text">
              <h4>RECEIVE YOUR OWN NFTS</h4>
              <p>Invest all your crypto at one place on one platform.</p>
            </div>
          </div>
          <div className="choose-box">
            <div className="choose-icon">
              <i className="fa-solid fa-horse"></i>
            </div>
            <div className="choose-box-text">
              <h4>RECEIVE YOUR OWN NFTS</h4>
              <p>Invest all your crypto at one place on one platform.</p>
            </div>
          </div>
          <div className="choose-box">
            <div className="choose-icon">
              <i className="fa-solid fa-boxes-stacked"></i>
            </div>
            <div className="choose-box-text">
              <h4>RECEIVE YOUR OWN NFTS</h4>
              <p>Invest all your crypto at one place on one platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
