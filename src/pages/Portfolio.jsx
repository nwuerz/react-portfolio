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
                  <Project 
                    projectName={this.state.projects[0].projectName}
                    imageSource={this.state.projects[0].imageSource}
                    projectLink={this.state.projects[0].projectLink}
                    githubLink={this.state.projects[0].githubLink}
                    />
                  <Project 
                    projectName={this.state.projects[1].projectName}
                    imageSource={this.state.projects[1].imageSource}
                    projectLink={this.state.projects[1].projectLink}
                    githubLink={this.state.projects[1].githubLink}
                  />
                  <Project 
                    projectName={this.state.projects[2].projectName}
                    imageSource={this.state.projects[2].imageSource}
                    projectLink={this.state.projects[2].projectLink}
                    githubLink={this.state.projects[2].githubLink}
                  />
                </div>

                <br></br>

                <div className="row">
                  <Project 
                    projectName={this.state.projects[3].projectName}
                    imageSource={this.state.projects[3].imageSource}
                    projectLink={this.state.projects[3].projectLink}
                    githubLink={this.state.projects[3].githubLink}
                  />
                  <Project 
                    projectName={this.state.projects[4].projectName}
                    imageSource={this.state.projects[4].imageSource}
                    projectLink={this.state.projects[4].projectLink}
                    githubLink={this.state.projects[4].githubLink}
                  />
                  <Project 
                    projectName={this.state.projects[5].projectName}
                    imageSource={this.state.projects[5].imageSource}
                    projectLink={this.state.projects[5].projectLink}
                    githubLink={this.state.projects[5].githubLink}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
