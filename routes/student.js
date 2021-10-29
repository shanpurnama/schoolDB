
const express = require('express')
const router = express.Router()
const studentController = require('../controllers/controllerStudent')

router.get('/', studentController.getAll)
router.get('/getByFirstName', studentController.getByFirstName)
router.get('/getBySubjectId/:id', studentController.getStudentBySubjectId)
router.post('/', studentController.create)
router.put('/:id', studentController.updateStudent)
router.delete('/:id', studentController.removestudent)


module.exports = router