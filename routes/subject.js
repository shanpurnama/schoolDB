const express = require('express')
const router = express.Router()
const subjectController = require('../controllers/controllerSubject')

router.get('/', subjectController.getAll)
router.post('/add', subjectController.create)
router.put('/edit/:id', subjectController.updateSubject)
router.delete('/delete/:id', subjectController.deleteSubject)

module.exports = router