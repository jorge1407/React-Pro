import React from 'react';
import{BrowserRouter as Router, Router} from 'react-router-dom'

import Navbar from './components/NavBar'
import Launcher from './components/Launcher'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Router exact path="/" component={Launcher}/>
        <div className="container">
          <Router exact path="/register" component={Register}/>
          <Router exact path="/login" component={Login}/>
          <Router exact path="/profile" component={Profile}/>
        </div>
      </div>

    </Router>
  );
}

export default App;
