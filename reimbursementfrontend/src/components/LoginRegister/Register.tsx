import { useEffect, useRef, useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Register:React.FC=()=>{

    //define focus on FirstName on load event

    const firstNameRef=useRef<HTMLInputElement>(null)

    useEffect(()=>{
        if(firstNameRef.current){
            firstNameRef.current.focus();
        }
    },[])

    // Retreive data from the form

    const [selectRole, setSelectRole]=useState("select Role");
    const handleSelectChange=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectRole(event.target.value);
        alert(selectRole);
    }

    //handle click back to login
    const navigate=useNavigate();


    return(
        <Container>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <Form>
                  <div className="divider d-flex align-items-left my-4">
                    <p className="text-left fw-bold mx-3 mb-0">REIMBURSEMENT SYSTEM</p>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Firstname"
                      name="firstname" 
                      ref={firstNameRef}
                      />
                      
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Lastname"
                      name="lastname"/>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid Username"
                      name="username" />
                  </div>

                  <div className="form-outline mb-3">
                    <select id="myselect" value={selectRole} onChange={handleSelectChange} className="form-control form-control-lg">
                        <option value="">select Role</option>
                        <option value="user">user</option>
                        <option value="manager">manager</option>
                    </select>
                  </div>
                  
                  {/* Password input */}
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      name="password"
                    />
                  </div>
  
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <Button
                      type="button"
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Register
                    </Button>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <Button
                      type="button"
                      variant="outline-danger"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={()=>{navigate("/")}}
                    >
                      back to login
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            {/* Copyright */}
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2025. All rights reserved.
            </div>
          </div>
        </section>
      </Container>
    )
}