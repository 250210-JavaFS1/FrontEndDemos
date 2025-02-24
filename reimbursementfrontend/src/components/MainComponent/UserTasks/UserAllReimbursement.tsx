import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { Button, Container, Table } from "react-bootstrap"
import { Reimbursement } from "../../../interfaces/Reimbursement"
import { User } from "../../../interfaces/User"
import { store } from "../../GlobalData/store"
import { useNavigate } from "react-router-dom"

export const UserAllReimbursement: React.FC = () => {

    //dynamic navigation
    const navigate=useNavigate();

    // Define state to load reimbursement by user
    const [reimbursements, setReimbursements] = useState<Reimbursement[]>([])

    useEffect(() => {
        // Loading all reimbursement by user
        getReimbursementByUser(user);

    }, [])

    // Function to get user's reimbursement
    const user=store.loggedInUser
    
    const getReimbursementByUser = async (user:User) => {
        try {
            const response = await axios.post("http://localhost:8080/reimbursements/user", user)
            console.log(response.data) // Print out the data just to see it
            setReimbursements(response.data)
        } catch(error:unknown|AxiosError) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }
        }
    }

    //handle edit action

    const onEdit=async (reimbursement:Reimbursement)=>{

        //store reimbursement to update 
        store.reimbursementSelected.reimbId=reimbursement.reimbId
        store.reimbursementSelected.amount=reimbursement.amount
        store.reimbursementSelected.description=reimbursement.description
        store.reimbursementSelected.userDto=reimbursement.userDto.userId
        navigate("/editReimbursement")
        
        try {
            const response = await axios.patch("http://localhost:8080/reimbursements", reimbursement)
            console.log(response.data) // Print out the data just to see it
            setReimbursements(response.data)
        } catch(error:unknown|AxiosError) {
            if(error instanceof AxiosError){
                alert(error.response?.data)
            }
        }
    }

    //handle delete action
    const onDelete=async(reimbursement:Reimbursement)=>{
        try {
            const response = await axios.delete(`http://localhost:8080/reimbursements/${reimbursement.reimbId}`)
            console.log(response.data) // Print out the data just to see it
                alert("pending reimbursement successfully deleted.")
                getReimbursementByUser(user)       
        } catch(error:unknown|AxiosError) {
            if(error instanceof AxiosError){
                alert(error.response?.data)
            }
        }
    }

    
    return (
        <Container className="d-flex flex-column align-items-center mt-3">
            <h3>All Reimbursements view: </h3>

            <Table className="table-dark table-hover table-striped w-50">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-secondary">
                    {reimbursements.map((reimbursement: Reimbursement) => {
                        const isPending = reimbursement.status === "Pending";
                        return (
                            <tr key={reimbursement.reimbId}>
                                <td>{reimbursement.reimbId}</td>
                                <td>${reimbursement.amount}</td>
                                <td>{reimbursement.description}</td>
                                <td>{reimbursement.status}</td>
                                <td>
                                    <Button variant="outline-success" onClick={()=>{onEdit(reimbursement)}} disabled={!isPending}>Edit</Button>
                                    <Button variant="outline-danger" className="ml-2" onClick={()=>{onDelete(reimbursement)}} disabled={!isPending}>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

        </Container>
    )
}
