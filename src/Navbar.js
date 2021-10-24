import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  import AddComponent from './AddComponent'
  import EditComponent from './EditComponent'
  import DeleteComponent from './DeleteComponent'
  import HomeComponent from './HomeComponent'
const Navbar = () => {
    return (
        <div>
            <Router>
                <nav style={{marginTop:"20px"}}>

                    <Link to="/"> REACT-REDUX-APP</Link>
                    <Switch>
                        <Route path="/" exact component={HomeComponent} />
                        <Route path="/add"  component={AddComponent} />
                        <Route path="/edit/:id"  component={EditComponent} />
                        <Route path="/delete"  component={DeleteComponent} />
                        
                    </Switch>
                </nav>


            </Router>
        </div>
    )
}

export default Navbar
