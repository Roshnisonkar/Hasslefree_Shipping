import './ViewBid.css';
import { useState , useEffect } from 'react';
import {  _shipmentapiurl , _bidapiurl } from '../../api.url.js';
import axios from 'axios';
import { useParams  } from 'react-router-dom';

function ViewBid() {
  
  const params = useParams();
  const [ output , setOutput ] = useState(true);
  const [ status , setStatus ] = useState(true);
  const [ sList , setShipmentDetails ] = useState([]);
  const [ ncost , setNewCost ] = useState();
  const [ basecost , setBaseCost ] = useState();

  useEffect(()=>{
    
    axios.get(_shipmentapiurl+"fetch?_id="+params._id).then((response)=>{
     setShipmentDetails(response.data[0]);
     if(Date.now()-response.data[0].info>172800000)
      setStatus(false);    
    }).catch((err)=>{
     console.log(err);
    });
    
    axios.get(_bidapiurl+"fetch?pid="+params._id).then((response)=>{
      var min_basecost=response.data[0].bidcost;
      for(let row of response.data) 
      {
       if(min_basecost>row.bidcost)
        min_basecost=row.bidcost; 
      }
      setBaseCost(min_basecost);
     }).catch((err)=>{
      setBaseCost(sList.basecost);
     });

  },[]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    var bidDetails={"pid":sList._id,"uid":localStorage.getItem("email"),"bidcost":parseInt(ncost)};
    axios.post(_bidapiurl+"save",bidDetails).then((response)=>{
      setOutput("Bid implemented successfully....");
      setNewCost("");
    }).catch((error)=>{
      setOutput("Unable to bid , please try again....");
      setNewCost("");
    });
  };


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
                { status===false && <h1>Bid completed </h1> }
                { status===true && 
                <>
                <font color="blue">{output}</font>
                <h1> Bid To Get Shipment</h1> 
                <br/>
                <h2>Shipment ID : { sList._id }</h2>
                <br/>
                <h2>Estimated cost for shipment : &#8377;{ sList.basecost }</h2>
                <br/>
                <h2>Current cost for shipment : &#8377;{ basecost }</h2>
                <br/>
                <form>
                <h2>Your cost for shipment : <input type='text' value={ncost} onChange={ e => setNewCost(e.target.value) }  /></h2>
                <br/>
                <button onClick={handleSubmit} >Save Quates</button>
                </form>
                </>  
                }
                <br/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <br/><br/>
  
    {/* end about section */}

</>
  );
}

export default ViewBid;

