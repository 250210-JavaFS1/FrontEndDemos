import { Col, Container, Nav, Row } from "react-bootstrap"
import { ManagerAllReimbursement } from "./ManagerAllReimbursement"

export const ManagerDashBoard:React.FC=()=>{
    return(
        <Container>
      <Row>
        <Col> <h2>Manager Dashboard</h2>
        <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">See all reimbursements</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">See all pending reimbursements</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Resolve a reimbursement</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">See all User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Delete a User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Update an employee’s role</Nav.Link>
      </Nav.Item>
    </Nav>
       </Col>
      </Row>
      <Row>
        <Col><ManagerAllReimbursement/></Col>
      </Row>

        </Container>
    )
}