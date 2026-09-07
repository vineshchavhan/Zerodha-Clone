import React from "react";

function Hero() {
  return (
    <div className="container  mt-5 " >
      <div className="row text-center" >
      
      <div><img
          src="media/images/homeHero.png"
          alt="Hero-Image"
          className="mb-3 " style={{ maxHeight: "46vh"}}
           
        />
        </div>  
        <h2 className="mt-5">Invest in everthing</h2>
        <p className="fs-4 mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 text-center"
          style={{ width: "20%",margin:'0 auto',  marginTop: "25px",  }}
        >
          Sing up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
