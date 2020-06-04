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
        
        return (
            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Cedula </th>
                        <th> Email </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.dataUser.map((userdataset)=>(
                            <tr key={userdataset.cedula}>
                            <td className="tdclass"> {userdataset.nombre} </td>
                            <td className="tdclass"> {userdataset.cedula} </td>
                            <td className="tdclass"> {userdataset.telefono} </td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>                            
                            </tr>
                        ))
                    }                    
                </tbody>
            </table>
        );
    } 
}

export default Consultas;