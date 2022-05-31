const Kelab = require("../../models/kelab")
const bcrypt = require("bcryptjs")

exports.kelabLoginSchema = `
extend type Mutation {
    kelabLogin( 
        kelab_id: String!,
        kelab_password: String!,
    ): kelabRes
}
`;

exports.kelabLoginController = {
    Mutation: {
        kelabLogin: async (root, {
            kelab_id,
            kelab_password,

        }, {
            req,
            errorName
        }) => {
            try {
                console.log(kelab_id)
                const fetchedKelab = await Kelab.findOne({
                    kelab_id: kelab_id,
                    kelab_password: kelab_password
                })

                return fetchedKelab

            } catch (err) {
                throw err;
            }
        },
    },
};