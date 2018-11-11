import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PerfectScrollbar from "perfect-scrollbar";

//layouts cms
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import FixedPlugin from './components/FixedPlugin/FixedPlugin';

//routes
import MenuRoutes from './routes/RouterMenu';
import routesContents from './routes/routesContent';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import image from "./assets/img/image-sidebar-3.jpeg";

var ps;
const theme = createMuiTheme({ typography: { useNextVariants: true } });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      image: image,
      color: "black",
      hasImage: true,
      navbar: false,
      mini: false,
      fixedClasses: "dropdown",
    }
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("myAccount")) {
      this.setState({
        logged: !this.state.logged
      });
    }
    if (document.documentElement.className.indexOf("nav-open") !== -1) {
      document.documentElement.classList.toggle("nav-open");
    }
  }
  setMainPanel = (element) => {
    this.mainPanel = element;
    if (navigator.platform.indexOf("Win") > -1 && element) {
      ps = new PerfectScrollbar(element, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentDidUpdate(e) {
    if (navigator.platform.indexOf("Win") > -1 && ps) {
      setTimeout(() => {
        ps.update();
      }, 350);
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1 && ps) {
      ps.destroy();
    }
  }
  handleImageClick = (image) => {
    this.setState({ image: image });
  }
  handleColorClick = (color) => {
    this.setState({ color: color });
  }
  handleHasImage = (hasImage) => {
    this.setState({ hasImage: hasImage });
  }
  handleNavbarClick = (navbar) => {
    this.setState({ navbar: navbar });
  }
  handleMiniClick = (mini) => {
    this.setState({ mini: mini });
    document.body.classList.toggle("sidebar-mini");
  }
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown open") {
      this.setState({ fixedClasses: "dropdown" });
    } else {
      this.setState({ fixedClasses: "dropdown open" });
    }
  }
  render() {
    var routesMenuSidebar = MenuRoutes.RoutesMenuSidebar.map((prop, key) => {
      if (prop.collapse) {
        return (
          (prop.views.map((propv, key) => {
            return (
              <Route key={key} path={propv.path} component={propv.component} />
            );
          }))
        );
      } else {
        return (
          <Route key={key} path={prop.path} component={prop.component} />
        );
      }
    });
    var menusMenuItem = MenuRoutes.RoutesMenuItem.map((prop, key) => {
      return (
        <Route key={key} path={prop.path} component={prop.component} />
      )
    });
    var menuSidebarInfo = MenuRoutes.RoutesMenuSidebarInfo.map((prop, key) => {
      return (
        <Route key={key} path={prop.path} component={prop.component} />
      )
    });
    var _dashboard = [];
    var _content = [];
    if (this.state.logged === true) {
      _dashboard.push(
        <div key={1} className="wrapper">
          <Sidebar
            {...this.props}
            image={this.state.image}
            color={this.state.color}
            hasImage={this.state.hasImage}
            mini={this.state.mini}
            handleFixedClick={this.handleFixedClick} />
          <div id="main-panel" className="main-panel" ref={this.setMainPanel}>
            <Header
              {...this.props}
              handleMiniClick={this.handleMiniClick}
              navbar={this.state.navbar} />
            <Switch>
              {menuSidebarInfo}
              {menusMenuItem}
              {routesMenuSidebar}
            </Switch>
            <Footer fluid />
            <FixedPlugin
              handleImageClick={this.handleImageClick}
              handleColorClick={this.handleColorClick}
              handleHasImage={this.handleHasImage}
              handleNavbarClick={this.handleNavbarClick}
              handleMiniClick={this.handleMiniClick}
              bgColor={this.state["color"]}
              bgImage={this.state["image"]}
              mini={this.state["mini"]}
              handleFixedClick={this.handleFixedClick}
              fixedClasses={this.state.fixedClasses}
            />
          </div>
        </div>
      )
    } else {
      if (this.state.logged === false) {
        _content.push(
          routesContents.routesIndex.map((prop, key) => {
            return (
              <Route
                key={key}
                path={prop.path}
                component={prop.component}
              />
            );
          })
        )
      }
    }
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            {_content}
            {_dashboard}
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
