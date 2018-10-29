const mongoose = require('mongoose');

const awardModel = mongoose.model('awards');

const awardlist = function (req, res) {
    awardModel.find({}, function(err, awards) {
        if (err) {
            res.status(404).json(err);
        }
        else{
            res.status(200).json(awards);
        }
    });
};

const addAward = function (req, res) {
    awardModel.create(req.body, function(err, newAward) {
            if (err) {
                res.status(400).json(err);
            }
            else{
                res.status(200).json(newAward);
            }
        }
    );
};

module.exports = {
    awardlist,
    addAward
};