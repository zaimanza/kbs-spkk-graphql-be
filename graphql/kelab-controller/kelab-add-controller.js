const Kelab = require("../../models/kelab")
const bcrypt = require("bcryptjs")

exports.kelabAddSchema = `
input kelabReq {
    kelab_id: String!,
    kelab_nama: String!,
    kelab_tel: String!,
    kelab_email: String!,
    kelab_password: String!,
}

type kelabRes {
    _id: String,
    kelab_id: String,
    kelab_nama: String,
    kelab_tel: String,
    kelab_email: String,
    kelab_password: String,
    isMaster: Boolean,
}

extend type Mutation {
    kelabAdd( 
        kelab: kelabReq!,
    ): kelabRes
}
`;

exports.kelabAddController = {
    Mutation: {
        kelabAdd: async (root, {
            kelab,

        }, {
            req,
            errorName
        }) => {
            try {

                const newKelab = new Kelab({
                    kelab_id: kelab.kelab_id,
                    kelab_nama: kelab.kelab_nama,
                    kelab_tel: kelab.kelab_tel,
                    kelab_email: kelab.kelab_email,
                    kelab_password: kelab.kelab_password,
                    isMaster: false,
                })

                const [savedKelab] = [await newKelab.save()];
                return savedKelab

            } catch (err) {
                throw err;
            }
        },
    },
};