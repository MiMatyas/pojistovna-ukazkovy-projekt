package cz.matyas.Pojistovna.domain;

import jakarta.annotation.Nonnull;
import jakarta.annotation.Nullable;

import java.util.Objects;

public class User {
    @Nullable
    private Integer Id;
    @Nonnull
    private String name;
    @Nonnull
    private String surname;
    @Nonnull
    private String email;
    @Nonnull
    private Integer phone;
    @Nonnull
    private String city;
    @Nonnull
    private String street;
    @Nonnull
    private Integer houseNumber;
    @Nonnull
    private Integer zipcode;
    @Nonnull
    private Integer age;
    @Nonnull
    private String password;

    public User() {
    }

    public User(Integer id, String name, String surname, String email, Integer phone, String city, String street, Integer houseNumber, Integer zipcode, Integer age, String password) {
        Id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.zipcode = zipcode;
        this.age = age;
        this.password = password;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Integer getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(Integer houseNumber) {
        this.houseNumber = houseNumber;
    }

    public Integer getZipcode() {
        return zipcode;
    }

    public void setZipcode(Integer zipcode) {
        this.zipcode = zipcode;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return //"User{" +
                //"Id=" + Id +
                "Jmeno= " + name + '\n' +
                "Přijmeni= " + surname + '\n' +
                "Email= " + email + '\n' +
                "Telefon= " + phone + '\n'+
                "Město= " + city + '\n'  +
                "Ulice= " + street + '\n'  +
                "Číslo domu= " + houseNumber + '\n'+
                "PSČ= " + zipcode + '\n'+
                "Věk= " + age + '\n'+
                "Heslo= " + password + '\n' ;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(Id, user.Id) && Objects.equals(name, user.name) && Objects.equals(surname, user.surname) && Objects.equals(email, user.email) && Objects.equals(phone, user.phone) && Objects.equals(city, user.city) && Objects.equals(street, user.street) && Objects.equals(houseNumber, user.houseNumber) && Objects.equals(zipcode, user.zipcode) && Objects.equals(age, user.age) && Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(Id, name, surname, email, phone, city, street, houseNumber, zipcode, age, password);
    }
}
