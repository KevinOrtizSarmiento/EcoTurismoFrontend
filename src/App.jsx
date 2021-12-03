import './App.css';
import Inicio from './pages/Inicio/Inicio';
import Lugares from './pages/Lugares/Lugares';
import NavBar from './components/NavBar';
import ReservaViaje from './pages/Reserva/Reserva';
import EquipoTrabajo from './pages/Equipo/Equipo';
import Encabezado from './components/Header';
import Footer from './components/Footer';
import VerReservacion from './pages/VerReservaciones/VerRes';
import Informacion from "./pages/Lugares/Informacion"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";




function App() {
  return (
    <div className="App">
     <Router>
       
      <NavBar />
      <Encabezado />
     <Switch>
          <Route  exact path="/">
            <Inicio />
          </Route>
          <Route path="/lugares">
            <Lugares />
          </Route>
          <Route path="/reserva-Viaje">
          <ReservaViaje />
          </Route>
          <Route path="/ver-Reservación">
          <VerReservacion />
          </Route>
          <Route path="/equipo-trabajo">
          <EquipoTrabajo />
          </Route>
          <Route path="/informacion/:id/:name">
              <Informacion />
          </Route>
          <Route path="*">
            <h1>Error 404 Page Not Found</h1>
          </Route>
        </Switch>
        <Footer />
     </Router>
    </div>
  );
}

export default App;
