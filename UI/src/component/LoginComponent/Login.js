import axios from "axios";
import { useState } from "react";
import { _userapiurl } from "../../api.url";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate();
    const [email,setEmail]=useState();
    const [pwd,setPwd]=useState();
    const [output,setOutput]=useState();

const  handleData=()=>{
    var userDetails={"email":email,"password":pwd};
    axios.post(_userapiurl+"login",userDetails).then((response)=>{
        //console.log(response.data);
        var user=response.data.userDetails;
        localStorage.setItem("_id",user._id);
        localStorage.setItem("email",user.email);
        localStorage.setItem("password",user.password);
        localStorage.setItem("address",user.address);
        localStorage.setItem("city",user.city);
        localStorage.setItem("gender",user.gender);
        localStorage.setItem("name",user.name);
        localStorage.setItem("role",user.role);
        localStorage.setItem("info",user.info);
        localStorage.setItem("token",response.data.token);
        user.role=="admin"? navigate("/admin") : navigate("/user");
    }).catch((err)=>{
        setOutput("Oops,sorry login failed...");
        setEmail("");
        setPwd("");
    });
    
 }
;    return (
        <>
            <h1>Login Here!!!</h1>
            <br />
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" value={pwd} onChange={e => setPwd(e.target.value)} />
                </div>
                <button onClick={handleData} type="button" class="btn btn-primary">Submit</button>
                <br />
            </form>
        </>
    );
}
export default Login;