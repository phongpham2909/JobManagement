import React, { Component } from 'react';
import {Table,FormControl} from 'react-bootstrap';
import JobItem from './JobItem';

class JobList extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterName: "",
            filterStatus: -1 //All = -1 ,  active = 1 , deactive = 0
        }
    }
    handleChange = (event) =>
    {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.handleFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        );
        this.setState({
            [name]: value
        });
    }
    render(){
        var { isJobs } = this.props;
        var { filterName, filterStatus } = this.state;
        var elmJobs = isJobs.map((jobs,index) => {
            return <JobItem 
                        key={jobs.id} 
                        index={index} 
                        jobs={jobs} 
                        handleUpdateStatus={this.props.handleUpdateStatus} 
                        handleDelete={this.props.handleDelete}
                        handleUpdate={this.props.handleUpdate}
                    />
        });
        return(
            <Table striped bordered condensed hover responsive={true}>
                        <thead>
                            <tr>    
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <FormControl type="text"
                                                 name="filterName"
                                                 placeholder="Nhập tên từ khóa tìm kiếm..."
                                                 value={filterName}
                                                 onChange={this.handleChange}
                                     />
                                </td>
                                <td>
                                    <FormControl componentClass="select"
                                                 placeholder="select"
                                                 name="filterStatus"
                                                 value={filterStatus}
                                                 onChange={this.handleChange}
                                    >
                                        <option value={-1}>Tất cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích hoạt</option>
                                    </FormControl>
                                </td>
                                <td></td>
                            </tr>
                            {elmJobs}
                        </tbody>
                    </Table>
        );
    }    
}

export default JobList;
