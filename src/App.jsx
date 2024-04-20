import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from './view/login/Login';
import Register from './view/register/Register';
import Chat from './view/chat/Chat';
import './App.css'

function App() {
 

  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} >
      <Route path='/register' element={<Register />} />
      <Route path='/chat' element={<Chat />} />
      </Route>
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
