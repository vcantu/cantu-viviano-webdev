/**
 * Created by vcantu on 6/6/17.
 */

module.exports = function (app, urlName, objects) {

    app.post('/api/' + urlName, create);
    app.get('/api/' + urlName, filter);
    app.get('/api/' + urlName + '/:id', find);
    app.put('/api/' + urlName + '/:id', update);
    app.delete('/api/' + urlName + '/:id', remove);

    var api = {
        create : create
    };
    return api;

    function filter(req, res) {
        filterBy(req.query,
            function (objs) {
                res.json(objs);
            })
    }

    function find(req, res) {
        findBy(req.params,
            function (i) {
                res.json(objects[i]);
            },
            function () {
                res.sendStatus(404);
            })
    }

    function create(req, res) {
        var newObject = req.body;
        //ensure object has an id
        newObject._id =  newObject._id ? newObject._id : new Date().getTime() + "";

        objects.push(newObject);
        res.json(newObject);
    }

    function update(req, res) {
        findBy(req.params,
            function (i) {
                objects[i] = req.body;
                res.json(req.body);
            },
            function () {
                res.sendStatus(404);
            })
    }

    function remove(req, res) {
        findBy(req.params,
            function (i) {
                var r = objects.splice(i, 1);
                res.json(r);
            },
            function () {
                res.sendStatus(404);
            })
    }


    // helpers ---------------------------------

    function filterBy(query, callback) {
        var result = [];
        const keys = Object.keys(query);

        for (var i = 0; i < objects.length; i++) {
            if (keys.reduce(
                function (acc, key) {
                    return acc && query[key] === objects[i][key]
                }, true)) {
                result.push(objects[i]);
            }
        }
        callback(result);
    }

    function findBy(params, success, failure) {
        var id = params.id;
        for (var i = 0; i < objects.length; i++) {
            if (objects[i]._id == id) {
                success(i);
                return;
            }
        }
        failure();
    }

};