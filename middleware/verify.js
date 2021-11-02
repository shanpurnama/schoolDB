
const e = require('express')
const jwt = require('jsonwebtoken')
const schoolDB = require('../models/school_db')

function authenticate(req, res, next) {
    try {
        jwt.verify(req.headers.token, process.env.PRIVATE_KEY)
        next()
      } catch(err) {
        res.status(err).json(400).json({
            message: 'unauthenticate'
        })
      }
}


function authorize(req, res, next) {
  try {
      const decode = jwt.verify(req.headers.token, process.env.PRIVATE_KEY)
      const sql = `
      SELECT
          students.first_name,
          students.last_name,
          students.email,
          students.subject_id
      FROM
          students
      WHERE
          students.id = '${req.params.id}'`
        schoolDB.query(sql, function(err, data) {
          if (err) {
              res.status(500).json({
                  message: 'Internal Server Error'
              })
          } else {
            if (data[0].subject_id === decode.subject_id) {
              next()
            } else {
              res.status(400).json({
                message: 'anuthorize'
              })
            }
          }
        })
  } catch(err) {
    res.status(400).json({
      message: 'cant run'
    })
  }
}

module.exports = {
    authenticate,
    authorize
}