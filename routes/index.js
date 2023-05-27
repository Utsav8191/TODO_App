const express = require('express');

const router = express.Router();

const appController = require('../controllers/index');


router.get('/', appController.home);
router.post('/create-task', appController.createTask);
router.post('/delete-task', appController.deleteTask);


module.exports = router;