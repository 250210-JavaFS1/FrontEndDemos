import { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { User } from "../../../interfaces/User";
import axios from "axios";

export const UserList: React.FC = () => {
    //state to store users
    const[users, setUsers]=useState<User[]>([])

    //state to store role change 
    const[role, setRole]=useState("");

   //Get all user list
    useEffect(() => {
        getAllUsers()

    }, [])

    //store data when role select change
    const storeRole=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        const roleChange=event.target.value
        setRole(roleChange)
        alert("The User is going to change to:"+roleChange)
      }

    const getAllUsers = async () => {

        try{
            const response = await axios.get("http://localhost:8080/users")
            console.log(response.data) //print out the data just to see it
            setUsers(response.data) 

        } catch {
            alert("Something went wrong")
        }
    }

    const patchUser = async (user:User) => {

        try{
            const response = await axios.patch("http://localhost:8080/users",user)
            console.log(response.data) //print out the data just to see it
            alert("User update")
            getAllUsers()

        } catch {
            alert("Something went wrong")
        }
    }

    const deleteUser = async (user:User) => {

        try{
            const response = await axios.delete(`http://localhost:8080/users/${user.userId}`)
            console.log(response.data) //print out the data just to see it
            alert("User deleted")
            getAllUsers()

        } catch {
            alert("Something went wrong")
        }
    }

    const promote=(user:User)=>{
        user.role=role
        patchUser(user)
    }

    const fire=(user:User)=>{
        alert("User: "+ user.username+" is going to get fire");
        deleteUser(user)
    }


  return (
    <Container className="d-flex flex-column align-items-center mt-3">
      <h3>All Users view: </h3>

      <Table className="table-dark table-hover table-striped w-100">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>{/* Fixed typo here */}
            <th>UserName</th>
            <th>Role</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-secondary">
        {users.map((user:User) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                            <td>
                            <Form>
                            <Form.Control as="select" name="userRole" onChange={storeRole}>
                            <option value="select role">select role</option>
                            <option value="user">user</option>
                            <option value="manager">manager</option>
                            </Form.Control>
                            </Form>
                            </td>
                            <td>
                                <Button variant="outline-success" onClick={() => promote(user)}>Promote</Button>
                                <Button variant="outline-danger" onClick={() => fire(user)}>Fire</Button>
                            </td>
                        </tr>
                    ))} 
        </tbody>
      </Table>
    </Container>
  )
}
       
