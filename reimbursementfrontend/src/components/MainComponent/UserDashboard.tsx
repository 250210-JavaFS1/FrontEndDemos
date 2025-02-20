import { Col, Container, Nav, Row } from "react-bootstrap"
import { UserAllReimbursement } from "./UserAllReimbursement"

export const UserDashBoard:React.FC=()=>{
    return(
        <Container>
        <Row>
          <Col> <h2>User DashBoard</h2>
          <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Create a new reimbursement</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">See all reimbursement tickets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">See only pending reimbursement tickets</Nav.Link>
        </Nav.Item>
      </Nav>
         </Col>
        </Row>
        <Row>
          <UserAllReimbursement/>
        </Row>
  
          </Container>
    )
}