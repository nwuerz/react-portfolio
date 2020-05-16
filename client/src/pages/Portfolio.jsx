import React, { Component } from "react";
import Project from "../components/Project";
import projects from '../components/projects.json'

class Portfolio extends Component {
    state = {
        projects
    }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="jumbotron shadow-lg">
                <h2>Portfolio</h2>
                <hr noshade></hr>

                <div className="row">
                  {this.state.projects.map((project, index) => {
                      return <Project 
                      key={index}
                      projectName={project.projectName}
                      imageSource={project.imageSource}
                      projectLink={project.projectLink}
                      githubLink={project.githubLink}
                      />
                  })}

                </div>

                <br/>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
