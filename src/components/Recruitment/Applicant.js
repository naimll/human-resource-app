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

const Applicant = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title as="h4">Applicants</Card.Title>

                <Link
                  to="/admin/AddApplicant"
                  className="btn btn-md btn-outline-primary w-25 mb-3 rounded-0 "
                >
                  <i className="fa fa-plus " aria-hidden="true"></i> Create
                </Link>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">First Name</th>
                      <th className="border-0">Last Name</th>
                      <th className="border-0">Other Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Richard</td>
                      <td>Anderson</td>
                      <td>JR</td>
                      <td>richard@gmail.com</td>
                      <td>+92123124</td>
                    </tr>
                    <tr>
                      <td>Richard</td>
                      <td>Anderson</td>
                      <td>JR</td>
                      <td>richard@gmail.com</td>
                      <td>+92123124</td>
                    </tr>
                    <tr>
                      <td>Richard</td>
                      <td>Anderson</td>
                      <td>JR</td>
                      <td>richard@gmail.com</td>
                      <td>+92123124</td>
                    </tr>
                    <tr>
                      <td>Richard</td>
                      <td>Anderson</td>
                      <td>JR</td>
                      <td>richard@gmail.com</td>
                      <td>+92123124</td>
                    </tr>
                    <tr>
                      <td>Richard</td>
                      <td>Anderson</td>
                      <td>JR</td>
                      <td>richard@gmail.com</td>
                      <td>+92123124</td>
                    </tr>
                    <tr>
                      <td>Richard</td>
                      <td>Anderson</td>
                      <td>JR</td>
                      <td>richard@gmail.com</td>
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
export default Applicant;
