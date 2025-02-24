import { Button, Container, Form, Table } from "react-bootstrap"
import { store } from "../../GlobalData/store"
import { User } from "../../../interfaces/User"
import { useEffect, useState } from "react"
import { Reimbursement } from "../../../interfaces/Reimbursement"
import axios, { AxiosError } from "axios"
import { useNavigate } from "react-router-dom"

export const ManagerAllPendingReimbursement:React.FC=()=>{
    
      // Function to get user's reimbursement
      const user=store.loggedInUser

     // Define state to load reimbursement by user
    const [reimbursements, setReimbursements] = useState<Reimbursement[]>([])

    //Define redirection to all reimbursement
    const navigate=useNavigate()

    //define state to store status change
    const[status, setStatus]=useState("");

    //on page loading get all reimbursement

        useEffect(() => {
            // Loading all reimbursement by user
            getAllPendingReimbursements();
    
        }, [])
    
      const getAllPendingReimbursements= async () => {
          try {
              const response = await axios.get(`http://localhost:8080/reimbursements/pending?status=Pending`)
              console.log(response.data) // Print out the data just to see it
              setReimbursements(response.data)
          } catch(error:unknown|AxiosError) {
              if(error instanceof AxiosError){
                  alert(error.response?.data)
              }
          }
      }
      //store status change
      const storeStatus=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        const statusSelected=event.target.value
        setStatus(statusSelected)
      }

      //Update Reimbursement status change 
      const handleTakeAction=async (reimbursement:Reimbursement)=>{
        reimbursement.status=status
        if(reimbursement.status=="Approved" || reimbursement.status=="Denied" ){

            try{
                const response = await axios.patch("http://localhost:8080/reimbursements", reimbursement)
                navigate("/managerAllReimbursement")
    
            } catch {
                alert("Something went wrong")
            }

        }else{
            alert("select right status please")
        }
      }

    return( 
        <Container className="d-flex flex-column align-items-center mt-3">
        <h3>All Pending Reimbursement Tickets view: </h3>
  
        <Table className="table-dark table-hover table-striped w-100">
          <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
            <th>Username</th>
            <th>Action</th>
            <th></th>
            </tr>
          </thead>
          <tbody className="table-secondary">
          {reimbursements.map((reimbursement:Reimbursement) => (
                          <tr key={reimbursement.reimbId}>
                              <td>{reimbursement.reimbId}</td>
                              <td>${reimbursement.amount}</td>
                              <td>{reimbursement.description}</td>
                              <td>{reimbursement.status}</td>
                              <td>{reimbursement.userDto.username}</td>
                              <td>
                              <Form>
                              <Form.Control as="select" name="status" onChange={storeStatus}>
                              <option value="select">select action</option>
                              <option value="Approved">Approved</option>
                              <option value="Denied">Denied</option>
                              </Form.Control>
                              </Form>
                              </td>
                              <td>
                                  <Button variant="outline-success" onClick={() => handleTakeAction(reimbursement)}>Take Action</Button>
                              </td>
                          </tr>
                      ))} 
          </tbody>
        </Table>
      </Container>
       
    )
}