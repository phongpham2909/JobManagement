import React from "react";
import { Link } from 'react-router-dom';
// react component that creates notifications (like some alerts with messages)
import NotificationSystem from "react-notification-system";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "../../components/Material-UI/Grid/GridContainer";
import GridItem from "../../components/Material-UI/Grid/GridItem";
import Button from "../../components/Material-UI/CustomButton/CustomButtons";
import Card from "../../components/Material-UI/Card/Card";
import CardBody from "../../components/Material-UI/Card/CardBody";
import CardHeader from "../../components/Material-UI/Card/CardHeader";
import CustomInput from "../../components/Material-UI/CustomInput/CustomInput";

import loginPageStyle from "../../assets/jss/material-ui-react/views/loginPageStyle";

import image from "../../assets/img/image-sidebar-2.jpeg";

import logo from "../../assets/img/reactlogo.png";
import { style } from "../../assets/variables/Variables";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      alert: null,
      cardHidden: true,
      logged: false,
      email: '',
      password: ''
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("myAccount")) {
      this.setState({
        logged: !this.state.logged
      });
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    setTimeout(
      function () {
        this.setState({ cardHidden: false });
      }.bind(this),
      700
    );
    this.setState({
      _notificationSystem: this.refs.notificationSystem
    });
  }
  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }
  checkUser = () => {
    var _userList = JSON.parse(window.localStorage.getItem("UserList"));
    let userInfo = null;
    for (let index in _userList) {
      if (_userList[index].email === this.state.email && _userList[index].password === this.state.password) {
        userInfo = {
          username: _userList[index].firstname + "" + _userList[index].lastname,  //username: phongpham2909
          email: _userList[index].email,      //name: Phong Pham
          company: _userList[index].company,
        };
        break;
      }
    }
    return userInfo;
  }
  // function that shows/hides notifications
  handleNotificationSucces = () => {
    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-smile" />,
      message: (
        <div>
          Chúc mừng bạn đã đăng nhập thành công! hãy cùng trải nghiệm <b>My Project</b> theo cách của bạn
      </div>
      ),
      level: "success",
      position: "tc",
      dismissible: "button"
    });
  }
  // function that shows/hides notifications
  handleNotificationError = () => {
    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-attention" />,
      message: (
        <div>
          Tài khoản hoặc mật khẩu không hợp lệ ! Hãy nhập chính xác lại lần nữa.<b>Xin Cảm ơn</b>
        </div>
      ),
      level: "error",
      position: "tc",
      autoDismiss: 3,
      dismissible: "button"
    });
  }
  handleSubmit = (event) => {
    var _userInfo = this.checkUser();
    if (_userInfo !== null) {
      this.handleNotificationSucces();
      localStorage.setItem("myAccount", JSON.stringify(_userInfo));
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 3000);
      event.preventDefault();
    }
    else {
      setTimeout(this.handleNotificationError(), 3000);
      event.preventDefault();
    }
  }
  render() {
    const { classes } = this.props;
    if (this.state.logged === true) {
      return (<div></div>);
    }
    return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader
                    color="primary"
                    signup
                    className={classes.cardHeader}
                  >
                    <img alt="avatar" className="avatar" src={logo} />
                    <h3 className={classes.cardTitle}>Login</h3>

                  </CardHeader>
                  <NotificationSystem ref="notificationSystem" style={style} />
                  <CardBody signup>
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        type: "email",
                        name: "email",
                        placeholder: "Your email...",
                        defaultValue: this.state.email,
                        onChange: this.handleChange
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                              </Icon>
                          </InputAdornment>
                        ),
                        type: "password",
                        name: "password",
                        placeholder: "Your password...",
                        defaultValue: this.state.password,
                        onChange: this.handleChange
                      }}
                    />
                    <Link to="/register-page" className="FormField__Link">Create an account</Link>
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button round color="primary" onClick={this.handleSubmit}>
                      Get started
                      </Button>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);