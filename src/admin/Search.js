import React, { Component } from 'react';
import { FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch)

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { keyword: "" }
    }
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    handleSearch = () => {
        this.props.handleSearch(this.state.keyword);
    }
    render() {
        return (
            <FormGroup >
                <InputGroup>
                    <FormControl type="text" name="keyword" placeholder="Nhập từ khóa tìm kiếm..." onChange={this.handleChange} />
                    <InputGroup.Button>
                        <Button bsStyle='primary' onClick={this.handleSearch} ><FontAwesomeIcon icon="search" /> Tìm</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        );
    }
}

export default Search;