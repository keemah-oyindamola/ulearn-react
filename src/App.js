import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Signup from './Signup';
import Login from './Login';
import Dashbd from './Dashbd';
import Adminsignup from './Adminsignup';
import Adminlogin from './Adminlogin';
import Admindashbd from './Admindashbd';
import Landingpg from './Landingpg';
import Dashboard from './Dashboard';
import Coursedetails from './Coursedetails';

function App() {
  // const endpoint = ("http://localhost:5000")
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Landingpg/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashbd' element={<Dashbd/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/coursedetails/:id' element={<Coursedetails/>}/>
        <Route path='/adminsignup' element = {<Adminsignup/>}/>
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/admindashbd' element={<Admindashbd/>}/>
      </Routes>
    </>
  );
}

export default App;

