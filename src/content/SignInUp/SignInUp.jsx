import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import routesContents from "../../routes/routesContent";

import Footer from "../Footer/FooterSignInUp";

import signupPageStyle from "../../assets/jss/material-ui-react/views/signupPageStyle.jsx";
import bgImage from "../../assets/img/image-sidebar-3.jpeg";

class Content extends Component {
  getPageClass() {
    var pageClass = "";
    switch (this.props.location.pathname) {
      case "/admin/login":
        pageClass = "login-page";
        break;
      case "/admin/register":
        pageClass = "register-page";
        break;
      case "/admin/lock-screen":
        pageClass = "lock-screen-page";
        break;
      default:
        pageClass = "";
        break;
    }
    return pageClass;
  }
  componentWillMount() {
    if (document.documentElement.className.indexOf("nav-open") !== -1) {
      document.documentElement.classList.toggle("nav-open");
    }
  }
  render() {
    //const { classes } = this.props;
    return (
      <div>
        <div className="wrapper wrapper-full-page">
          <div
            className={"full-page" + this.getPageClass()}
            data-color="black"
            data-image={bgImage}
          >
            <div className="content">
              <Switch>
                {routesContents.routesSignInUp.map((prop, key) => {
                  if (prop.redirect) {
                    return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                    );
                  }
                  else{
                    return (
                      <Route
                        key={key}
                        path={prop.path}
                        component={prop.component}
                      />
                    );
                  }
                })}
              </Switch>
            </div>
            <Footer transparent />
            <div
              className="full-page-background"
              style={{ backgroundImage: "url(" + bgImage + ")" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(signupPageStyle)(Content);
