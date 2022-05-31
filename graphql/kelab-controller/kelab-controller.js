const {
    merge,
} = require('lodash');

const {
    kelabAddSchema,
    kelabAddController
} = require("./kelab-add-controller");

const {
    kelabLoginSchema,
    kelabLoginController
} = require("./kelab-login-controller");


exports.kelabSchema = `
${kelabAddSchema}
${kelabLoginSchema}

  `;

exports.kelabController = merge({},
    kelabAddController,
    kelabLoginController,
);