const express = require('express')
const { getAllCredentials, createCredential, getCredential, updateCredential, deleteCredential, checkID, checkBody } = require('./../controller/credController')

const router = express.Router();

router.param('id', checkID)

router
    .route('/')
    .get(getAllCredentials)
    .post(checkBody, createCredential)

router
    .route('/:id')
    .get(getCredential)
    .patch(updateCredential)
    .delete(deleteCredential)


module.exports = router;