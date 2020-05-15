import React, { Component } from "react";
import Project from "../components/Project";

class Portfolio extends Component {
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
                  <Project />
                  <Project />
                  <Project />
                </div>

                <br></br>

                <div className="row">
                  <Project />
                  <Project />
                  <Project />
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
