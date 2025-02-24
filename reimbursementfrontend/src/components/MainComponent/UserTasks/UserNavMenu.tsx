import { Link } from "react-router-dom"
import { store } from "../../GlobalData/store";
import { useState } from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";

export const UserNavManu:React.FC=()=>{
    const user = store.loggedInUser;
    const [selectedKey, setSelectedKey] = useState<string>("/home");
    return(
        <>
        <Row>
        <Col>
          <h2>User DashBoard</h2>
          <h6>Welcome on session as User: {user.firstName} {user.lastName}</h6>
          <h6><Button variant="outline-danger">logout</Button></h6>
          <Nav
            activeKey={selectedKey}
            onSelect={(selectedKey: string) => setSelectedKey(selectedKey)}>
            <Nav.Item>
              <Link to={"/userdashboard"}>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/addreimbursement">Create a new reimbursement</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={""}>See all reimbursement tickets</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={""} >See only pending reimbursement tickets</Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
        </>
    )
}