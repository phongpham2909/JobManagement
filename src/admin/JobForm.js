import React, { Component } from 'react';
import { Panel, Row, Col, FormGroup, FormControl, Button, ControlLabel, HelpBlock } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTimesCircle, faSave } from '@fortawesome/free-solid-svg-icons'

import './css/JobManagement.css';

library.add(faTrashAlt, faTimesCircle, faSave)

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}
class JobForm extends Component {
    constructor(props) {
        super(props);
        this.state = { id: "", name: "", status: false }
    }
    componentWillMount() {
        if (this.props.isJobs) {
            this.setState({
                id: this.props.isJobs.id,
                name: this.props.isJobs.name,
                status: this.props.isJobs.status
            });
            console.log(this.state)
        }
    }
    componentWillReceiveProps(nextProps)
    {
        console.log(nextProps)
        if (nextProps && nextProps.isJobs) {
            this.setState({
                id: nextProps.isJobs.id,
                name: nextProps.isJobs.name,
                status: nextProps.isJobs.status
            });
        }
        else if(!nextProps.isJobs){
            this.setState({
                id: "",
                name: "",
                status: false 
            });
        }
    }
    handleCloseForm = () => {
        this.props.handleCloseForm();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.handleClear();
        this.handleCloseForm();
    }
    handleClear = () => {
        this.setState({
            name: "",
            status: false
        });
    }
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }
    render() {
        var { id } = this.state;
        return (
            <Panel bsStyle="info">
                <Panel.Heading>
                    <Panel.Title componentClass="h4">
                        <Row>
                            <Col className="text-left" xs={6}>
                                { id !== "" ? "Cập Nhật Công Việc" : "Thêm Công Việc"}
                                        </Col>
                            <Col className="text-right" xs={6}>
                                <FontAwesomeIcon onClick={this.handleCloseForm} className="pointer" icon="times-circle" />
                            </Col>
                        </Row>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <FieldGroup
                        id="formControlsTen"
                        type="text"
                        label="Tên:"
                        name="name"
                        placeholder="Nhập tên"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Trạng Thái</ControlLabel>
                        <FormControl componentClass="select" placeholder="Chọn" name="status" onChange={this.handleChange} value={this.state.status}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </FormControl>
                    </FormGroup>
                    <Row>
                        <Col className="text-right" xs={6}>
                            <Button bsStyle='warning' onClick={this.handleSubmit}><FontAwesomeIcon icon="save" /> Lưu Lại</Button>
                        </Col>
                        <Col className="text-left" xs={6}>
                            <Button bsStyle='danger' onClick={this.handleClear}><FontAwesomeIcon icon="times-circle" /> Hủy Bỏ</Button>
                        </Col>
                    </Row>
                </Panel.Body>
            </Panel>

        );
    }
}

export default JobForm;
