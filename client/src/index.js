import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ModalProvider } from "./context/modalContext";
import { AuthProvider } from "./hooks/useAuth";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <StrictMode>
        <Router>
            <ModalProvider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </ModalProvider>
        </Router>
    </StrictMode>
, document.getElementById("root"));
