import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p style={{ lineHeight: "1.8" }}>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "100px", textDecoration: "none" }}
            >
              LearnMore{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3 mb-5">
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img src="media/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
