const transformUser = (user) => {
    return {
        ...user._doc,
        _id: user.id,
    };
};
exports.transformUser = transformUser;