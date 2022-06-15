const { generateUploadURLType } = require("../../aws/s3");


exports.kelabS3UploadUrlSchema = `

extend type Query {
    kelabS3UploadUrl(
        type: String!
    ): String!
}
`;

exports.kelabS3UploadUrlController = {
    Query: {
        kelabS3UploadUrl: async (root, {
            type
        }, {
            req,
            errorName
        }) => {
            try {
                return await generateUploadURLType({
                    type: type
                })

            } catch (err) {
                throw err;
            }
        },
    },
};