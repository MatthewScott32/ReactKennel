import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager'
import './LocationForm.css'

class LocationForm extends Component {
    state = {
        locationName: "",
        loadingStatus: false,
    };

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    constructNewLocation = event => {
        event.preventDefault();
        if (this.state.locationName === "") {
            window.alert("Please input a location name");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.locationName
            };
            
            LocationManager.post(location)
            .then(() => this.props.history.push("/locations"));
        }
      };

      render() {
        return(
          <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="locationName"
                        placeholder="Location Name"/>
                        <label htmlFor="locationName">Name</label>
                    </div>                     
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewLocation}>
                            Submit</button>                    
                    </div>
                </fieldset>
            </form>
          </>
        )
      }
    }

    export default LocationForm