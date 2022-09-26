import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
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

function EmployeeList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Card.Title as="h4">Employee List</Card.Title>
                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
                <Link
                  to="/admin/AddEmployee"
                  className="btn btn-md btn-outline-primary w-25 mb-3 rounded-0 "
                >
                  <i className="fa fa-plus " aria-hidden="true"></i> Create
                </Link>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Nr</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Personal Number</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>123123123</td>
                      <td>dakota.rice@gmail.com</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>123123123</td>
                      <td>minerva.hooper@gmail.com</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>123123123</td>
                      <td>sage.rodrigues@gmail.com</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>123123123</td>
                      <td>philip.chaney@gmail.com</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>123123123</td>
                      <td>doris.greene@gmail.com</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>123123123</td>
                      <td>mason.porter@gmail.com</td>
                      <td>Gloucester</td>
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
}

export default EmployeeList;
