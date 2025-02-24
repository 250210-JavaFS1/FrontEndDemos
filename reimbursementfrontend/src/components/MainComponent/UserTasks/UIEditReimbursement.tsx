import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { store } from "../../GlobalData/store";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EditReimbursement } from "./EditReimbursement";


export const UIEditReimbursement: React.FC = () => {
  const user = store.loggedInUser;
  const [selectedKey, setSelectedKey] = useState<string>("/home");

  const navigate=useNavigate();

  //logout script
  const handleLogout = () => {
    // Clear the user data from the store or session
    store.loggedInUser = store.loggedInUser // Or you can use your state management solution
    // Redirect to login or home page
    navigate("/"); // Replace with your desired route
  }

  return (
    <Container>
    <Row>
        <Col>
          <h2>User DashBoard</h2>
          <h6>Welcome on session as User: {user.firstName} {user.lastName}</h6>
          <h6><Button variant="outline-danger" onClick={handleLogout}>logout</Button></h6>
          <Nav
            activeKey={selectedKey}
            onSelect={(selectedKey: string) => setSelectedKey(selectedKey)}>
            <Nav.Item>
              <Link to={"/userdashboard"} className="nav-link">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/addreimbursement" className="nav-link">Create a new reimbursement</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/allPendingReimbursementByUser"} className="nav-link">See only pending reimbursement tickets</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/accesscheck"} className="nav-link">Manager Only</Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <EditReimbursement/>
      </Row>
    </Container>
  );
};
