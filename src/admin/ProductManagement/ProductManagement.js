import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProductSearch from './ProductSearch';
import ProductAddForm from './ProductAddForm';
import ProductSort from './ProductSort';
import ProductList from './ProductList';
import Button from '../../components/CustomButton/CustomButton';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import '../../assets/css/Custom.css';

library.add(faPlus)

class ProductManagement extends Component {
    handleToggle = () => {
        var { ProductEditing } = this.props;
        if (ProductEditing && ProductEditing.id !== "") {
            this.props.handleOpenForm();
        } else {
            this.props.handleToggle();
        }
        this.props.handleClearProducts({
            id: "",
            name: "",
            image: "",
            price: "",
            amount: "",
            status: true
        });
    }
    render() {
        var { isDisplayForm } = this.props;
        var ProductDetail = [];
        ProductDetail.push(
            <div key={1}>
                <Button bsStyle='primary' fill onClick={this.handleToggle}><FontAwesomeIcon icon="plus" /> Thêm Sản Phẩm</Button>
                <Row>
                    <Col md={6}>
                        <br />
                        <ProductSearch />
                    </Col>
                    <Col md={6}>
                        <br />
                        <ProductSort />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ProductList />
                    </Col>
                </Row>
            </div>
        );
        var productAddForm = isDisplayForm ? <Col md={4}><ProductAddForm /></Col> : "";
        var productDetail = isDisplayForm  ? <Col md={8}>{ProductDetail}</Col> : <Col md={12}>{ProductDetail}</Col>;
        return (
            <div className="main-content">
            <Grid fluid>
                <Row className="card">
                <h2 className="text-center">QUẢN LÝ SẢN PHẨM</h2><hr />
                    {productAddForm}
                    {productDetail}
                </Row>
            </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isDisplayForm: state.isDisplayForm,
    ProductEditing: state.ProductEditing
})
const mapDispatchToProps = dispatch => ({
    handleClearProducts: ListProducts => {
        dispatch(actions.PRODUCT_EDIT(ListProducts))
    },
    handleToggle: () => {
        dispatch(actions.TOGGLE_FORM())
    },
    handleOpenForm: () => {
        dispatch(actions.OPEN_FORM())
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductManagement)