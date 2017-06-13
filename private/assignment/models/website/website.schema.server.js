/**
 * Created by vcantu on 6/12/17.
 */
var mongoose = require('mongoose');
var websiteSchema = mongoose.Schema({
    _user : {type: mongoose.Schema.ObjectId, ref: "UserModel"},
    name: String,
    description: String,
    _pages: [
        {type: mongoose.Schema.Types.ObjectId, ref: "PageModel"}
    ],
    dateCreated: {type: Date, default: Date.now}
}, {collection: 'website'});
module.exports = websiteSchema;