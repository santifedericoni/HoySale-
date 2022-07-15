import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Fragment>
    </Router>
    
  );
}
export default App
