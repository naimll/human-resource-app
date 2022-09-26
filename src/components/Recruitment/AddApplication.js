import RecruitmentHeader from "components/Headers/RecruitmentHeader";
import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Select from "react-select";

const AddApplication = () => {
  const [cities, setCities] = useState([
    { label: "Islamabad", value: "asf" },
    { label: "Lahore", value: "asf" },
    { label: "Sukkur", value: "asf" },
  ]);
  const [countries, setCountries] = useState([
    { label: "Pakistan", value: "asf" },
    { label: "Pakistan", value: "asf" },
  ]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title as="h4">Add Applicant</Card.Title>
              </Card.Header>
              <Card.Body className="">
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Other Name</label>
                        <Form.Control
                          defaultValue="John"
                          placeholder="Other Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="richard.anderson@example.com">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Select
                          options={cities}
                          className={`dropdown rounded-0`}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Select
                          options={countries}
                          className={`dropdown rounded-0`}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-end  form-group mt-3">
                      <button
                        type="button"
                        className="btn btn-md btn-secondary rounded-0 me-3 mr-3"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-md btn-primary rounded-0"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddApplication;
