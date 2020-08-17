const projectdb = require('../helpers/projectModel');
const express = require('express');


const router = express.Router();
//good
router.get('/api/project', (req,res) => {
    projectdb.get(req.id)
    .then(projects => res.status(200).json(projects))
    .catch(error => console.log(error))
})
//idk
router.get('/api/project/:id', (req,res) => {
    projectdb.get(req.params.project_id)
    .then(projects => res.status(200).json(projects))
    .catch(error => console.log(error))
})
//WORKS
router.post('/api/project', (req,res) => {
    projectdb.insert(req.body)
    .then((project) => {
        res.status(201).json(project)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json({
            message: "Theres an error saving project"
        })
    })

})
//done
router.put('/api/project/:id', (req,res) => {
    projectdb.update(req.params.id, req.body)
        .then((projects) => {
            if (projects) {
                res.status(200).json(projects)
            } else {
                res.status(404).json({
                    message: "Action doesnt exist"
                })
            }
        })
        .catch(error => console.log(error))
})


//all good
router.delete('/api/project/:id', (req,res) => {
   projectdb.remove(req.params.id)
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

/*The `projectModel.js` helper includes an extra method called `getProjectActions()` that takes a _project id_ as it's only argument and returns a list of all the _actions_ for the _project_.*/