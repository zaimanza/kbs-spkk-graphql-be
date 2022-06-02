const {
    merge,
} = require('lodash');

const {
    kertasKerjaAddSchema,
    kertasKerjaAddController
} = require("./kertas-kerja-add-controller")


exports.kertasKerjaSchema = `
${kertasKerjaAddSchema}

  `;

exports.kertasKerjaController = merge({},
    kertasKerjaAddController,
);