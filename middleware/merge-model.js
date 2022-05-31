const User = require("../models/kelab")
const transformModel = require("../middleware/transform-model")

const user = async (userId) => {
    try {
        const user = await User.findOne({
            _id: userId
        });

        return transformModel.transformUser(user);
    } catch (err) {
        throw err;
    }
};
exports.user = user;