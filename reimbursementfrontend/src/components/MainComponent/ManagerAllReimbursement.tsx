import { Button, Container, Table } from "react-bootstrap"

export const ManagerAllReimbursement:React.FC=()=>{
    return( 
         <Container className="d-flex flex-column align-items-center mt-3">
            
            <h3>All Reimbursements view: </h3>

            <Table className="table-dark table-hover table-striped w-50">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody className="table-secondary">
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td> </td>
                        </tr>
                </tbody>
            </Table>

        </Container>
       
    )
}