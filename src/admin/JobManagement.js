import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import JobForm from './JobForm';
import JobDetail from './JobDetail';
import { findIndex, filter } from 'lodash';

import './css/JobManagement.css';

var randomstring = require("randomstring");

class JobManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayForm: false,
            isJobs: [],
            JobsEditing: null,
            keyword: "",
            filterName: "",
            filterStatus: -1,
            sortBy: "name",
            sortValue: 1
        }
    }
    //LifeCircle Component
    componentWillMount() {
        if (localStorage && localStorage.getItem("isJobs")) {
            var _isJobs = JSON.parse(localStorage.getItem("isJobs"));
            this.setState({
                isJobs: _isJobs
            });
        }
    }
    //GenerateData
    /*handleGenerateData = () =>
    {
        var jobs = [
            {
                id: randomstring.generate(),
                name: "React JS",
                status: true
            },
            { 
                id: randomstring.generate(),
                name: "Node JS",
                status: false                
            },
            {
                id: randomstring.generate(),
                name: "Angular 4",
                status: false
            }
        ];
        this.setState({
            isJobs: jobs
        });
        localStorage.setItem("isJobs", JSON.stringify(jobs));
    }*/

    //Function Toggle Form
    handleToggle = () => {
        if (this.state.isDisplayForm && this.state.JobsEditing !== null) {
            this.setState({ isDisplayForm: true, JobsEditing: null });
        }
        else {
            this.setState({ isDisplayForm: !this.state.isDisplayForm, JobsEditing: null });
        }
    }
    //Function Show Form
    handleShowForm = () => {
        this.setState({ isDisplayForm: true });
    }
    //Function Close Form
    handleCloseForm = () => {
        this.setState({ isDisplayForm: false });
    }
    //Function Submit
    handleSubmit = (data) => {
        var { isJobs } = this.state;
        if (data.id === "") {
            data.id = randomstring.generate();
            isJobs.push(data);
        } else {
            var index = this.findIndex(data.id);
            isJobs[index] = data;
        }

        this.setState({
            isJobs: isJobs,
            JobsEditing: null
        });
        localStorage.setItem("isJobs", JSON.stringify(isJobs));
    }
    //Function Update Status
    handleUpdateStatus = (id) => {
        var { isJobs } = this.state;
        // use lodash
        var index = findIndex(isJobs, (jobs) => {
            return jobs.id === id;
        });
        if (index !== -1) {
            isJobs[index].status = !isJobs[index].status;
            this.setState({
                isJobs: isJobs
            });
            localStorage.setItem("isJobs", JSON.stringify(isJobs));
        }
    }

    
    //Function Find Index
    findIndex = (id) => {
        var { isJobs } = this.state;
        var result = -1;
        isJobs.forEach((jobs, index) => {
            if (jobs.id === id) {
                result = index;
            }
        });
        return result;
    }

    //Function Delete 1 Job
    handleDelete = (id) => {
        var { isJobs } = this.state;
        //var index = this.findIndex(id);
        // use lodash
        var index = findIndex(isJobs, (jobs) => {
            return jobs.id === id;
        });
        if (index !== -1) {
            isJobs.splice(index, 1); //Delete 
            this.setState({
                isJobs: isJobs
            });
            localStorage.setItem("isJobs", JSON.stringify(isJobs));
        }
        this.handleCloseForm();
    }
    //Function Update
    handleUpdate = (id) => {
        var { isJobs } = this.state;
        var index = findIndex(isJobs, (jobs) => {
            return jobs.id === id;
        });
        var JobsEditing = isJobs[index];
        this.setState({
            JobsEditing: JobsEditing
        });
        this.handleShowForm();
    }
    //Function Filter
    handleFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filterName: filterName.toLowerCase(),
            filterStatus: filterStatus
        });
    }
    //Function Search
    handleSearch = (keyword) => {
        this.setState({
            keyword: keyword
        });
    }
    //Function Sort
    handleSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        });
    }
    render() {
        var { isJobs, isDisplayForm, JobsEditing, filterName, filterStatus, keyword, sortBy, sortValue } = this.state;
        //Điều kiện Search
        if (keyword) {
            //use lodash
            isJobs = filter(isJobs, (jobs) => {
                return jobs.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            });
        }//Kết thúc điều kiện Search

        //Điều kiện Filter Table
        if (filterName) {
            //use lodash
            isJobs = filter(isJobs, (jobs) => {
                return jobs.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
            });
        }
        //use lodash filter status
        isJobs = filter(isJobs, (jobs) => {
            if (filterStatus === -1) {
                return jobs;
            } else {
                return jobs.status === (filterStatus === 1 ? true : false);
            }
        });

        //Điều kiện Sort
        if (sortBy === 'name') {
            isJobs.sort((a, b) => {
                if (a.name > b.name) return sortValue;
                else if (a.name < b.name) return -sortValue;
                else return 0;
            });
        } else {
            isJobs.sort((a, b) => {
                if (a.status > b.status) return -sortValue;
                else if (a.status < b.status) return sortValue;
                else return 0;
            });
        }//Kết thúc điều kiện Sort

        var elmTaskForm = isDisplayForm ? <JobForm
            handleCloseForm={this.handleCloseForm}
            handleSubmit={this.handleSubmit}
            isJobs={JobsEditing} /> : "";

        var jobForm = isDisplayForm ? <Col md={4}>{elmTaskForm}</Col> : "";

        var jobDetail = isDisplayForm
            ? <Col md={8}>
                <JobDetail
                    isJobs={isJobs}
                    handleToggle={this.handleToggle}
                    handleGenerateData={this.handleGenerateData}
                    handleUpdateStatus={this.handleUpdateStatus}
                    handleDelete={this.handleDelete}
                    handleUpdate={this.handleUpdate}
                    handleSearch={this.handleSearch}
                    handleSort={this.handleSort}
                    sortBy={sortBy}
                    sortValue={sortValue}
                />
            </Col>
            : <Col md={12}>
                <JobDetail
                    isJobs={isJobs}
                    handleToggle={this.handleToggle}
                    handleGenerateData={this.handleGenerateData}
                    handleUpdateStatus={this.handleUpdateStatus}
                    handleDelete={this.handleDelete}
                    handleUpdate={this.handleUpdate}
                    handleFilter={this.handleFilter}
                    handleSearch={this.handleSearch}
                    handleSort={this.handleSort}
                    sortBy={sortBy}
                    sortValue={sortValue}
                />
            </Col>;
        return (
            <Grid>
                <h1 className="text-center">QUẢN LÝ CÔNG VIỆC</h1>
                <br />
                <Row>
                    {jobForm}
                    {jobDetail}
                </Row>
            </Grid>
        );
    }
}
export default JobManagement;