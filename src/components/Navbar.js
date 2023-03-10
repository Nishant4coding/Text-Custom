import React from 'react'
// import { a } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#"><b>{props.title}</b></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <a className="nav-a" href="#">Home <span className="sr-only">(current)</span></a>
      </li> */}
      {/* <li className="nav-item active">
        <a className="nav-a" href="#">a</a>
      </li> */}
      
      {/* <li className="nav-item active">
        <a className="nav-a disabled" href="/about">{props.aboutText}</a>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch mx-3  text-${props.toggleMode==='dark'? 'light' : 'dark'}`} >
      {/* <p>Change mode</p> */}
        <input className='form-check-input' onClick={props.toggleMode} type="checkbox" id='flexSwitchCheckDefault' />
        <label className='form-check-label' htmlFor='flexSwitchCheckDefault' >
            
        </label>

    </div>
  </div>
</nav>
    </div>
  )
//   Navbar.PropTypes={
//     title: PropTypes.string,
//     aboutText: PropTypes.string,
//   };
}

