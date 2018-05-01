const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
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

class Activity {

    /*
    * Reverse the Logs when converted to Json object
    * */
    toJSON() {
        this.logs = this.logs.reverse();
        return this._doc;
    }
}
activitySchema.loadClass(Activity);

module.exports =   mongoose.model('Activity', activitySchema);

