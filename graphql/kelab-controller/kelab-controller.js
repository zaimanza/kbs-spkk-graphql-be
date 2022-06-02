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


exports.kelabSchema = `
${kelabAddSchema}
${kelabFindAllSchema}
${kelabLoginSchema}

  `;

exports.kelabController = merge({},
    kelabAddController,
    kelabFindAllController,
    kelabLoginController,
);