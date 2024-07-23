import { useState,useEffect } from "react";
import axios  from "axios";
import { _shipmentapiurl } from "../../api.url";
import './VsUser.css';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function VsUser() {
  const [sList,setshipmentDetails]=useState([]);
  const params = useParams();

  useEffect(()=>{
    axios.get(_shipmentapiurl+"fetch?subcatnm="+params.subcatnm).then((response)=>{
      setshipmentDetails(response.data);
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
                <h1>View SubCategory !!!{params.subcatnm}</h1>
                </center>
                <br/>
              </div>
              <center>
                {
                  sList.map((row)=>(
                    <>
              <table border="2px" height="150px" width="600px">
                <tr>
                  <td width="35%" rowSpan="3" >
                  <center>
                    <img src={`../assets/uploads/shipmenticon/${row.
                    shipmenticonnm}`}  height="100" width="150"/>
                  </center>
                  </td>
                  
                  <td><b>Title:{row.title}</b></td>
                </tr>
                <tr>
                  <td><b>Description:{row.description}</b></td>
                </tr>
                <tr>
                  <td><b>Price:{row.basecost}</b>
                  <br/>
                <Link to={`/viewbid/${row._id}`} class="bid">View Bid</Link>
                  </td>
                </tr>
                
              </table>
              
              </>
              ))
            }

                <div id="category_main">
                {/* {
                    sList.map((row)=>(
                    <Link to={`/vsuser/${row.subcatnm}`}>
                     <div class="category_part">
                      <img src={`../assets/uploads/subcaticon/${row.subcaticonnm}`} height="100" width="150"/>
                      <b>{row.subcatnm}</b>
                      <br/>
                     </div>
                     </Link> 
                    ))
                  }*/}

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

export default VsUser;

