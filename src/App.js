import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import 'flowbite'
import Register from './register';
import Dashbaord from './Dashbaord';
import { db } from './firebase';
import React, { useEffect, useState } from 'react';


function App() {
  const [pageVisits, setPageVisits] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('pages').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        visitors: doc.data().visitors,
      }));
      setPageVisits(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashbaord" element={<Dashbaord />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
