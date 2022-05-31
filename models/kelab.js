const mongoose = require("mongoose");

const conn = require("../middleware/connection");

const kelabSchema = new mongoose.Schema(
    {
        kelab_id: { type: String, required: true },
        kelab_nama: { type: String, required: true, unique: true },
        kelab_tel: { type: String, required: true, unique: true },
        kelab_email: { type: String, required: true },
        kelab_password: { type: String, required: true },
        isMaster: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true,
    }
);

module.exports = conn.dropgodb.model("Kelab", kelabSchema);