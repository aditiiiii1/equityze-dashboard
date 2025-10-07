import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      {/* Main container for the top section */}
      <div className="funds-top-container">
        <div className="funds-text">
          <p className="funds-description">Instant, zero-cost fund transfers with UPI</p>
        </div>
        <div className="funds-buttons-container">
          <Link to="/add-funds" className="btn btn-green">Add funds</Link>
          <Link to="/withdraw" className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      {/* Main content row */}
      <div className="row funds-content-row">
        {/* Equity Details Card */}
        <div className="col-lg-6 funds-card-wrapper">
          <div className="funds-card">
            <p className="card-title">Equity</p>
            <div className="funds-data-grid">
              <div className="data-item">
                <p className="data-label">Available margin</p>
                <p className="data-value highlight-text">4,043.10</p>
              </div>
              <div className="data-item">
                <p className="data-label">Used margin</p>
                <p className="data-value">3,757.30</p>
              </div>
              <div className="data-item">
                <p className="data-label">Available cash</p>
                <p className="data-value">4,043.10</p>
              </div>
            </div>

            <hr className="divider" />
            
            <div className="funds-data-grid">
              <div className="data-item">
                <p className="data-label">Opening Balance</p>
                <p className="data-value">4,043.10</p>
              </div>
              <div className="data-item">
                <p className="data-label">Opening Balance</p>
                <p className="data-value">3736.40</p>
              </div>
              <div className="data-item">
                <p className="data-label">Payin</p>
                <p className="data-value">4064.00</p>
              </div>
              <div className="data-item">
                <p className="data-label">SPAN</p>
                <p className="data-value">0.00</p>
              </div>
              <div className="data-item">
                <p className="data-label">Delivery margin</p>
                <p className="data-value">0.00</p>
              </div>
              <div className="data-item">
                <p className="data-label">Exposure</p>
                <p className="data-value">0.00</p>
              </div>
              <div className="data-item">
                <p className="data-label">Options premium</p>
                <p className="data-value">0.00</p>
              </div>
            </div>

            <hr className="divider" />
            
            <div className="funds-data-grid">
              <div className="data-item">
                <p className="data-label">Collateral (Liquid funds)</p>
                <p className="data-value">0.00</p>
              </div>
              <div className="data-item">
                <p className="data-label">Collateral (Equity)</p>
                <p className="data-value">0.00</p>
              </div>
              <div className="data-item">
                <p className="data-label">Total Collateral</p>
                <p className="data-value">0.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Commodity Account Card */}
        <div className="colfunds-card-wrapper">
          <div className="funds-card commodity-card ">
            <p className="card-message">You don't have a commodity account</p>
            <Link to="/open-account" className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;