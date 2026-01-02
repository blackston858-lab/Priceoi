 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Nav from './Components/Nav'
 
 const App = () => {
   return (
     <div>
       <BrowserRouter>
       <Routes>


        <Route path='/' element={<Home/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path='/Nav' element={<Nav/>} />
       </Routes>
       
       </BrowserRouter>
     </div>
   )
 }
 
 export default App
 