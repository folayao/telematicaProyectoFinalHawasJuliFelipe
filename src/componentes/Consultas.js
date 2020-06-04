import React, { Component } from 'react';
import { DataCompradores } from "../assets/DataCompradores";
import {Card,
    CardText, 
    CardBody,
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
            <div  className="row">
                <div className="d">
                <Jumbotron key={userdataset.cedula} className="cards">
                    <div className="">
                    <CardTitle>Nombre: {userdataset.nombre}</CardTitle>
                    </div>
                    <div className="">
                    <CardText>Cedula: {userdataset.cedula}</CardText>
                    </div>
                    <div className="">
                    <CardText>telefono:{userdataset.telefono}</CardText>
                    </div>
                    <button type="submit  btn">Borrar</button>
                </Jumbotron>
                </div>
            </div>
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