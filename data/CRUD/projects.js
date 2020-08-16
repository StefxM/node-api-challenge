const db = require('../data/db');
const express = require('express');


const router = express.Router();

module.exports = router;

/*The `projectModel.js` helper includes an extra method called `getProjectActions()` that takes a _project id_ as it's only argument and returns a list of all the _actions_ for the _project_.*/