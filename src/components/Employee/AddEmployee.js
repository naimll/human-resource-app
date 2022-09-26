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

function AddEmployee() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header className="d-flex justify-content-between align-items-center">
                                <Card.Title as="h4">Create Employee</Card.Title>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <form className="p-2">
                                    <div className="row">
                                        <div className="col-md-6 pl-lg-4">
                                            <div className="form-group">
                                                <label>Employee Code</label>
                                                <input type="text" placeholder="Code" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pr-lg-4">
                                            <div className="form-group">
                                                <label>Personal Number</label>
                                                <input type="text" placeholder="Personal Number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-lg-4">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" placeholder="First Name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" placeholder="Last Name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pr-lg-4">
                                            <div className="form-group">
                                                <label>Other Name</label>
                                                <input type="text" placeholder="Other Name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-lg-4">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" placeholder="Email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Private Email</label>
                                                <input type="text" placeholder="Private Email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group pr-lg-2">
                                                <label>Date of Birth</label>
                                                <DatePicker className="form-control" 
                                                    selected={startDate} 
                                                    onChange={(date) => setStartDate(date)} 
                                                    dateFormat="dd/MM/yyyy"
                                                />
                                            </div>
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

export default AddEmployee;
