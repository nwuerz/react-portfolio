import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="jumbotron shadow-lg">
              <h2>About Me</h2>
              <hr noshade/>
              <img
                id="me"
                className="img-fluid, float-left shadow-lg"
                src="images/bio-pic(2).jfif"
              />

              <p>
                Hello, my name is Nick Wuerz and I'm a Web Developer. I have a
                passion for designing and building apps and expanding my web
                development skills and knowledge.
              </p>

              <p>
                I am currently enrolled at SMU's full stack web development
                program. When im not working or coding, I spend my free time
                with my family, running, playing guitar or listening to
                podcasts.
              </p>

              <p>
                If you'd like to know more, please check out my
                <a
                  className="links"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/nwuerz"
                >
                  GitHub repo
                </a>
                ,
                <a
                  className="links"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/nick-wuerz-908a50195/"
                >
                  LinkedIn
                </a>
                or my
                <a
                  className="links"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/open?id=1XkyXOFJzkahM5G7uWD5cBM-V5bY2yFMD"
                >
                  resume
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
