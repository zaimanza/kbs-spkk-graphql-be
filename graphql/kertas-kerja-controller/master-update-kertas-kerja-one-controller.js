const KertasKerja = require("../../models/kertasKerja")
const bcrypt = require("bcryptjs")

exports.masterUpdateKertasKerjaOneSchema = `
extend type Query {
    masterUpdateKertasKerjaOne(
        kertas_kerja_status: String!,
        _id: String!,
    ): kertasKerjaRes!
}
`;

exports.masterUpdateKertasKerjaOneController = {
    Query: {
        masterUpdateKertasKerjaOne: async (root, {
            kertas_kerja_status,
            _id,
        }, {
            req,
            errorName
        }) => {
            try {

                const updatedFind = await KertasKerja.findOne({ _id: _id, })
                if (kertas_kerja_status) updatedFind.kertas_kerja_status = kertas_kerja_status

                await updatedFind.save();

                return updatedFind

            } catch (err) {
                throw err;
            }
        },
    },
};