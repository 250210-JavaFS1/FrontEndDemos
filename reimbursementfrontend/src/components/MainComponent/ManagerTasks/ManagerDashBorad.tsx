import { Button, Col, Container, Nav, Row } from "react-bootstrap"
import { ManagerAllReimbursement } from "./ManagerAllReimbursement"
import { UserList } from "./UserList"
import { Link, useNavigate } from "react-router-dom"
import '../UserTasks/NavCSS.css'
import { store } from "../../GlobalData/store"
import { useState } from "react"


export const ManagerDashBoard:React.FC=()=>{
  
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


    return(
        <Container>
      <Row>
        <Col> 
        <h2>Manager Dashboard</h2>
        <h6>Welcome on session as Manager: {user.firstName} {user.lastName}</h6>
        <h6><Button variant="outline-danger" onClick={handleLogout}>logout</Button></h6>
        <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Link to="/managerdashboard" className="nav-link">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/userdashboard" className="nav-link">User DashBoard for Manager</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/managerAllReimbursement" className="nav-link">See all reimbursements</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/managerAllPendingReimbursement" className="nav-link">See all pending reimbursements</Link>
      </Nav.Item>
    </Nav>
       </Col>
      </Row>
      <Row>
      <UserList/>
      </Row>

        </Container>
    )
}