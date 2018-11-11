import React, { Component } from "react";
import NotificationSystem from "react-notification-system";
import { Link } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/core components
import { InputAdornment, Checkbox, FormControlLabel } from "@material-ui/core";
// @material-ui/icons components
import { Face, Mail, LockOutlined, Business, Check } from "@material-ui/icons";
// react component that creates notifications (like some alerts with messages)
import Button from "../../../components/Material-UI/CustomButton/CustomButtons";
import Row from "../../../components/Material-UI/Grid/GridContainer";
import Col from "../../../components/Material-UI/Grid/GridItem";
import CardBody from "../../../components/Material-UI/Card/CardBody";
import Card from "../../../components/Material-UI/Card/Card";
import CustomInput from "../../../components/Material-UI/CustomInput/CustomInput";

import { style } from "../../../assets/variables/Variables";
import signupPageStyle from "../../../assets/jss/material-ui-react/views/signupPageStyle.jsx";

const randomstring = require("randomstring")

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _notificationSystem: null,
            UserList: [],
            id: "",
            fullname: "",
            company: "",
            email: "",
            password: "",
            checked: [1]
        };
    }
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    componentWillMount() {
        if (localStorage && localStorage.getItem("UserList")) {
            var UserList = JSON.parse(window.localStorage.getItem("UserList"));
            this.setState({
                UserList: UserList
            });
        }
    }
    componentDidMount() {
        this.setState({
            _notificationSystem: this.refs.notificationSystem
        });
    }
    handleToggle = (value) => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked
        });
    }
    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }
    // function that shows/hides notifications
    handleNotificationSucces = () => {
        this.state._notificationSystem.addNotification({
            title: <span data-notify="icon" className="pe-7s-smile" />,
            message: (
                <div>
                    Chúc mừng bạn đã đăng ký thành công!
                </div>
            ),
            level: "success",
            position: "tc",
            dismissible: "button"
        });
    }
    handleSubmit = (event) => {
        var { UserList } = this.state;
        var dataUser = {
            id: this.state.id,
            fullname: this.state.fullname,
            company: this.state.company,
            email: this.state.email,
            password: this.state.password,
        }
        if (dataUser.id === "") {
            dataUser.id = randomstring.generate();
            UserList.push(dataUser);
            this.setState({
                UserList: UserList
            });
        }
        this.handleNotificationSucces();
        window.localStorage.setItem("UserList", JSON.stringify(UserList));
        setTimeout(() => {
            window.location.href = "/login";
        }, 3000);
        event.preventDefault();
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Row justify="center">
                    <Col xs={12} sm={10} md={10}>
                        <Card className={classes.cardSignup}>
                            <NotificationSystem ref="notificationSystem" style={style} />
                            <h2 className={classes.cardTitle}>Register</h2>
                            <h4 className={classes.cardTitle}>Welcome to My Project Created by Phong Phạm</h4>
                            <CardBody>
                                <Row justify="center">
                                    <Col xs={12} sm={5} md={5}>

                                    </Col>
                                    <Col xs={12} sm={5} md={5}>
                                        <form className={classes.form}>
                                            <CustomInput
                                                formControlProps={{
                                                    fullWidth: true,
                                                    className: classes.customFormControlClasses
                                                }}
                                                inputProps={{
                                                    startAdornment: (
                                                        <InputAdornment
                                                            position="start"
                                                            className={classes.inputAdornment}
                                                        >
                                                            <Face
                                                                className={classes.inputAdornmentIcon}
                                                            />
                                                        </InputAdornment>
                                                    ),
                                                    type: "text",
                                                    name: "fullname",
                                                    defaultValue: this.state.fullname,
                                                    onChange: this.handleChange,
                                                    placeholder: "Your Full Name..."
                                                }}
                                            />
                                            <CustomInput
                                                formControlProps={{
                                                    fullWidth: true,
                                                    className: classes.customFormControlClasses
                                                }}
                                                inputProps={{
                                                    startAdornment: (
                                                        <InputAdornment
                                                            position="start"
                                                            className={classes.inputAdornment}
                                                        >
                                                            <Business
                                                                className={classes.inputAdornmentIcon}
                                                            />
                                                        </InputAdornment>
                                                    ),
                                                    type: "text",
                                                    name: "company",
                                                    defaultValue: this.state.company,
                                                    onChange: this.handleChange,
                                                    placeholder: "Your Company..."
                                                }}
                                            />
                                            <CustomInput
                                                formControlProps={{
                                                    fullWidth: true,
                                                    className: classes.customFormControlClasses
                                                }}
                                                inputProps={{
                                                    startAdornment: (
                                                        <InputAdornment
                                                            position="start"
                                                            className={classes.inputAdornment}
                                                        >
                                                            <Mail
                                                                className={classes.inputAdornmentIcon}
                                                            />
                                                        </InputAdornment>
                                                    ),
                                                    type: "email",
                                                    name: "email",
                                                    defaultValue: this.state.email,
                                                    onChange: this.handleChange,
                                                    placeholder: "Enter Email..."
                                                }}
                                            />
                                            <CustomInput
                                                formControlProps={{
                                                    fullWidth: true,
                                                    className: classes.customFormControlClasses
                                                }}
                                                inputProps={{
                                                    startAdornment: (
                                                        <InputAdornment
                                                            position="start"
                                                            className={classes.inputAdornment}
                                                        >
                                                            <LockOutlined
                                                                className={classes.inputAdornmentIcon}
                                                            />
                                                        </InputAdornment>
                                                    ),
                                                    type: "password",
                                                    name: "password",
                                                    defaultValue: this.state.password,
                                                    onChange: this.handleChange,
                                                    placeholder: "Enter Password..."
                                                }}
                                            />
                                            <Link to="/login" className="FormField__Link">I'm already member</Link><br/>
                                            <FormControlLabel
                                                classes={{
                                                    label: classes.label
                                                }}
                                                control={
                                                    <Checkbox
                                                        tabIndex={-1}
                                                        onClick={() => this.handleToggle(1)}
                                                        checkedIcon={
                                                            <Check className={classes.checkedIcon} />
                                                        }
                                                        icon={
                                                            <Check className={classes.uncheckedIcon} />
                                                        }
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot
                                                        }}
                                                        checked={
                                                            this.state.checked.indexOf(1) !== -1
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                }
                                                label={
                                                    <span>
                                                        I agree to the{" "}
                                                        <a href="#pablo">terms and conditions</a>.
                                                    </span>
                                                }
                                            />
                                            <div className={classes.textCenter}>
                                                <Button round color="primary" onClick={this.handleSubmit}>Create Account</Button>
                                            </div>
                                        </form>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withStyles(signupPageStyle)(Register);
