/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { NavLink } from "react-router-dom"
const Inicio = () => {
  return (
    <React.Fragment>
      <div className="text-center">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/paramo-de-chingaza.jpg"
                alt="Paramo de chingaza"
                className=" mt-5 border border-dark"
                width="75%"
                height="500px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Paramo de chingaza</h5>
                <p className="lead fw-bold">
                  El PNN Chingaza es una de las áreas más importantes y
                  estratégicas del Sistema de Parques Nacionales Naturales por
                  el papel que juega en la provisión de agua para la
                  ciudad-región de Bogotá a través del Sistema Chingaza.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/suesca-cun.png"
                alt="Suesca cun"
                className=" mt-5 border border-dark"
                width="75%"
                height="500px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Suesca Cundinamarca</h5>
                <p className="lead fw-bold">
                  Suesca fue la primera población de Colombia donde se empezó a
                  practicar el deporte de escalada deportiva en roca. Cuenta con
                  unos farallones de roca arenisca ideales para practicar este
                  deporte.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/zipaquira.jpg"
                alt="Zipaquira"
                className=" mt-5 border border-dark"
                width="75%"
                height="500px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Catedral de sal en Zipaquira</h5>
                <p className="lead fw-bold">
                  La catedral de la Sal de Zipaquirá es considerada como uno de
                  los logros arquitectónicos y artísticos más notables de la
                  arquitectura colombiana, por lo que se le ha otorgado incluso
                  el título de joya arquitectónica de la modernidad.La
                  importancia de la Catedral, radica en su valor como patrimonio
                  cultural, religioso y ambiental.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div>
        <h1 className="text-center display-2 text-decoration-underline">Conoce más sobre nosostros</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <img src="https://img.icons8.com/plasticine/100/000000/cyber-security.png" />
            <p className="lead">
              Para nosotros es fundamental la seguridad en actividades y
              escenarios recreativos,es por eso que su bienestar sera respaldado
              por seguros contra todo riesgo,y siempre guiado de la mano de
              expertos .{" "}
            </p>
          </div>
          <div className="col order-5">
          <img src="https://img.icons8.com/plasticine/100/000000/money.png"/>
            <p className="lead">
              Las actividades realizadas cuentan con un gran beneficio en lo
              referente a costos y gastos,es importante el factor de gastos e
              inversion siempres buscando el beneficio personal y familiar en
              las actividades
            </p>
          </div>
          <div className="col order-1">
            <img src="https://img.icons8.com/plasticine/100/000000/hourglass.png" />
            <p className="lead">
              Programamos las actividades entendiendo la importancia del factor
              tiempo en cada momento ,la puntualidad es importante al aprovechar
              el tiempo en las diferentes actividades realizadas en cada evento
              segun agenda.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div>
        <h1 className="text-center display-2 text-decoration-underline">Actividades ecoturísticas</h1>
      </div>
      <br />
      <br />
      <br />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="images/anuncio1.jpg"
              className="card-img-top"
              alt="tren turistico la sabana"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Tren turistico la sabana</h5>
              <p className="card-text">
                Inicia el recorrido en el centro de Bogotá, atraviesa la ciudad
                y recorre la hermosa sabana hasta la población de Zipaquirá
                permitiéndote observar la capital y sus alrededores desde un
                punto de vista diferente y novedoso.
              </p>
            </div>
            <div className="card-footer  text-center">
              <small className="text-muted">
              <NavLink to="/Reserva-viaje">
                     <button className="btn btn-primary">Realizar reserva YA!!!!</button> 
                    </NavLink>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="images/anuncio2.jpg"
              className="card-img-top"
              alt="catedral de sal"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Catedral de sal</h5>
              <p className="card-text">
                La catedral de la Sal de Zipaquirá es considerada como uno de
                los logros arquitectónicos y artísticos más notables de la
                arquitectura colombiana.
              </p>
            </div>
            <div className="card-footer  text-center">
              <small className="text-muted">
              <NavLink to="/Reserva-viaje">
                     <button className="btn btn-primary">Realizar reserva YA!!!!</button> 
                    </NavLink>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="images/anuncio3.jpg"
              className="card-img-top"
              alt="Piedras del tunjo"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Piedras del tunjo</h5>
              <p className="card-text">
                El Parque Arqueológico de Facatativá o Piedras del Tunjo es un
                conjunto de pictogramas cuyo origen exacto se desconoce. Su
                antigüedad tampoco se ha determinado, pero podrían datar de
                aproximadamente 12 000 años.
              </p>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">
              <NavLink to="/Reserva-viaje">
                     <button className="btn btn-primary">Realizar reserva YA!!!!</button> 
                  </NavLink>
              </small>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Inicio;