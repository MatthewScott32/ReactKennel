import React, {Component} from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css"
import LocationWithEmployee from "./LocationWithEmployee"

class LocationDetail extends Component {

    state = {
        name: "",
        loadingStatus: true
    }

    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount");
        LocationManager.get(this.props.locationId)
        .then((location) => {
            this.setState({
                name:location.name,
                loadingStatus: false
            });
        });
    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId)
        .then(() => this.props.history.push("/location"))
    }

    render() {
        return (
            <div classname="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./location.jpg')} alt="Location" />
                    </picture>
                        <h3>Location: <span style={{ color: 'darkslategrey'}}>{this.state.name}</span></h3>
                        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close</button>
                </div>
            </div>
        );
    }
}

export default LocationDetail;