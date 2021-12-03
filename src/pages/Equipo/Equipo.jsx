import React from "react";

const EquipoTrabajo = () =>{
return (
<React.Fragment>
    <div className="container">
 <h1 className="text-center fw-bolder container">Equipo de trabajo - Equipo # 1</h1>
 <div class="container">
  <div class="row row-cols-5">
    <div class="col">
    <img src="/images/foto-julian.jpg" class="rounded mx-auto d-block" alt="Foto-2" width='160px' />
        <h4 className="text-center fw-bolder" >Julian Gaviria </h4>
        <h5 className="text-center fw-bolder ">Scrum Master</h5> 
    </div>
    <div class="col">
    <img src="/images/foto-david.jpg" class="rounded mx-auto d-block" alt="Foto-2" width='160px' />
        <h4 className="text-center fw-bolder">David Martinez </h4>
        <h5 className="text-center fw-bolder">Product Owner</h5> 
    </div>
    <div class="col"><img src="/images/foto-cristian.jpg" class="rounded mx-auto d-block" alt="Foto-2" width='60%' />
        <h4 className="text-center fw-bolder">Cristian Torres </h4>
        <h5 className="text-center fw-bolder">Development Team</h5> </div>
    <div class="col"><img src="/images/foto-kevin.jpg" class="rounded mx-auto d-block" alt="Foto-2" width='160px' />
        <h4 className="text-center fw-bolder">Kevin Ortiz </h4>
        <h5 className="text-center fw-bolder">Development Team </h5> </div>
    <div class="col"><img src="/images/foto-sergio.jpg" class="rounded mx-auto d-block" alt="Foto-2" width='180px' />
        <h4 className="text-center fw-bolder">Sergio Ramos</h4>
        <h5 className="text-center fw-bolder">Development Team</h5> </div>
  </div>

   </div>
   </div>
    
</React.Fragment>
)

}
 export default EquipoTrabajo;