import React from "react";

const Project = (props) => {
  return (
    <>
      <div className="col-sm-4">
        <div className="row">
          <div id="game-img" className="thumbnail text-center">
            <img
              src={props.imgSrc}
              className="img-fluid portfolio-img shadow-lg"
              alt="Responsive image"
            />
            <div className="caption">
              <a
                id="txt-clr"
                href={props.projectLink}
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                {props.projectName}
              </a>
              <a
                id="txt-clr"
                href={props.githubLink}
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
