import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from "./animal/AnimalDetails"
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import EmployeeForm from './employee/EmployeeForm'
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'

class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
          <Route path="/login" component={Login} />

          <Route exact path="/animals" render={props => {
            if (this.isAuthenticated()) {
                return <AnimalList {...props} />
            } else {
                return <Redirect to="/login" />
            }
         }} />
         <Route exact path="/animals/:animalId(\d+)" render={(props) => {
         return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
         }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
         }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
         }} />
           <Route exact path="/locations" render={props => {
             if (this.isAuthenticated()) {
               return <LocationList {...props} />
             } else {
                 return <Redirect to="/login" />
             }
           }}/>
         <Route exact path="/location" render={(props) => {
           return <LocationList {...props} />
         }} />
         <Route path="/location/:locationId(\d+)" render={(props) => {
           return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
         }}/>
         <Route path="/location/new" render={(props) => {
           return <LocationForm {...props} />
         }} />
         <Route exact path="/employees" render={(props) => {
          return <EmployeeList {...props} />
        }} />
         <Route path="/employee/new" render={(props) => {
           return <EmployeeForm {...props} />
         }} />
         <Route path="/owner" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews