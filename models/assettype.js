var mongoose = require('mongoose')

//Assetype Schema
var assettypeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

var Assettype = module.exports = mongoose.model('Assettype', assettypeSchema)

//Get all Assettypes
module.exports.getAssettypes = (callback, limit) => {
  Assettype.find(callback).limit(limit)
}

//Get a single Assettype
module.exports.getAssettypeById = (id, callback) => {
  Assettype.findById(id, callback)
}

// Add Assettypes
module.exports.addAssettype = (assettype, callback) => {
  Assettype.create(assettype, callback)
}

// Update Assettypes
module.exports.updateAssettype = (id, assettype, options, callback) => {
  var query = {_id: id}
  var update = {
    name: assettype.name
  }
  Assettype.findOneAndUpdate(query, update, options, callback)
}

// Delete Assettypes
module.exports.removeAssettype = (id, callback) => {
  var query = {_id: id}
  Assettype.remove(query, callback)
}
