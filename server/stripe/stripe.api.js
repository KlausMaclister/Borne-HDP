const key = "sk_test_KwkYzRRVCn2z8Snhenr5cvCe";
// this is not real key check dashboard 

var stripe = require('stripe')(key);

createCharge = (amount, source, description) => {
    return new Promise((resolve, reject) => {
        stripe.charges.create({
            amount: amount,
            currency: "eur",
            source: source,
            description: description
        }, (error, charge) => {
            (error) ? reject(error) : resolve(charge);
        });
    })
}

module.exports = {createCharge};