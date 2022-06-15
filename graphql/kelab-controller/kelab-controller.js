const {
    merge,
} = require('lodash');

const {
    kelabAddSchema,
    kelabAddController
} = require("./kelab-add-controller");

const {
    kelabFindAllSchema,
    kelabFindAllController
} = require("./kelab-find-all-controller");

const {
    kelabLoginSchema,
    kelabLoginController
} = require("./kelab-login-controller");

const {
    kelabS3UploadUrlSchema,
    kelabS3UploadUrlController
} = require("./kelab-s3-upload-url");


exports.kelabSchema = `
${kelabAddSchema}
${kelabFindAllSchema}
${kelabLoginSchema}
${kelabS3UploadUrlSchema}

  `;

exports.kelabController = merge({},
    kelabAddController,
    kelabFindAllController,
    kelabLoginController,
    kelabS3UploadUrlController,
);