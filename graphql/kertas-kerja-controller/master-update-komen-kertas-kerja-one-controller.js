const KertasKerja = require("../../models/kertasKerja")
const bcrypt = require("bcryptjs")

exports.masterUpdateKomenKertasKerjaOneSchema = `
extend type Query {
    masterUpdateKomenKertasKerjaOne(
        komen: String!,
        _id: String!,
    ): kertasKerjaRes!
}
`;

exports.masterUpdateKomenKertasKerjaOneController = {
    Query: {
        masterUpdateKomenKertasKerjaOne: async (root, {
            komen,
            _id,
        }, {
            req,
            errorName
        }) => {
            try {
                const updatedFind = await KertasKerja.findOne({ _id: _id, })

                if (komen) updatedFind.komen = komen

                await updatedFind.save();

                return updatedFind

            } catch (err) {
                throw err;
            }
        },
    },
};