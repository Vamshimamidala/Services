import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminlogin from './AdminDetails/Adminlogin'
import Adimregister from './AdminDetails/Adimresigter'
import Admindashboard from './AdminDetails/Admindashboard'
import Home from './Innerpages/Home'
import Addcaterogy from './AdminDetails/Addcaterogy'
import EditDeletecaterogy from './AdminDetails/EditDeletecaterogy'
import Addoffer from './AdminDetails/Addoffer'
import Editoffer from './AdminDetails/Editoffer'
import Subcaterogy from './AdminDetails/Subcaterogy'
import Editsubcaterogy from './AdminDetails/Editsubcaterogy'
import Addservice from './AdminDetails/Addservice'
import Editservice from './AdminDetails/Editservice'
import Cat from './Innerpages/Subcat'
import Subcat from './Innerpages/Service'
import Service from './Innerpages/Service'
import Subcatt from './Innerpages/Subcat'
import Feedback from './AdminDetails/Feedback'
import Feedbackform from './Innerpages/Feedbackform'
import About from './Innerpages/About'
import Servicefeed from './AdminDetails/Servicefeed'
import Bookservices from './Innerpages/Bookservices'
import Login from './Innerpages/Login'
 

const Routing = () => {
  return (
    <>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/feedbackform' element={<Feedbackform/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/bookservice' element={<Bookservices/>}/>
       <Route path='/catdetails/:name' element={<Subcatt/>}/>
       <Route path='/servicedetails/:subname' element={<Service/>}/>
         <Route path='/admin' element={<Adminlogin/>}/>
         <Route path='/admindashboard' element={<Admindashboard/>}>
         <Route path='adminregister' element={<Adimregister/>}/>
         <Route path='addcaterogy' element={<Addcaterogy/>}/>
         <Route path='editcaterogy' element={<EditDeletecaterogy/>}/>
         <Route path='addoffer' element={<Addoffer/>}/>
         <Route path='editoffer' element={<Editoffer/>}/>
         <Route path='subcat' element={<Subcaterogy/>}/>
         <Route path='editsub' element={<Editsubcaterogy/>}/>
         <Route path='addservice' element={<Addservice/>}/>
         <Route path='editservice' element={<Editservice/>}/>
         <Route path='feedback' element={<Feedback/>}/>
         <Route path='servicefeed' element={<Servicefeed/>}/>
         </Route>
       </Routes>
    </>
  )
}

export default Routing
