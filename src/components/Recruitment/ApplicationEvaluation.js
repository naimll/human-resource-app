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

const ApplicationEvaluation = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title as="h4">Application Evaluations</Card.Title>

                <Link
                  to="/admin/add-application-document"
                  className="btn btn-md btn-outline-primary w-25 mb-3 rounded-0 "
                >
                  <i className="fa fa-plus " aria-hidden="true"></i> Create
                </Link>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Recruiter</th>
                      <th className="border-0">Application</th>
                      <th className="border-0">Is Hired</th>
                      <th className="border-0">Notes</th>
                      <th className="border-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Richard Anderson</td>
                      <td className="text-danger">No</td>
                      <td>Example Notes</td>
                      <td>
                        <a className="text-danger">
                          <i
                            className="fa-solid fa-trash "
                            aria-hidden="true"
                          ></i>
                        </a>
                        <a className="text-danger">
                          <i
                            className="nc-icon nc-simple-remove "
                            aria-hidden="true"
                          ></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John</td>
                      <td>Richard Anderson</td>
                      <td className="text-success">Yes</td>
                      <td>Example Notes</td>
                    </tr>
                    <tr>
                      <td>John</td>
                      <td>Richard Anderson</td>
                      <td className="text-success">Yes</td>
                      <td>Example Notes</td>
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
export default ApplicationEvaluation;
