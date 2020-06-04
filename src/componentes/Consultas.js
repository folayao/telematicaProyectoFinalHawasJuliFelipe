import React, { Component } from 'react';
import { DataCompradores } from "../assets/DataCompradores";
import {Card, CardText,
        CardTitle , Jumbotron} from 'reactstrap';
import '../styles/consultas.scss'

class Consultas extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataUser: DataCompradores
        }
    }

    render() {
        const usuarios = this.state.dataUser.map((userdataset) => {
            return (
                <Jumbotron key={userdataset.cedula} className="jumbo-card">
                    <div className="card-title">
                    <CardTitle className="card-title-scss">Nombre: {userdataset.nombre} telefono:{userdataset.telefono} Cedula: {userdataset.cedula}  <button type="submit " className="btn primary">Borrar</button></CardTitle>
                    </div>
                </Jumbotron>
            );
        });
        return (
            <div className="">
                <Card>
                    <CardText>
                        {usuarios}
                        
                    </CardText>
                </Card>
              
            </div>
        );
    } 
}

export default Consultas;