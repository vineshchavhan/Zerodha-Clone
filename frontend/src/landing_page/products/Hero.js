import React from "react";

function Hero() {
  return (
    <div className=" border-bottom  container text-center m-5 p-5">
      <h2>Zerodha Products</h2>
      <p className="text-muted mt-3 fs-5">
        {" "}
        Sleek, modern and intuitive trading platforms
      </p>
    <p className="mt-3" style={{marginBottom:'100px'}}>
        Check out our{" "}
        <a  href=" " style={{ textDecoration: "none", }}>
          investment offering
        </a>{" "}
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        
      </p>
    </div >
  );
}

export default Hero;
