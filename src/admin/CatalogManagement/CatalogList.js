import React, { Component } from 'react'
import { Table, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import CatalogItem from "./CatalogItem"

class CatalogList extends Component {
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var { FilterTable } = this.props;
        var filter = {
            name: name === 'filterName' ? value : FilterTable.name,
        }
        this.props.handleFilterTable(filter);
        this.setState({
            [name]: value
        });
    }
    render(){
        var { ListCatalogs } = this.props;
        var elmCatalogs = ListCatalogs.map((catalogs, index) => {
            return <CatalogItem
                key={catalogs.catalog_id}
                index={index}
                catalogs={catalogs}
            />
        });
        return(
            <Table striped bordered condensed responsive>
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Hình ảnh</th>
                        <th className="text-center">Tên Danh Mục</th>
                        <th className="text-center">Mô tả Ngắn</th>
                        <th className="text-center">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <FormControl
                                type="text"
                                name="filterName"
                                placeholder="Nhập tên danh mục cần tìm..."
                                onChange={this.handleChange}
                            />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    {elmCatalogs}
                </tbody>
            </Table>
        );
    }

}
const mapStateToProps = state => ({
   ListCatalogs: state.ListCatalogs
})
const mapDispatchToProps = dispatch => ({
    handleFilterTable: (filter) => {
        dispatch(actions.FILTER_TABLE_CATALOG(filter))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CatalogList)