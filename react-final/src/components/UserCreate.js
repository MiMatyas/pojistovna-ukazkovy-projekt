import React, { useEffect } from "react";
import { useState } from "react";
import UserTemplate from "./UserTemplate";
import "./UserCreate.css"

import Bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";

const UserCreate = () => {

    

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [city, setCity] = useState()
    const [street, setStreet] = useState()
    const [houseNumber, setHouseNumber] = useState()
    const [zipcode, setZipcode] = useState()
    const [age, setAge] = useState()
    const [password, setPassword] = useState()
    const [create,setCreate] = useState()

    let user = new UserTemplate(null, name, surname, email, phone, city, street, houseNumber, zipcode, age, password);
    const userCreate = () => {
        if (name == null || surname == null || email == null || phone == null || city == null || houseNumber == null || zipcode == null || age == null || street == null || password == null ){
            alert("Všechna pole jsou povinná") 
 
        }else{
        alert("Uživatel "+name+" "+surname+" byl vytvořen a přidán do databáze Pojištěnců")

        fetch('http://localhost:8080/user', {
            
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        
        })}
        
    }

    return (
        <article className="formular text-center mx-auto">
            <h1 className="my-5">Vytvoření pojištěnce</h1>
            <div className="card">
            <form className="form-response row">
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Jmeno</label>
                        <input onChange={(event) => { setName(event.target.value) }} value={name} type="text" placeholder="Alexandr" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Příjmení</label>
                        <input onChange={(event) => { setSurname(event.target.value) }} value={surname} type="text" placeholder="Dostojev" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Email</label>
                        <input onChange={(event) => { setEmail(event.target.value) }} value={email} type="email" placeholder="a.dostojev.a@xixoro.cz" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Telefon</label>
                        <input onChange={(event) => { setPhone(event.target.value) }} value={phone} type="number" placeholder="732789765" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Město</label>
                        <input onChange={(event) => { setCity(event.target.value) }} value={city} type="text" placeholder="Černouček" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Ulice</label>
                        <input onChange={(event) => { setStreet(event.target.value) }} value={street} type="text" placeholder="Čeledná" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Číslo domu</label>
                        <input onChange={(event) => { setHouseNumber(event.target.value) }} value={houseNumber} type="number" placeholder="713" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">PSČ</label>
                        <input onChange={(event) => { setZipcode(event.target.value) }} value={zipcode} type="number" placeholder="73912" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Věk</label>
                        <input onChange={(event) => { setAge(event.target.value) }} value={age} type="number" placeholder="64" />
                    </div>
                    <div className="col-md-6 my-2 mb-4" >
                        <label className="col-12">Heslo</label>
                        <input onChange={(event) => { setPassword(event.target.value) }} value={password} type="text" placeholder="@Al.dosT!.pojisteni" />
                    </div>
                    

            </form>
            </div>
            <input type="submit" value="Vytvořit pojištěnce" className="btn btn-success my-5" onClick={userCreate} />
        </article >
    )
}
export default UserCreate