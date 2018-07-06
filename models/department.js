var mongoose = require('mongoose')

//Department Schema
var departmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

var Department = module.exports = mongoose.model('Department', departmentSchema)

//Get all Departments
module.exports.getDepartments = (callback, limit) => {
  Department.find(callback).limit(limit)
}

//Get a single Department
module.exports.getDepartmentById = (id, callback) => {
  Department.findById(id, callback)
}

// Add Department
module.exports.addDepartment = (department, callback) => {
  Department.create(department, callback)
}

// Update Department
module.exports.updateDepartment = (id, department, options, callback) => {
  var query = {_id: id}
  var update = {
    name: department.name
  }
  Department.findOneAndUpdate(query, update, options, callback)
}

// Delete Department
module.exports.removeDepartment = (id, callback) => {
  var query = {_id: id}
  Department.remove(query, callback)
}
