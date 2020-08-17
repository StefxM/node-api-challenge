const actiondb = require('../helpers/actionModel');
const express = require('express');




const router = express.Router();

router.get('/api/actions', (req,res) => {
    actiondb.get(req.id)
        .then(actions =>
            res.status(200).json(actions)
        )
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Cant bring back the actions"
            })
        })

})

router.get('/api/actions/:id', (req,res) => {
    actiondb.get(req.params.id)
        .then(actions =>
            res.status(200).json(actions)
        )
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Cant bring back the actions"
            })
        })

})

//all good
router.post('/api/actions', (req,res) => {
    actiondb.insert(req.body)
    .then((id) => {
        res.status(201).json(id)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json({
            message: "Theres an error saving action"
        })
    })

})
//done
router.put('/api/actions/:id', (req,res) => {
    actiondb.update(req.params.id, req.body)
        .then((actions) => {
            if (actions) {
                res.status(200).json(actions)
            } else {
                res.status(404).json({
                    message: "Action doesnt exist"
                })
            }
        })
        .catch(error => console.log(error))
})


//all good
router.delete('/api/actions/:id', (req,res) => {
    actiondb.remove(req.params.id)
        .then((count) => {
            if (count > 0) {
                res.status(200).json({
                    message: "Action has been deleted"
                })
            } else {
                res.status(404).json({
                    message: "Error removing action"
                })
            }
        })
        .catch(error => console.log(error))
    
})


module.exports = router;
/*
-   `get()`: resolves to an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.
-   `insert()`: calling insert passing it a resource object will add it to the database and return the newly created resource.
-   `update()`: accepts two arguments, the first is the `id` of the resource to update, and the second is an object with the `changes` to apply. It returns the updated resource. If a resource with the provided `id` is not found, the method returns `null`.
-   `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.*/ 