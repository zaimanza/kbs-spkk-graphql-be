const Kelab = require("../../models/kelab")
const bcrypt = require("bcryptjs")

exports.kelabFindAllSchema = `
extend type Query {
    kelabFindAll: [kelabRes!]
}
`;

exports.kelabFindAllController = {
    Query: {
        kelabFindAll: async (root, { }, {
            req,
            errorName
        }) => {
            try {

                const arrayFind = await Kelab.find()
                return arrayFind

            } catch (err) {
                throw err;
            }
        },
    },
};