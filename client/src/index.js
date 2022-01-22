import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AuthProvider } from "./hooks/useAuth";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <StrictMode>
        <Router>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Router>
    </StrictMode>
, document.getElementById("root"));
