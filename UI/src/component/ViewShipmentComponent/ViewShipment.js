import { useState,useEffect } from "react";
import axios  from "axios";
import { _categoryapiurl } from "../../api.url";
import './ViewShipment.css';
import {Link} from 'react-router-dom';

function ViewShipment() {
 
  const [cList,setcategoryDetails]=useState([]);

  useEffect(()=>{
    axios.get(_categoryapiurl+"fetch?role=user").then((response)=>{
      
      setcategoryDetails(response.data);
    }).catch((error)=>{
      console.log(error);
    })
   });
 
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
                <h1>View Category !!!</h1>
                </center>
                <br/>
              </div>
              <center>
                <div id="category_main">
                  {
                    cList.map((row)=>(
                     
                     <div class="category_part">
                      <Link to={`/viewsubcategory/${row.catnm}`}>
                      <img src={`../assets/uploads/caticon/${row.caticonnm}`} height="100" width="150"/>
                      <b>{row.catnm}</b>
                      <br/>
                      </Link>
                     </div> 
                    
                    ))
                  }

                </div>
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

export default ViewShipment;

