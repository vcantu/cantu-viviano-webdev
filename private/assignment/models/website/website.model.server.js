/**
 * Created by vcantu on 6/12/17.
 */

var Model = require('../abstract.model.server');
var schema = require('./website.schema.server');

module.exports = Model('WebsiteModel', schema);