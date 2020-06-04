import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {FormGroup} from "reactstrap";
import '../styles/form.scss'

const Form = () => {

    return (
        <Paper className="params" id="paperParams">
            <Grid container direction="row" className="grid-container">
                <Grid className="inputs" item xs={3}>
                    <label className="formulario1">Nombre</label>
                    <input type="text"  className="input1 form-control" placeholder="Nombre completo"/>
                </Grid>
                <Grid className="inputs" item xs={3}>
                    <label className="formulario1">Cedula</label>
                    <input type="text"  className="input1 form-control" placeholder="Cedula"/>
                </Grid>
                <Grid className="inputs" item xs={3}>
                    <label className="formulario1">Email</label>
                    <input type="text"  className="input1 form-control" placeholder="Correo electronico"/>
                </Grid>
                <button className="btn btn-primary" item xs={3}>Guardar</button>
                
            </Grid>
        </Paper>
    );
};

export default Form;