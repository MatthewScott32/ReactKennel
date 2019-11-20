import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard';
import OwnerCard from "./owner/OwnerCard"
import EmployeeCard from "./employee/EmployeeCard"
import LocationCard from "./location/LocationCard"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

class Kennel extends Component {        //places navbar and appviews into one class called kennel
    render() {              //
        return (
         <React.Fragment>
             <NavBar/>
             <ApplicationViews/>
         </React.Fragment>

        );
            
    }
}

export default Kennel   