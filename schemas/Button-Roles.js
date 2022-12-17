const { model, Schema } = require("mongoose")

module.exports = model("button-roles", new Schema({

    Name: String,
    Description: String,
    Role: String,
    User: String,
    Guild: String,
    Roles: Array
    
}))