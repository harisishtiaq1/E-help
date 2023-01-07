import axios from "axios";

const api_url="//localhost:7000/";

// Register user

const Register=async(userData)=>{
    console.log(userData);
const response =await axios.post(api_url + "register",userData)
return response.data
}
// Login User
const login=async(userData)=>{
const response=await axios.post(api_url+"login",userData)
if (response.data)
{
    localStorage.setItem("user",JSON.stringify(response.data))
}    
return response.data
}
const authservice={
    Register,
    login
}
export default authservice;