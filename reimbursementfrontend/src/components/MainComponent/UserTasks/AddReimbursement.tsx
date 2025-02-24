import { useEffect, useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { store } from "../../GlobalData/store";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

export const AddReimbursement: React.FC = () => {
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
        description: "",
        amount: "",
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        if (!formData.description || !formData.amount) {
            alert("Please fill in all fields.");
            return;
        }
        if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
            alert("Please enter a valid amount.");
            return;
        }
        console.log(formData)
        try {
            const response = await axios.post("http://localhost:8080/reimbursements", formData);
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

    return (
        <Container className="d-flex flex-column align-items-center mt-3">
            <h3>Creating Reimbursement ticket: </h3>
            <Form onSubmit={handleSubmit}>
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
                        Submit
                    </Button>
                </div>
            </Form>
        </Container>
    );
};
