import React from "react";

function Awards() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="awards" />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha client contribute to over 15% of all retail order
            volume in india daily by trading and investing in.
          </p>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <li>
                  <ul>Future and Option</ul>
                  <li>
                    <ul>Commodity derivatives</ul>
                  </li>
                  <li>
                    <ul>Currency derivatives</ul>
                  </li>
                </li>
              </div>
              <div className="col-6">
                <li>
                  <ul>Stock & IPOs</ul>
                  <li>
                    <ul> Direct mutual funds</ul>
                  </li>
                  <li>
                    <ul> Bonds and Govt.Securities</ul>
                  </li>
                </li>
              </div>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{width:'90%'}} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
