import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <strong>🏃 OctoFit Tracker</strong>
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <Routes>
            <Route path="/" element={
              <div className="text-center mt-5">
                <h1>🏃 Welcome to OctoFit Tracker</h1>
                <p className="lead">Track your fitness journey and compete with your team!</p>
                <hr className="my-4" />
                <div className="row mt-5">
                  <div className="col-md-4 mb-3">
                    <div className="card border-primary">
                      <div className="card-body">
                        <h5 className="card-title">📊 Track Activities</h5>
                        <p className="card-text">Log your workouts and monitor your progress</p>
                        <Link to="/activities" className="btn btn-primary">View Activities</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card border-success">
                      <div className="card-body">
                        <h5 className="card-title">🏆 Leaderboard</h5>
                        <p className="card-text">See how you rank against your teammates</p>
                        <Link to="/leaderboard" className="btn btn-success">View Rankings</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card border-info">
                      <div className="card-body">
                        <h5 className="card-title">💪 Workouts</h5>
                        <p className="card-text">Discover personalized workout suggestions</p>
                        <Link to="/workouts" className="btn btn-info">Get Workouts</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 mb-3">
                    <Link to="/teams" className="btn btn-outline-primary btn-lg w-100">
                      👥 Join a Team
                    </Link>
                  </div>
                  <div className="col-md-6 mb-3">
                    <Link to="/users" className="btn btn-outline-secondary btn-lg w-100">
                      👤 View Users
                    </Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
