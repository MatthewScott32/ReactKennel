const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(result => result.json())     //fetch for one item
  },
  getAll() {        //fetch for all of the database
    return fetch(`${remoteURL}/owners?_expand=animal`).then(result => result.json())
  },

  delete(id) {
    return fetch(`http://localhost:5002/owners/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}