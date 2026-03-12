import { NavLink, Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link className="logo-link" to="/">
        <span className="logo-text">Big Blog</span>
        <img src="/logo512.png" alt="logo" className="icon" />
        </Link>
      </h1>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/createpost">Create Post</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header