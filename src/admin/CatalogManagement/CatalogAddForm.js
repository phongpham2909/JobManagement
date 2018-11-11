import React, { Component } from 'react'
import { Row, Col, Panel, ControlLabel, HelpBlock, FormControl, FormGroup } from 'react-bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import Button from '../../components/CustomButton/CustomButton'
import * as actions from '../../actions/actions'

library.add(faSave, faTimesCircle)

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class CatalogAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog_id: "",
            catalog_name: "",
            catalog_image: "",
            catalog_description: ""
        }
    }
    componentWillMount() {
        if (this.props.CatalogEditing && this.props.CatalogEditing.id !== null) {
            this.setState({
                catalog_id: this.props.CatalogEditing.catalog_id,
                catalog_name: this.props.CatalogEditing.catalog_name,
                catalog_image: this.props.CatalogEditing.catalog_image,
                catalog_description: this.props.CatalogEditing.catalog_description
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.CatalogEditing) {
            this.setState({
                catalog_id: nextProps.CatalogEditing.catalog_id,
                catalog_name: nextProps.CatalogEditing.catalog_name,
                catalog_image: nextProps.CatalogEditing.catalog_image,
                catalog_description: nextProps.CatalogEditing.catalog_description
            });
        }
        else if (!nextProps.CatalogEditing) {
            this.setState({
                catalog_id: "",
                catalog_name: "",
                catalog_image: "",
                catalog_description: ""
            });
        }
    }
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
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
            catalog_name: "",
            catalog_image: "",
            catalog_description: ""
        });
        this.props.handleCloseForm();
    }

    render() {
        var { CatalogEditing, isDisplayForm } = this.props;
        if (!isDisplayForm) return "";
        return (
            <Panel bsStyle="info">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">
                        <Row>
                            <Col className="text-left" xs={6}>
                                {CatalogEditing.catalog_id !== "" ? "Cập Nhật" : "Thêm"}
                            </Col>
                            <Col className="text-right" xs={6}>
                                <FontAwesomeIcon onClick={this.handleCloseForm} className="pointer" icon="times-circle" />
                            </Col>
                        </Row>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <FieldGroup
                        id="formControlsCatalogName"
                        type="text"
                        label="Tên Danh Mục"
                        name="catalog_name"
                        placeholder="Nhập tên danh mục"
                        value={this.state.catalog_name}
                        onChange={this.handleChange}
                    />
                    <FieldGroup
                        id="formControlsImages"
                        type="text"
                        label="Link hình ảnh"
                        name="image"
                        value={this.state.catalog_image}
                        onChange={this.handleChange}
                    />
                    <FormGroup controlId="formControlsCatalogDescription">
                        <ControlLabel>Mô Tả</ControlLabel>
                        <FormControl
                            value={this.state.catalog_description}
                            onChange={this.handleChange}
                            name="catalog_description"
                            componentClass="textarea"
                            placeholder="Mô tả ngắn về danh mục"
                        />
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
    CatalogEditing: state.CatalogEditing,
})
const mapDispatchToProps = dispatch => ({
    handleSave: ListCatalogs => {
        dispatch(actions.CATALOG_SAVE(ListCatalogs))
    },
    handleCloseForm: () => {
        dispatch(actions.CLOSE_FORM())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(CatalogAddForm)
