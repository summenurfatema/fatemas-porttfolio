const express= require('express')
const { getStudent } = require('../controllers/student.controller')
const studentRoute= express.Router()

studentRoute.get('/test',getStudent)

module.exports = studentRoute