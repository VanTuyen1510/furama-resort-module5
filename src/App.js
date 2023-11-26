import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/employee/EmployeeList';
import EmployeeCreate from './components/employee/EmployeeCreate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeUpdate from './components/employee/EmployeeUpdate';
// import React from "react"; 

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<EmployeeList/>}></Route>
    <Route path='employeeCreate' element={<EmployeeCreate/>}></Route>
    <Route path='employeeUpdate/:id' element={<EmployeeUpdate/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
