const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(express.static(__dirname + './client'))

Assettype = require('./models/assettype')
Fixedasset = require('./models/fixedasset')
Location = require('./models/location')
Department = require('./models/department')
Insurer = require('./models/insurer')
Country = require('./models/country')

//Connect to mongoose
mongoose.connect('mongodb://localhost/fixedassets')
const db = mongoose.connection

app.use(bodyParser.json())

// a call to the route
app.get('/', (req, res) => {
    res.send('Please use /api/fixedassets')
})

// Fixedasset module
// Get all fixed assets
app.get('/api/fixedassets', (req, res) => {
  Fixedasset.getFixedassets((err, fixedassets) => {
    if (err) {
      console.log(err)
    }
    res.json(fixedassets)
  })
})

// Get a single fixed asset
app.get('/api/fixedassets/:_id', (req, res) => {
  Fixedasset.getFixedassetById(req.params._id, (err, fixedasset) => {
    if (err) {
      console.log(err)
    }
    res.json(fixedasset)
  })
})

// Add fixedasset
app.post('/api/fixedassets', (req, res) => {
  var fixedasset = req.body
  Fixedasset.addFixedassets(fixedasset, (err, fixedasset) => {
    if (err) {
      console.log(err)
    }
    res.json(fixedasset)
  })
})

// Update fixedassets
app.put('/api/fixedassets/:_id', (req, res) => {
  var id = req.params._id
  var fixedasset = req.body
  fixedasset.updateFixedasset(id, fixedasset, {}, (err, fixedasset) => {
    if (err) {
      console.log(err)
    }
    res.json(fixedasset)
  })
})

// Delete fixedasset
app.delete('/api/fixedassets/:_id', (req, res) => {
  var id = req.params._id
  Fixedasset.removeFixedasset(id, (err, fixedasset) => {
    if (err) {
      console.log(err)
    }
    res.json(fixedasset)
  })
})
// End of fixed asset module

// Get all Locations Module
app.get('/api/locations', (req, res) => {
  Location.getLocations((err, locations) => {
    if (err) {
      console.log(err)
    }
    res.json(locations)
  })
})

// Get a single location
app.get('/api/locations/:_id', (req, res) => {
  Location.getLocationById(req.params._id, (err, location) => {
    if (err) {
      console.log(err)
    }
    res.json(location)
  })
})

// Add location
app.post('/api/locations', (req, res) => {
  var location = req.body
  Location.addLocation(location, (err, location) => {
    if (err) {
      console.log(err)
    }
    res.json(location)
  })
})

// Update location
app.put('/api/locations/:_id', (req, res) => {
  var id = req.params._id
  var location = req.body
  Location.updateLocation(id, location, {}, (err, location) => {
    if (err) {
      console.log(err)
    }
    res.json(location)
  })
})
// End of location Module


// Get all departments module
app.get('/api/departments', (req, res) => {
  Department.getDepartments((err, departments) => {
    if (err) {
      console.log(err)
    }
    res.json(departments)
  })
})

// Get a single department
app.get('/api/departments/:_id', (req, res) => {
  Department.getDepartmentById(req.params._id, (err, department) => {
    if (err) {
      console.log(err)
    }
    res.json(department)
  })
})

// Add department
app.post('/api/departments', (req, res) => {
  var department = req.body
  Location.addFixedassets(department, (err, department) => {
    if (err) {
      console.log(err)
    }
    res.json(department)
  })
})

// Update fixedassets
app.put('/api/departments/:_id', (req, res) => {
  var id = req.params._id
  var department = req.body
  fixedasset.updateDepartment(id, department, {}, (err, department) => {
    if (err) {
      console.log(err)
    }
    res.json(department)
  })
})

// Delete department
app.delete('/api/departments/:_id', (req, res) => {
  var id = req.params._id
  Department.removeDepartment(id, (err, department) => {
    if (err) {
      console.log(err)
    }
    res.json(department)
  })
})
// End of department Module

// Get all asset type modules
app.get('/api/assettypes', (req, res) => {
  Assettype.getAssettypes((err, assettypes) => {
    if (err) {
      console.log(err)
    }
    res.json(assettypes)
  })
})

// Get a single assettype
app.get('/api/assettypes/:_id', (req, res) => {
  Assettype.getAssettypeById(req.params._id, (err, assettype) => {
    if (err) {
      console.log(err)
    }
    res.json(assettype)
  })
})

// Add assettype
app.post('/api/assettypes', (req, res) => {
  var assettype = req.body
  Assettype.addAssettype(assettype, (err, assettype) => {
    if (err) {
      console.log(err)
    }
    res.json(assettype)
  })
})

// Update assettype
app.put('/api/assettypes/:_id', (req, res) => {
  var id = req.params._id
  var assettype = req.body
  assettype.updateAssettype(id, assettype, {}, (err, assettype) => {
    if (err) {
      console.log(err)
    }
    res.json(assettype)
  })
})

// Delete assettype
app.delete('/api/assettypes/:_id', (req, res) => {
  var id = req.params._id
  Assettype.removeAssettype(id, (err, assettype) => {
    if (err) {
      console.log(err)
    }
    res.json(assettype)
  })
})
// End of asset type Module

// insurer module
app.get('/api/insurers', (req, res) => {
  Insurer.getInsurers((err, insurers) => {
    if (err) {
      console.log(err)
    }
    res.json(insurers)
  })
})

// Get a single insurer
app.get('/api/insurers/:_id', (req, res) => {
  Insurer.getInsurerById(req.params._id, (err, insurer) => {
    if (err) {
      console.log(err)
    }
    res.json(insurer)
  })
})

// Add insurer
app.post('/api/insurers', (req, res) => {
  var insurer = req.body
  Insurer.addAssettype(assettype, (err, insurer) => {
    if (err) {
      console.log(err)
    }
    res.json(insurer)
  })
})
// Update insurer
app.put('/api/insurers/:_id', (req, res) => {
  var id = req.params._id
  var insurer = req.body
  Insurer.updateInsurer(id, insurer, {}, (err, insurer) => {
    if (err) {
      console.log(err)
    }
    res.json(insurer)
  })
})

// Delete insurer
app.delete('/api/insurers/:_id', (req, res) => {
  var id = req.params._id
  Insurer.removeInsurer(id, (err, insurer) => {
    if (err) {
      console.log(err)
    }
    res.json(insurer)
  })
})
// End of insurer Module



// Country module
app.get('/api/countries', (req, res) => {
  Country.getCountries((err, countries) => {
    if (err) {
      console.log(err)
    }
    res.json(countries)
  })
})

// Get a single country
app.get('/api/countries/:_id', (req, res) => {
  Country.getCountryById(req.params._id, (err, country) => {
    if (err) {
      console.log(err)
    }
    res.json(country)
  })
})

// Add updateCountry
app.post('/api/countries', (req, res) => {
  var country = req.body
  Country.addCountry(country, (err, country) => {
    if (err) {
      console.log(err)
    }
    res.json(country)
  })
})
// Update country
app.put('/api/countries/:_id', (req, res) => {
  var id = req.params._id
  var country = req.body
  Country.updateCountry(id, country, {}, (err, country) => {
    if (err) {
      console.log(err)
    }
    res.json(country)
  })
})

// Delete country
app.delete('/api/countries/:_id', (req, res) => {
  var id = req.params._id
  Country.removeCountry(id, (err, country) => {
    if (err) {
      console.log(err)
    }
    res.json(country)
  })
})
// End of country Module

app.listen(3000)
console.log('Running on port 3000...')
