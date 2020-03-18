import React, {Component} from 'react'
import {register} from './UserFunctions'

class Register extends Component{
    constructor(){
        super()
        this.state = {
            nombre: '',
            apellidos: '',
            email: '',
            password: '',
        }
        this.onchange = this.onChange.bind(this)
        this.onsubmit = this.onsubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onsubmit(e){
        e.preventDefault()

        const user = {
            nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res =>{
            if(res){
                this.props.history.push('/login')
            }
        })

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onsubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Inicia sesion</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onchange={this.onchange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="email"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onchange={this.onchange}/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block">
                                Iniciar sesion
                            </button>
                        </form>
                    </div> 
                </div>
            </div>
        )
    }
    
}

export default Register
