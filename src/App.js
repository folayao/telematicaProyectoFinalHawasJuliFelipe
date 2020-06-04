import React from 'react';
/* Componentes */
import Form from "./componentes/Form";
import Consultas from "./componentes/Consultas";
/* Styles */
import './styles/app.scss'
import {Navbar, NavbarBrand} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div className="subcontenedor">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            XYZ Enterprise
          </NavbarBrand>
        </div>
      </Navbar>
      </div>
      <div className="container_two">
        <Form/>
      </div>
      <button className="btn_primary">Guardar</button>
      <div className="container_three">
        <Consultas/>
      </div>
    </div>
  );
}

export default App;
