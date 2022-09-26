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

function AddEmployee() {
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [joinedDate, setJoinedDate] = useState(new Date());
    const [probationDate, setProbationDate] = useState(new Date());
    const [genderList, setGenderList] = useState([]);
    const [employeeStatusList, setEmployeeStatusList] = useState([]);
    const [bloodGroupList, setBloodGroupList] = useState([]);
    const [employeeTypeList, setEmployeeTypeList] = useState([]);
    const [bankList, setBankList] = useState([]);
    const [employeeTitleList, setEmployeeTitleList] = useState([]);
    const [scheduleTypeList, setScheduleTypeList] = useState([]);
    const [objectList, setObjectList] = useState([]);
    const [officeList, setOfficeList] = useState([]);
    const [countries, setCountries] = useState([
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
                                            <div className="form-group pr-lg-3">
                                                <label>Date of Birth</label>
                                                <DatePicker className="form-control"
                                                    selected={dateOfBirth}
                                                    onChange={(date) => setDateOfBirth(date)}
                                                    dateFormat="dd/MM/yyyy"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-lg-4">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <Select options={countries} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>City</label>
                                                <Select options={cities} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pr-lg-4">
                                            <div className="form-group">
                                                <label>Place</label>
                                                <input type="text" placeholder="Place" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-lg-4">
                                            <div className="form-group">
                                                <label>Street Address</label>
                                                <input type="text" placeholder="Street Address" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Photo</label>
                                                <input type="file" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pr-lg-4">
                                            <div className="form-group">
                                                <label>Joined Date</label>
                                                <DatePicker className="form-control"
                                                    selected={joinedDate}
                                                    onChange={(date) => setJoinedDate(date)}
                                                    dateFormat="dd/MM/yyyy"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-lg-4">
                                            <div className="form-group">
                                                <label>Probation Date</label>
                                                <DatePicker className="form-control"
                                                    selected={probationDate}
                                                    onChange={(date) => setProbationDate(date)}
                                                    dateFormat="dd/MM/yyyy"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Phone number</label>
                                                <input type="text" placeholder="Phone number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pr-lg-4">
                                            <div className="form-group">
                                                <label>Emergency Contact Phone number</label>
                                                <input type="text" placeholder="Emergency Contact" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-lg-4">
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <Select options={genderList} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Employee Status</label>
                                                <Select options={employeeStatusList} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pr-lg-4">
                                            <div className="form-group">
                                                <label>Blood Group</label>
                                                <Select options={bloodGroupList} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-lg-4">
                                            <div className="form-group">
                                                <label>Employee Type</label>
                                                <Select options={employeeTypeList} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Bank</label>
                                                <Select options={bankList} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pr-lg-4">
                                            <div className="form-group">
                                                <label>Acount number</label>
                                                <input type="text" placeholder="Account number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-lg-4">
                                            <div className="form-group">
                                                <label>Employee Title</label>
                                                <Select options={employeeTitleList} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Schedule Type</label>
                                                <Select options={scheduleTypeList} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pr-lg-4">
                                            <div className="form-group">
                                                <label>RFID Code</label>
                                                <input type="text" placeholder="RFID Code" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-lg-4">
                                            <div className="form-group">
                                                <label>Object</label>
                                                <Select options={objectList} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Office</label>
                                                <Select options={officeList} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-right pr-lg-4">
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

export default AddEmployee;
