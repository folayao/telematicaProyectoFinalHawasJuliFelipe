import React, { Component } from 'react';
import { DataCompradores } from "../assets/DataCompradores";
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
            <table className="table table-striped">
                <thead className="thead">
                    <tr>
                        <th> Nombre </th>
                        <th> Teléfono </th>
                        <th> Email </th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody className="bodyTable">
                    {
                        this.state.dataUser.map((userdataset)=>(
                            <tr key={userdataset.id}>
                            <td className="tdclass"> {userdataset.name} </td>
                            <td className="tdclass"> {userdataset.phoneNumber} </td>
                            <td className="tdclass"> {userdataset.address} </td>
                            <td className="buttons">
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