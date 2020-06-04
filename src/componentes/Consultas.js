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
                            <td> {userdataset.nombre} </td>
                            <td> {userdataset.cedula} </td>
                            <td> {userdataset.telefono} </td>
                            <td>
                                <button className="button">Edit</button>
                                <button className="button">Delete</button>
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