import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Card from "../../../components/Card/Card";
import Button from "../../../components/Material-UI/CustomButton/CustomButtons";
import Checkbox from "../../../components/CustomCheckbox/CustomCheckbox";
// react component that creates notifications (like some alerts with messages)
import NotificationSystem from "react-notification-system";
import { style } from "../../../assets/variables/Variables";

class Login extends Component {
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
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  //Kiểm tra LocalStorage có Account hay chưa!! nếu có logged = true còn không logged = false
  componentWillMount() {
    if (localStorage && localStorage.getItem("myAccount")) {
      this.setState({
        logged: !this.state.logged
      });
    }
  }
  componentDidMount() {
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
    if (this.state.logged === true) {
      return (<div></div>);
    }
    return (
      <Grid>
        <Row>
          <Col md={4} sm={6} mdOffset={4} smOffset={3}>
            <NotificationSystem ref="notificationSystem" style={style} />
            <form>
              <Card
                hidden={this.state.cardHidden}
                textCenter
                title="Login"
                content={
                  <div>
                    <FormGroup>
                      <ControlLabel>Email address</ControlLabel>
                      <FormControl
                        placeholder="Enter email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Checkbox number="1" label="Subscribe to newsletter" />
                    </FormGroup>
                    <Link to="/register" className="FormField__Link">Create an account</Link>
                  </div>
                }
                legend={
                  <Button round color="primary" onClick={this.handleSubmit}>
                    Get started
                  </Button>
                }
                ftTextCenter
              />
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Login;
