/**
 * Created by vcantu on 6/6/17.
 */

module.exports = function (app, urlName, model) {

    var api = {
        create: create,
        filter: filter,
        find: find,
        update: update,
        remove: remove
    };

    app.post('/api/' + urlName, create);
    app.get('/api/' + urlName, filter);
    app.get('/api/' + urlName + '/:id', find);
    app.put('/api/' + urlName + '/:id', update);
    app.delete('/api/' + urlName + '/:id', remove);

    return api;

    function filter(req, res) {
        model.
            filterObj(req.query)
            .then(function (objs) {
                res.json(objs);
            }, function (err) {
                res.sendStatus(404);
            })
    }

    function find(req, res) {
        model
            .findObj({_id: req.params['id']})
            .then(function(obj) {
                if (obj != null)
                    res.json(obj);
                else
                    res.sendStatus(404);
            }, function (err) {
                res.sendStatus(404);
            })
    }

    function create(req, res) {
        var newObject = req.body;
        model
            .createObj(newObject)
            .then(function (obj) {
                res.json(obj);
            }, function (err) {
                res.sendStatus(404);
            })
    }

    function update(req, res) {
        model
            .updateObj(
                {_id: req.params['id']},
                req.body)
            .then(function (obj) {
            res.json(obj);
        }, function (err) {
            res.sendStatus(404);
        })
    }

    function remove(req, res) {
        model
            .removeObj(req.params['id'])
            .then(function (obj) {
                res.json(obj);
            }, function (err) {
                res.sendStatus(404);
            })
    }

};