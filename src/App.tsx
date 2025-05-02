import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";

import Login from "./auth/Login";
import Registration from "./auth/Registration";
import Profile from "./components/Profile";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Layout component to wrap dashboard-like pages
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="wrapper">
        <main id="main" className="main">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  // OUTDATED NI NGA ROUTING SOLUTIN REFER LNG SA REACT ROUTER WEBSITE
  return (
    <Router>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Protected / Layout Routes */}
        <Route
          path="/"
          element={
            <Layout>
              <Content />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        {/* Add more layout-wrapped routes here */}
      </Routes>
    </Router>
  );
}
