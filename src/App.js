import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { HashRouter as Router, Route } from "react-router-dom";
import './styles/common.scss';
import AppointmentBooking from './Components/AppointmentBooking/AppointmentBooking';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route path="/" component={AppointmentBooking}/>
      </div>
    </Router>
  );
}

export default App;
