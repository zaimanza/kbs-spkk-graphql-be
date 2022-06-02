const KertasKerja = require("../../models/kertasKerja")
const bcrypt = require("bcryptjs")

exports.kelabKertasKerjaFindAllSchema = `
extend type Query {
    kelabKertasKerjaFindAll(
        kelab_id: String!,
    ): [kertasKerjaRes!]
}
`;

exports.kelabKertasKerjaFindAllController = {
    Query: {
        kelabKertasKerjaFindAll: async (root, {
            kelab_id
        }, {
            req,
            errorName
        }) => {
            try {

                const arrayFind = await KertasKerja.find({
                    kelab_id: kelab_id,
                })
                return arrayFind

            } catch (err) {
                throw err;
            }
        },
    },
};