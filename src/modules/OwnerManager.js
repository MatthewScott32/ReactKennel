const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(result => result.json())     //fetch for one item
  },
  getAll() {        //fetch for all of the database
    return fetch(`${remoteURL}/owners?_expand=animal`).then(result => result.json()) //specifies what is returned from getAll
  },

  delete(id) {      //deletes the id and then fetches the new set of data
    return fetch(`http://localhost:5002/owners/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },

  post(newLocation) {
      return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body:JSON.stringify(newLocation)
      }).then(data => data.json())
  }
}