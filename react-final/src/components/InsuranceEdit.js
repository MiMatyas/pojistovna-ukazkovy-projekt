import React, { useState } from "react";
import { Link } from "react-router-dom";
import InsuranceTemplate from "./InsuranceTemplate";
import { useParams } from 'react-router-dom';
import axios from "axios";




const InsuranceEdit = () => {

    const { id } = useParams();


    fetch('http://localhost:8080/insurance/' + id)
        .then(response => response.json())
        .then(data => {
            userId = (data.userId);
            typeOfInsurance = (data.typeOfInsurance);
            createdAt = ("2023-01-27T01:15:05.000+00:00");
            insuredItem = (data.insuredItem);
            sum = (data.sum);
        })
        .catch(error => console.error(error))


    const [userId, setUserId] = useState()
    const [typeOfInsurance, setTypeOfInsurance] = useState()
    const [createdAt, setCreatedAt] = useState()
    const [insuredItem, setInsuredItem] = useState()
    const [sum, setSum] = useState()

    if (!(userId))
    fetch('http://localhost:8080/insurance/' + id)
    .then(response => response.json())
    .then(data => {
        setUserId(data.userId);
        setTypeOfInsurance(data.typeOfInsurance);
        setCreatedAt("2023-01-27T01:15:05.000+00:00");
        setInsuredItem(data.insuredItem);
        setSum(data.sum);
    })
    .catch(error => console.error(error))

    const insurance = new InsuranceTemplate(userId, typeOfInsurance, createdAt, insuredItem, sum)
    const insuranceCreate = () => {
        if (typeOfInsurance == "" || insuredItem == "" || sum == "" ){
            alert("Všechna pole jsou povinná") 
 
        }else{
        alert("Pojištění bylo editováno")
        fetch('http://localhost:8080/insurance/' + id, {

            method: 'PATCH',
            body: JSON.stringify(insurance),
            headers: {
                "Content-Type": "application/json"
            }
        })}
    }
    return (
        <article className="formular text-center mx-auto">
            <h1 className="my-5">Editace pojištění {id}</h1>
            <div className="card">
            <form className="form-response row my-3">
                <div className="col-md-6 my-1" >
                    <label className="col-12">Typ pojištění</label>
                    <select value={typeOfInsurance} onChange={(event) => { setTypeOfInsurance(event.target.value) }} >
                            <option value="Povinné ručení">Povinné ručení</option>
                            <option value="Pojištění majetku">Pojištění majetku</option>
                            <option value="Pojištění před tornádem">Pojištění před tornádem</option>
                            <option value="Pojištění před povodní">Pojištění před povodní</option>

                        </select>
                </div>
                <div className="col-md-6 my-1" >
                    <label className="col-12">Předmět pojištění</label>
                    <select value={insuredItem} onChange={(event) => { setTypeOfInsurance(event.target.value) }} >
                            <option value="Dům">Dům</option>
                            <option value="Byt">Byt</option>
                            <option value="Auto">Auto</option>
                            <option value="Vrtulník">Vrtulník</option>

                        </select>                
                        </div>
                <div className="col-md-12 mt-5" >
                    <label className="col-12">Hodnota objektu</label>
                    <input className="mb-4" onChange={(event) => { setSum(event.target.value) }} value={sum} type="number" placeholder="200000" />
                </div>
                
            </form>
            </div>
            <input type="submit" value="Editovat pojištění" className="btn btn-success my-4" onClick={insuranceCreate} />
            

        </article >
    )
}
export default InsuranceEdit