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
import DatePicker from "react-datepicker";

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
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title as="h4">Add Application</Card.Title>
              </Card.Header>
              <Card.Body className="">
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Date</label>
                        <DatePicker
                          className="form-control"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          dateFormat="dd/MM/yyyy"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Education</label>
                        <Form.Control
                          defaultValue="Computer Science"
                          placeholder="Education"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Experience</label>
                        <Form.Control
                          defaultValue="Software Developer at ABC"
                          placeholder="Experience"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="richard.anderson@example.com">
                          Other Info
                        </label>
                        <Form.Control
                          placeholder="Other Info"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Applicant</label>
                        <Form.Control
                          defaultValue="Richard Anderson"
                          placeholder="Applicant"
                          type="text"
                        ></Form.Control>
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
