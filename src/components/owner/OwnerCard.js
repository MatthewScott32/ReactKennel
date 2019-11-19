import React, {Component} from "react";

class OwnerCard extends Component{
      render() {
        return (
          <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./owner.jpg')} alt="Owner" />
                </picture>
                <h2>Name: <span className="card-ownername">{this.props.owner.name}</span></h2>
                <p>Phone: {this.props.owner.phone}</p>
                <p>Pet: {this.props.owner.animal.name}</p>
              </div>
          </div>
        );
      }
}

export default OwnerCard