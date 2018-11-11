import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/CustomButton/CustomButton';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

library.add(faEdit,faTrashAlt)

class JobItem extends Component {
    handleDelete = () =>
    {
        this.props.handleDelete(this.props.catalogs.catalog_id);
        this.props.handleCloseForm();
    }
    handleEditCatalog = () =>
    {
        this.props.handleOpenForm();
        this.props.handleEditCatalog(this.props.catalogs); 
    }
    render() {
        var { catalogs, index } = this.props;
        const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
        const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{catalogs.catalog_image}</td>
                <td className="text-center">{catalogs.catalog_name}</td>
                <td className="text-center">{catalogs.catalog_description}</td>
                <td className="td-actions text-center">
                    <OverlayTrigger placement="top" overlay={edit}>
                        <Button bsStyle='info' bsSize="xs" type="button" simple onClick={this.handleEditJobs}>
                            <FontAwesomeIcon icon="edit" />
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={remove}>
                        <Button bsStyle='danger' bsSize="xs" type="button" simple onClick={this.handleDelete}>
                            <FontAwesomeIcon icon="trash-alt" />
                        </Button>
                    </OverlayTrigger>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    handleDelete: (catalog_id) => {
        dispatch(actions.CATALOG_DELETE(catalog_id))
    },
    handleCloseForm: () => {
        dispatch(actions.CLOSE_FORM())
    },
    handleOpenForm: () => {
        dispatch(actions.OPEN_FORM())
    },
    handleEditCatalog: (catalogs) => {
        dispatch(actions.CATALOG_EDIT(catalogs))
    },

})

export default connect(null,mapDispatchToProps)(JobItem)

