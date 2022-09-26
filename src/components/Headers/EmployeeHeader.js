import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const EmployeeHeader = () => {
    return (
        <Nav className="nav mr-auto" navbar>
            <Nav.Item>
                <Link to="/admin/employees" className="m-0 nav-link">
                    <span className="no-icon">Employees</span>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/admin/documents" className="m-0 nav-link">
                    <span className="no-icon">Documents</span>
                </Link>
            </Nav.Item>
        </Nav>
    )
}

export default EmployeeHeader;