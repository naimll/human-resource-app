import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const EmployeeHeader = () => {
    return (
        <Nav className="nav mr-auto" navbar>
            <Nav.Item>
                <Link to="/admin/user" className="m-0 nav-link">
                    <span className="no-icon">User Profile</span>
                </Link>
            </Nav.Item>
        </Nav>
    )
}

export default EmployeeHeader;