import {useState} from 'react'
import './Contact.css';
import axios from 'axios';
import { _userapiurl } from '../../api.url';
function Contact() {
   const [name,setName]=useState();
   const [email,setEmail]=useState();
   const [pwd,setPwd]=useState();
   const [mobile,setMobile]=useState();
   const [address,setAddress]=useState();
   const [city,setCity]=useState();
   const [gender,setGender]=useState();
   const [user,setUsers]=useState();

   const handleData=()=>{
    var userDetails={"name":name,"email":email,"password":pwd,"mobile":mobile,"address":address,"city":city,"gender":gender};
    axios.post(_userapiurl+"save",userDetails).then((response)=>{
       
        setUsers("Registered Successfully...");
        setName("");
        setEmail("");
        setPwd("");
        setCity("");
        setAddress("");
        setGender("");
        setMobile("");
    }).catch((error)=>{
        alert("Registration Failed...");
    });
};
    return (
        <>
            <h1>Contact Here!!!</h1>
            {user}
            <br/>
            <form action="/action_page.php">
            <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" value={pwd} onChange={e=>setPwd(e.target.value)}/>
            </div>
            <div class="form-group">
                    <label for="mobile">Mobile:</label>
                    <input type="text" class="form-control" value={mobile}
                    onChange={e=>setMobile(e.target.value)}/>
            </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <textarea rows="5" class="form-control" value={address} onChange={e=>setAddress(e.target.value)} ></textarea>
                </div>
                <div class="form-group">
                    <label for="city">City:</label>
                    <select class="form-control" value={city} onChange={e=>setCity(e.target.value)}>
                        <option>Select City</option>
                        <option>Indore</option>
                        <option>Ujjain</option>
                        <option>Dewas</option>
                        <option>Nagda</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="gender">Gender</label>
                    &nbsp;&nbsp;
                 Male<input type='radio'name='gender' value="male" onChange={e=>setGender(e.target.value)}/>
                 &nbsp;&nbsp;
                 Female<input type='radio'name='gender' value="female" onChange={e=>setGender(e.target.value)} />                  
                </div>
                <button onClick={handleData} type="button" class="btn btn-primary">Submit</button>
                <br/>
            </form>
        </>
    );
}
export default Contact;