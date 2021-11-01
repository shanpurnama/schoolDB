const express = require('express')
const router = express.Router()
const teacherController = require('../controllers/controllerTeacher')
const verify = require('../middleware/verify')

router.get('/', teacherController.getAll)
router.post('/', teacherController.create)
router.put('/:id', teacherController.updateDataTeacher)
router.delete('/:id', teacherController.deleteDataTeacher)

router.post('/register', teacherController.register)
router.post('/login', teacherController.login)


module.exports = router