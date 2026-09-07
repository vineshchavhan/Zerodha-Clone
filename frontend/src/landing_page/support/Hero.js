import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-primary text-bg-dark">
      <div className="containe">
        <div className="row p-5">
          <div className="col-6 mt- mb-5">
            <h4 className=" mb-5 fs-4" style={{ marginLeft: "200px" }}>
              Support Portal
            </h4>
            <h4 className="fs-3" style={{ marginLeft: "200px" }}>
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input
              className="mt-3 "
              style={{ marginLeft: "200px", height: "52px" }}
              type="text"
              placeholder="Eg.how do i active F&O, why is my order getting rejected.."
              class="search-bar"
            ></input>
            <div className="mt-2" style={{ marginLeft: "200px" }}>
              <a href="# " className="bg-primary text-bg-dark">
                Track account opening
              </a>
              &nbsp;&nbsp;
              <a href="# " className="bg-primary text-bg-dark">
                Track segment activation
              </a>
              &nbsp;&nbsp;
              <a href="# " className="bg-primary text-bg-dark">
                Intraday margins
              </a>
              &nbsp;&nbsp;
              <a href="# " className="bg-primary text-bg-dark">
                Kite user manual
              </a>
              &nbsp;&nbsp;
            </div>
          </div>
          <div className="col-6 ">
            <a href="# " style={{ marginLeft: "350px" }} className="bg-primary text-bg-dark">Track Tickets</a>
            <h3 className="fs-3 mt-5"  style={{ marginLeft: "100px" }} >
                Featured
            </h3>
            <a href="# " style={{ marginLeft: "100px" }} className="bg-primary text-bg-dark">1.Current Takeover and Delisting-January 2024</a><br /><br />
            <a href="# " style={{ marginLeft: "100px" }} className="bg-primary text-bg-dark">2.Latest Intraday leverages - MIS & CO</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
