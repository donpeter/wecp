const ActivityLog = require('../models/activity-log.model');
const response = require('../lib/responsMessage');
const get = (req, res, next) => {
    ActivityLog.findOne({id: req.params.id})
        .then(activity => {
            if(!activity)
                return res.status(404).json(response.errorMessage());
            res.json(response.successMessage(activity))
        })
        .catch(err => res.status(500).json(response.serverErrorMessage(err)))
};

const create = (req, res, next) => {
    const payload = {
        id: req.params.id,
        logs: req.body
    };
    ActivityLog.findOne({id: payload.id})
        .then(activity => {
            if (!activity) {
                return ActivityLog.create(payload); // Create New Activity if none exit

            }
            activity.logs = [...activity.logs, ...payload.logs];
            return activity.save();

        })
        .then(activity =>   res.status(201).json(response.successMessage(activity,"Activity Logged", 201)))
        .catch(err => res.status(500).json(response.serverErrorMessage(err)));

};

const remove = (req, res, next) => {
    ActivityLog.findOneAndRemove({id: req.params.id})
        .then(() => res.status(200).json(response.successMessage()))
        .catch(err => res.status(500).json(response.serverErrorMessage(err)));
};

module.exports = {
    get,
    create,
    remove
};