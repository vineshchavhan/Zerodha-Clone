import React from "react";

function Universe() {
  return (
    <div className="container border-bottom">
      <div>
        <p className="text-center fs-4 " style={{ marginBottom: "110px" }}>
          Want to know more about our technology stack? Check out the{" "}
          <a href=" " style={{ textDecoration: "None" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>
      <div className="text-center  ">
        <h3 className="mb-4">The Zerodha Universe</h3>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row " style={{fontSize:'13px',marginLeft:"90px",marginRight:"90px"}}>
        <div className="col-4 p-3 mt-2 text-center">
          <a href=" " className="text-muted" style={{ textDecoration: "None" }}>
            <img className="mb-3" src="media/images/zerodhaFundhouse.png"  style={{maxwidth:'100%',height: '55px'}} alt="" /> <br />
            <span>
              Our asset management venture
              <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </span>
          </a>
          <div className="p-3 mt-5 ">
          <a href=" " className="text-muted" style={{ textDecoration: "None" }}>
            <img className="mb-3"
              src="media/images/streakLogo.png"
             
              style={{maxwidth:'100%',height: '55px' }}
              alt=""
            />{" "}
            <br />
            <span>
              Systematic trading palatfrom
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding
            </span>
          </a>
          </div>
        </div>
        <div className="col-4 p-3 mt-2 text-center">
          <a href=" " className="text-muted" style={{ textDecoration: "None" }}>
            <img className="mb-4" src="media/images/sensibullLogo.svg" style={{maxwidth:'100%',height: '40px'}}  alt="" /> <br />
            <span>
              Options trading paltform that lets you
              <br />
              create strategies, analyze position,and examine
               <br />
              data points like open internet, FII/DII,snd more.
            </span>
          </a>
           <div className="p-3 mt-5">
          <a href=" " className="text-muted" style={{ textDecoration: "None" }}>
    <img className="mb-3" src="media/images/smallcaseLogo.png" alt="" style={{maxwidth:'100%',height: '55px'}} /> <br />
            <span>
              Thematic investing platform
              <br />
             that helps you invest in diversified 
              <br />
              baskets of stocks on ETFs.
            </span>
          </a>
          </div>
        </div>
        <div className="col-4 p-3 mt-2 text-center">
          {" "}
          <a href=" " className="text-muted" style={{ textDecoration: "None" }}>
            <img className="mb-3" src="media/images/tijori.svg" alt="" style={{maxwidth:'100%',height: '55px'}}/> <br />
            <span>
            Investment research platform  <br />
              that offers detailed insights on stocks,<br />
              sectors,supply chains, and more.
            </span>
          </a>
          <div className="p-3 mt-5">
          <a href=" " className="text-muted" style={{ textDecoration: "None" }}>
            <img className="mb-3" src="media/images/dittoLogo.png" alt="" style={{maxwidth:'100%',height: '55px'}} /> <br />
            <span>
              Personalized advice on life  <br />
           and health insurance. No spam   <br />
             and no mis-selling.
            </span>
          </a>
          </div>
        </div>
          <button
          className="p-2 btn btn-primary fs-5  text-center"
          style={{ width: "20%",margin:'0 auto',  marginTop: "25px", marginBottom:'100px' }}
        >
          Sing up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
