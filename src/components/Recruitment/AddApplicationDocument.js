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

const AddApplicationDocument = () => {
  const [documentTypes, setDocumentTypes] = useState([
    { label: "Report", value: "asf" },
    { label: "Policy", value: "asf" },
    { label: "Meeting Reports", value: "asf" },
  ]);
  const [application, setApplication] = useState([
    { label: "Application 1", value: "asf" },
    { label: "Application 2", value: "asf" },
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
                        <label>Document Type</label>
                        <Select
                          options={documentTypes}
                          className={`dropdown rounded-0`}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Application</label>
                        <Select
                          options={application}
                          className={`dropdown rounded-0`}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Default file input example</Form.Label>
                          <Form.Control type="file" />
                        </Form.Group>
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

export default AddApplicationDocument;
