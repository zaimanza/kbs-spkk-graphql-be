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
    masterKertasKerjaFindAllSchema,
    masterKertasKerjaFindAllController
} = require("./master-kertas-kerja-find-all-controller")


exports.kertasKerjaSchema = `
${kelabKertasKerjaFindAllSchema}
${kertasKerjaAddSchema}
${kertasKerjaFindOneByIdSchema}
${masterKertasKerjaFindAllSchema}

  `;

exports.kertasKerjaController = merge({},
    kelabKertasKerjaFindAllController,
    kertasKerjaAddController,
    kertasKerjaFindOneByIdController,
    masterKertasKerjaFindAllController,
);