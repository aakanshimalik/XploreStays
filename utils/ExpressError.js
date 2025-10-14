class ExpressError extends Error {
    constructor(statussCode, message){
        super();
        this.statusCode = this.statusCode;
        this.message = message;
    }
}
module.exports = ExpressError;