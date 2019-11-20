import React, {Component} from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css"

class LocationDetail extends Component {

    state = {
        name: ""
    }

    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount");
        LocationManager.get(this.props.locationlId)
        .then((location) => {
            this.setState({
                name:location.name,
            });
        });
    }

    render() {
        return (
            <div classname="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./location.jpg')} alt="Location" />
                    </picture>
                        <h3>Location: <span style={{ color: 'darkslategrey'}}>{this.state.name}</span></h3>
                </div>
            </div>
        );
    }
}

export default LocationDetail;