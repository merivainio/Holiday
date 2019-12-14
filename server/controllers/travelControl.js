const travelModel = require('../models/travelModel');

module.exports = {
    create: (req, res) => {
        let travel = new travelModel({
            kohde: req.body.kohde,
            lähtö: req.body.lähtö,
            paluu: req.body.paluu,
            arvio: req.body.arvio
        });

        travel.save()
        .then(result => {
            res.json({ success: true, result: result });
        })
        .catch(err => {
            res.json({ success: false, result: err });
        });
    },
    update: (req, res) => {
        travelModel.update({_id: req.body._id}, req.body)
        .then(travel => { 
        if (!travel) res.json({ success: false, result: 'Travel does not exist' });
            
        res.json(travel);
        })
        .catch(err => {
            res.json({ success: false, result: err });
        });
    },
    retrieve: (req, res) => {
        travelModel.find()
        .then(result => { 
            if (!result) res.json({ success: false, result: 'No results found' });

            res.json({ success: true, result: result });
            
        })
        .catch(err => {
            res.json({ success: false, result: err });
        });
    },
    delete: (req, res) => {
        travelModel.remove({_id: req.body._id})
        .then(result => { 
        if (!result) res.json({ success: false, result: 'No travel was found with the id' });
            
        res.json({ success: true, result: result });
        })
        .catch(err => {
            res.json({ success: false, result: err });
        });
    }
}