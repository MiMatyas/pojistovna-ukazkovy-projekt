import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import InsuranceTemplate from "./InsuranceTemplate";
import "./UserCreate.css"


import Bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css"

const UserCreate = () => {



    const { userId } = useParams();
    const [typeOfInsurance, setTypeOfInsurance] = useState("Povinné ručení")
    const [insuredItem, setInsuredItem] = useState("Dům")
    const [sum, setSum] = useState()


    let user = new InsuranceTemplate(userId, typeOfInsurance, null, insuredItem, sum);
    const userCreate = () => {
        if (typeOfInsurance == null || insuredItem == null || sum == null ){
            alert("Všechna pole jsou povinná") 
 
        }else{
        alert("Pojištění sjednáno")

        fetch('http://localhost:8080/insurance', {

            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })}
    }

    return (
        <article className="formular text-center mx-auto">
            <h1 className=" my-5">Vytvoření pojistky</h1>
            <div className="card">
            <form className="form-response row py-3 mb-3">
                <div className="col-md-6 my-1" >
                    <label className="col-12">Druh pojištění</label>

                    <select onChange={(event) => { setTypeOfInsurance(event.target.value) }} >
                        <option value="Povinné ručení">Povinné ručení</option>
                        <option value="Pojištění majetku">Pojištění majetku</option>
                        <option value="Pojištění před tornádem">Pojištění před tornádem</option>
                        <option value="Pojištění před povodní">Pojištění před povodní</option>

                    </select>

                </div>
                <div className="col-md-6 my-1" >
                    <label className="col-12">Pojištěný předmět</label>
                    <select onChange={(event) => { setInsuredItem(event.target.value) }} >
                        <option value="Dům">Dům</option>
                        <option value="Byt">Byt</option>
                        <option value="Auto">Auto</option>
                        <option value="Vrtulník">Vrtulník</option>

                    </select>
                </div>
                <div className="col-md-12 mt-5" >
                    <label className="col-12">Hodnota objektu</label>
                    <input className="mb-3" onChange={(event) => { setSum(event.target.value) }} value={sum} type="number" placeholder="200000" />
                </div>

                

            </form>
            </div>
            <input type="submit" value="Vytvořit pojištění" className="btn btn-success my-4" onClick={userCreate} />
        </article >
    )
}
export default UserCreate