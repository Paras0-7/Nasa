function pagination(query){
    const page = Math.abs(query.page) || 1;
    const limit = Math.abs(query.limit) || 20;
    const skip = limit * (page-1);
    return {
        skip,
        limit
    }
}



modules.exports = {pagination};
