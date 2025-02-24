import { Button, Container, Form, Table } from "react-bootstrap"
import { store } from "../../GlobalData/store"
import { User } from "../../../interfaces/User"
import { useEffect, useState } from "react"
import { Reimbursement } from "../../../interfaces/Reimbursement"
import axios, { AxiosError } from "axios"

export const ManagerAllReimbursement:React.FC=()=>{
    
      // Function to get user's reimbursement
      const user=store.loggedInUser

     // Define state to load reimbursement by user
    const [reimbursements, setReimbursements] = useState<Reimbursement[]>([])

    //on page loading get all reimbursement

        useEffect(() => {
            // Loading all reimbursement by user
            getAllReimbursements();
    
        }, [])
    
      const getAllReimbursements= async () => {
          try {
              const response = await axios.get("http://localhost:8080/reimbursements")
              console.log(response.data) // Print out the data just to see it
              setReimbursements(response.data)
          } catch(error:unknown|AxiosError) {
              if(error instanceof AxiosError){
                  alert(error.response?.data)
              }
          }
      }
      //store status change
      const storeStatus=()=>{}
      //action on ticket
      const handleTakeAction=(reimbursement:Reimbursement)=>{}

    return( 
        <Container className="d-flex flex-column align-items-center mt-3">
        <h3>All Reimbursement Tickets view: </h3>
  
        <Table className="table-dark table-hover table-striped w-100">
          <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
            <th>Username</th>
            <th>Firstname</th>
            <th>Lastname</th>
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
                              <td>{reimbursement.userDto.firstName}</td>
                              <td>{reimbursement.userDto.lastName}</td>
                          </tr>
                      ))} 
          </tbody>
        </Table>
      </Container>
       
    )
}