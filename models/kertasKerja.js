const mongoose = require("mongoose");

const conn = require("../middleware/connection");

const kertasKerjaSchema = new mongoose.Schema(
    {
        kelab_id: { type: String },
        nama_program: { type: String },
        pengarah_program: { type: String },
        tarikh_program: { type: String },
        email_pengarah: { type: String },
        nombor_matrik_pengarah: { type: String },
        nombor_tel_pengarah: { type: String },
        fakulti: { type: String },
        kertas_kerja_status: { type: String },
        s3_upload_url: { type: String },
        komen: { type: String },
    },
);

module.exports = conn.dropgodb.model("KertasKerja", kertasKerjaSchema);