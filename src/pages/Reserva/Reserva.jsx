import axios from "axios";
import React from "react";
import { useState } from "react";
import swal from "sweetalert2";

const ReservaViaje = () => {
  
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [lugar, setLugar] = useState()
  const [fecha, setFecha] = useState('')
  const [person, setPerson] = useState(0)
  const [dia, setDia] = useState(0)
  

  const handleSubmit = async (e) => {
    swal.fire(
      'Listo!',
      'Tu reserva ha sido realizada.',
      'success'
    )
    e.preventDefault();
    console.log(name+" "+email+" "+lugar+" "+fecha+" "+person+" "+dia+" ")
    //axios.post("http://localhost:8000/formulario", newFormulario);
    await axios.post("https://backend-ciclo-4.herokuapp.com/api/form", {name,email,lugar,fecha,person,dia}).then(res=>{
      console.log("Formulario guardado")
    })
    setName("")
    setEmail("")
    setLugar()
    setFecha()
    setPerson(0)
    setDia(0)
  }

  return (
    <React.Fragment>
      <div className="container">
        <form>
          <fieldset>
            <legend className="text-center card-header fw-bolder">
              <h1>Por favor ingrese la información solicitada</h1>
            </legend>
            <label for="floatingInput">Nombre completo:</label>
            <div className="mb-3">
              <input
                onChange={e => setName(e.target.value)}
                value={name}
                name="nombre"
                
                type="name"
                class="form-control"
                id="floatingInput"
                placeholder="Nombre"
                autocomplete="off"
              />
              
            </div>
            <label for="floatingInput">Correo electrónico:</label>
            <div className="mb-3">
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                class="form-control"
                id="floatingEmail"
                placeholder="nombre@example.com"
                autocomplete="off"
              />
              
            </div>

            <div className="mb-3">
              <label for="disabledSelect" className="form-label">
                Escoge un lugar para tu aventura:{" "}
              </label>
              <select
                id="disabledSelect"
                onChange={e => setLugar(e.target.value)}
                value={lugar}
                className="form-select"
              >
                <option> </option>
                <option>Catedral de sal</option>
                <option>Laguna de Guatavita </option>
                <option>Salto del Tequendama</option>
                <option>Fundación Parque Jaime Duque</option>
                <option>Monumento Campesino</option>
                <option>Mina De Sal De Nemocón</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="disabledTextInput" className="form-label">
                Fecha de reservación:{" "}
              </label>
              <input
                onChange={e => setFecha(e.target.value)}
                value={fecha}
                type="date"
                id="disabledTextInput"
                className="form-control"
                placeholder="Fecha"
              />
            </div>
            <div className="mb-3">
              <label for="disabledTextInput" className="form-label">
                Numero de personas:{" "}
              </label>
              <input
                onChange={e => setPerson(e.target.value)}
                value={person}
                type="number"
                id="disabledTextInput"
                className="form-control"
                placeholder="Número de personas"
              />
            </div>
            <div className="mb-3">
              <label for="disabledTextInput" className="form-label">
                Numero de días de la reservación:{" "}
              </label>
              <input
                onChange={e => setDia(e.target.value)}
                value={dia}
                type="number"
                id="disabledTextInput"
                className="form-control"
                placeholder="Número de dias"
              />
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Enviar Reserva
            </button>
            

          </fieldset>
        </form>
      </div>
    </React.Fragment>
  );
};
export default ReservaViaje;
