import React from "react";
import './About.css';
function About(){
    return(
        <>
        {/* about */}
       <div class="about">
         <div class="container-fluid">
            <div class="row d_flex">
               <div class="col-md-7">
                  <div class="titlepage">
                     <h2>Shipping Services</h2>
                     <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</span>
                     <a class="read_more" href="Javascript:void(0)"> Read More</a>
                  </div>
               </div>
               <div class="col-md-5">
                  <div class="about_img">
                     <figure><img src="assets/images/images.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* end about */}
        
        
        </>
    );
}
export default About;