import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/loginPage/LoginPage';
import Home from './pages/home/Home';
import AddNewCourt from './pages/newCourt/AddNewCourt';
import CourtDetails from './pages/CourtDetails/CourtDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
       <ToastContainer/>
        <Routes>

          <Route path='/' element ={<LoginPage/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/addNewCourt' element={<AddNewCourt/>}/>
            <Route path='/courtDetails/:id' element={<CourtDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;