import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

componentDidMount(){
    console.log("Owner LIST: ComponentDidMount");
    //getAll from OwnerManager and hang on to that data; put it in state
    OwnerManager.getAll()
    .then((ownersArray) => {
        this.setState({
            owners: ownersArray
        })
    })
}
render(){
    console.log("OwnerList: Render");
  
    return(
      <div className="container-cards">
        {this.state.owners.map(owner =>
          <OwnerCard key={owner.id} owner={owner} />
        )}
      </div>
    )
  }
}

export default OwnerList