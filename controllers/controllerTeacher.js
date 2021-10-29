const schoolDB = require('../models/school_db')
const { v4: uuidv4 } = require('uuid')


function getAll(req, res) {
    var sql = 'SELECT * FROM teachers'
    schoolDB.query(sql, function(err, data) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(200).json({
                data,
                message: 'OK'
            })
        }
    })
}

function create(req, res) {
    var uuid = uuidv4()
    var dataTeacher = {
        id: uuid,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        subject_id: req.body.subject_id
    }
    const sql = 'INSERT INTO teachers SET ?'
    schoolDB.query(sql, dataTeacher, function(err) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(201).json({
                message: 'success create new teacher'
            })
        }
    })
}

function updateDataTeacher(req, res) {
    // var newData = {
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     email: req.body.email
    // }
    const sql = `
    UPDATE
        teachers
    SET 
        first_name = '${req.body.first_name}',
        last_name = '${req.body.last_name}', 
        email = '${req.body.email}'
    WHERE
        id = '${req.params.id}'`
    schoolDB.query(sql, function(err) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(200).json({
                message: 'OK success update'
            })
        }
    })
}


function deleteDataTeacher(req, res) {
    const sql = `DELETE FROM teachers WHERE id = '${req.params.id}'`
    schoolDB.query(sql, function(err) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(200).json({
                message: 'success delete one id'
            })
        }
    })
}

module.exports = {
    create,
    getAll,
    updateDataTeacher,
    deleteDataTeacher
}