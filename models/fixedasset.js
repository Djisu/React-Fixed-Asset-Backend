var mongoose = require('mongoose')

//fixedasset Schema
var fixedassetSchema = mongoose.Schema({
  assettype: {
    type: String,
    required: true
  },
  assetdesc: {
    type: String,
    required: true
  },
  depretype: {
    type: String,
    required: true
  },
  deprerate: {
    type: Number,
    required: true
  },
  residamount: {
    type: Number,
    required: true
  },
  usefulyears: {
    type: Number,
    required: true
  },
  assetcost: {
    type: Number,
    required: true
  },
  purchasedate: {
    type: Date,
    required: true
  },
  serialno: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  insureflag: {
    type: String
  },
  imageurl: {
    type: String
  },
  assetdebitcode: {
    type: String
  },
  assetcreditcode: {
    type: String
  },
  depreexpdebitcode: {
    type: String
  },
  depreexpcreditcode: {
    type: String
  },
  insurecost: {
    type: Number,
    required: true
  }
})

var Fixedasset = module.exports = mongoose.model('Fixedasset', fixedassetSchema)

//Get all Fixedassets
module.exports.getFixedassets = (callback, limit) => {
  Fixedasset.find(callback).limit(limit)
}

//Get a single Fixedasset
module.exports.getFixedassetById = (id, callback) => {
  Fixedasset.findById(id, callback)
}

// Add Fixedassets
module.exports.addFixedasset = (fixedasset, callback) => {
  Fixedasset.create(fixedasset, callback)
}

// Update Fixedassets
module.exports.updateFixedasset = (id, fixedasset, options, callback) => {
  var query = {_id: id}
  var update = {
    name: fixedasset.name,
    assettype:  fixedasset.assettype,
    assetdesc:  fixedasset.assetdesc,
    depretype:  fixedasset.depretype,
    deprerate:  fixedasset.deprerate,
    residamount:  fixedasset.residamount,
    usefulyears:  fixedasset.usefulyears,
    assetcost:  fixedasset.assetcost,
    purchasedate:  fixedasset.purchasedate,
    serialno:  fixedasset.serialno,
    location: fixedasset.location,
    department:  fixedasset.department,
    insureflag: fixedasset.insureflag,
    imageurl:  fixedasset.imageurl,
    assetdebitcode:  fixedasset.assetdebitcode ,
    assetcreditcode:  fixedasset.depreexpdebitcode,
    depreexpdebitcode:  fixedasset.depreexpdebitcode,
    depreexpcreditcode:  fixedasset.depreexpcreditcode,
    insurecost: fixedasset.insurecost
  }
  Fixedasset.findOneAndUpdate(query, update, options, callback)
}

// Delete Fixedasset
module.exports.removeFixedasset = (id, callback) => {
  var query = {_id: id}
  Fixedasset.remove(query, callback)
}
