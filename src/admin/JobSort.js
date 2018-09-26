import React, { Component } from 'react';
import {DropdownButton,MenuItem} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown, faSortAlphaUp,faCheck } from '@fortawesome/free-solid-svg-icons';

import './css/JobManagement.css';

library.add(faSortAlphaDown,faSortAlphaUp,faCheck)

class JobSort extends Component {
    onClick = (sortBy, sortValue) =>
    {
        this.props.handleSort(sortBy, sortValue);
    }
    render() {
        return (
            <DropdownButton bsStyle='primary' title="Sắp Xếp" id="bg-vertical-dropdown-3">
                <MenuItem eventKey="1" onClick={ () => this.onClick('name', 1)}>
                <FontAwesomeIcon icon="sort-alpha-down" /> Từ A-Z {(this.props.sortBy === "name" && this.props.sortValue === 1 ?<FontAwesomeIcon icon="check" /> : "")}
                </MenuItem>

                <MenuItem eventKey="2" onClick={ () => this.onClick('name', -1)}>
                <FontAwesomeIcon icon="sort-alpha-up" /> Từ Z-A {(this.props.sortBy === "name" && this.props.sortValue === -1 ?<FontAwesomeIcon icon="check" /> : "")}
                </MenuItem>

                <MenuItem divider />

                <MenuItem eventKey="3" onClick={ () => this.onClick('status', 1)}>
                Trạng Thái Kích Hoạt {(this.props.sortBy === "status" && this.props.sortValue === 1 ?<FontAwesomeIcon icon="check" /> : "")}
                </MenuItem>

                <MenuItem eventKey="4" onClick={ () => this.onClick('status', -1)}>
                Trạng Thái Ẩn {(this.props.sortBy === "status" && this.props.sortValue === -1 ?<FontAwesomeIcon icon="check" /> : "")}
                </MenuItem>
            </DropdownButton>
        );
    }
}

export default JobSort;