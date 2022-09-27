import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function EmployeeDocumentList() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header className="d-flex justify-content-between align-items-center">
                                <Card.Title as="h4">Employee Document List</Card.Title>
                                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
                                <Link
                                    to="/admin/AddEmployeeDocument"
                                    className="btn btn-md btn-outline-primary w-25 mb-3 rounded-0 "
                                >
                                    <i className="fa fa-plus " aria-hidden="true"></i> Create
                                </Link>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">Nr</th>
                                            <th className="border-0">Employee</th>
                                            <th className="border-0">Document Name</th>
                                            <th className="border-0">Document</th>
                                            <th className="border-0">Created Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Dakota Rice</td>
                                            <td>fileOne.pdf</td>
                                            <td>
                                                <a href="#">
                                                    Document
                                                </a>
                                            </td>
                                            <td>20/05/2022</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Minerva Hooper</td>
                                            <td>fileTwo.pdf</td>
                                            <td>
                                                <a href="#">
                                                    Document
                                                </a>
                                            </td>
                                            <td>22/05/2022</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Sage Rodriguez</td>
                                            <td>fileThree.pdf</td>
                                            <td>
                                                <a href="#">
                                                    Document
                                                </a>
                                            </td>
                                            <td>24/05/2022</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Philip Chaney</td>
                                            <td>fileFour.pdf</td>
                                            <td>
                                                <a href="#">
                                                    Document
                                                </a>
                                            </td>
                                            <td>26/05/2022</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Doris Greene</td>
                                            <td>fileFifth.pdf</td>
                                            <td>
                                                <a href="#">
                                                    Document
                                                </a>
                                            </td>
                                            <td>28/05/2022</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Mason Porter</td>
                                            <td>fileSixth.pdf</td>
                                            <td>
                                                <a href="#">
                                                    Document
                                                </a>
                                            </td>
                                            <td>30/05/2022</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default EmployeeDocumentList;
