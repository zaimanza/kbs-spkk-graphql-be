exports.dateToString = (date) => {
    if (date != null) {
        return new Date(date).toISOString();
    } else {
        return null;
    }
};
