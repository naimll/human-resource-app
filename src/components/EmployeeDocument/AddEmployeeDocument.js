import React, { useState } from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
import Select from "react-select";

function AddEmployeeDocument() {
    const [employees, setEmployees] = useState([
        { value: 'test', label: 'Test' }
    ]);
    const [cities, setCities] = useState([]);
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header className="d-flex justify-content-between align-items-center">
                                <Card.Title as="h4">Create Employee Document</Card.Title>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <form className="p-2">
                                    <div className="row">
                                        <div className="col-md-6 pl-lg-4">
                                            <div className="form-group">
                                                <label>Employee</label>
                                                <Select options={employees} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pr-lg-4">
                                            <div className="form-group">
                                                <label>Category</label>
                                                <Select options={employees} />
                                            </div>
                                        </div>
                                        <div className="col-md-12 px-lg-4">
                                            <div className="form-group">
                                                <label>Document</label>
                                                <input type="file" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-right pr-lg-4">
                                            <button type="button" class="btn btn-md btn-secondary rounded-0 me-3 mr-3">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Ruaj</button>
                                        </div>
                                    </div>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AddEmployeeDocument;
