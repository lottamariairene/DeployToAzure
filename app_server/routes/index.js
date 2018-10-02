const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlMembers = require('../controllers/ctrlMembers'); // ... for the list of members
const ctrlAwards = require('../controllers/ctrlAwards'); // ... for the the list of awards

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/members', ctrlMembers.memberlist); //List of band members
router.get('/awards', ctrlAwards.awardlist);  // List of awards

module.exports = router;
