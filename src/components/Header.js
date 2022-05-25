import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
      <Link className="navbar-brand" to='/'>SCHOOL MANAGEMENT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link active" to="/">ADD STUDENT</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/addfac">ADD FACULTY</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/sstud">SEARCH STUDENT</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/sfac">SEARCH FACULTY</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/vstud">VIEW STUDENT</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/vfac">VIEW FACULTY</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header