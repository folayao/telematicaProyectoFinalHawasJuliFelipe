import '../styles/consultas.scss'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import axios from 'axios'
import { Modal, ModalBody, ModalHeader} from 'reactstrap';

class Consultas extends Component {
    
    state = {
        persons: [],
        id : '',
        name: '',
        phoneNumber: '',
        address: '',
        edit: false
    }
    
    componentDidMount = async ()  =>{
        await axios.get(`http://localhost:5000/api/user/`)
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

    handleUpdate = async () =>{  
        if(this.state.name!==''){
            await axios.patch(`http://localhost:5000/api/user/${this.state.id}`, {
                "name": this.state.name            
            })
             .then(res => {
                console.log(res);
                console.log(res.data);
              })
        }
        if(this.state.phoneNumber!==''){
            await axios.patch(`http://localhost:5000/api/user/${this.state.id}`, {
                "phoneNumber": this.state.phoneNumber           
            })
             .then(res => {
                console.log(res);
                console.log(res.data);
              })
        }
        if(this.state.address!==''){
            await axios.patch(`http://localhost:5000/api/user/${this.state.id}`, {
                "address": this.state.address          
            })
             .then(res => {
                console.log(res);
                console.log(res.data);
              })
        }          
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://35.226.254.9/api/user`, {
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
        console.log(ide)
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
                    <form onSubmit={(event) => this.handleSubmit(event)}>
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
                                <tr key={person._id}>
                                    <td className="tdclass"> {person.name}</td>
                                    <td className="tdclass"> {person.phoneNumber} </td>
                                    <td className="tdclass"> {person.address} </td>
                                    <td className="buttons">
                                        <IconButton aria-label="edit" className="button2" color="primary" onClick={() => this.openWindow(person._id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" className="button2" color="secondary" onClick={() => this.handleDelete(person._id)}>
                                            <DeleteIcon />
                                        </IconButton>
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