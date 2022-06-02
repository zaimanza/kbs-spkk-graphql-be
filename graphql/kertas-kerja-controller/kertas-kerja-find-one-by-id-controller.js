const KertasKerja = require("../../models/kertasKerja")
const bcrypt = require("bcryptjs")

exports.kertasKerjaFindOneByIdSchema = `
extend type Query {
    kertasKerjaFindOneById(
        id: String!,
    ): kertasKerjaRes
}
`;

exports.kertasKerjaFindOneByIdController = {
    Query: {
        kertasKerjaFindOneById: async (root, {
            id
        }, {
            req,
            errorName
        }) => {
            try {

                const resultFind = await KertasKerja.findOne({
                    _id: id,
                })
                return resultFind

            } catch (err) {
                throw err;
            }
        },
    },
};