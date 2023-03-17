import React, { useEffect } from "react";
import { useState } from "react";
import UserTemplate from "./UserTemplate";
import { useParams } from 'react-router-dom';
import "./UserCreate.css"

import Bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css"

const UserEdit = () => {
    



    const { id } = useParams();
    const [name, setName] = useState()
    const [surname, setSurname] = useState("Novák")
    const [email, setEmail] = useState("novak.p@seznam.cz")
    const [phone, setPhone] = useState(758456213)
    const [city, setCity] = useState("Brno")
    const [street, setStreet] = useState("Pražská")
    const [houseNumber, setHouseNumber] = useState("645")
    const [zipcode, setZipcode] = useState("65421")
    const [age, setAge] = useState("44")
    const [password, setPassword] = useState("Nejneob")
    console.log(age)

    if (!(name)){
    fetch('http://localhost:8080/user/'+id)
  .then(response => response.json())
  .then(data => {
    setName(data.name);
    setSurname(data.surname);
    setEmail(data.email);
    setPhone(data.phone);
    setCity(data.city);
    setStreet(data.street);
    setHouseNumber(data.houseNumber);
    setZipcode(data.zipcode);
    setAge(data.age);
    setPassword(data.password);
    console.log(age)
  })
  .catch(error => console.error(error))}

    let user = new UserTemplate(null, name, surname, email, phone, city, street, houseNumber, zipcode, age, password);
    const userCreate = () => { if (name == "" || surname == "" || email == "" || phone == "" || city == "" || houseNumber == "" || zipcode == "" || age == "" || street == "" || password == "" ){
        alert("Všechna pole jsou povinná") 

    }else{

        alert("Pojištěnec byl editován")

        fetch('http://localhost:8080/user/' +id, {
            
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })}
    }

    return (
        <article className="formular text-center mx-auto">
            <h1 className="my-5">Editace pojištěnce</h1>
            <div className="card">
            <form className="form-response row">
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Jmeno</label>
                        <input onChange={(event) => { setName(event.target.value) }} value={name} type="text" placeholder="Jmeno" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Příjmení</label>
                        <input onChange={(event) => { setSurname(event.target.value) }} value={surname} type="text" placeholder="Příjmení" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Email</label>
                        <input onChange={(event) => { setEmail(event.target.value) }} value={email} type="email" placeholder="adam@xixoro.cz" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Telefon</label>
                        <input onChange={(event) => { setPhone(event.target.value) }} value={phone} type="number" placeholder="Telefoní číslo" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Město</label>
                        <input onChange={(event) => { setCity(event.target.value) }} value={city} type="text" placeholder="Město" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Ulice</label>
                        <input onChange={(event) => { setStreet(event.target.value) }} value={street} type="text" placeholder="Ulice" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Číslo domu</label>
                        <input onChange={(event) => { setHouseNumber(event.target.value) }} value={houseNumber} type="number" placeholder="Číslo popisné" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">PSČ</label>
                        <input onChange={(event) => { setZipcode(event.target.value) }} value={zipcode} type="number" placeholder="PSČ" />
                    </div>
                    <div className="col-md-6 my-2" >
                        <label className="col-12">Věk</label>
                        <input onChange={(event) => { setAge(event.target.value) }} value={age} type="number" placeholder="Věk" />
                    </div>
                    <div className="col-md-6 my-2 mb-4" >
                        <label className="col-12">Heslo</label>
                        <input onChange={(event) => { setPassword(event.target.value) }} value={password} type="text" placeholder="Heslo" />
                    </div>
                    
                    
            </form>
            </div>
            <input type="submit" value="Editovat pojištěnce" className="btn btn-success mt-4" onClick={userCreate} />
        </article >
    )
}
export default UserEdit