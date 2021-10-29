const express = require('express')
const router = express.Router()
const subjectController = require('../controllers/controllerSubject')

router.get('/', subjectController.getAll)
router.post('/', subjectController.create)

module.exports = router