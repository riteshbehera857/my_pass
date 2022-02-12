// exports.checkID = (req, res, next, val) => {

//     if (req.params.id * 1 > data.length) {
//         return res.status(404).json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
//     }

//     next()
// }

// exports.checkBody = (req, res, next) => {

//     if (!req.body.name || !req.body.password) {
//         return res.status(400).json({
//             status: "fail",
//             message: "Missing name or price"
//         })
//     }

//     next()
// }

exports.getAllCredentials = (req, res) => {

    res
        .status(200)
        .json({
            status: 'success',
            message: 'Retrieved successfully',
        })
}

// exports.getCredential = (req, res) => {

//     const id = req.params.id * 1
//     const item = data.find(el => el.id === id)

//     res.status(200).json({
//         status: "success",
//         data: {
//             data: item
//         }
//     })
// }

exports.createCredential = (req, res) => {

    if (!req.body.text) {
        return res.status(400).json({
            message: "Missing text"
        })
    }

    // const newId = data[data.length - 1].id + 1
    // const newCredentials = Object.assign({ id: newId }, req.body)

    // data.push(newCredentials)

    // fs.writeFile(`${__dirname}/dev-data/credentials.json`, JSON.stringify(data), err => {
    //     if (err) {
    //         console.log(err)
    //         return
    //     } else {
    res.status(201).json({
        status: "success",
        data: {
            data: newCredentials
        }
    })
}

exports.updateCredential = (req, res) => {

    res.status(200).json({
        status: "success",
        data: {
            data: '<Updated credential here...>'
        }
    })
}

exports.deleteCredential = (req, res) => {

    res.status(204).json({
        status: "success",
        data: {
            data: null
        }
    })
}