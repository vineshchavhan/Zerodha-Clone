import React from "react";

function Education() {
  return (
    <div className="container p-3 mb-4">
      <div className="row">
        <div className="col-6 ">
          <img
            src="media/images/education.svg"
            style={{ width: "70%" }}
            alt=""
          />
        </div>
        <div className="col-6 ">
          <h1 className="mb-5 fs-2">Free and open market education</h1>
          <p className="">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="
            "
            className=""
            style={{ textDecoration: "none" }}
          >
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mb-3 mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="
            "
            className=""
            style={{ textDecoration: "none" }}
          >
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
