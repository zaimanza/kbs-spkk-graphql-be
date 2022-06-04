const { generateUploadURL } = require("../../aws/s3");


exports.kertasKerjaS3UploadUrlSchema = `

extend type Query {
    kertasKerjaS3UploadUrl: String!
}
`;

exports.kertasKerjaS3UploadUrlController = {
    Query: {
        kertasKerjaS3UploadUrl: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {
                return generateUploadURL()

            } catch (err) {
                throw err;
            }
        },
    },
};