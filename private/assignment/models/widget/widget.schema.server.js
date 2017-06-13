/**
 * Created by vcantu on 6/12/17.
 */
var mongoose = require('mongoose');
var widgetSchema = mongoose.Schema({
    _page : {type: mongoose.Schema.ObjectId, ref: "PageModel"},
    widgetType: {
        type: String,
        enum: ['HEADING', 'IMAGE', 'HTML', 'YOUTUBE', 'INPUT']
    },
    name: String,
    placeholder: String,
    description: String,
    size: Number,
    rows: Number,
    width: String,
    height: String,
    text: String,
    url: String,
    class: String,
    icon: String,
    deletable: Boolean,
    formatted: Boolean,
    dateCreated: {type: Date, default: Date.now}
}, {collection: 'widget'});
module.exports = widgetSchema;