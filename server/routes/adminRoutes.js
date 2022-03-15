const express = require('express')
const { createAdmin, loginAdmin, getMe } = require('./../controller/adminController')
const router = express.Router();

router.post('/register', createAdmin)
router.post('/login', loginAdmin)
router.get('/me', getMe)

module.exports = router;