const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activityLogSchema = new Schema({
    id: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim:true
    },
    logs: [{
         event: {
             type: String,
             trim:true,
             required: true,

         },
        time: {
             type: Date,
            required: true,
            default: Date.now
        }
    }]
});

class ActivityLog {

    /*
    * Reverse the Logs when converted to Json object
    * */
    toJSON() {
        this.logs = this.logs.reverse();
        return this._doc;
    }
}

activityLogSchema.loadClass(ActivityLog);

module.exports = mongoose.model('ActivityLog', activityLogSchema);

