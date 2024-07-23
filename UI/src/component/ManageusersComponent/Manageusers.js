import { useState,useEffect } from "react";
import axios  from "axios";
import { _userapiurl } from "../../api.url";
import {useNavigate} from 'react-router-dom';
import {CSVLink} from 'react-csv';

function Manageusers() {

 
 const navigate = useNavigate();
 const [userDetails,setuserDetails]=useState([]);

 useEffect(()=>{
  axios.get(_userapiurl+"fetch?role=user").then((response)=>{
    setuserDetails(response.data);
  }).catch((error)=>{
    console.log(error);
  })
 });

 const changestatus=(_id,status)=>{
  if(status==="verify")
  {
    let updateDetail={"condition_obj":{"_id":_id},"content_obj":{"status":1}};
    axios.patch(_userapiurl+"update",updateDetail).then((response)=>{
      navigate("/manageusers");
    }).catch((error)=>{
      console.log(error);
    })
  }
  else if(status==="block")
  {
    let updateDetail={"condition_obj":{"_id":_id},"content_obj":{"status":0}};
    console.log(updateDetail);
    axios.patch(_userapiurl+"update",updateDetail).then((response)=>{
      navigate("/manageusers");
    }).catch((error)=>{
      console.log(error);
    })
  }
  else
  {
    let deleteDetail={"data":{"_id":_id}};
    console.log(deleteDetail);
    axios.delete(_userapiurl+"delete",deleteDetail).then((response)=>{
      navigate("/manageusers");
    }).catch((error)=>{
      console.log(error);
    })
  }
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
                <center>
                <h1>View & Manage User Details</h1>
                </center>
                {/* Export Button Start */}
                <button>
               <CSVLink className="downloadbtn" filename="my-file.csv" data={userDetails}>
               Export to CSV
               </CSVLink>
               </button>
               {/* Export Button End */}
              </div>
              <br/>
              <center>
              <table class="table table-bordered">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>Info</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              {
              userDetails.map((key)=>(
                <tr>
                  <td>{key._id}</td>
                  <td>{key.name}</td>
                  <td>{key.email}</td>
                  <td>{key.address}</td>
                  <td>{key.city}</td>
                  <td>{key.gender}</td>
                  <td>{key.mobile}</td>
                  <td>{key.info}</td>
                  <td>
                    {key.status===1 && <font color="green">Verified</font>}
                    {key.status===0 && <font color="red">Not Verified</font>}
                  </td>
                  <td>
                    {key.status===1 && <font color="blue" onClick={()=>{ changestatus(key._id,"block")}}>Change Status</font>
                    }
                    {
                      key.status===0 && <font color="blue" onClick={()=>{
                      changestatus(key._id,"verify")}}>Change Status</font>
                    }
                    <br/>
                    <font onClick={()=>{changestatus(key._id,"delete")}}
                    color="red">Delete</font>
                  </td>
                  
                  
                </tr>
              ))
              }
              </table>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    {/* end about section */}

</>
  );
}

export default Manageusers;

