import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { useEffect } from "react"


function deleteInsurance(id) {
    if (window.confirm("Jsi si jistý?")) {
        fetch("http://localhost:8080/insurance/" + id, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    }
}


export default class UserInsuranciesDetails extends React.Component {

    constructor(insurencies) {
        super(insurencies)
        this.state = { insurencies: [] }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/insurance/usetinsurance/" + this.props.match.params.id)
            .then(res => {
                const insurencies = res.data;
                this.setState({ insurencies })
            })
            
    }




    render() {
        return (
            <>
                <div className="container text-center">

                    <h1 className="text-center my-5">Uzavřená pojištění Pojištěnce {this.props.match.params.name} {this.props.match.params.surname}</h1>
                    <div className="table-responsive card">
                        <table className="table table-triped table-responsive-sm table-info">
                            <thead>
                                <tr>
                                    <th scope="col">Id pojistky</th>
                                    <th scope="col">Id Pojištěnce</th>
                                    <th scope="col">Typ pojištění</th>
                                    <th scope="col">Datum uzavření pojištění</th>
                                    <th scope="col">Předmět pojištění</th>
                                    <th scope="col">Hodnota objektu</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            {this.state.insurencies.map(insurance => (
                                <tbody>
                                    <tr key={insurance.id}>
                                        <th scope="row"><Link className="text-decoration-none" to={`/insurance/${insurance.id}`}>{insurance.id}</Link></th>
                                        <td>{insurance.userId}</td>
                                        <td>{insurance.typeOfInsurance}</td>
                                        <td>{new Date(insurance.createdAt).toLocaleDateString()}</td>
                                        <td>{insurance.insuredItem}</td>
                                        <td>{insurance.sum}  kč</td>


                                        <td>
                                            <Link to={`/insurance/edit/${insurance.id}`}><a className="btn btn-sm btn-primary">Editovat pojištění <i className="far fa-edit ml-1"></i></a></Link>
                                        </td>
                                        <td>


                                            <a onClick={() => deleteInsurance(insurance.id)} className="btn btn-sm btn-danger">Vymazat pojištění <i className="far fa-edit ml-1"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                    <Link to={`/user/${this.props.match.params.id}`}><a className="btn btn-sm btn-success my-4">Zpět na pojištěnce <i className="far fa-edit ml-1"></i></a></Link>
                </div>

            </>
        )
    }



}