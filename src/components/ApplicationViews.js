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
import LocationWithEmployee from './location/LocationWithEmployee'


class ApplicationViews extends Component {


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
          <Route path="/login" render={props => {
            return <Login setUser= {this.props.setUser} {...props} />
            }} />

          <Route exact path="/animals" render={props => {
            if (this.props.user) {
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
               return <LocationList {...props} />
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
          <Route path="/locations/:locationId(\d+)/details" render={(props) => {
           return <LocationWithEmployee {...props} />
         }} />
         <Route exact path="/employees" render={props => {
           if (this.props.user) {
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
           if (this.props.user) {
             return <OwnerList {...props} />
           } else {
               return <Redirect to="/login" />
           }
         }} />
         <Route path="/owners" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews