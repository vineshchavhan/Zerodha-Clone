import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learMore,
  goolePlay,
  appStore,
}) {
  return (
    <div className="container p-5 m-5">
      <div className="row">
        <div className="col-7 text-center">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-4 mt-5" style={{marginLeft:'50px'}}>
          <h3 className="text-muted" style={
            {padding:'10px'}
          }>{productName}</h3>
          <p className="text-muted" style={
            { fontSize:'16px', padding:'10px',lineHeight:'1.8',}
          }>{productDescription}</p>
          <div style={
            {padding:'10px'}
          } >
            <a  style={{marginRight:'70px',textDecoration:'None'}}  href=" "> {tryDemo} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a style={{textDecoration:'None'}} href=" "> {learMore}</a>
          </div>
          <div style={
            {padding:'10px'}
          }>
            <a href={goolePlay}>
              <img  style={{marginRight:'30px'}} src="media\images\googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="media\images\appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
