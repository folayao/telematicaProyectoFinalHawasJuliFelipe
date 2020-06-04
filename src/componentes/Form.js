import React from 'react';
import {FormGroup} from "reactstrap";
import '../styles/form.scss'
const Form = () => {
    return (
        <div className="container ">
            <FormGroup className="labels mx-3">         
                <div className="row">
                    <div className="col-3">
                        <label className="formulario1">Nombre</label>
                        <input type="text"  className="input1 form-control" placeholder="Nombre completo :3"/>
                    </div>
                    <div className="col-3">
                        <label className="formulario2">Celular</label>
                        <input type="text"  className="input2 form-control" placeholder="Numero fijo o celular"/>
                    </div>
                    <div className="col-3">
                        <label className="formulario3">Dirección</label>
                        <input type="text"  className="input3 form-control" placeholder="Direccion, y nro de apto :v"/> 
                    </div> 
                    <button type="submit" class="btn prymary" onClick="">
                    Guardar
                    </button>
                </div>
            </FormGroup>
        </div>
    );
};

export default Form;