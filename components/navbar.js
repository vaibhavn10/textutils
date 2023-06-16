import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  const bor = {
    borderBottom: (props.mode==="light")?"1px solid grey":"1px solid whitesmoke"
  }
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={bor}>
  <div className="container-fluid">
  {/* <Link className="navbar-brand" id="title" to="#">{props.title}</Link> */}
  <a className="navbar-brand" id="title" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
  {/* <Link className="nav-link active" to="#">Home</Link> */}
  <a className="nav-link active" href="#">Home</a>
  </li>
  <li className="nav-item">
  {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
  <a className="nav-link" href="/about">{props.about}</a>
  </li>
  </ul> 
  
  <form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-primary" type="submit">Search</button>
  </form>
  
  <div className={`form-check form-switch text-${(props.mode==="light")?"dark":"light"} mx-2`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
  </div>
  
  </div>
  </div> 
</nav>
        </>

    )
}

Navbar.prototype = {title : PropTypes.string,
                      about : PropTypes.string}
