import { useState,useEffect } from "react";
import axios  from "axios";
import { _subcategoryapiurl } from "../../api.url";
import './ViewSubCategory.css';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function ViewSubCategory() {
  const [scList,setsubcategoryDetails]=useState([]);
  const params = useParams();

  useEffect(()=>{
    axios.get(_subcategoryapiurl+"fetch?catnm="+params.catnm).then((response)=>{
      setsubcategoryDetails(response.data);
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
                <h1>View SubCategory !!!{params.catnm}</h1>
                </center>
                <br/>
              </div>
              <center>
                <div id="category_main">
                  {
                    scList.map((row)=>(
                    <Link to={`/vsuser/${row.subcatnm}`}>
                     <div class="category_part">
                      <img src={`../assets/uploads/subcaticon/${row.subcaticonnm}`} height="100" width="150"/>
                      <b>{row.subcatnm}</b>
                      <br/>
                     </div>
                     </Link> 
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

export default ViewSubCategory;

