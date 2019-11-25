import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

class LocationEditForm extends Component {

    state = {
        name: "",
        loadingStatus: true,  
    };

    handleFieldChange = event => {
        const stateToChange = {}
            stateToChange[event.target.id] = event.target.value
            this.setState(stateToChange)
        }

        updateExistingLocation = event => {
            event.preventDefault()
            this.setState({ loadingStatus: true });
            const editedLocation = {
                id: this.props.match.params.locationId,
                name: this.state.locationName

            };

            LocationManager.update(editedLocation)
            .then(() => this.props.history.push("/location"))
        }

        componentDidMount() {
            LocationManager.get(this.props.match.params.locationId)
            .then(location => {
                this.setState({
                locationName: location.name,
                loadingStatus : false,
               });
            });
        }

        render(){
            return (
                <>
                <form>
                  <fieldset>
                      <div className="formgrid">
                          <input
                           type="text"
                           required
                           className="form-control"
                           onChange={this.handleFieldChange}
                           id="locationName"
                           value={this.state.locationName}
                           />
                           <label htmlFor="locationName">Location Name</label>
                        </div>
                        <div className="alignRight">
                            <button
                             type="button" disabled={this.state.loadingStatus}
                             onClick={this.updateExistingLocation}
                             className="btn btn-primary"
                           >Submit</button>
                          </div>
                        </fieldset>
                      </form>
                    </>
            );
        }
    }

export default LocationEditForm