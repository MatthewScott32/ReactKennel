import React, {Component} from "react";

class OwnerCard extends Component{
    render(){
        return (
            <div className="card">
            <div className="card-content">
              <picture>
                <img src={require('./owner.jpg')} alt="My Owner" />
              </picture>
              <h3>Name: <span className="card-ownername"></span>Rooster Cogburn</h3>
              <p>Title: Owner</p>
            </div>
          </div>
        );
    }
}

export default OwnerCard