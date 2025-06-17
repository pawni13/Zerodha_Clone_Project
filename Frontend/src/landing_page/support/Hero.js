import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mx-5 ">
        <div className="col-6 p-5">
          <h4 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input className="mb-3 mt-3"placeholder="Eg : How do I activate F&O, why is my order getting rejected..." />
          
          <a href="" style={{marginLeft:"20px"}}>Track account opening </a>
          
          <a href=""style={{marginLeft:"20px"}}>Track segment activation </a>
          
          <a href="" style={{marginLeft:"20px"}}>Intraday margins </a>
          
          <a href="" style={{marginLeft:"20px"}}>Kite user manual</a>
          
        </div>
        <div className="col-6 p-5">
          <h2 className="fs-3">Featured</h2>
          <ol style={{lineHeight:"2.0"}}>
            <li>
              {" "}
              <a href="" > Current Takeovers and Delisting - April 2025</a>
              <br />
            </li>
            <li>
              <a href=""> Surveillance measure on scrips - April 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
