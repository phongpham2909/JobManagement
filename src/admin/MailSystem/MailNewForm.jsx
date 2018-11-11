import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import Button from '../../components/CustomButton/CustomButton';

function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}


class MailNewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }
    }
    handleClose = () => {
        this.setState({ show: false });
    }
    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thư mới</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FieldGroup
                                id="formControlsEmail"
                                type="email"
                                label="Gửi tới"
                                placeholder="Người nhận"
                            />
                            <FieldGroup
                                id="formControlsSubject"
                                type="text"
                                label="Chủ đề"
                                placeholder="Nhập chủ đề"
                            />
                            <FormGroup controlId="formControlsDescription">
                                <ControlLabel>Nội dung</ControlLabel>
                                <FormControl
                                    componentClass="textarea"
                                    placeholder=""
                                    rows="5"
                                    bsClass="form-control" />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="warning" simple>
                            <NavLink to="/mail-system/inbox" >Đóng</NavLink>
                        </Button>
                        <Button bsStyle="success" simple>
                            <NavLink to="/mail-system/outbox" >Gửi</NavLink>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default MailNewForm;