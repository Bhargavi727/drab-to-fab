require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlmakeover = require('../controller/makeovers');
var ctrlothers = require('../controller/others');

/* GET Locations page */
router.get('/', ctrlmakeover.homeList);
router.get('/makeovers', ctrlmakeover.makeoverInfo);
router.get('/makeovers/review/new', ctrlmakeover.addReview);

/*GET others page */
router.get('/about', ctrlothers.about);

router.get('/signin', ctrlothers.signin);

router.get('/register', ctrlothers.register);

module.exports = router;