import axios from 'axios'
import React, { Component } from 'react';
import '../styles/consultas.scss'

class Consultas extends Component {
    
    state = {
        persons: []
    }
    
    componentDidMount() {
    axios.get(`http://localhost:5000/api/user`)
        .then(res => {
        const persons = res.data.users;
        this.setState({ persons });
        })
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
                        this.state.persons.map((person)=>(
                            <tr key={person.id}>
                            <td className="tdclass"> {person.name} </td>
                            <td className="tdclass"> {person.phoneNumber} </td>
                            <td className="tdclass"> {person.address} </td>
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