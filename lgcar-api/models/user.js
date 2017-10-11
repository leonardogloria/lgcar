import mongoose from 'mongoose';
mongoose.Promise = Promise;
module.exports = app => {
     var schema = mongoose.Schema({
        email: String,
        password: String
    });
    return mongoose.model('User',schema);

}