import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./User.css"



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

export default class User extends React.Component {

    constructor(users) {
        super(users)
        this.state = { users: [] }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/user")
            .then(res => {
                const users = res.data;
                this.setState({ users })
            })
    }

    render() {
        return (
            <>
                <div className="container text-center">
                    <div className="row">
                        <h1 className="text-center my-5">Seznam pojištěnců</h1>
                        <div className="table-responsive card ">
                            <table className="table table-info">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Jmeno</th>
                                        <th scope="col">Příjmení</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Telefon</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>


                                    </tr>
                                </thead>
                                {this.state.users.map(user => (
                                    <tbody>
                                        <tr key={user.id}>
                                            <th scope="row" ><Link className="text-decoration-none" to={`/user/${user.id}`}>{user.id}</Link></th>
                                            <td>{user.name}</td>
                                            <td>{user.surname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>


                                            <td>

                                                <Link to={`/user/${user.id}`}><a className="btn btn-sm btn-success">Detail pojištěnce <i className="far fa-edit ml-1"></i></a></Link>
                                            </td>
                                            <td>
                                                <Link to={`/user/insurancies/${user.id}/${user.name}/${user.surname}`}><a className="btn btn-sm btn-info text-white">Zobrazit uzavřená pojištění <i className="far fa-edit ml-1"></i></a></Link>

                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                        <div className="mt-3">
                            <Link to={`/user/create`}><a className="btn btn-xl btn-primary mb-5">Vytvoř pojištěnce<i className="far fa-edit ml-1 "></i></a></Link>
                        </div>

                    </div>
                </div>

            </>
        )
    }
}