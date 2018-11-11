import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";

import Button from "../../../components/CustomButton/CustomButton";

import avatar from "../../../assets/img/avatar-1.jpg";

class LockScreen extends Component {
  render() {
    return (
      <form className="ng-untouched ng-pristine ng-valid">
        <div className="user-profile">
          <div className="author">
            <img alt="avatar" className="avatar" src={avatar} />
          </div>
          <h4>Phong Phạm</h4>
          <FormGroup>
            <FormControl type="password" placeholder="Enter Password" />
          </FormGroup>
          <Button wd neutral round>
            Unlock
          </Button>
        </div>
      </form>
    );
  }
}

export default LockScreen;
