const {model, Schema} = require("mongoose");

let ticketSchema = new Schema({
    GuildID: String,
    MemberID: String,
    TicketID: String,
    ChannelID: String,
    Closed: Boolean,
    Locked: Boolean,
    Type: String,

});

module.exports = model("Ticket", ticketSchema);