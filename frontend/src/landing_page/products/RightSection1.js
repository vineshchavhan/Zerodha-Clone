import React from "react";
function RightSection1({ productName1, productDescription1, learMore1, iURL }) {
  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-4">
          <div
            className="mt-5"
            style={{ marginLeft: "50px", marginTop: "0px" }}
          >
            <h3 className="text-muted  " style={{ padding: "10px" }}>
              {productName1}
            </h3>
            <p
              className="text-muted fs-6"
              style={{ padding: "10px", lineHeight: "1.8" }}
            >
              {productDescription1}
            </p>
            <a href=" " style={{ textDecoration: "None", padding: "10px" }}>
              {learMore1}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-7 text-center">
          <img src={iURL} alt="" style={{  marginLeft: "50px" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection1;
