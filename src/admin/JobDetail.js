import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import JobList from './JobList';
import Search from './Search';
import JobSort from './JobSort';

import './css/JobManagement.css';

library.add(faPlus)

class JobDetail extends Component {
   /* handleGenerateData = () => {
        this.props.handleGenerateData();
    }*/
    render() {
        return (
            <div>
                <Button bsStyle='primary' className="m-5" onClick={this.props.handleToggle}><FontAwesomeIcon icon="plus" /> Thêm Công Việc</Button>
                {/*<Button bsStyle='danger' onClick={this.handleGenerateData}>Generate Data</Button>*/}
                <Row>
                    {/*Search*/}
                    <Col md={6}>
                        <br />
                        <Search handleSearch={this.props.handleSearch} />
                    </Col>
                    {/*Sort*/}
                    <Col md={6}>
                        <br />
                        <JobSort handleSort={this.props.handleSort}
                            sortBy={this.props.sortBy}
                            sortValue={this.props.sortValue}
                        />
                    </Col>
                </Row>
                {/*Detail Table*/}
                <Row>
                    <Col xs={12}>
                        <JobList
                            isJobs={this.props.isJobs}
                            handleUpdateStatus={this.props.handleUpdateStatus}
                            handleDelete={this.props.handleDelete}
                            handleUpdate={this.props.handleUpdate}
                            handleFilter={this.props.handleFilter} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default JobDetail;