var mongoose = require('mongoose')

//Department Schema
var insurerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  telno: {
    type: String,
    required: true
  }
})

var Insurer = module.exports = mongoose.model('Insurer', insurerSchema)

//Get Insurers
module.exports.getInsurers = (callback, limit) => {
  Insurer.find(callback).limit(limit)
}

//Get a single Insurer
module.exports.getInsurerById = (id, callback) => {
  Insurer.findById(id, callback)
}

// Add Insurer
module.exports.addInsurer = (insurer, callback) => {
  Insurer.create(insurer, callback)
}

// Update Insurer
module.exports.updateDepartment = (id, insurer, options, callback) => {
  var query = {_id: id}
  var update = {
    name: insurer.name
  }
  Insurer.findOneAndUpdate(query, update, options, callback)
}

// Delete Insurer
module.exports.removeInsurer = (id, callback) => {
  var query = {_id: id}
  Insurer.remove(query, callback)
}
