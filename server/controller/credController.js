const Credential = require("../model/credModel")

exports.getAllCredentials = async (req, res, next) => {
    try {
        const credentials = await Credential.find()
        res.status(200).json({
            status: 'success',
            results: credentials.length,
            data: {
                credentials
            }
        })
    } catch (error) {
        next(error)
    }
}

exports.createCredential = async (req, res, next) => {
    try {
        const { website, username, password } = req.body
        const credential = await Credential.create({ website, username, password })

        if (!req.body) {
            res.status(400)
            throw new Error('text is required')
        }
        res.status(201).json({
            status: "success",
            data: {
                credential
            }
        })
    } catch (error) {
        next(error)
    }
}

exports.updateCredential = async (req, res, next) => {
    try {
        const id = req.params.id
        const credential = await Credential.findById(id)

        if (!credential) {
            res.status(404)
            throw new Error('Credential not found')
        }

        const updatedCred = await Credential.updateOne(req.body)

        res.status(200).json({
            status: "success",
            message: `${req.params.id} goal Updated successfully`,
            data: {
                updatedCred
            }
        })
    } catch (error) {
        next(error)
    }
}

exports.deleteCredential = async (req, res, next) => {
    try {
        const credential = await Credential.findById(req.params.id)

        if (!credential) {
            res.status(404)
            throw new Error('Credential not found')
        }

        await credential.remove()

        res.status(204).json({
            status: "success",
            message: `${req.params.id} goal Deleted successfully`,
        })
    } catch (error) {
        next(error)
    }
}