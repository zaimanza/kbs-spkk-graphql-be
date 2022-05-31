const FormatError = require("easygraphql-format-error");

exports.formatError = new FormatError([{
    name: 'UNAUTHORIZED',
    message: 'Unauthorized.',
    statusCode: '400'
},
]);