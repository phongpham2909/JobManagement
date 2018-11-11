import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
//Font Awesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faTwitterSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
//components
import Card from "../../components/Card/Card";
import { FormInputs } from "../../components/FormInputs/FormInputs";
import { UserCard } from "../../components/Card/UserCard";
//Custom Button
import Button from "../../components/CustomButton/CustomButton";

import avatar from "../../assets/img/avatar-1.jpg";
import banner from "../../assets/img/pexels-photo-754587.jpeg";

library.add(faFacebookSquare, faTwitterSquare, faGooglePlusSquare)

function FieldGroup({ id, label, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      company: "",
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      country: "",
      sex: 1,
      aboutme: "",
    }
  }
  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  render() {
    var { company, firstname, lastname, address, city, country, sex, aboutme } = this.state;
    var _user = JSON.parse(window.localStorage.getItem("myAccount"));
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
          <Col md={4}>
              <UserCard
                bgImage={banner}
                avatar={avatar}
                name={_user.username}
                description={
                  <span>
                    {_user.company}
                    <br />
                    {_user.sex}
                    <br />
                    {_user.aboutme}
                  </span>
                }
                socials={
                  <div>
                    <Button bsStyle="primary" simple bsSize="xs">
                      <FontAwesomeIcon icon={["fab", "facebook-square"]} />
                    </Button>
                    <Button bsStyle="info" simple bsSize="xs">
                      <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                    </Button>
                    <Button bsStyle="danger" simple bsSize="xs">
                      <FontAwesomeIcon icon={["fab", "google-plus-square"]} />
                    </Button>
                  </div>
                }
              />
            </Col>
            <Col md={8}>
              <Card
                title="Thông Tin Cá Nhân"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      proprieties={[
                        {
                          label: "Company",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: company,
                          onChange: this.handleChange,
                        },
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: _user.username,
                          onChange: this.handleChange,
                          disabled: true
                        },
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          defaultValue: _user.email,
                          onChange: this.handleChange,
                          disabled: true
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: firstname,
                          onChange: this.handleChange,
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: lastname,
                          onChange: this.handleChange,
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Địa chỉ",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                          defaultValue: address,
                          onChange: this.handleChange,
                        }
                      ]}
                    />
                    <Row>
                      <Col md={4}>
                        <FieldGroup
                          id="formControlsCity"
                          type="text"
                          label="Thành phố"
                          placeholder="Nhập tên thành phố"
                          defaultValue={city}
                          onChange={this.handleChange}
                        /></Col>
                      <Col md={4}>
                        <FieldGroup
                          id="formControlsCountry"
                          type="text"
                          label="Country"
                          placeholder="Country"
                          defaultValue={country}
                          onChange={this.handleChange}
                        /></Col>
                      <Col md={4}>
                        <FormGroup controlId="formControlsSelect">
                          <ControlLabel>Giới tính</ControlLabel>
                          <FormControl componentClass="select" onChange={this.handleChange} defaultValue={sex}>
                            <option value={-1}>Giới tính khác</option>
                            <option value={1}>Nam</option>
                            <option value={0}>Nữ</option>
                          </FormControl>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Giới thiệu</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue={aboutme}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit" onClick={this.handleSave}>
                      Cập nhật
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default UserProfile;

