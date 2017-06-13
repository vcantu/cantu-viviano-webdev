/**
 * Created by vcantu on 6/12/17.
 */
var mongoose = require('mongoose');
var pageSchema = mongoose.Schema({
    _website: {type: mongoose.Schema.ObjectId, ref: "WebsiteModel"},
    name: String,
    description: String,
    _widgets: [
        {type: mongoose.Schema.Types.ObjectId, ref: "WidgetModel"}
    ],
    dateCreated: {type: Date, default: Date.now}
}, {collection: "page"});
module.exports = pageSchema;