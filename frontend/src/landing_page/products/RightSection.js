import React from "react";

function RightSection({
  productName,
  productDescription,
  learMore,
  imageURL}) {
  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-4 mt-" style={{ marginLeft: "50px" }}>
          <div className="" style={{ marginRight: "50px", marginTop: "143px" }}>
            <h3 className="text-muted  " style={{ padding: "10px" }}>
              {productName}
            </h3>
            <p
              className="text-muted fs-6"
              style={{ padding: "10px", lineHeight: "1.8" }}
            >
              {productDescription}
            </p>
            <a href=" " style={{ textDecoration: "None", padding: "10px" }}>
              {learMore}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-7 text-center p-">
          <img src={imageURL} alt="" style={{ maxHeight: "px" }} />
        </div>
      </div>
      
    </div>
  );
}

export default RightSection;
