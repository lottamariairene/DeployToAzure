const request = require('request');
const apiURL = require('./apiURL');

const showForm = function(req, res) {
    res.render('awards_add');
};

const addData = function(req, res) {
    const path = 'api/awards';

    const postdata = {
        year: req.body.year,
        member: req.body.nominee,
        instrument: req.body.award
    };

    const requestOptions = {
        url: apiURL.server + path,
        method: 'POST',
        json: postdata
    };

    request(
        requestOptions,
        function (err, response) {
            if (response.statusCode === 201) {
                res.redirect('/awards');
            } else {
                res.render('error', {message: 'Error adding data: ' +
                        response.statusMessage +
                        ' (' + response.statusCode + ')'});
            }
        }
    );
};

const awardlist = function(req, res) {
    const path = '/api/awards';
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}

    };

    request(
        requestOptions,
        function(err, response, body) {
            if (err) {
                res.render('error', {message: err.message});
            } else if (response.statusCode !== 200) {
                res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " ("+ response.statusCode + ")" });
            }else if (! (body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            }else if (!body.length) {
                res.render('error', {message: 'No documents in collection'});
            }else {
                res.render('awards', {awards: body});
            }
        }

    );
};
module.exports = {
    awardlist,
    showForm,
    addData
};
