import React from "react";
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
import { Link, NavLink } from "react-router-dom";

const Application = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title as="h4">Applications</Card.Title>

                <Link
                  to="/admin/AddApplication"
                  className="btn btn-md btn-outline-primary w-25 mb-3 rounded-0 "
                >
                  <i className="fa fa-plus " aria-hidden="true"></i> Create
                </Link>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Date of Application</th>
                      <th className="border-0">Education</th>
                      <th className="border-0">Experience</th>
                      <th className="border-0">Other Info</th>
                      <th className="border-0">Job</th>
                      <th className="border-0">Applicant</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>26/09/2022</td>
                      <td>BSc</td>
                      <td>Software Developer</td>
                      <td>Example </td>
                      <td>It Specialist</td>
                      <td>Richard Anderson</td>
                    </tr>
                    <tr>
                      <td>26/09/2022</td>
                      <td>BSc</td>
                      <td>Software Developer</td>
                      <td>Example </td>
                      <td>It Specialist</td>
                      <td>Richard Anderson</td>
                    </tr>
                    <tr>
                      <td>26/09/2022</td>
                      <td>BSc</td>
                      <td>Software Developer</td>
                      <td>Example </td>
                      <td>It Specialist</td>
                      <td>Richard Anderson</td>
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
};
export default Application;
