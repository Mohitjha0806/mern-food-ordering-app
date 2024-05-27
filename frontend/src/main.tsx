import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import Auth0ProviderWithNavigtor from "./auth/Auth0ProviderWithNavigtor.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithNavigtor>
        <AppRoutes />
      </Auth0ProviderWithNavigtor>
    </Router>
  </React.StrictMode>
);
