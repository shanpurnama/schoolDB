
const express = require('express')
const router = express.Router()
const studentController = require('../controllers/controllerStudent')
const verify = require('../middleware/verify')

router.get('/', verify.authenticate, studentController.getAll)
router.post('/', verify.authenticate, studentController.create)
router.put('/:id', verify.authenticate, verify.authorize, studentController.updateStudent)
router.delete('/:id', verify.authenticate, verify.authorize, studentController.removestudent)

router.get('/getByFirstName', studentController.getByFirstName)
router.get('/getBySubjectId/:id', studentController.getStudentBySubjectId)


module.exports = router