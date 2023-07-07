import React, { useState, Component } from 'react'
import './App.css'
import Employees from './components/Employee/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './layouts/ProtectedRoute'
import { AuthProvider } from './context/AuthProvider'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Home from './pages/Home/Home';


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
       

          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />} />
           
          </Route>

          <Route path='/home' element={<ProtectedRoute />}>
            <Route index element ={<Home />} /> 
          </Route>
        

          <Route path='/empleados' element={<ProtectedRoute />}>
             <Route index element={<Employees />} />
            {/* <Route path='crear-producto' element={<NewProduct />} />  */}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>

    
  )
}

export default App