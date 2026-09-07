import React from "react";

function Team() {
  return (
    <div className="container ">
      <div className="row  m-5  ">
        <h1 className="fs-4 text-center mb-5">People</h1>

        <div className="col-5 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            className="rounded-circle w-75 "
            style={{ width: "297px" }}
            alt="ceo"
          />
          <h5 className="mt-3 lh-lg text-muted"> Nithin Kamath</h5>
          <p className="mt-3">Founder, CEO</p>
        </div>
        <div
          className="col-7 mt-4 p-4 text-muted 
        "
          style={{ fontSize: "16px" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome <br />
            the hurdles he faced during his decade long stint as a trader.
            Today, <br />
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee{" "}
            <br />
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href=" #" style={{ textDecoration: "none" }}>
              Homepage{" "}
            </a>{" "}
            /{" "}
            <a href=" #" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href=" " style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
          <br />
        </div>
        <div className="row mt-5">
          <div className="col-4 p-3 mt-5">
            <div className="text-center mt-3">
              <img
                src="/media/images/Nikhil.jpg"
                className="rounded-circle w-75 p-3 "
                alt=""
              />
              <h5 className="mt-4">Nikhil Kamath</h5>
              <p>Co-founder & CFO</p>
              <p>Bio </p>
            </div>
            <div className="text-center mt-3">
              <img
                src="/media/images/Seema.jpg"
                className="rounded-circle w-75 mt-5 p-3"
                alt=""
              />
              <h5 className="mt-4">Seema Patil </h5>
              <p>Director</p>
              <p>Bio </p>
            </div>
          </div>
          <div className="col-4 p-3 mt-5">
            <div className="text-center mt-3">
              <img
                src="/media/images/Kailash.jpg"
                className="rounded-circle w-75 p-3"
                alt=""
              />
              <h5 className="mt-4">Dr. Kailash Nadh </h5>
              <p>CTO</p>
              <p>Bio </p>
            </div>
            <p></p>
            <div className="text-center mt-3">
              <img
                src="/media/images/Karthik.jpg"
                className="rounded-circle w-75 mt-5 p-3"
                style={{ width: "237px" }}
                alt=""
              />
              <h5 className="mt-4">Karthik Rangappa </h5>
              <p>Chief of Education</p>
              <p>Bio </p>
            </div>
          </div>
          <div className="col-4  p-3 mt-5">
            <div className="text-center mt-3">
              <img
                src="/media/images/Venu.jpg"
                className="rounded-circle w-75 p-3"
                alt=""
              />
              <h5 className="mt-4">Venu Madhav </h5>
              <p>COO</p>
              <p>Bio </p>
            </div>
            <p></p>
            <div className="text-center mt-3">
              <img
                src="/media/images/Austin.jpg"
                className="rounded-circle w-75 mt-5 p-3"
                alt=""
              />
              <h5 className="mt-4">Austin Prakesh </h5>
              <p>Director Strategy</p>
              <p>Bio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
