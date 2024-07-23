import { useState } from "react";
import axios from "axios";
import { _userapiurl } from "../../api.url";
import { useNavigate } from "react-router-dom";
function CPAdmin() {
 const navigate=useNavigate();
 const [output,setOutput]=useState();
 const [opwd,setoldPwd]=useState();
 const [npwd,setnewPwd]=useState();
 const [cpwd,setconfPwd]=useState();

 const handleData=()=>{
 
  axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opwd).then((response)=>{
    if(npwd===cpwd)
    {
      let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cpwd}};
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        alert("Password Changed, Please relogin your account...");
        navigate("/logout");
      }).catch((error)=>{
        console.log(error);
      });
    }
    else
    {
      setOutput("New & Confirm Password Mismatched...");
      setnewPwd("");
      setconfPwd("");
    }
   
  }).catch((error)=>{
    setOutput("Invalid Old Password...");
    setoldPwd("")
  });

 }
 
  return (
<>
    {/* about section */}
  
    <section class="about_section">
      <div class="container  ">
        <div class="row">
          <div class="col-md-12">
            <div class="detail-box">
              <div class="heading_container">
                <br/>
                <h1>Change Password Admin</h1>
                </div>
                <font color="red">{output}</font>
                <br/>
                <form action="/action_page.php">
                <div class="form-group">
                    <label for="opwd">Old Password:</label>
                    <input type="password" class="form-control" value={opwd} onChange={e => setoldPwd(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="npwd">New Password:</label>
                    <input type="password" class="form-control" value={npwd} onChange={e => setnewPwd(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="cpwd">Confirm Password:</label>
                    <input type="password" class="form-control" value={cpwd} onChange={e => setconfPwd(e.target.value)} />
                </div>
                <button onClick={handleData} type="button" class="btn btn-primary">Submit</button>
                <br/><br/>
            </form>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  
    {/* end about section */}

</>
  );
}

export default CPAdmin;

