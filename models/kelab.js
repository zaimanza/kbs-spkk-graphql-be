const mongoose = require("mongoose");

const conn = require("../middleware/connection");

const kelabSchema = new mongoose.Schema(
    {
        kelab_id: { type: String },
        kelab_nama: { type: String },
        kelab_tel: { type: String },
        kelab_email: { type: String },
        kelab_password: { type: String },
        isMaster: { type: Boolean, default: false },
    },
);

module.exports = conn.dropgodb.model("Kelab", kelabSchema);