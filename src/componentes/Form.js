import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {FormGroup} from "reactstrap";
import '../styles/form.scss'

const Form = () => {

    return (
        <Paper className="params" id="paperParams">
            <Grid container direction="row">
                <Grid className="inputs" item xs={3}>
                    <label className="formulario1">Nombre</label>
                    <input type="text"  className="input1 form-control" placeholder="Nombre completo :3"/>
                </Grid>
                <Grid className="inputs" item xs={3}>
                    <label className="formulario1">Cedula</label>
                    <input type="text"  className="input1 form-control" placeholder="Cedula"/>
                </Grid>
                <Grid className="inputs" item xs={3}>
                    <label className="formulario1">Email</label>
                    <input type="text"  className="input1 form-control" placeholder="Correo electronico"/>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Form;