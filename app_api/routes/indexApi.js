const express = require('express');
const router = express.Router();

const ctrlApiAwards = require('../controllers/ctrlApiAwards');
const ctrlApiMembers = require('../controllers/ctrlApiMembers');

router
    .route('/awards')
    .get(ctrlApiAwards.awardlist)
    .post(ctrlApiAwards.addAward);

router
    .route('/members')
    .get(ctrlApiMembers.memberlist)
    .post(ctrlApiMembers.addMember);

module.exports = router;