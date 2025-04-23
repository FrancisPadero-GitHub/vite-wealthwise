function Sidebar() {
  return (
    <aside
      style={{
        width: "200px",
        background: "#eee",
        padding: "1rem",
        height: "100%",
      }}
    >
      <ul>
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
