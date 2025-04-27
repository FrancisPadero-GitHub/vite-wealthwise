import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Content";
import Footer from "./components/Footer";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


// This will be later on referenced to react router keep that in mind
function Layout({ children }: { children: React.ReactNode }) {
  // sample on how to nest main components like topbar sidebar footer etc etc
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Topbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />

        {/* Page-specific content */}
        <main style={{ padding: "1rem", flex: 1 }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}
