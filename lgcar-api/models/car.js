import mongoose from 'mongoose';
mongoose.Promise = Promise;
module.exports = app =>{
    var schema = mongoose.Schema({
        vendor: String,
        model: String
    });
    return mongoose.model('Car',schema);
}
