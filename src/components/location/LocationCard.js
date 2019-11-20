import React, {Component} from "react";
import { Link } from "react-router-dom";

class LocationCard extends Component{
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./location.jpg')} alt="Location" />
            </picture>
            <h2>Name: <span className="card-locationname">{this.props.location.name}</span></h2>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
            <Link to={`/location/${this.props.location.id}`}><button>Information</button></Link>
          </div>
      </div>
    );
  }
}

export default LocationCard