import React, { useState } from 'react'
import db from './firebase'
import './Form.css'
import firebase from 'firebase'

function Form() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMessage] = useState("")

    const submitForm=(e)=>{
        e.preventDefault()
        
        // Save data to the firebase 
        if(message==="" || phone.length<10 || name==="" || name.length<3|| email==="" || email.length<3){
            alert("Something went wrong, Please fill the form correctly!")
        }
        else{

            try{
                db.collection('forms').add({
                    name:name,
                    email:email,
                    phone:phone,
                    message:message,
                    time:firebase.firestore.FieldValue.serverTimestamp()
                })
                alert("Form has been successully submitted!")
            }
            catch(e){
                alert("Something Went Wrong!")
    
            }
        }
     


        
        


        
        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
    }
    return (
        <form className='form'>
             <h1>React JS Form</h1>
             <div className="form-div">
                 <small>Name</small>
                 <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Name.." required />
             </div>

             <div className="form-div">
                 <small>Email</small>
                 <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email.." required />
             </div>
             
             <div className="form-div">
                 <small>Phone</small>
                 <input type="number" value={phone}  onChange={e=>setPhone(e.target.value)} placeholder="Phone.." required/>
             </div>

             <div className="form-div">
                 <small>Message</small>
                 <textarea value={message} onChange={e=>setMessage(e.target.value)} id="" cols="30" rows="10" required ></textarea>
             </div>
             
             <div className="form-div">
                <button className="btn" onClick={submitForm} type="submit">Submit</button>
             </div>
        </form>
    )
}

export default Form
