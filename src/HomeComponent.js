import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const HomeComponent = () => {

    const contacts = useSelector(state=>state)
    const dispatch =useDispatch()


    const deletecontact =(id) => {
        dispatch({type:"DELTE_CONTACT",payload:id})
        toast.success("contact deleted successfully")
    }
    return (
        <div>
            <div style={{marginTop : "10px", marginRight : "-700px" }}>
                <button><Link to="/add" style={{ textDecoration: "none" }}><h3>ADD-Student</h3></Link></button>
            </div>
            <center><table width="30%">

            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>email</th>
                    <th>number</th>
                    <th>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map((contact,id)=>(
                        <tr key={id}>
                            <td>{id+1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.number}</td>
                            <td><Link to={`/edit/${contact.id}`}>Edit</Link><button style={{marginLeft:"10px"}} onClick={()=>deletecontact(contact.id)}>Delete</button></td>
                        </tr>

                    ))
                }
            </tbody>


            </table></center>
        </div>
    )
}

export default HomeComponent
