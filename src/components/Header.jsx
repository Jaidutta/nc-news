import logo from "../assets/brand-logo.png"
import { NavLink, Link } from "react-router"
function Header({setReload}) {
  return (
    <header>
      <nav>
        <div className="image-container">
          <Link to="/"><img src={logo} alt="Brand Logo" className="brand-logo" onClick={() => setReload(prev => prev + 1)}/></Link>
        </div>
        <h1 className="nc-news-title">NC NEWS</h1>
        <ul>
          <li>
          <NavLink to="/topics">Topics</NavLink>
          </li>
          <li>
          <NavLink to="/articles">Articles</NavLink>
          </li>
          <li>
          <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
