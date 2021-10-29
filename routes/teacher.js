const express = require('express')
const router = express.Router()
const teacherController = require('../controllers/controllerTeacher')

router.get('/', teacherController.getAll)
router.post('/', teacherController.create)
router.put('/:id', teacherController.updateDataTeacher)
router.delete('/:id', teacherController.deleteDataTeacher)


module.exports = router