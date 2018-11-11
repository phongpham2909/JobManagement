import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CatalogAddForm from './CatalogAddForm';
import CatalogSearch from './CatalogSearch';
import CatalogList from './CatalogList';
import CatalogSort from './CatalogSort';
import Button from '../../components/CustomButton/CustomButton';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

import '../../assets/css/Custom.css';

library.add(faPlus)

class CatalogManagement extends Component {
    handleToggle = () => {
        var { CatalogEditing } = this.props;
        if (CatalogEditing && CatalogEditing.catalog_id !== "") {
            this.props.handleOpenForm();
        } else {
            this.props.handleToggle();
        }
        this.props.handleClearCatalogs({
            catalog_id: "",
            catalog_name: "",
            catalog_image: "",
            catalog_description: ""
        });
    }
    render() {
        var { isDisplayForm } = this.props;
        var CatalogDetail = [];
        CatalogDetail.push(
            <div key={1}>
                <Button bsStyle='primary' fill onClick={this.handleToggle}><FontAwesomeIcon icon="plus" /> Thêm Danh Mục</Button>
                <Row>
                    <Col md={6}>
                        <br />
                        <CatalogSearch />
                    </Col>
                    <Col md={6}>
                        <br />
                        <CatalogSort />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CatalogList />
                    </Col>
                </Row>
            </div>
        );
        var catalogAddForm = isDisplayForm ? <Col md={4}><CatalogAddForm /></Col> : "";
        var catalogDetail = isDisplayForm ? <Col md={8}>{CatalogDetail}</Col> : <Col md={12}>{CatalogDetail}</Col>;
        return (
            <div className="main-content">
            <Grid fluid>
                    <Row className="card">
                    <h2 className="text-center">QUẢN LÝ DANH MỤC</h2><hr />
                        {catalogAddForm}
                        {catalogDetail}
                    </Row>
            </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isDisplayForm: state.isDisplayForm,
    CatalogEditing: state.CatalogEditing
});
const mapDispatchToProps = dispatch => ({
    handleClearCatalogs: ListCatalogs => {
        dispatch(actions.CATALOG_EDIT(ListCatalogs))
    },
    handleToggle: () => {
        dispatch(actions.TOGGLE_FORM())
    },
    handleOpenForm: () => {
        dispatch(actions.OPEN_FORM())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogManagement);
