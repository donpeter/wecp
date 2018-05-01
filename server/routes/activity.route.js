const router = require('express').Router();
const activityContoller = require('../controllers/activity.controller');


router.route('/:id')
    .get(activityContoller.get)
    .post(activityContoller.create)
    .delete(activityContoller.remove)

module.exports = router;