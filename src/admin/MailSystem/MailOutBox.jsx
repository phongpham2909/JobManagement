import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    Table,
    OverlayTrigger,
    Tooltip
} from "react-bootstrap";
import Card from "../../components/Card/Card";
import Button from "../../components/CustomButton/CustomButton";
import { Info, Delete, Edit } from "@material-ui/icons";

class MailSystem extends Component {
    render() {
        const view = <Tooltip id="view">View Profile</Tooltip>;
        const edit = <Tooltip id="edit">Edit Profile</Tooltip>;
        const remove = <Tooltip id="remove">Remove</Tooltip>;
        const actions = (
            <td className="td-actions text-right">
              <OverlayTrigger placement="top" overlay={view}>
                <Button simple bsStyle="info" bsSize="xs">
                  <Info/>
                </Button>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={edit}>
                <Button simple bsStyle="success" bsSize="xs">
                  <Edit/>
                </Button>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={remove}>
                <Button simple bsStyle="danger" bsSize="xs">
                  <Delete/>
                </Button>
              </OverlayTrigger>
            </td>
          );
        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Hộp Thư Đi"
                                tableFullWidth
                                content={
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th className="text-center">#</th>
                                                <th>Tên Người Nhận</th>
                                                <th>Tiêu Đề</th>
                                                <th className="text-right">Ngày Gửi</th>
                                                <th className="text-right">Hành Động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>Phong Phạm 1</td>
                                                <td>Develop Mail System</td>
                                                <td className="text-right">19/10/2018</td>
                                                {actions}
                                            </tr>
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default MailSystem;

