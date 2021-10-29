var schoolDB = require('../models/school_db')
const { v4: uuidv4 } = require('uuid')

function getAll(req, res) {
    const sql =  'SELECT * FROM subjects'
    schoolDB.query(sql, function(err, data) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(201).json({
                data,
                message: 'OK'
            })
        }
    })
}

function create(req, res) {
    var uuid = uuidv4()
    var subjectData = {
        id: uuid,
        subject_name: req.body.subject_name
    }
   const sql = 'INSERT INTO subjects SET ?'
   schoolDB.query(sql, subjectData, function(err) {
       if (err) {
           res.status(500).json({
               message: 'Internal Server Error'
           })
       } else {
           res.status(201).json({
               message: 'Success create'
           })
       }
   })
}

module.exports = {
    create,
    getAll
    
}