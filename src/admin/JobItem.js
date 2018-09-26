import React, { Component } from 'react';
import {Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faEdit,faTrashAlt)

class JobItem extends Component {
    handleUpdateStatus = () =>
    {
        this.props.handleUpdateStatus(this.props.jobs.id);
    }
    handleDelete = () =>
    {
        this.props.handleDelete(this.props.jobs.id);
    }
    handleUpdate = () =>
    {
        this.props.handleUpdate(this.props.jobs.id);
    }
    render() {
        var { jobs, index } = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{jobs.name}</td>
                <td className="text-center">
                    <span className={ jobs.status === true ? "label label-success" : "label label-danger"}
                          onClick={this.handleUpdateStatus}
                    >{jobs.status === true ? "Kích Hoat" : "Ẩn" }</span>
                </td> 
                <td className="text-center">
                    <Button bsStyle='warning' className="m-5" onClick={this.handleUpdate}><FontAwesomeIcon icon="edit" /> Sửa</Button>
                    <Button bsStyle='danger' onClick={this.handleDelete}><FontAwesomeIcon icon="trash-alt" /> Xóa</Button>
                </td>
            </tr>
        );
    }
}

export default JobItem;
