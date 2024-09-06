const models = require('../models');

module.exports = {
    get_landing: function(req, res, next) {
        res.render('landing', { title: 'Express' });
    },
    submit_lead: function(req, res, next) {
        return models.Lead.create({
            email: req.body.lead_email
        })
        .then(lead => {
            res.redirect('/leads');
        })
        .catch(error => {
            console.error("Error creating lead:", error);
            res.status(500).send("An error occurred while submitting the lead.");
        });
    },
    show_leads: function(req, res, next) {
        return models.Lead.findAll()
        .then(leads => {
            res.render('landing', { title: 'Express', leads: leads });
        })
        .catch(error => {
            console.error("Error retrieving leads:", error);
            res.status(500).send("An error occurred while retrieving the leads.");
        });
    },
    show_lead: function(req, res, next) {
        return models.Lead.findOne({
            where: {
                id: req.params.lead_id
            }
        })
        .then(lead => {
            if (lead) {
                res.render('lead', { lead: lead });
            } else {
                res.status(404).send("Lead not found.");
            }
        })
        .catch(error => {
            console.error("Error retrieving lead:", error);
            res.status(500).send("An error occurred while retrieving the lead.");
        });
    }    
};
