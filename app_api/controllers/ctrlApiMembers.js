const mongoose = require('mongoose');

const memberModel = mongoose.model('members');

const memberlist = function (req, res) {

    memberModel.find({}, function(err, members) {
        if (err) {
            res.status(404).json(err);
        }
        else{
            res.status(200).json(members);
        }
    });
};

const addMember = function (req, res) {
    memberModel.create(req.body, function(err, newMember) {
            if (err) {
                res.status(400).json(err);
            }
            else{
                res.status(200).json(newMember);
            }
        }
    );
};

module.exports = {
    memberlist,
    addMember
};