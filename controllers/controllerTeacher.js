const schoolDB = require('../models/school_db')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


function register(req, res) {
    const data = {
        email: req.body.email
    }
    const sql = 'SELECT * FROM teachers WHERE ?'
    schoolDB.query(sql, data, function(err) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else if (data.length > 0) {
            res.status(400).json({
                message: 'email already used'
            })
        } else {
            const uuid = uuidv4()
            bcrypt.hash(req.body.password, 3, function(err, hash) {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'Internal Server Error'
                    })
                } else {
                    const dataTeacher = {
                        id: uuid,
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: hash,
                        subject_id: req.body.subject_id
                    }
                    var sql = 'INSERT INTO teachers SET ?'
                    schoolDB.query(sql, dataTeacher, function(err) {
                        if (err) {
                            console.log(err)
                            res.status(500).json({
                                message: 'Internal Server Error'
                            })
                        } else {
                            res.status(201).json({
                                message: 'Success create new teacher'
                            })
                        }
                    })
                }
            })
        }
    })
}

function login(req, res) {
    const dataEmail = {
        email: req.body.email
    }
    schoolDB.query('SELECT * FROM teachers WHERE ?', dataEmail, function(err, data) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else if (data.length === 0) {
            res.status(404).json({
                message: 'wrong username and password or cant find email'
            })
        } else {
            bcrypt.compare(req.body.password, data[0].password, function(err, result) {
                if (err) {
                    res.status(500).json({
                        message: 'Internal Server Error'
                    })
                } else if (result === false) {
                    res.status(404).json({
                        message: 'wrong password'
                    })
                } else {
                    var token = jwt.sign({ 
                        email: data[0].email,
                        subject_id: data[0].subject_id
                    }, process.env.PRIVATE_KEY)
                    res.status(200).json({
                        token,
                        message: 'OK successfully loggin'
                    })
                }
            })
        }
    })
}

function getAll(req, res) {
    var sql = 'SELECT * FROM teachers'
    schoolDB.query(sql, function(err, data) {
        if (err) {
            console.log(err)
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
    const dataTeacher = {
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
    deleteDataTeacher,
    register,
    login
}