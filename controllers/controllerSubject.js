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

function updateSubject(req, res) {
    const sql = `
    UPDATE
        subjects
    SET
        subject_name = '${req.body.subject_name}'
    WHERE
        id = '${req.params.id}'`
    schoolDB.query(sql, function(err) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: 'internal server error'
            })
        } else {
            res.status(201).json({
                message: 'successfully update subject'
            })
        }
    })
}

function deleteSubject(req, res) {
    const sql = `DELETE FROM subjects WHERE id = '${req.params.id}'`
    schoolDB.query(sql, function(err) {
        if (err) {
            res.status(500).json({
                message: 'Internal server error'
            })
        } else {
            res.status(201).json({
                message: 'successfully delete'
            })
        }
    })
}

module.exports = {
    create,
    getAll,
    updateSubject,
    deleteSubject
    
}