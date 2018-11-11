import React, { Component } from "react";
import { DropdownButton } from "react-bootstrap";
import classnames from "classnames";
import PropTypes from "prop-types";

class CustomDropdown extends Component {
  render() {
    const { fill, simple, pullRight, round, block, ...rest } = this.props;

    const btnClasses = classnames({
      "btn-fill": fill,
      "btn-simple": simple,
      "pull-right": pullRight,
      "btn-block": block,
      "btn-round": round
    });

    return <DropdownButton className={btnClasses} {...rest} ></DropdownButton>;
  }
}

CustomDropdown.propTypes = {
  fill: PropTypes.bool,
  simple: PropTypes.bool,
  pullRight: PropTypes.bool,
  block: PropTypes.bool,
  round: PropTypes.bool
};

export default CustomDropdown;
