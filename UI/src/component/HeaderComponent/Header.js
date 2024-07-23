import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Auth from '../../component/AuthComponent/Auth';
import './Header.css';
function Header(){
   const [headerContent , setheaderContent] = useState();
    useEffect(()=>{
      if(localStorage.getItem("role")=="admin")
      {
         setheaderContent(<>
    
            {/* loader  */}
            <div class="loader_bg">
                {/*<div class="loader"><img src="assets/images/loading.gif" alt="#"/></div>*/}
             </div>
             {/* end loader */}
             {/* header */}
             <header class="full_bg">
                {/* header inner */}
                <div class="header">
                   <div class="header_top">
                      <div class="container">
                         <div class="row">
                            <div class="col-md-3">
                             <h1 id='Admin'>Welcome Admin</h1>
                            </div>
                            <div class="col-md-6">
                               <ul class="social_icon_top text_align_center  ">
                                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                  <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                               </ul>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="container">
                      <div class="row">
                         <div class="col-md-12">
                            <div class="header_bottom">
                               <div class="row">
                                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                     <div class="full">
                                        <div class="center-desk">
                                        </div>
                                     </div>
                                  </div>
                                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarsExample04">
                                           <ul class="navbar-nav mr-auto">
                                              <li class="nav-item active">
                                              <Link to="/admin"><a class="nav-link">Admin Home</a></Link>
                                              </li>
                                              <li class="nav-item active">
                                              <Link to="/addcategory"><a class="nav-link">Addcategory</a></Link>
                                              </li>
                                              <li class="nav-item active">
                                              <Link to="/addsubcategory"><a class="nav-link">AddsubCategory</a></Link>
                                              </li>
                                              <li class="nav-item active">
                                              <Link to="/addshipment"><a class="nav-link">addshipment</a></Link>
                                              </li>
                                              <li class="nav-item">
                                                 <Link to="/manageusers"><a class="nav-link">Manage Users</a></Link>
                                              </li>
                                              <li class="nav-item">
                                              <Link to="/cpadmin"><a class="nav-link">Change Password</a></Link>
                                              </li>
                                              <li class="nav-item">
                                              <Link to="/epadmin"><a class="nav-link">Edit Profile</a></Link>
                                              </li>
                                              {/*<li class="nav-item">
                                              <Link to="/contact"><a class="nav-link">Contact</a></Link>
                                              </li>*/}
                                              <li class="nav-item">
                                              <Link to="/Logout"><a class="nav-link">Logout</a></Link>
                                              </li>
                                           </ul>
                                        </div>
                                        
                                     </nav>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                {/* end header inner */}
                {/* end header */}
                {/* banner */}
                <section class="banner_main">
                   <div id="myCarousel" class="carousel slide banner" data-ride="carousel">
                      <ol class="carousel-indicators">
                         <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                         <li data-target="#myCarousel" data-slide-to="1"></li>
                         <li data-target="#myCarousel" data-slide-to="2"></li>
                      </ol>
                      <div class="carousel-inner">
                         <div class="carousel-item active">
                            <div class="container">
                               <div class="carousel-caption  banner_po">
                                  <div class="row">
                                     <div class="col-md-9">
                                        <div class="build_box">
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div class="carousel-item">
                            <div class="container">
                               <div class="carousel-caption banner_po">
                                  <div class="row">
                                     <div class="col-md-9">
                                        <div class="build_box">
                                          
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div class="carousel-item">
                            <div class="container">
                               <div class="carousel-caption banner_po">
                                  <div class="row">
                                     <div class="col-md-9">
                                        <div class="build_box">
                                           
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      
                   </div>
                </section>
             </header>
             {/* end banner */}
             
           </>);
     
      }
      else if(localStorage.getItem("role")=="user")
      {
         setheaderContent(<>
    
            {/* loader  */}
            <div class="loader_bg">
                {/*<div class="loader"><img src="assets/images/loading.gif" alt="#"/></div>*/}
             </div>
             {/* end loader */}
             {/* header */}
             <header class="full_bg">
                {/* header inner */}
                <div class="header">
                   <div class="header_top">
                      <div class="container">
                         <div class="row">
                            <div class="col-md-3">
                             <h1 id='User'>Welcome User</h1>
                            </div>
                            <div class="col-md-6">
                               <ul class="social_icon_top text_align_center  ">
                                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                  <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                               </ul>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="container">
                      <div class="row">
                         <div class="col-md-12">
                            <div class="header_bottom">
                               <div class="row">
                                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                     <div class="full">
                                        <div class="center-desk">
                                          <h1>User Panel...</h1>
                                       
                                        </div>
                                     </div>
                                  </div>
                                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarsExample04">
                                           <ul class="navbar-nav mr-auto">
                                              <li class="nav-item active">
                                              <Link to="/user"><a class="nav-link">User Home</a></Link>
                                              </li>
                                              <li class="nav-item">
                                                 <Link to="/viewshipment"><a class="nav-link">Viewshipment</a></Link>
                                              </li>
                                              {/*
                                              <li class="nav-item">
                                              <Link to="/project"><a class="nav-link">Project</a></Link>
                                              </li>
                                              <li class="nav-item">
                                              <Link to="/staff"><a class="nav-link">Staff</a></Link>
                                              </li>
                                              <li class="nav-item">
                                              <Link to="/contact"><a class="nav-link">Contact</a></Link>
                                              </li>*/}
                                              <li class="nav-item">
                                              <Link to="/Logout"><a class="nav-link">Logout</a></Link>
                                              </li>
                                           </ul>
                                        </div>
                                        
                                     </nav>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                {/* end header inner */}
                {/* end header */}
                {/* banner */}
                <section class="banner_main">
                   <div id="myCarousel" class="carousel slide banner" data-ride="carousel">
                      <ol class="carousel-indicators">
                         <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                         <li data-target="#myCarousel" data-slide-to="1"></li>
                         <li data-target="#myCarousel" data-slide-to="2"></li>
                      </ol>
                      <div class="carousel-inner">
                         <div class="carousel-item active">
                            <div class="container">
                               <div class="carousel-caption  banner_po">
                                  <div class="row">
                                     <div class="col-md-9">
                                        <div class="build_box">
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div class="carousel-item">
                            <div class="container">
                               <div class="carousel-caption banner_po">
                                  <div class="row">
                                     <div class="col-md-9">
                                        <div class="build_box">
                                          
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div class="carousel-item">
                            <div class="container">
                               <div class="carousel-caption banner_po">
                                  <div class="row">
                                     <div class="col-md-9">
                                        <div class="build_box">
                                           
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      
                   </div>
                </section>
             </header>
             {/* end banner */}
             
           </>);
     
      }
      else
      {
         setheaderContent(<>
    
            {/* loader  */}
            <div class="loader_bg">
                {/*<div class="loader"><img src="assets/images/loading.gif" alt="#"/></div>*/}
             </div>
             {/* end loader */}
             {/* header */}
             <header class="full_bg">
                {/* header inner */}
                <div class="header">
                   <div class="header_top">
                      <div class="container">
                         <div class="row">
                            <div class="col-md-3">
                               <ul class="contat_infoma">
                                  <li><i class="fa fa-phone" aria-hidden="true"></i> Call : XXX XXX XXXX</li>
                               </ul>
                            </div>
                            <div class="col-md-6">
                               <ul class="social_icon_top text_align_center  ">
                                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                  <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                               </ul>
                            </div>
                            <div class="col-md-3">
                               <ul class="contat_infoma text_align_right">
                                  <li><a href="Javascript:void(0)"> <i class="fa fa-phone" aria-hidden="true"></i> shipping@gmail.com</a></li>
                               </ul>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="container">
                      <div class="row">
                         <div class="col-md-12">
                            <div class="header_bottom">
                               <div class="row">
                                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                     <div class="full">
                                        <div class="center-desk">
                                           <div class="logo">
                                              <a href="index.html">Shipping Store</a>
                                           </div>
                                        </div>
                                     </div>
                                  </div>
                                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarsExample04">
                                           <ul class="navbar-nav mr-auto">
                                              <li class="nav-item active">
                                              <Link to="/"><a class="nav-link">Home</a></Link>
                                              </li>
                                              <li class="nav-item">
                                                 <Link to="/about"><a class="nav-link">About</a></Link>
                                              </li>
                                              <li class="nav-item">
                                              <Link to="/project"><a class="nav-link">Project</a></Link>
                                              </li>
                                              <li class="nav-item">
                                              <Link to="/staff"><a class="nav-link">Staff</a></Link>
                                              </li>
                                              <li class="nav-item">
                                              <Link to="/contact"><a class="nav-link">Contact</a></Link>
                                              </li>
                                              <li class="nav-item">
                                              <Link to="/Login"><a class="nav-link">Login</a></Link>
                                              </li>
                                           </ul>
                                        </div>
                                        
                                     </nav>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                {/* end header inner */}
                {/* end header */}
                {/* banner */}
                <section class="banner_main">
                   <div id="myCarousel" class="carousel slide banner" data-ride="carousel">
                      <ol class="carousel-indicators">
                         <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                         <li data-target="#myCarousel" data-slide-to="1"></li>
                         <li data-target="#myCarousel" data-slide-to="2"></li>
                      </ol>
                      <div class="carousel-inner">
                         <div class="carousel-item active">
                            <div class="container">
                               <div class="carousel-caption  banner_po">
                                  <div class="row">
                                     <div class="col-md-9">
                                        <div class="build_box">
                                           <h1>Shipping Store</h1>
                                           <p>There are many variations of passages of Lorem Ipsum available, but the majority<br/> There are many variations of passages of</p>
                                           <a class="read_more conatct_btn" href="contact.html" role="button">Contact Us</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div class="carousel-item">
                            <div class="container">
                               <div class="carousel-caption banner_po">
                                  <div class="row">
                                     <div class="col-md-9">
                                        <div class="build_box">
                                           <h1>Shipping Store</h1>
                                           <p>There are many variations of passages of Lorem Ipsum available, but the majority<br/> There are many variations of passages of</p>
                                           <a class="read_more conatct_btn" href="contact.html" role="button">Contact Us</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div class="carousel-item">
                            <div class="container">
                               <div class="carousel-caption banner_po">
                                  <div class="row">
                                     <div class="col-md-9">
                                        <div class="build_box">
                                           <h1>Shipping Store</h1>
                                           <p>There are many variations of passages of Lorem Ipsum available, but the majority<br/> There are many variations of passages of</p>
                                           <a class="read_more conatct_btn" href="contact.html" role="button">Contact Us</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                      <i class="fa fa-angle-left" aria-hidden="true"></i>
                      <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                      <span class="sr-only">Next</span>
                      </a>
                   </div>
                </section>
             </header>
             {/* end banner */}
              {/* three_box */}
              <div class="three_box">
                <div class="container">
                   <div class="row">
                      <div class="col-md-3">
                         <div id="text_hover" class="const text_align_center">
                            <i><img src="assets/images/delivery.jfif" alt="#"/></i>
                            <span>shipping services</span>
                         </div>
                      </div>
                      <div class="col-md-3">
                         <div id="text_hover" class="const text_align_center">
                            <i><img src="assets/images/delivery.jfif" alt="#"/></i>
                            <span>shipping services</span>
                         </div>
                      </div>
                      <div class="col-md-3">
                         <div id="text_hover" class="const text_align_center">
                            <i><img src="assets/images/delivery.jfif" alt="#"/></i>
                            <span>shipping services</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             {/* end three_box */}
       
       
           </>);
      }
   });
  return(
    <>
    <Auth/>
    { headerContent }
    </>
  );

}
export default Header;