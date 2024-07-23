import React from 'react';
import './App.css';
import Header from './component/HeaderComponent/Header';
import { Routes,Route } from 'react-router-dom';
import Home from './component/HomeComponent/Home';
import About from './component/AboutComponent/About';
import Staff from './component/StaffComponent/Staff';
import Project from './component/ProjectComponent/Project';
import Contact from './component/ContactComponent/Contact';
import Footer from './component/FooterComponent/Footer';
import Login from './component/LoginComponent/Login';
import Logout from './component/LogoutComponent/logout';
import User from './component/UserComponent/User';
import Viewshipment from './component/ViewShipmentComponent/ViewShipment';
import ViewSubCategory from './component/ViewSubCategoryComponent/ViewSubCategory';
import Admin from './component/AdminComponent/Admin';
import Addcategory from './component/AddcategoryComponent/Addcategory';
import AddSubCategory from './component/AddSubcategoryComponent/AddSubcategory';
import Addshipment from './component/AddshipmentComponent/Addshipment';
import CPAdmin from './component/CPAdminComponent/CPAdmin';
import Manageusers from './component/ManageusersComponent/Manageusers';
import EPAdmin from './component/EPAdminComponent/EPAdmin';
import VsUser from './component/VsUserComponent/VsUser';
import ViewBid from './component/ViewBidComponent/ViewBid';
 
function App(){
  return (
    <>
   <body class="main-layout">
       <Header/>
       <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Staff' element={<Staff/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Logout' element={<Logout/>}></Route>
        <Route path='/User' element={<User/>}></Route>
        <Route path='/Viewshipment' element={<Viewshipment/>}></Route>
        <Route path='/VsUser/:subcatnm' element={<VsUser/>}></Route>
        <Route path='/ViewBid/:_id' element={<ViewBid/>}></Route>
        <Route path='/Viewsubcategory/:catnm' element={<ViewSubCategory/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route> 
        <Route path='/Addcategory' element={<Addcategory/>}></Route> 
        <Route path='/AddSubcategory' element={<AddSubCategory/>}></Route> 
        <Route path='/Addshipment' element={<Addshipment/>}></Route> 
        <Route path='/CPAdmin' element={<CPAdmin/>}></Route>
        <Route path='/EPAdmin' element={<EPAdmin/>}></Route>
        <Route path='/Manageusers' element={<Manageusers/>}></Route>
       </Routes>
       <Footer/>
    </body>
    </>
  );
}
export default App;
