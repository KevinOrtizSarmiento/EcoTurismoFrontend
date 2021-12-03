import React from "react";
import {Link, NavLink} from "react-router-dom";
import "../Reserva.css"

const NavBar = () =>{
  return (

  <nav className="nav-reserva navbar navbar-expand-lg navbar-light bg-dark z ">
  <div className="container-fluid">
  {/* Ecoturismo Cundinamarca */}
    <Link className="navbar-brand text-white"  to="/">
    <img className="img-res" src="https://img.icons8.com/plasticine/96/000000/national-park.png " width="50%"/>Inicio</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse z b" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item img-res-open ">
          <NavLink className="nav-link text-white" to="/Lugares">
          <img  src="https://img.icons8.com/plasticine/50/000000/country.png"/>
            Lugares</NavLink>
        </li>
        <li className="nav-item img-res-open ">
          <NavLink className="nav-link text-white" to="/Reserva-Viaje">
          <img  src="https://img.icons8.com/plasticine/50/000000/add-file.png" />
            Reserva
            </NavLink>
        </li>
        <li className="nav-item img-res-open ">
          <NavLink className="nav-link text-white" to="/ver-Reservación">
          <img  src="https://img.icons8.com/plasticine/50/000000/view.png" />
            Ver Reserva
            </NavLink>
        </li>
        <li className="nav-item img-res-open ">
          <NavLink className="nav-link text-white" to = "/Equipo-trabajo">
          <img  src="https://img.icons8.com/plasticine/50/000000/crowd.png" />
            Equipo</NavLink>
        </li>
      </ul>
    </div>
  </div>
  </nav>
 
  )
 

  
  /*  Estilo de Navbar 2 tipo collapse texto en azul despegable lado izquierdo

  <React.Fragment>
  //   <div className="collapse" id="navbarToggleExternalContent">
  //   <div className=" p-4">
  //     <h5 className="text-white h4">Bienvenidos a la tabla de navegacion</h5>
      
  //     <span className="text-muted"><a className="nav-link active" aria-current="page" href="/">Inicio</a></span>
  //     <span className="text-muted"><a className="nav-link" href="/Lugares" >Lugares por conocer</a></span>
  //     <span className="text-muted"><a className="nav-link" href="/Reserva-Viaje" >Reservaciones</a></span>
  //     <span className="text-muted"><a className="nav-link" href="/Equipo-trabajo"  >Equipo de trabajo</a></span>
      
  //   </div>
  // </div>
  // <nav className="navbar navbar-dark ">
  //   <div className="container-fluid">
  //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //   </div>
  // </nav>
  // </React.Fragment>
  */
  
  /*  Estilo de Navbar 1 tipo collapse texto en blanco despegable lado derecho
  <div className="container-fluid">
      <a className="navbar-brand" href="/">Ecoturismo Cundinamarca</a>
      <button className="navbar-toggler" 
      type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Lugares" >Lugares por conocer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Reserva-Viaje" >Reservaciones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Equipo-trabajo"  >Equipo de trabajo</a>
          </li>
        </ul>
      </div>
    </div> */
  

  
}

export default NavBar;