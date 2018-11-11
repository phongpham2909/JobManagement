import React, { Component } from 'react'
import { Image, Tooltip, OverlayTrigger } from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import CurrencyFormat from 'react-currency-format'
import Button from '../../components/CustomButton/CustomButton'

library.add(faEdit, faTrashAlt)

class ProductItem extends Component {
    handleUpdateStatus = () => {
        this.props.handleUpdateStatus(this.props.products.id);
    }
    handleEditProduct = () => {
        this.props.handleOpenForm();
        this.props.handleEditProduct(this.props.products);
    }
    handleDeleteProduct = () => {
        this.props.handleDeleteProduct(this.props.products.id);
        this.props.handleCloseForm();
    }
    render() {
        const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
        const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
        var { products, index } = this.props;
        return (
            <tr className="text-center">
                <td>{index + 1}</td>
                <td><Image className="img-product-create-new" src={products.image} alt="100x100" /></td>
                <td>{products.name}</td>
                <td><CurrencyFormat value={products.price} displayType={'text'} thousandSeparator={true} suffix={' đ'} /></td>
                <td>
                    <span className={products.status === true ? "label label-success" : "label label-danger"}
                        onClick={this.handleUpdateStatus}
                    >{products.status === true ? "Còn Hàng" : "Hết Hàng"}</span>
                </td>
                <td className="td-actions text-center">
                    <OverlayTrigger placement="top" overlay={edit}>
                        <Button bsStyle='info' simple type="button" bsSize="xs" onClick={this.handleEditProduct}>
                            <FontAwesomeIcon icon="edit" />
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={remove}>
                        <Button bsStyle='danger' simple type="button" bsSize="xs" onClick={this.handleDeleteProduct}>
                            <FontAwesomeIcon icon="trash-alt" />
                        </Button>
                    </OverlayTrigger>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    handleUpdateStatus: (id) => {
        dispatch(actions.UPDATE_STATUS_PRODUCT(id))
    },
    handleDeleteProduct: (id) => {
        dispatch(actions.PRODUCT_DELETE(id))
    },
    handleCloseForm: () => {
        dispatch(actions.CLOSE_FORM())
    },
    handleOpenForm: () => {
        dispatch(actions.OPEN_FORM())
    },
    handleEditProduct: (products) => {
        dispatch(actions.PRODUCT_EDIT(products))
    },

})

export default connect(null, mapDispatchToProps)(ProductItem)

