import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component{
    constructor(){
        super()
        this.state = {
            nombre: '',
            apellidos: '',
            email: '',
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            nombre: decoded.nombre,
            apellidos: decoded.apellidos,
            email: decoded.email,
        })
    }

    render(){
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PERFIL</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>{this.state.nombre}></td>
                            </tr>
                            <tr>
                                <td>Apellidos</td>
                                <td>{this.state.apellidos}></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile