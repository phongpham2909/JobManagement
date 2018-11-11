import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserCircle, faCartPlus, faBoxOpen, faCalendarCheck, faBars, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import dashboardRoutes from "../../routes/RouterMenu";


library.add(faTachometerAlt, faUserCircle, faCartPlus, faCalendarCheck, faBoxOpen, faEllipsisV, faBars);

class Header extends Component {
  handleMinimizeSidebar = () => {
    document.body.classList.toggle("sidebar-mini");
  }
  mobileSidebarToggle = () => {
    document.documentElement.classList.toggle("nav-open");
  }
  makeBrand = () => {
    var name;
    dashboardRoutes.RoutesMenuSidebar.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((propv, key) => {
          if (propv.path === window.location.pathname) {
            name = propv.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === window.location.pathname) {
            name = prop.sidebarName;
          }
        } else {
          if (prop.path === window.location.pathname) {
            name = prop.sidebarName;
          }
        }
      }
      return null;
    });
    dashboardRoutes.RoutesMenuSidebarInfo.map((prop, key) => {
      if (prop.path === window.location.pathname) {
        name = prop.sidebarName;
      }
      return null;
    });
    return name;
  }
  render() {
    var menusMenuItem = dashboardRoutes.RoutesMenuItem.map((prop, key) => {
      return (
        <NavItem key={key} componentClass={Link} href={prop.path} to={prop.path}>
          <FontAwesomeIcon icon={prop.icon} />
        </NavItem>
      )
    });
    /*var menusPullRight = dashboardRoutes.RoutesMenuPullRight.map((prop, key) => {
      return (
        <NavItem key={key} componentClass={Link} href={prop.path} to={prop.path}>
          <FontAwesomeIcon icon={prop.icon} />
        </NavItem>
      )
    });*/
    return (
      <div>
        <Navbar
          fluid
          collapseOnSelect
          className={this.props.navbar ? "navbar-fixed" : ""}
        >
          <div className="navbar-minimize">
            <button
              id="minimizeSidebar"
              className="btn btn-default btn-fill btn-round btn-icon"
              onClick={this.handleMinimizeSidebar}
            >
              <FontAwesomeIcon icon="ellipsis-v" className="fa visible-on-sidebar-regular" />
              <FontAwesomeIcon icon="bars" className="fa visible-on-sidebar-mini" />
            </button>
          </div>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">{this.makeBrand()}</a>
            </Navbar.Brand>
            <Navbar.Toggle onClick={this.mobileSidebarToggle} />
          </Navbar.Header>
          {window.innerWidth > 992 ? (
            <Navbar.Collapse>
              <Nav>
                {menusMenuItem}
              </Nav>
              <Nav pullRight>
                {/*menusPullRight*/}
              </Nav>
            </Navbar.Collapse>
          ) : null}
        </Navbar>
      </div>
    );
  }
}

export default Header;
