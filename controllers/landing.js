const models = require('../models')
module.exports = {
    get_landing: function(req, res, next) {
        res.render('landing', { title: 'Express' });
    },
    submit_lead: function(req, res, next) {
        return models.Lead.Create({
            email:req.body.lead_email
        }).then(lead => {
            res.redirect('/')
        })
    }
};
