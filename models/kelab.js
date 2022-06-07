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
        s3_upload_url: { type: String },
    },
);

module.exports = conn.dropgodb.model("Kelab", kelabSchema);