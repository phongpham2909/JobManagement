import React, { Component } from "react";

class FooterSignInUp extends Component {
  render() {
    return (
        <footer className={
          "footer" +
          (this.props.transparent !== undefined ? " footer-transparent" : "") +
          (this.props.default !== undefined ? " footer-default" : "") +
          (this.props.black !== undefined ? " footer-black" : "")
        }>
         <div
          className={
            "container" + (this.props.fluid !== undefined ? "-fluid" : "")
          }
        >
            <nav className="pull-left">
              <ul>
                <li>
                  <a href="/job-management">Home</a>
                </li>
                <li>
                  <a href="#pablo">Company</a>
                </li>
                <li>
                  <a href="#pablo">Portfolio</a>
                </li>
                <li>
                  <a href="#pablo">Blog</a>
                </li>
              </ul>
            </nav>
            <p className="copyright pull-right">
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://www.facebook.com/phong2140051">My Project Created by Phong Phạm</a> , made with
              love for a better web
          </p>
          </div>
        </footer>
    );
  }
}

export default FooterSignInUp;
