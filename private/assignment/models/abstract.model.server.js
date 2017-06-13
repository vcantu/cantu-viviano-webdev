/**
 * Created by vcantu on 6/12/17.
 */

var mongoose = require('mongoose');

module.exports = function (modelName, modelSchema) {

    var model = mongoose.model(modelName, modelSchema);
    model.updateObj = updateObj;
    model.removeObj = removeObj;
    model.findObj = findObj;
    model.filterObj = filterObj;
    model.createObj = createObj;

    return model;

    function createObj(obj) {
        return model.create(obj);
    }

    // finds one
    function findObj(obj_params) {
        return model.findOne(obj_params);
    }

    // finds all matching
    function filterObj(obj_params) {
        return model.find(obj_params);
    }

    function updateObj(id, obj) {
        return model
            .update(
                {_id: id},
                {$set : obj}
            );
    }

    function removeObj(id) {
        return model.remove({_id: id});
    }

};