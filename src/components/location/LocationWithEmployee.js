import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager'

class LocationWithEmployee extends Component {
    state = {
      location: {},
      employee: {}
    }

    componentDidMount(){
        
        LocationManager.getWithEmployees(this.props.match.params.locationId)
            .then((APIResult) => {
            this.setState({
              location: APIResult,
              employee: APIResult.employees[0],
            })
        })
    }

    render(){
        return (
          <div className="card">
            <picture>
                <img src={require('./location.jpg')} alt="Location" />
            </picture>
            <p>Location: {this.state.location.name}</p>
            <p>Employee: {this.state.employee.name}</p>
          </div>
        )
      }
    }

export default LocationWithEmployee;