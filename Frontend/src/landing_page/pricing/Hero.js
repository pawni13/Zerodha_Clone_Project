import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className=" row text-center border-bottom mt-5 p-5">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades{" "}
        </h3>
      </div>
      <div className=" row mt-5 p-5 text-center">
        <div className="col-4 p-4">
          <img src="media/pricingEquity.svg " />
          <h3 className="mb-4">Free equity delivery</h3>
          <p className="text-muted">
          All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/intradayTrades.svg" />
          <h3 className="mb-4">Intraday and F&O trades</h3>
          <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-4">
          <img src="media/pricingEquity.svg " />
          <h3 className="mb-4">Free direct MF</h3>
          
        </div>
</div>
       </div>
    
  );
}

export default Hero;
