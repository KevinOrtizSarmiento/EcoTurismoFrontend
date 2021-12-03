import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import swal from "sweetalert2";
import "../../App.css";

const Informacion = () => {
  const { id } = useParams();
  const [obj, setObj] = useState([]);
  const [comentario, setComentario] = useState({ data: "" });
  const [comentarioObtenido, setComentarioObtenido] = useState([]);

  //Metodos
  const apiComent = "https://backend-ciclo-4.herokuapp.com/api/comentario/";
  const apiLugares = "https://backend-ciclo-4.herokuapp.com/api/lugares/" + id;
  const obtenerLugarId = async () => {
    await axios.get(apiLugares).then((response) => {
      setObj(response.data);
    });
  };
  const obtenerComentarios = async () => {
    await axios.get(apiComent + id).then((res) => {
      setComentarioObtenido(res.data);
      console.log(comentarioObtenido);
    });
  };
  const comentar = (e) => {
    e.preventDefault();
    swal.fire(
      'Listo!',
      'Tu comentario ha sido creado!',
      'success'
    )
     axios
      .post(apiComent, { comentario: comentario.data, id: id })
      .then(res => {
        obtenerComentarios();
        swal.fire("Hecho!", "Has realizado un comentario!", "success");
        console.log(res);
        setComentario({ data: "" });
        
        obtenerComentarios();
      })
      .catch((error) => {
        console.log(error);
      });
    obtenerComentarios();

    
    
    obtenerComentarios();
  };

  useEffect(() => {
    obtenerLugarId();
    obtenerComentarios();
  }, []);
  return (
    // Pagina de lugares
    <div>
      <div
        className="card mb-3"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          borderBottom: "2px solid black",
        }}
      >
        <div className="row g-0" >
          <div className="col-md-4">
            <img
              src={obj.url}
              style={{ minHeight: "400px", maxHeight: "400px", width: "85%" }}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{obj.name}</h5>
              <p className="card-text">{obj.info}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mb-3"
        style={{ backgroundColor: "#EEEEEE", marginTop: "-1%" }}
      >
        <h3 className="mb-3 cursive" style={{ backgroundColor: "#d0c44c" }}>
          Comentarios
        </h3>
        <p
          className="mb-3"
          style={{
            margin: "0px",
            backgroundColor: "#fff",
            paddingLeft: "2%",
            marginTop: "-0.8%",
            fontSize: "1rem",
            paddingTop: "0.8%",
            paddingBottom: "0.8%",
          }}
        >
          Total comentarios ({comentarioObtenido.length})
        </p>
        <div>
          {comentarioObtenido.length === 0 ? (
            <p style={{ textAlign: "center", fontSize: "1.3rem" }}>
              Se la primera persona en comentar
            </p>
          ) : (
            comentarioObtenido.map((i) => {
              return (
                <div >
                  <div
                  key={i._id}
                    className="mb-3"
                    style={{
                      padding: "10px",
                      marginLeft: "5rem",
                      display: "flex",
                      borderBottom: "2px solid #E0E0E0",
                    }}
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      className="rounded-circle"
                      alt=""
                      width="2.1%"
                      height="2.1%"
                    />
                    <h5
                      style={{
                        marginLeft: "3%",
                        marginRight: "2%",
                        position: "static",
                      }}
                    >
                      <strong>Usuario Anonimo</strong>
                    </h5>
                    <p
                      style={{
                        marginRight: "200px",
                        float: "right",
                        position: "static",
                      }}
                    >
                      {i.comentario}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="mb-3" style={{ marginTop: "5%" }}>
          <textarea
            className="form-control"
            onChange={(e) => {
              setComentario({ data: e.target.value });
            }}
            value={comentario.data}
            placeholder={"Dinos tu opinion acerca de " + obj.name}
            rows="3"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <div className="d-grid gap-2">
            <button
              onClick={async (e) => {
                comentar(e);
                setComentario({ data: "" });
              }}
              className="btn btn-dark"
            >
              {() => {obtenerComentarios(); setInterval(() => {
                obtenerComentarios()
              }, 1000);}}
              <strong style={{ fontSize: "1.2rem" }}>Comentar</strong>
              
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
