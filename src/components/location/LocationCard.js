import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Location.css"

class LocationCard extends Component{
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./location.jpg')} alt="Location" />
            </picture>
            <h2>Name: <span className="card-locationname">{this.props.location.name}</span></h2>
            <button type="button" onClick={() => {this.props.props.history.push(`/locations/${this.props.location.id}/edit`)}}>Edit</button>
            <button type="button" onClick={() => {this.props.deleteLocation(this.props.location.id)}}>Close</button>
            <button type="button" onClick={() => { this.props.props.history.push(`/locations/${this.props.location.id}/details`)}}>Information</button>
          </div>
      </div>
    );
  }
}

export default LocationCard