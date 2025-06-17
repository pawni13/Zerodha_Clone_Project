const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const bcrypt = require('bcryptjs');

const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true],
        unique: true,
    },
    password: {
        type: String,
        required: [true],
        unique: true,
    }
});

//sespection
UsersSchema.pre("save", async function() {
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("users", UsersSchema);