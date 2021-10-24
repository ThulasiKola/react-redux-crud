import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link ,useParams} from 'react-router-dom';
import {toast} from  'react-toastify'
import { useHistory } from 'react-router-dom';

const EditComponent = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [number,setNumber] = useState("")

    const {id} = useParams()
    const contacts = useSelector(state=>state)
    const dispatch = useDispatch()
    const currentcontact = contacts.find(contact => contact.id === parseInt(id))
    console.log("currentcontact",currentcontact)
    const history = useHistory()

    useEffect(() =>{
        if(currentcontact){
            setName(currentcontact.name)
            setEmail(currentcontact.email)
            setNumber(currentcontact.number)
        }
    },[currentcontact])


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !number ){
           
            return toast.warning("please fill in all fields")
            
        }

        const checkmail = contacts.find(contact =>contact.id!==parseInt(id) && contact.email === email && email)
        if(checkmail){
            return toast.error("This Email Already Exists !")
        }

        const checknumber = contacts.find(contact =>contact.id!==parseInt(id) && contact.number === parseInt(number))
        if(checknumber){
            return toast.error("This Number Already Exists !")
        }

        const data = {
            id : parseInt(id),
            name,
            email,
            number
        }
        //console.log("data =",data)
        dispatch({type:"UPDATE_CONTACT",payload:data})
        toast.success("Student Updated Successfully")
        history.push("/")

    }

    return (
        <div>
            {currentcontact? (
                <>
           <center> <div style = {{border :"1px solid #ddd" ,width:"300px"}}><h1>Edit Student  {id}</h1>
                <form onSubmit ={handleSubmit}>
                    
                    <div style = {{padding : "10px"}}><input type="text" placeholder="Enter Name"  value={name} onChange={e=>setName(e.target.value)}/></div>
                    <div style = {{padding : "10px"}}><input type="email" placeholder="Enter Email"  value={email} onChange={e=>setName(e.target.value)}/></div>
                    <div style = {{padding : "10px"}}><input type="number" placeholder="Enter Number" value={number} onChange={e=>setName(e.target.value)}/></div>
                    <div style = {{padding : "10px"}}><input type="submit" value="Update Student" />
                    <Link to="/" style={{ textDecoration: "none", marginLeft:"10px"}}><button >Cancel</button></Link>
                    </div>
                    
                </form>
            </div>
            </center>
            </>
            ):(
                <h1>Student contact with {id} is not exist</h1>
            )}
        </div>
    )
}

export default EditComponent
