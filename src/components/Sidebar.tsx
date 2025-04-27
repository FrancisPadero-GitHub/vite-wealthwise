function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="index.php?page=dashboard">
            <i className="bi bi-house" />
            <span>Home</span>
          </a>
        </li>
        {/* End Dashboard Nav */}

        {/* End of to do list Nav */}
        <li className="nav-item">
          <a className="nav-link" href="index.php?page=profile">
            <i className="bi bi-person" />
            <span>Profile</span>
          </a>
        </li>
        {/* End Profile Nav */}
      </ul>
    </aside>
  );
}

export default Sidebar;
