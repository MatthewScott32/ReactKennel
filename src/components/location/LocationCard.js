import React, {Component} from "react";
class LocationCard extends Component{
    render(){
        return (
            <div className="card">
            <div className="card-content">
              <picture>
                <img src={require('./location.jpg')} alt="Our Location" />
              </picture>
              <h3>Location: <span className="card-locationname"></span>Nashville</h3>
              <p>Title: Business</p>
            </div>
          </div>
        );
    }
}

export default LocationCard