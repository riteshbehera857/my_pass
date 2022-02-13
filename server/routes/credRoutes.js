const express = require('express')
const { getAllCredentials, createCredential, updateCredential, deleteCredential } = require('./../controller/credController')

const router = express.Router();

router
    .route('/')
    .get(getAllCredentials)
    .post(createCredential)

router
    .route('/:id')
    .patch(updateCredential)
    .delete(deleteCredential)


module.exports = router;