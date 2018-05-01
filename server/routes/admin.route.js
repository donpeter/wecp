const router = require('express').Router();
const adminController = require('../controllers/admin.controller');


router.route('/')
    .get(adminController.get)
    .post(adminController.create)

module.exports = router;