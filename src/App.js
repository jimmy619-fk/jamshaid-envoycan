import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import 'flowbite'
import Register from './register';
import Dashbaord from './Dashbaord';


function App() {
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
