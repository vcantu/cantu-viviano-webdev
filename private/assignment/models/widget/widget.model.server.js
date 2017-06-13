/**
 * Created by vcantu on 6/12/17.
 */

var Model = require('../abstract.model.server');
var schema = require('./widget.schema.server');

module.exports = Model('WidgetModel', schema);