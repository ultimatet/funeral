import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const LogoutButton = () => {
  const { isAuthenticated, user, logout } = useAuth0();

  return (
    <div className="container">
        {isAuthenticated && user && (
          <div>
            <p className="welcome-text">Welcome, {user.name}</p>
          </div>
        )}
        <h1>Take quiz</h1>
        <p>Click the button below to start the quiz</p>
        <Link to="/quiz" className="link-btn">Start Quiz</Link>
        <h1>View Report</h1>
        <p>Click the button below to view your report</p> 
        <Link to="/report" className="link-btn">View Report</Link> {/* Fix this link later  */}
        <h1>Logout</h1>
        <button className="btn" onClick={() => logout({ returnTo: window.location.origin})}>
          Log Out
        </button>  
    </div>
  );
};

export default LogoutButton;