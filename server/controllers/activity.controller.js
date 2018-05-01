const Activity = require('../models/activity.model');
const response = require('../lib/responsMessage');
const get = (req, res, next) => {
    Activity.findOne({id:req.params.id})
        .then(activity => {
            if(!activity)
                return res.status(404).json(response.errorMessage());
            res.json(response.successMessage(activity))
        })
        .catch(err => res.status(500).json(response.serverErrorMessage(err)))
}

const create = (req, res, next) => {
    const body = req.body;
    body.id = req.params.id;
    Activity.findOne({id: body.id})
        .then(activity => {
            if(!activity)
                return Activity.create(req.body); // Create New Activity if none exit
            activity.logs =[...activity.logs, ...body.logs];
            return activity.save();

        })
        .then(activity =>   res.status(201).json(response.successMessage(activity,"Activity Logged", 201)))
        .catch(err => res.status(500).json(response.serverErrorMessage(err)));

}

const remove = (req, res, next) => {
    Activity.findOneAndRemove({id: req.params.id})
        .then(() => res.status(200).json(response.successMessage()))
        .catch(err => res.status(500).json(response.serverErrorMessage(err)));
}

module.exports = {
    get,
    create,
    remove
}