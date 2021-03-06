const KertasKerja = require("../../models/kertasKerja")
const bcrypt = require("bcryptjs")

exports.kertasKerjaAddSchema = `
input kertasKerjaReq {
    kelab_id: String!,
    nama_program: String!,
    pengarah_program: String!,
    tarikh_program: String!,
    email_pengarah: String!,
    nombor_matrik_pengarah: String!,
    nombor_tel_pengarah: String!,
    fakulti: String!,
    s3_upload_url:String,
    komen: String,
}

type kertasKerjaRes {
    _id: String,
    kelab_id: String,
    nama_program: String,
    pengarah_program: String,
    tarikh_program: String,
    email_pengarah: String,
    nombor_matrik_pengarah: String,
    nombor_tel_pengarah: String,
    fakulti: String,
    kertas_kerja_status: String,
    s3_upload_url:String,
    komen: String,
}

extend type Mutation {
    kertasKerjaAdd( 
        kertasKerja: kertasKerjaReq!,
    ): kertasKerjaRes
}
`;

exports.kertasKerjaAddController = {
    Mutation: {
        kertasKerjaAdd: async (root, {
            kertasKerja,

        }, {
            req,
            errorName
        }) => {
            try {

                const newKertasKerja = new KertasKerja({
                    kelab_id: kertasKerja.kelab_id,
                    nama_program: kertasKerja.nama_program,
                    pengarah_program: kertasKerja.pengarah_program,
                    tarikh_program: kertasKerja.tarikh_program,
                    email_pengarah: kertasKerja.email_pengarah,
                    nombor_matrik_pengarah: kertasKerja.nombor_matrik_pengarah,
                    nombor_tel_pengarah: kertasKerja.nombor_tel_pengarah,
                    fakulti: kertasKerja.fakulti,
                    s3_upload_url: kertasKerja.s3_upload_url,
                })

                console.log(newKertasKerja)

                const [savedKertasKerja] = [await newKertasKerja.save()];

                console.log(savedKertasKerja)

                return savedKertasKerja

            } catch (err) {
                throw err;
            }
        },
    },
};