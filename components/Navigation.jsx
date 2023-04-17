import React from 'react'
import Link from 'next/link'
import Logo from "../img/profile-user.png"
import Service from "../img/customer-service.png";


function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container">
    <Link className="navbar-brand" href="/"><span className='sp'>.......</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        {/* <span className="navbar-toggler-icon"></span> */}
      
      </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav ms-auto">
        {/* <li className="nav-item">
          <Link className="li nav-link active" href="/">Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="li nav-link" href="/services"><span className='service'></span> Service</Link>
        </li>
        <li className="nav-item">
          <Link className="li nav-link" href="/about">About</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </>
  )
}

export default Navigation