const jwt = require("jsonwebtoken");

exports.signToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },

        process.env.AUTH_KEY,
        {
            expiresIn: '30d',
        }
    );
};