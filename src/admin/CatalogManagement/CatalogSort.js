import React, { Component } from 'react';
import { MenuItem } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown, faSortAlphaUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import DropdownButton from '../../components/CustomDropdown/CustomDropdown';

library.add(faSortAlphaDown, faSortAlphaUp, faCheck)

class ProductSort extends Component {
    onClick = () => {
        
    }
    render() {
        var { ProductSort } = this.props;
        return (
            <DropdownButton bsStyle='primary' fill title="Sắp Xếp" id="bg-vertical-dropdown-3">
                <MenuItem eventKey="1" onClick={() => this.onClick('name', 1)}>
                    <FontAwesomeIcon icon="sort-alpha-down" /> Từ A-Z {(ProductSort.sortBy === "name" && ProductSort.sortValue === 1 ? <FontAwesomeIcon icon="check" className="m-icon" /> : "")}
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="2" onClick={() => this.onClick('name', -1)}>
                    <FontAwesomeIcon icon="sort-alpha-up" /> Từ Z-A {(ProductSort.sortBy === "name" && ProductSort.sortValue === -1 ? <FontAwesomeIcon icon="check" className="m-icon" /> : "")}
                </MenuItem>
            </DropdownButton>
        );
    }
}

const mapStateToProps = state => ({
    ProductSort: state.ProductSort
})
const mapDispatchToProps = dispatch => ({
    handleSortProduct: (sort) => {
        dispatch(actions.SORT_PRODUCT(sort))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductSort)