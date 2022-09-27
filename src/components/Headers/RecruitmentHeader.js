import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecruitmentHeader = () => {
  return (
    <Nav className="nav mr-auto" navbar>
      <Nav.Item>
        <Link to="/admin/recruitment" className="m-0 nav-link">
          <span className="no-icon">Applicants</span>
        </Link>
        <Link to="/admin/Applications" className="m-0 nav-link">
          <span className="no-icon">Applications</span>
        </Link>
        <Link to="/admin/application-documents" className="m-0 nav-link">
          <span className="no-icon">Application Documents</span>
        </Link>
        <Link to="/admin/application-evaluation" className="m-0 nav-link">
          <span className="no-icon">Application Evaluations</span>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default RecruitmentHeader;
