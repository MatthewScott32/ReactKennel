import { Route } from 'react-router-dom'
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

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props} />
        }} />
         <Route path="/animals/:animalId(\d+)" render={(props) => {
         return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
         }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
         <Route exact path="/location" render={(props) => {
           return <LocationList {...props} />
         }} />
         <Route path="/location/:locationId(\d+)" render={(props) => {
           return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
         }}/>
         <Route path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
         <Route path="/owner" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews