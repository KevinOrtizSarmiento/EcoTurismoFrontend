import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import swal from 'sweetalert2';
import { NavLink } from "react-router-dom";

const VerReservacion = () => {
  
  const [email, setEmail] = useState("");
  const [reserva, setReserva] = useState([])
  const obtenerDatos = async ()=>{
    await axios.get("https://backend-ciclo-4.herokuapp.com/api/formulario/"+email).then(res=>{
      setReserva(res.data)
    })
  }

  const handleDelete = async(e, id)=>{
    console.log(id)
    swal.fire({
      title: "¿Deseas eliminar esta reserva?",
      text: "No podrás recuperarla una vez eliminada.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#5b7066',
      confirmButtonText: 'Sí, deseo borrarla!',
      cancelButtonText:"Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        e.preventDefault();
        await axios.delete("https://backend-ciclo-4.herokuapp.com/api/formulario/"+id)
        .then((respuesta)=>{
          swal.fire(
            'Hecho!',
            'Has eliminado la reserva!',
            'success'
          );
           obtenerDatos()
          //  handleClick();
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    })
  }

  

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.get("https://backend-ciclo-4.herokuapp.com/api/formulario/" + email).then(res=>{
      console.log("Reserva traída")
      console.log(res.data)
      setReserva(res.data)
    })
  }

  return (
      <div className="container">
        <form>
          <fieldset>
            <legend className="text-center card-header fw-bolder">
              <h1>Ver reservaciones realizadas</h1>
            </legend>
            {/* <div class="form-floating mb-3">
              <input
                type="input"
                class="form-control"
                id="floatingInput"
                placeholder="name"
              />
              <label for="floatingInput">
                Nombre de la persona que hizo la reserva
              </label>
            </div> */}
            <div class="form-floating mb-3">
              <input
              onChange={e=>setEmail(e.target.value)}
              value={email}
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">
                Correo con el que hizo la reserva
              </label>
            </div>
            <div className="container">
              <button onClick={handleClick} type="submit" className="btn btn-primary">
                Ver reserva
              </button>
            </div>
          </fieldset>
        </form>
        <table style={{margin:'3rem 0px 3.5rem'}} className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Atracción Turística</th>
              <th>Fecha Reservada</th>
              <th># Personas</th>
              <th># Dias</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                  

          {
              reserva.map(i=>{
                return(
                  
                  <tr key={i._id}>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.lugar}</td>
                    <td>{i.fecha}</td>
                    <td>{i.person}</td>
                    <td>{i.dia}</td>
                  
                    
                    <td><button type="button" onClick={(e)=>{
                      handleDelete(e, i._id);
                      obtenerDatos()
                      }} class="btn btn-danger" >Eliminar</button></td>
                  </tr>
                )
              })
              
            }
            
          
            </tbody> 
        </table>
        {
          reserva.length===0?
          <p style={{textAlign:'center',marginBottom:'7rem'}}>No hay reservas</p>:
          <p style={{textAlign:'center',marginBottom:'7rem'}}>Hay ({reserva.length}) reservas asociadas a este correo.</p>
        }
        
        <div  style={{marginLeft:'42%',marginBottom:'2rem'}}>
          <NavLink to="/reserva-viaje"><button class="btn btn-primary large" type="button">Hacer una nueva reserva</button></NavLink>
          </div>
         
          
          
        
      </div>
      
    
  );
};
export default VerReservacion;
