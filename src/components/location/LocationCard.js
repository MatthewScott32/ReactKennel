import React, {Component} from "react";

class LocationCard extends Component{
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./location.jpg')} alt="Location" />
            </picture>
            <h2>Name: <span className="card-location">{this.props.location.location}</span></h2>
          </div>
      </div>
    );
  }
}

export default LocationCard