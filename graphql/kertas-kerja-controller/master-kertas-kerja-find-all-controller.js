const KertasKerja = require("../../models/kertasKerja")
const bcrypt = require("bcryptjs")

exports.masterKertasKerjaFindAllSchema = `
extend type Query {
    masterKertasKerjaFindAll: [kertasKerjaRes!]
}
`;

exports.masterKertasKerjaFindAllController = {
    Query: {
        masterKertasKerjaFindAll: async (root, { }, {
            req,
            errorName
        }) => {
            try {

                const arrayFind = await KertasKerja.find()
                return arrayFind

            } catch (err) {
                throw err;
            }
        },
    },
};