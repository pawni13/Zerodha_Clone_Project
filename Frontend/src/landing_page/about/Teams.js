import React from "react";

function Teams() {
  return (
    <div className="container">
      <div className="row p-5 border-top mt-5 ">
        <h1 className="text-center ">People</h1>
      </div>
      <div
        className="row p-3  text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/me.JPG"
            alt=" "
            style={{
              width: "70%",
              borderRadius: "100%",
              marginLeft: "100px",
              marginRight: "100px",
            }}
          />

          <h4 className="mt-3">Pawni Mishra </h4>
          <h6> MCA Student</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            {" "}
            Hi, welcome to my corner of the web! I'm a passionate 3rd semester
            MCA student at Gyan Ganga Institute of Technology and Sciences,
            diving deep into the world of web development. I'm building my
            skills to create digital experience that make a difference.
          </p>
          <p>
            {" "}
            This site is a showcase of my journey- my projects, technical
            skills, and enthusiasm for solving real-world problems through code.
          </p>
          <p>
            {" "}
            Feel free to explore my work, check out my projects, or connect with
            me to discuss new opportunities. I'm excited to contribute my
            creativity and skills to innovative teams and projects!{" "}
          </p>
          <p>
            {" "}
            Connect on
            <a
              href="www.linkedin.com/in/pawni-mishra-081216224
"
              className=""
              style={{ textDecoration: "none" }}
            >
              {" "}
              LinkedIn
            </a>{" "}
            /{" "}e-mail :
            <a href=""className="" style={{ textDecoration: "none" }}>
               pawni.mishra13@gmail.com
            </a>{" "}
            / Phone no. :{" "}
            <a href="https" className="" style={{ textDecoration: "none" }}>
              {" "}
              +91 9343689493
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Teams;
