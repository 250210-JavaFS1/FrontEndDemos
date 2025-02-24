import { useNavigate } from "react-router-dom";
import { store } from "../../GlobalData/store";
import { useEffect } from "react";

export const AccessCheck:React.FC=()=>{
    const user = store.loggedInUser;

    const navigate=useNavigate();

    useEffect(() => {
        // check for credential before access
        functionCheck();

    }, [])
    
const functionCheck=()=>{
            if(user.role=="user"){
                alert("You need Manager Credential to Access")
                navigate("/userdashboard")
            }else{
                navigate("/managerdashboard") 
            }
    }
    return(
        <>
        </>
    )
}