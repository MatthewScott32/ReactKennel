import React, {Component} from "react";

class LocationCard extends Component{
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./location.jpg')} alt="Location" />
            </picture>
            <h2>Name: <span className="card-locationname">{this.props.location.name}</span></h2>
          </div>
      </div>
    );
  }
}

export default LocationCard