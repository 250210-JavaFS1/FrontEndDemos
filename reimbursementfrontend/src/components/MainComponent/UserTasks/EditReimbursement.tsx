import { useEffect, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { store } from "../../GlobalData/store";
import { Reimbursement } from "../../../interfaces/Reimbursement";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const EditReimbursement:React.FC=()=>{
// Define focus on the text area field
const descriptionRef = useRef<HTMLTextAreaElement>(null);

useEffect(() => {
    if (descriptionRef.current) {
        descriptionRef.current.focus();
    }
}, []);

// Retrieving logged-in User
const loggedInUserId = store.loggedInUser.userId;

// Store form data using useState
const [formData, setFormData] = useState({
    description: store.reimbursementSelected.description,
    amount: store.reimbursementSelected.amount,
    userId: loggedInUserId
});

// Handle input change
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
};

const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (!formData.description || !formData.amount) {
        alert("Please fill in all fields.");
        return;
    }
    if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    store.reimbursementSelected.amount=formData.amount
    store.reimbursementSelected.description=formData.description
    store.reimbursementSelected.status="Pending"
    console.log(store.reimbursementSelected)

    try {
        const response = await axios.patch("http://localhost:8080/reimbursements", store.reimbursementSelected);
        navigate("/userdashboard")
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            alert(error.response?.data || "An error occurred");
        } else {
            alert("An unexpected error occurred");
        }
    }

};

const navigate = useNavigate();
    return(
        <Container className="d-flex flex-column align-items-center mt-3">
            <h3>Update Reimbursement ticket ID: {store.reimbursementSelected.reimbId}</h3>
            <Form onSubmit={handleUpdate}>
                {/* Description input */}
                <div className="form-outline mb-4">
                    <textarea
                        className="form-control form-control-lg"
                        placeholder="Enter a description"
                        name="description"
                        ref={descriptionRef}
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                {/* Amount input */}
                <div className="form-outline mb-3">
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <Button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                        Update
                    </Button>
                </div>
            </Form>
        </Container>
    )
}