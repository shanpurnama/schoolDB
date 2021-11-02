const schoolDB = require('../models/school_db')
const { v4: uuidv4 } = require('uuid')

function getStudentBySubjectId(req, res) {
    const sql = `
    SELECT
        students.first_name,
        students.last_name,
        students.email,
        students.subject_id
    FROM
        students
    WHERE
        subject_id = '${req.params.id}'`
    schoolDB.query(sql, function(err, oneDataStudent) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(200).json({
                oneDataStudent,
                message: 'OK successfuly'
            })
        }
    })
}

function getByFirstName(req, res) {
    const sql = `
    SELECT
        students.first_name,
        students.last_name,
        students.email,
        students.subject_id
    FROM
        students
    WHERE
        students.first_name = '${req.query.firstName}'`
    schoolDB.query(sql, function(err, oneDataStudent) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: 'Internal Server Eror'
            })
        } else {
            res.status(200).json({
                oneDataStudent,
                message: 'OK successfully'
            })
        }
    })
}

function getAll(req, res) {
    const sql = 'SELECT * FROM students'
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
    const uuid = uuidv4()
    const data = {
        id: uuid,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        subject_id: req.body.subject_id
    }
    const sql = 'INSERT INTO students SET ?'
    schoolDB.query(sql, data, function(err) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(201).json({
                message: 'success add new student'
            })
        }
    })
}

function updateStudent(req, res) {
    const sql = `
    UPDATE
        students
    SET
        first_name = '${req.body.first_name}',
        last_name = '${req.body.last_name}',
        email = '${req.body.email}',
        subject_id = '${req.body.subject_id}'
    WHERE
        id = '${req.params.id}'`
    schoolDB.query(sql, function(err) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(201).json({
                message: 'success update'
            })
        }
        
    })
}

function removestudent(req, res) {
    var sql = `DELETE FROM students WHERE id = '${req.params.id}'`
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
    updateStudent,
    removestudent,
    getByFirstName,
    getStudentBySubjectId
}