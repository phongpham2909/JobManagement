import React, { Component } from 'react'
import { Table, FormControl } from 'react-bootstrap'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import { filter } from 'lodash'

class ProductList extends Component {
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var { ProductFilterTable } = this.props;
        var filter = {
            name: name === 'filterName' ? value : ProductFilterTable.name,
            status: name === 'filterStatus' ? value : ProductFilterTable.status
        };
        this.props.handleProductFilterTable(filter);
        this.setState({
            [name]: value
        });
    }
    render() {
        var { ListProducts, ProductSort, ProductFilterTable, SearchProduct } = this.props;
        //Điều kiện Filter Table
        if (ProductFilterTable.name) {
            //use lodash
            ListProducts = filter(ListProducts, (products) => {
                return products.name.toLowerCase().indexOf(ProductFilterTable.name.toLowerCase()) !== -1;
            });
        }
        //use lodash filter status
        ListProducts = filter(ListProducts, (products) => {
            if (ProductFilterTable.status === -1) {
                return products;
            } else {
                return products.status === (ProductFilterTable.status === 1 ? true : false);
            }
        });

        //Điều kiện Search
        if (SearchProduct) {
            //use lodash
            ListProducts = filter(ListProducts, (products) => {
                return products.name.toLowerCase().indexOf(SearchProduct.toLowerCase()) !== -1;
            });
        }
        //Điều kiện Sort
        if (ProductSort.sortBy === 'name') {
            ListProducts.sort((a, b) => {
                if (a.name > b.name) return ProductSort.sortValue;
                else if (a.name < b.name) return -ProductSort.sortValue;
                else return 0;
            });
        } else {
            ListProducts.sort((a, b) => {
                if (a.status > b.status) return -ProductSort.sortValue;
                else if (a.status < b.status) return ProductSort.sortValue;
                else return 0;
            });
        }//Kết thúc điều kiện Sort
        var elmProducts = ListProducts.map((products, index) => {
            return <ProductItem
                key={products.id}
                index={index}
                products={products}
            />
        });
        return (
            <Table striped bordered condensed responsive>
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Hình ảnh</th>
                        <th className="text-center">Tên Sản Phẩm</th>
                        <th className="text-center">Giá</th>
                        <th className="text-center">Tình Trạng</th>
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
                                placeholder="Nhập tên sản phẩm cần tìm..."
                                value={ProductFilterTable.name}
                                onChange={this.handleChange}
                            />
                        </td>
                        <td></td>
                        <td>
                            <FormControl
                                componentClass="select"
                                placeholder="select"
                                name="filterStatus"
                                value={ProductFilterTable.status}
                                onChange={this.handleChange}
                            >
                                <option value={-1}>Tất cả</option>
                                <option value={1}>Còn hàng</option>
                                <option value={0}>Hết hàng</option>
                            </FormControl>
                        </td>
                        <td></td>
                    </tr>
                    {elmProducts}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => ({
    ListProducts: state.ListProducts,
    ProductSort: state.ProductSort,
    ProductFilterTable: state.ProductFilterTable,
    SearchProduct: state.SearchProduct,
});
const mapDispatchToProps = dispatch => ({
    handleProductFilterTable: (filter) => {
        dispatch(actions.FILTER_TABLE_PRODUCT(filter))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
