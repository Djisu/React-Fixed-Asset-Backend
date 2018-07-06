var mongoose = require('mongoose')

//Location Schema
var locationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

var Location = module.exports = mongoose.model('Location', locationSchema)

//Get all Locations
module.exports.getLocations = (callback, limit) => {
  Location.find(callback).limit(limit)
}

//Get a single Location
module.exports.getLocationById = (id, callback) => {
  Location.findById(id, callback)
}

// Add Locations
module.exports.addLocation = (location, callback) => {
  Location.create(location, callback)
}

// Update Location
module.exports.updateLocation = (id, location, options, callback) => {
  var query = {_id: id}
  var update = {
    name: location.name
  }
  Location.findOneAndUpdate(query, update, options, callback)
}

// Delete Location
module.exports.removeLocation = (id, callback) => {
  var query = {_id: id}
  Fixedasset.remove(query, callback)
}
