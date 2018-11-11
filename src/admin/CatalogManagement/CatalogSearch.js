import React, { Component } from 'react'
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import Button from '../../components/CustomButton/CustomButton';
//import * as actions from '../../actions/actions'

library.add(faSearch)

class ProductSearch extends Component {
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    handleCatalogSearch = () => {
        //this.props.handleProductSearch(this.state.keyword);
    }
    render() {
        return (
            <FormGroup >
                <InputGroup>
                    <FormControl type="search" name="keyword" placeholder="Nhập từ khóa tìm kiếm..." onChange={this.handleChange} />
                    <InputGroup.Button>
                        <Button bsStyle='primary' fill onClick={this.handleCatalogSearch} ><FontAwesomeIcon icon="search" /> Tìm</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        );
    }
}

export default connect(null,null)(ProductSearch)
