
module.exports = {
    get_landing: function(req, res, next) {
        res.render('landing', { title: 'Express' });
    },
    submit_lead: function(req, res, next) {
        console.log("lead email :" , req.body.lead_email);
        res.redirect('/');
    }
};
