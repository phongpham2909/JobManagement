import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routesContents from "../../routes/routesContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faKeyboard, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle, faKeyboard, faLock);

class HeaderSignInUp extends Component {
  activeRoute = (routeName) => {
    return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  mobileSidebarToggle = () => {
    document.documentElement.classList.toggle("nav-open");
  }
  render() {
    var menu_signinup = routesContents.routesSignInUp.map((prop, key) => {
      return (
        <li key={key} className={this.activeRoute(prop.path)}>
          <NavLink to={prop.path} className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={prop.icon} />
            <p>{prop.name}</p>
          </NavLink>
        </li>
      );
    });
    return (
      <Navbar
        collapseOnSelect
        inverse
        className="navbar-primary navbar-transparent navbar-absolute"
      >
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to={"/"} className="nav-link">My Project</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse>
          <ul className="nav navbar-nav navbar-right">
            {menu_signinup}
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderSignInUp;
