import React from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";




function deleteUser(id) {
    if (window.confirm("Jsi si jistý?")) {
        fetch("http://localhost:8080/user/" + id, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    }
}


export default class UserDetails extends React.Component {

    state = {
        user: []
    }
    componentDidMount() {
        axios.get("http://localhost:8080/user/" + this.props.match.params.id)
            .then(res => {
                const user = res.data
                this.setState({ user })
            })
    }

    render() {
        return (
            <>
                <div className="container mt-5 ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-10 col-lg-5  mx-auto">
                            <div className="card  mb-3">
                                <div className="card-header bg-success text-white text-center">Detail pojištěnce</div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-responsive-sm">
                                            <tbody>
                                                <tr>
                                                    <th csope="row">Id</th>
                                                    <td>{this.state.user.id}</td>
                                                </tr>
                                                <tr>
                                                    <th csope="row">Jméno</th>
                                                    <td>{this.state.user.name}</td>
                                                </tr>
                                                <tr>
                                                    <th csope="row">Příjmení</th>
                                                    <td>{this.state.user.surname}</td>
                                                </tr>
                                                <tr>
                                                    <th csope="row">Email</th>
                                                    <td>{this.state.user.email}</td>
                                                </tr>
                                                <tr>
                                                    <th csope="row">Telefon</th>
                                                    <td>{this.state.user.phone}</td>
                                                </tr>
                                                <tr>
                                                    <th csope="row">Město</th>
                                                    <td>{this.state.user.city}</td>
                                                </tr>
                                                <tr>
                                                    <th csope="row">Ulice</th>
                                                    <td>{this.state.user.street}</td>
                                                </tr>
                                                <tr>
                                                    <th csope="row">Číslo popisné</th>
                                                    <td>{this.state.user.houseNumber}</td>
                                                </tr>
                                                <tr>
                                                    <th csope="row">PSČ</th>
                                                    <td>{this.state.user.zipcode}</td>
                                                </tr>
                                                <tr>
                                                    <th csope="row">Věk</th>
                                                    <td>{this.state.user.age}</td>
                                                </tr>
                                                <tr>
                                                    <th csope="row">Heslo</th>
                                                    <td>{this.state.user.password}</td>
                                                </tr>
                                            </tbody>

                                        </table>
                                        <div className="btn-group">
                                        <Link to={`/user/edit/${this.state.user.id}`}><a className="btn btn-sm btn-primary">Editace pojištěnce <i className="far fa-edit ml-1"></i></a></Link>
                                        <Link to={`/insurance/create/${this.state.user.id}`}><a className="btn btn-sm btn-success">Sjednat pojištění <i className="far fa-edit ml-1"></i></a></Link>
                                        <Link to={`/user/insurancies/${this.state.user.id}/${this.state.user.name}/${this.state.user.surname}`}><a className="btn btn-sm btn-info text-white">Zobrazit uzavřená pojištění <i className="far fa-edit ml-1"></i></a></Link>

                                        <a onClick={() => { deleteUser(this.state.user.id) }} className="btn btn-sm btn-danger">Vymazat pojištěnce <i className="far fa-edit ml-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }

}