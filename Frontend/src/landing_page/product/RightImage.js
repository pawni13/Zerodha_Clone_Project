import React from 'react';

function RightImage({
    imageURL,
  productName,
  productDescription,
  learnMore,
})
 {
    return (
        <div className="container mt-5">
        <div className="row">
          <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p style={{ lineHeight: "1.8" }}>{productDescription}</p>
            <div>
              <a
                href={learnMore} style={{textDecoration:"none"}}
              >
                LearnMore{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            
          </div>
          <div className="col-6">
            <img src={imageURL} />
          </div>
        </div>
      </div>
);
}

export default RightImage;