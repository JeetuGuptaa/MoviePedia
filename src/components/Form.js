import React, { useState } from 'react';
import validator from 'validator';

function Form({state}) {
    const {movie, setShowForm} = state;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    function checkSubmit(){
        return !(firstName.length > 0 && lastName.length>0 && email.length>0 && validator.isEmail(email));
    }

    

  return (
    <div className="blur-background">
      <form className="form-container">
        <p>Movie : {movie.name}</p>
        <input
            type = "text"
            name = "firstName"
            placeholder='First Name*'
            value = {firstName}
            onChange = {(e)=>{
                setFirstName(e.target.value);
            }} 
            required
        />
        <input
            type = "text"
            name = "LastName"
            placeholder='Last Name'
            value = {lastName}
            onChange = {(e)=>{
                setLastName(e.target.value);
            }} 
        />
        <input
            type = "email"
            name = "email"
            placeholder='Email*'
            value = {email}
            onChange = {(e)=>{
                setEmail(e.target.value);
            }}
            required 
        />
        <div className = "btnConatiner">
            <button
                disabled = {checkSubmit()}
                onClick = {
                    ()=>{
                    setShowForm(prev => {
                        localStorage.setItem('user', JSON.stringify({ firstName, lastName, email }));
                        setFirstName('');
                        setLastName('');
                        setEmail('');
                        alert("Ticket booking successful, Tickets will be sent on mail")
                        return !prev;
                    })
                }}>
                Confirm
            </button>
            <button
                onClick = {
                    ()=>{
                    setShowForm(prev => {
                        return !prev;
                    })
                }}>
                Cancel
            </button>
        </div>
      </form>
    </div>
  );
}

export default Form;