import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import ProtectedRoute from "./context/ProtectedRoute";

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

// Layout for authenticated/protected routes
function Layout() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="wrapper">
        <main id="main" className="main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true, // Default for "/"
        element: <Content />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      // You can add more nested layout routes here
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
