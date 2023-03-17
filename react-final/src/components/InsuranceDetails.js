import React from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";




function     deleteInsurance(id) {
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

export default class InsuranceDetails extends React.Component {

    state = {
        insurance : []
    }


    


    componentDidMount(){
        axios.get("http://localhost:8080/insurance/"+this.props.match.params.id)
        .then (res => {
            const insurance = res.data
            this.setState({insurance})
        })
    }

    render(){
        return(
            <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center ">
                    <div className="col-10 col-lg-5  mx-auto">
                        <div className="card mb-3">
                            <div className="card-header bg-success text-white text-center ">Detail pojištění</div>
                            <div className="card-body">
                                <div className="table-responsive ">
                                    <table className="table table-striped table-responsive-sm">
                                        <tbody>
                                            <tr>
                                                <th csope="row">Id pojištění</th>
                                                <td>{this.state.insurance.id}</td>
                                            </tr>
                                            <tr>
                                                <th csope="row">Id pojištěnce</th>
                                                <td>{this.state.insurance.userId}</td>
                                            </tr>
                                            <tr>
                                                <th csope="row">Typ pojištění</th>
                                                <td>{this.state.insurance.typeOfInsurance}</td>
                                            </tr>
                                            <tr>
                                                <th csope="row">Datum vytvoření</th>
                                                <td>{new Date(this.state.insurance.createdAt).toLocaleDateString()}</td>
                                            </tr>
                                            <tr>
                                                <th csope="row">Předmět pojištění</th>
                                                <td>{this.state.insurance.insuredItem}</td>
                                            </tr>
                                            <tr>
                                                <th csope="row">Hodnota objektu</th>
                                                <td>{this.state.insurance.sum} kč</td>
                                            </tr>
                                            
                                        </tbody>

                                    </table>
                                    <div className="btn-group ">
                                    <Link to={`/insurance/edit/${this.state.insurance.id}`}><a className="btn btn-sm btn-primary">Editace pojištění<i className="far fa-edit ml-1"></i></a></Link>
                                    <a onClick={() => {deleteInsurance(this.state.insurance.id)}} className="btn btn-sm btn-danger">Vymazat pojištění<i className="far fa-edit ml-1"></i></a>
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