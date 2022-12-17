const {model, Schema} = require('mongoose');

let leaveSchema = new Schema({
    Guild: String,
    Channel: String,
    Msg: String,
    Role: String
});

module.exports = model("Leave", leaveSchema);