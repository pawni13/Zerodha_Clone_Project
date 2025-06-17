import React from "react";

function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center">
        <h1 className="mb-3 mt-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png"style={{width:"199px", height:"52px", marginBottom:"10px"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" style={{width:"199px", height:"52px", marginBottom:"10px"}}/>
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/sensibullLogo.svg" style={{width:"199px", height:"52px", marginBottom:"10px"}}/>
          <p className="text-small text-muted">Options trading platform</p>
          </div>


          <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png" style={{width:"199px", height:"52px", marginBottom:"10px"}}/>
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/goldenpiLogo.png " style={{width:"199px", height:"52px", marginBottom:"10px"}}/>
          <p className="text-small text-muted">Bonds trading platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png" style={{width:"189px", height:"52px", marginBottom:"10px"}} />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <hr/>
        <button className='p-2 btn btn-primary fs-5 mb-5 mt-5'style={{width:"15%" , margin:"0 auto" , marginTop:"20px"}}> Sign up for free</button>
     </div>
</div>
  );
}

export default Universe;
