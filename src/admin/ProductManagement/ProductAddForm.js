import React, { Component } from 'react'
import { Panel, Row, Col, ControlLabel, HelpBlock, FormControl, FormGroup } from 'react-bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTimesCircle, faSave } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import Button from '../../components/CustomButton/CustomButton'
import * as actions from '../../actions/actions'

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

class ProductAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            image: "",
            price: "",
            amount: "",
            status: true
        }
    }
    componentWillMount() {
        if (this.props.ProductEditing && this.props.ProductEditing.id !== null) {
            this.setState({
                id: this.props.ProductEditing.id,
                name: this.props.ProductEditing.name,
                image: this.props.ProductEditing.image,
                price: this.props.ProductEditing.price,
                amount: this.props.ProductEditing.amount,
                status: this.props.ProductEditing.status
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.ProductEditing) {
            this.setState({
                id: nextProps.ProductEditing.id,
                name: nextProps.ProductEditing.name,
                image: nextProps.ProductEditing.image,
                price: nextProps.ProductEditing.price,
                amount: nextProps.ProductEditing.amount,
                status: nextProps.ProductEditing.status
            });
        }
        else if (!nextProps.ProductEditing) {
            this.setState({
                id: "",
                name: "",
                image: "",
                price: "",
                amount: "",
                status: true
            });
        }
    }
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = (target.value === 'true') ? true : false;
        }
        this.setState({
            [name]: value
        });
    }
    handleCloseForm = () => {
        this.props.handleCloseForm();
    }
    handleSave = (event) => {
        this.props.handleSave(this.state);
        this.handleClear();
        this.handleCloseForm();
        event.preventDefault();
    }
    handleClear = () => {
        this.setState({
            name: "",
            image: "",
            price: "",
            amount: "",
            status: true
        });
        this.props.handleCloseForm();
    }
    render() {
        var { ProductEditing, isDisplayForm } = this.props;
        if (!isDisplayForm) return "";
        return (
            <Panel bsStyle="info">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">
                        <Row>
                            <Col className="text-left" xs={6}>
                                {ProductEditing.id !== "" ? "Cập Nhật" : "Thêm"}
                            </Col>
                            <Col className="text-right" xs={6}>
                                <FontAwesomeIcon onClick={this.handleCloseForm} className="pointer" icon="times-circle" />
                            </Col>
                        </Row>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <FieldGroup
                        id="formControlsProductName"
                        type="text"
                        label="Tên Sản Phẩm"
                        name="name"
                        placeholder="Nhập tên sản phẩm"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <FieldGroup
                        id="formControlsImages"
                        type="text"
                        label="Link hình ảnh"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleChange}
                    />
                    <FormGroup controlId={"formControlsCatalog"}>
                        <ControlLabel>Danh Mục Sản Phẩm</ControlLabel>
                        <FormControl onChange={this.handleChange} name="catalog" componentClass="select" >

                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId={"formControlsBrand"}>
                        <ControlLabel>Thương Hiệu</ControlLabel>
                        <FormControl onChange={this.handleChange} name="brand" componentClass="select" >

                        </FormControl>
                    </FormGroup>
                    <FieldGroup
                        id="formControlsPrice"
                        type="number"
                        label="Giá"
                        name="price"
                        placeholder="Nhập giá sản phẩm"
                        value={this.state.price}
                        onChange={this.handleChange}
                    />
                    <FieldGroup
                        id="formControlsAmount"
                        type="number"
                        label="Số Lượng"
                        name="amount"
                        placeholder="Nhập số lượng sản phẩm"
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Tình Trạng</ControlLabel>
                        <FormControl componentClass="select" name="status" value={this.state.status} onChange={this.handleChange}  >
                            <option value={true}>Còn Hàng</option>
                            <option value={false}>Hết Hàng</option>
                        </FormControl>
                    </FormGroup>
                    <Row>
                        <Col className="text-right" xs={6}>
                            <Button bsStyle='warning' fill onClick={this.handleSave}><FontAwesomeIcon icon="save" /> Lưu Lại</Button>
                        </Col>
                        <Col className="text-left" xs={6}>
                            <Button bsStyle='danger' fill onClick={this.handleClear}><FontAwesomeIcon icon="times-circle" /> Hủy Bỏ</Button>
                        </Col>
                    </Row>
                </Panel.Body>
            </Panel>
        );
    }
}

const mapStateToProps = state => ({
    isDisplayForm: state.isDisplayForm,
    ProductEditing: state.ProductEditing
})
const mapDispatchToProps = dispatch => ({
    handleSave: ListProducts => {
        dispatch(actions.PRODUCT_SAVE(ListProducts))
    },
    handleCloseForm: () => {
        dispatch(actions.CLOSE_FORM())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddForm)
