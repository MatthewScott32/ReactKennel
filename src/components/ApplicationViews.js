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
import EmployeeEditForm from './employee/EmployeeEditForm'
import LocationEditForm from './location/LocationEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'

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
           <Route exact path="/location" render={props => {
             if (this.isAuthenticated()) {
               return <LocationList {...props} />
             } else {
                 return <Redirect to="/login" />
             }
           }}/>
         <Route exact path="/locations/:locationId(\d+)" render={(props) => {
           return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
         }}/>
         <Route path="/location/new" render={(props) => {
           return <LocationForm {...props} />
         }} />
         <Route path="/locations/:locationId(\d+)/edit" render={props => {
           return <LocationEditForm {...props} />
         }} />
         <Route exact path="/employees" render={props => {
           if (this.isAuthenticated()) {
             return <EmployeeList {...props} />
           } else {
               return <Redirect to="/login" />
           }
         }} />
         <Route path="/employee/new" render={(props) => {
           return <EmployeeForm {...props} />
         }} />
         <Route path="/employees/:employeeId(\d+)/edit" render={props => {
           return <EmployeeEditForm {...props} />
         }} />
          <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
           return <EmployeeWithAnimals {...props} />
         }} />
         <Route exact path="/owner/new" render={props => {
           if (this.isAuthenticaded()) {
             return <OwnerList {...props} />
           } else {
               return <Redirect to="/login" />
           }
         }} />
         <Route path="/owner" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews