const validator = require('validator');
const {
    formatError
} = require("./formatError");

exports.nameREGEX = (name) => {
    if (name.match(/[\||\^|\*|\<|\>|\?|\\|\;]/g) || name.length == 0) {
        throw new Error(formatError.errorName.NOT_VALID_NAME);
    }
    if (!name.match(/[A-Za-z]+/g)) {
        throw new Error(formatError.errorName.NOT_VALID_NAME);
    }
    if (name.toString().match(/[0-9]|\./g)) {
        throw new Error(formatError.errorName.NOT_VALID_NAME);
    }
    return name;
};