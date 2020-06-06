import axios from 'axios'
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../styles/consultas.scss'
import { Modal, ModalBody, ModalHeader, Form } from 'reactstrap';

class Consultas extends Component {
    
    state = {
        persons: [],
        id : '',
        name: '',
        phoneNumber: '',
        address: '',
        edit: false
    }
    
    componentDidMount() {
    axios.get(`http://localhost:5000/api/user`)
        .then(res => {
        const persons = res.data.users;
        this.setState({ persons : persons });
        })
    }
    
    handleDelete = async (id) =>{    
        await axios.delete(`http://localhost:5000/api/user/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
        })
    }

    handleUpdate = async (event) =>{  
        if(this.state.name!==''){
            axios.patch(`http://localhost:5000/api/user/${this.state.id}`, {
                "name": this.state.name            
            })
             .then(res => {
                console.log(res);
                console.log(res.data);
              })
        }
        if(this.state.phoneNumber!==''){
            axios.patch(`http://localhost:5000/api/user/${this.state.id}`, {
                "phoneNumber": this.state.phoneNumber           
            })
             .then(res => {
                console.log(res);
                console.log(res.data);
              })
        }
        if(this.state.address!==''){
            axios.patch(`http://localhost:5000/api/user/${this.state.id}`, {
                "address": this.state.address          
            })
             .then(res => {
                console.log(res);
                console.log(res.data);
              })
        }          
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`http://localhost:5000/api/user`, {
            "name": this.state.name,
            "phoneNumber": this.state.phoneNumber,
            "address": this.state.address
        })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }

    openWindow=(ide)=>{
        this.setState({edit: true})
        this.setState({id: ide})
    }

    closeWindow=()=>{
        this.setState({edit: false})
        this.setState({id: ''})
    }    

    handleName = event => {
        this.setState({ name: event.target.value });
    }
    handlePhone = event => {
        this.setState({ phoneNumber: event.target.value });
    }
    handleEmail = event => {
        this.setState({ address: event.target.value });
    }
    

    render() {
        return (
            <div className="page">
                <Paper className="params" id="paperParams">                    
                    <form onSubmit={this.handleSubmit}>
                        <Grid container direction="row" className="grid-container">
                            <Grid className="inputs" item xs={3}>
                                <label className="formulario1">Nombre</label>
                                <input type="text"  className="input1 form-control" placeholder="Nombre completo" onChange={this.handleName}/>
                            </Grid>
                            <Grid className="inputs" item xs={3}>
                                <label className="formulario1">Teléfono</label>
                                <input type="text"  className="input1 form-control" placeholder="Celular" onChange={this.handlePhone}/>
                            </Grid>
                            <Grid className="inputs" item xs={3}>
                                <label className="formulario1">Email</label>
                                <input type="text"  className="input1 form-control" placeholder="Correo electronico" onChange={this.handleEmail}/>
                            </Grid>
                            <button className="btn btn-primary" item xs={3} type="submit">Guardar</button>  
                        </Grid>
                    </form>                    
                </Paper>
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
                                    <td className="tdclass"> {person.name}</td>
                                    <td className="tdclass"> {person.phoneNumber} </td>
                                    <td className="tdclass"> {person.address} </td>
                                    <td className="buttons">
                                        <button className="btn btn-primary" onClick={() => this.openWindow(person._id)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => this.handleDelete(person._id)}>Delete</button>
                                    </td>                            
                                </tr>
                            ))
                        }                    
                    </tbody> 
                </table>
                <Modal isOpen={this.state.edit} className="window">
                    <ModalHeader>
                        Edit profile
                    </ModalHeader>
                    <ModalBody className="bodyWindow">                        
                        <form className="params" onSubmit={(event) => this.handleUpdate(event)}>
                            <Grid container direction="row" className="grid-container">
                                <Grid className="inputs2" item xs={4}>
                                    <label className="formulario1">Nombre</label>
                                    <input type="text"  className="input1 form-control" placeholder="Nombre completo" onChange={this.handleName}/>
                                </Grid>
                                <Grid className="inputs2" item xs={4}>
                                    <label className="formulario1">Teléfono</label>
                                    <input type="text"  className="input1 form-control" placeholder="Celular" onChange={this.handlePhone}/>
                                </Grid>
                                <Grid className="inputs2" item xs={4}>
                                    <label className="formulario1">Email</label>
                                    <input type="text"  className="input1 form-control" placeholder="Correo electronico" onChange={this.handleEmail}/>
                                </Grid>
                            </Grid>
                            <button className="btn btn-primary" item xs={3} type="submit">Guardar Edicion</button> 
                            <button className="btn btn-danger" item xs={3} onClick={() => this.closeWindow()}>Cancelar</button> 
                        </form>                                                
                    </ModalBody>                    
                </Modal>               
            </div>
        );
    } 
}

export default Consultas;