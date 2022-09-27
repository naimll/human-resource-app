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

const ApplicationDocument = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title as="h4">Application Documents</Card.Title>

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
                      <th className="border-0">Application Id</th>
                      <th className="border-0">Applicant</th>
                      <th className="border-0">Application Document Type</th>
                      <th className="border-0">Document Name</th>
                      <th className="border-0">Document File</th>
                      <th className="border-0">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12391</td>
                      <td>Richard Anderson</td>
                      <td>Report</td>
                      <td>Example.doc</td>
                      <td>
                        <NavLink to={"/"}>
                          <i className="nc-icon nc-notes " />
                        </NavLink>
                      </td>
                      <td>+92123124</td>
                    </tr>
                    <tr>
                      <td>12391</td>
                      <td>Richard Anderson</td>
                      <td>Report</td>
                      <td>Example.doc</td>
                      <td>
                        <NavLink to={"/"}>
                          <i className="nc-icon nc-notes " />
                        </NavLink>
                      </td>
                      <td>+92123124</td>
                    </tr>
                    <tr>
                      <td>12391</td>
                      <td>Richard Anderson</td>
                      <td>Report</td>
                      <td>Example.doc</td>
                      <td>
                        <NavLink to={"/"}>
                          <i className="nc-icon nc-notes " />
                        </NavLink>
                      </td>
                      <td>+92123124</td>
                    </tr>
                    <tr>
                      <td>12391</td>
                      <td>Richard Anderson</td>
                      <td>Report</td>
                      <td>Example.doc</td>
                      <td>
                        <NavLink to={"/"}>
                          <i className="nc-icon nc-notes " />
                        </NavLink>
                      </td>
                      <td>+92123124</td>
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
export default ApplicationDocument;
