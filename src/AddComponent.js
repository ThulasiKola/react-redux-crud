import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {toast} from  'react-toastify'

const AddComponent = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [number,setNumber] = useState("")

        const contacts = useSelector((state)=>state)
        //console.log(contacts)
        const dispatch = useDispatch()

        const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !number ){
           
            return toast.warning("please fill in all fields")
            
        }

        const checkmail = contacts.find(contact =>contact.email === email && email)
        if(checkmail){
            return toast.error("This Email Already Exists !")
        }

        const checknumber = contacts.find(contact =>contact.number === parseInt(number))
        if(checknumber){
            return toast.error("This Number Already Exists !")
        }

        const data = {
            id : contacts[contacts.length - 1].id +1,
            name,
            email,
            number
        }
        //console.log("data =",data)
        dispatch({type:"ADD_STUDENT",payload:data})
        toast.success("Student Added Successfully")
        history.push("/")

    }
    return (
        <div>
           <center> <div style = {{border :"1px solid #ddd" ,width:"300px", marginTop:"50px"}}>
                <form onSubmit ={handleSubmit}>
                    <div style = {{padding : "10px"}}><input type="text" placeholder="Enter Name"  value={name} onChange={(e) => setName(e.target.value)}/></div>
                    <div style = {{padding : "10px"}}><input type="email" placeholder="Enter Email"  value={email} onChange={(e) => setEmail(e.target.value)}/></div>
                    <div style = {{padding : "10px"}}><input type="number" placeholder="Enter Number" value={number} onChange={(e) => setNumber(e.target.value)}  /></div>
                    <div style = {{padding : "10px"}}><input type="submit" value="Add Student" /></div>
                    
                </form>
            </div>
            </center>
        </div>
    )
}

export default AddComponent
