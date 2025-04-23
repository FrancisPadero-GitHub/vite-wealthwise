import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Content";
import Footer from "./components/Footer";

function App() {
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
      <div style={{ display: "flex", flex: 1}}>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
