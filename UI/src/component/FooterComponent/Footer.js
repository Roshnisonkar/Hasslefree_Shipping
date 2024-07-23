import './Footer.css';
import { useState, useEffect } from 'react';
function Footer() {
   const [footerContent, setfooterContent] = useState();
   useEffect(() => {
      if (localStorage.getItem("token") != undefined) {
         setfooterContent(<>

            {/*  footer */}
            <footer>
               <div class="adminFooter">
                  
                  <p id='adminfooterp'>© 2019 All Rights Reserved by Shipping Store <a href="https://html.design/"></a></p>
               </div>
            </footer>
         </>);
      }
      else {
         setfooterContent(<>
            {/* clients */}
            <div class="clients">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="titlepage">
                           <h2>Shippment</h2>
                           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-8 offset-md-2">
                        <div class="testimo_ban_bg">
                           <div id="testimo" class="carousel slide testimo_ban" data-ride="carousel">
                              <ol class="carousel-indicators">
                                 <li data-target="#testimo" data-slide-to="0" class="active"></li>
                                 <li data-target="#testimo" data-slide-to="1"></li>
                                 <li data-target="#testimo" data-slide-to="2"></li>
                              </ol>
                              <div class="carousel-inner">
                                 <div class="carousel-item active">
                                    <div class="container parile0">
                                       <div class="carousel-caption relative2">
                                          <div class="row d_flex">
                                             <div class="col-md-12">
                                                <i><img class="qusright" src="assets/images/t.png" alt="#" /><img src="assets/images/24icon.png" alt="#" /><img class="qusleft" src="assets/images/t.png" alt="#" /></i>
                                                <div class="consect">
                                                   <span>Happy Shipping</span>
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="carousel-item">
                                    <div class="container parile0">
                                       <div class="carousel-caption relative2">
                                          <div class="row d_flex">
                                             <div class="col-md-12">
                                                <i><img class="qusright" src="assets/images/t.png" alt="#" /><img src="assets/images/24icon.png" alt="#" /><img class="qusleft" src="assets/images/t.png" alt="#" /></i>
                                                <div class="consect">
                                                   <span>Happy Shipping</span>
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="carousel-item">
                                    <div class="container parile0">
                                       <div class="carousel-caption relative2">
                                          <div class="row d_flex">
                                             <div class="col-md-12">
                                                <i><img class="qusright" src="assets/images/t.png" alt="#" /><img src="assets/images/24icon.png" alt="#" /><img class="qusleft" src="assets/images/t.png" alt="#" /></i>
                                                <div class="consect">
                                                   <span>Happy Shipping</span>
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <a class="carousel-control-prev" href="#testimo" role="button" data-slide="prev">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    <span class="sr-only">Previous</span>
                                 </a>
                                 <a class="carousel-control-next" href="#testimo" role="button" data-slide="next">
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    <span class="sr-only">Next</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* end clients */}
            {/*  footer */}
            <footer>
               <div class="footer">
                  <div class="container">
                     <div class="row">
                        <div class=" col-lg-3 col-md-6">
                           <h1 style={{ "color": "white" }}>Shipping</h1>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou
                           </p>
                        </div>
                        <div class="col-lg-2 offset-lg-1 col-md-6">
                           <h3>QUICK LINKS</h3>
                           <ul class="link_menu">
                              <li><a href="index.html">Home</a></li>
                              <li><a href="about.html"> About</a></li>
                              <li><a href="project.html">Projects</a></li>
                              <li><a href="staff.html">Staff</a></li>
                              <li><a href="contact.html">Contact Us</a></li>
                           </ul>
                        </div>
                        <div class=" col-lg-3 col-md-6">
                           <h3>INSTAGRAM FEEDS</h3>
                           <ul class="insta text_align_left">
                              <li><img src="assets/images/inst1.png" alt="#" /></li>
                              <li><img src="assets/images/inst2.png" alt="#" /></li>
                              <li><img src="assets/images/inst3.png" alt="#" /></li>
                              <li><img src="assets/images/inst4.png" alt="#" /></li>
                           </ul>
                        </div>
                        <div class=" col-lg-3 col-md-6 ">
                           <h3>SIGN UP TO OUR SHIPPMENTLETTER </h3>
                           <form class="bottom_form">
                              <input class="enter" placeholder="Enter your email" type="text" name="Enter your email" />
                              <button class="sub_btn">Sign Up</button>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div class="copyright">
                     <div class="container">
                        <div class="row">
                           <div class="col-md-8 offset-md-2">
                              <p>© 2019 All Rights Reserved by Shipping Store <a href="https://html.design/"></a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
         </>);
      }
   })
   return (
      <>{footerContent}</>
   );
}
export default Footer;