var mongoose = require('mongoose')

//Assetype Schema
var countrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

var Country = module.exports = mongoose.model('Country', countrySchema)

//Get all Countries
module.exports.getCountries = (callback, limit) => {
  Country.find(callback).limit(limit)
}

//Get a single Country
module.exports.getCountryById = (id, callback) => {
  Country.findById(id, callback)
}

// Add Countries
module.exports.addCountry = (country, callback) => {
  Country.create(country, callback)
}

// Update Countries
module.exports.updateCountry = (id, country, options, callback) => {
  var query = {_id: id}
  var update = {
    name: country.name
  }
  Country.findOneAndUpdate(query, update, options, callback)
}

// Delete Countries
module.exports.removeCountry = (id, callback) => {
  var query = {_id: id}
  Country.remove(query, callback)
}
