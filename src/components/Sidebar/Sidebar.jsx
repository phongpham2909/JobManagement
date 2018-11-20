import React, { Component } from "react";
import Logo from "../../assets/img/reactlogo.png";
import avatar from "../../assets/img/avatar-1.jpg";
import { NavLink } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import dashboardRoutes from "../../routes/RouterMenu";
import PerfectScrollbar from "perfect-scrollbar";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle, faCog } from "@fortawesome/free-solid-svg-icons";

library.add(faSignOutAlt,faUserCircle,faCog);

var ps;

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            openAvatar: false,
            openComponents: this.activeRoute("/mail-system") !== "" ? true : false,
            isWindows: navigator.platform.indexOf("Win") > -1 ? true : false,
        };
    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth });
    }
    activeRoute = (routeName) => {
        return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    setSidebarRef = (element) => {
        this.sidebarRef = element;
        if (navigator.platform.indexOf("Win") > -1 && element) {
            ps = new PerfectScrollbar(element, {
                suppressScrollX: true,
                suppressScrollY: false
            });
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions());
        this.updateDimensions();
    }
    componentDidUpdate() {
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
    handleFixedClick = () => {
        this.props.handleFixedClick();
    }
    HandleLogOut = (event) => {
        event.preventDefault();
        window.localStorage.removeItem("myAccount");
        window.location.href = "/login-page";
    }
    render() {
        return (
            <div>
                <div
                    className="sidebar"
                    data-color={this.props.color}
                    data-image={this.props.image}>
                    {this.props.hasImage ? (
                        <div
                            className="sidebar-background"
                            style={{ backgroundImage: "url(" + this.props.image + ")" }} />) : ("")
                    }
                    <div className="logo">
                        <a href="https://www.facebook.com/phong2140051" className="simple-text logo-mini">
                            <div className="logo-img">
                                <img src={Logo} alt="logo_image" />
                            </div>
                        </a>
                        <a href="https://www.facebook.com/phong2140051" className="simple-text logo-normal">
                            My Project
                        </a>
                    </div>
                    <div className="sidebar-wrapper" ref={this.setSidebarRef} >
                        <div className="user">
                            <div className="photo">
                                <img src={avatar} alt="Avatar" />
                            </div>
                            <div className="info">
                                <a onClick={() => this.setState({ openAvatar: !this.state.openAvatar })}>
                                    <span>Phong Phạm
                                    <b className={this.state.openAvatar ? "caret rotate-180" : "caret"} />
                                    </span>
                                </a>
                                <Collapse in={this.state.openAvatar}>
                                    <ul className="Nav">
                                        <li>
                                            <NavLink to="/user-profile">
                                                <span className="sidebar-mini"><FontAwesomeIcon icon="user-circle" /></span>
                                                <span className="sidebar-normal">Thông tin cá nhân</span>
                                            </NavLink>
                                        </li>
                                        <li onClick={this.handleFixedClick}>
                                            <NavLink to="#setting">
                                                <span className="sidebar-mini"><FontAwesomeIcon icon="cog" /></span>
                                                <span className="sidebar-normal">Cài đặt</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="" onClick={this.HandleLogOut}>
                                                <span className="sidebar-mini"><FontAwesomeIcon icon="sign-out-alt" /></span>
                                                <span className="sidebar-normal">Đăng xuất</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </Collapse>
                            </div>
                        </div>
                        <ul className="nav">
                            {dashboardRoutes.RoutesMenuSidebar.map((prop, key) => {
                                var st = {};
                                st[prop["state"]] = !this.state[prop.state];
                                if (prop.collapse) {
                                    return (
                                        <li className={this.activeRoute(prop.path)} key={key}>
                                            <a onClick={() => this.setState(st)}>
                                            <i className={prop.icon} />
                                                <p>
                                                    {prop.sidebarName}
                                                    <b className={this.state[prop.state] ? "caret rotate-180" : "caret"} />
                                                </p>
                                            </a>
                                            <Collapse in={this.state[prop.state]}>
                                                <ul className="nav m-l">
                                                    {prop.views.map((prop, key) => {
                                                        return (
                                                            <li className={this.activeRoute(prop.path)} key={key}>
                                                                <NavLink
                                                                    to={prop.path}
                                                                    className="nav-link"
                                                                >
                                                                    <span className="sidebar-mini">
                                                                        {typeof prop.icon_mini === 'string' 
                                                                        ? <i className={prop.icon_mini} />
                                                                        : <prop.icon_mini/>}
                                                                    </span>
                                                                    <span className="sidebar-normal">
                                                                        {prop.name}
                                                                    </span>
                                                                </NavLink>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </Collapse>
                                        </li>
                                    );
                                }
                                else {
                                    if (prop.redirect) {
                                        return null;
                                    } else {
                                        return (
                                            <li className={this.activeRoute(prop.path)} key={key}>
                                                <NavLink
                                                    to={prop.path}
                                                    className="nav-link"
                                                >
                                                    <i className={prop.icon} />
                                                    <p>{prop.sidebarName}</p>
                                                </NavLink>
                                            </li>
                                        );
                                    }
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default Sidebar;

