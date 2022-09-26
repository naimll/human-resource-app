import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecruitmentHeader = () => {
  return (
    <Nav className="nav mr-auto" navbar>
      <Nav.Item>
        <Link to="/admin/user" className="m-0 nav-link">
          <span className="no-icon">Applicant</span>
        </Link>
        <Link to="/admin/user" className="m-0 nav-link">
          <span className="no-icon">Application</span>
        </Link>
        <Link to="/admin/user" className="m-0 nav-link">
          <span className="no-icon">Applicant</span>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default RecruitmentHeader;
