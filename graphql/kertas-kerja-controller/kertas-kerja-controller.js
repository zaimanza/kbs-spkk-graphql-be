const {
    merge,
} = require('lodash')

const {
    kelabKertasKerjaFindAllSchema,
    kelabKertasKerjaFindAllController
} = require("./kelab-kertas-kerja-find-all-controller")

const {
    kertasKerjaAddSchema,
    kertasKerjaAddController
} = require("./kertas-kerja-add-controller")

const {
    kertasKerjaFindOneByIdSchema,
    kertasKerjaFindOneByIdController
} = require("./kertas-kerja-find-one-by-id-controller")

const {
    kertasKerjaS3UploadUrlSchema,
    kertasKerjaS3UploadUrlController
} = require("./kertas-kerja-s3-upload-url")

const {
    masterKertasKerjaFindAllSchema,
    masterKertasKerjaFindAllController
} = require("./master-kertas-kerja-find-all-controller")

const {
    masterUpdateKertasKerjaOneSchema,
    masterUpdateKertasKerjaOneController
} = require("./master-update-kertas-kerja-one-controller")

const {
    masterUpdateKomenKertasKerjaOneSchema,
    masterUpdateKomenKertasKerjaOneController
} = require("./master-update-komen-kertas-kerja-one-controller")


exports.kertasKerjaSchema = `
${kelabKertasKerjaFindAllSchema}
${kertasKerjaAddSchema}
${kertasKerjaFindOneByIdSchema}
${kertasKerjaS3UploadUrlSchema}
${masterKertasKerjaFindAllSchema}
${masterUpdateKertasKerjaOneSchema}
${masterUpdateKomenKertasKerjaOneSchema}

  `;

exports.kertasKerjaController = merge({},
    kelabKertasKerjaFindAllController,
    kertasKerjaAddController,
    kertasKerjaFindOneByIdController,
    kertasKerjaS3UploadUrlController,
    masterKertasKerjaFindAllController,
    masterUpdateKertasKerjaOneController,
    masterUpdateKomenKertasKerjaOneController,
);