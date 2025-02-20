import { Container, Form, Button } from "react-bootstrap"
import './loginCSS.css'
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {

    //I'm gonna use the useRef and useEffect hooks to focus our username input box on component load
    const usernameRef=useRef<HTMLInputElement>(null);
    useEffect(()=>{
        if(usernameRef.current){
            usernameRef.current.focus();
        }
    },[])

    //Handle to navigate to register component
    const navigate=useNavigate();


    return (
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
  
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid Username"
                      name="username"
                      ref={usernameRef}
                    />

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
  
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Checkbox */}
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>
  
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <Button
                      type="button"
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Login
                    </Button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                    <Button variant="outline-danger" onClick={()=>{navigate("/register")}}>Register</Button>
                     
                    </p>
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