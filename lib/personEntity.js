const Joi = require('joi');

const personSchema = Joi.object().keys({
    id: Joi.string().min(1).max(50).required(),
    auth_firstname: Joi.string().min(1).max(50),
    auth_lastname: Joi.string().min(1).max(50),
    headline: Joi.string().min(1).max(50),
    industry: Joi.number().integer().min(1).required(),
    picture_url: Joi.string().uri()
});

class personC{
    constructor(id, auth_firstname, auth_lastname, headline, industry, picture_url ) {
        this.id = id;
        this.auth_firstname = auth_firstname;
        this.auth_lastname = auth_lastname;
        this.headline = headline;
        this.industry = industry;
        this.picture_url = picture_url;
    }
}

module.exports = {
    personSchema: personSchema,
    personC: personC
};