const key = "sk_test_KwkYzRRVCn2z8Snhenr5cvCc";
// this is not real key check dashboard 

var stripe = require('stripe')(key);

createCharge = (amount) => {
    return new Promise((resolve, reject) => {
        stripe.charges.create({
            amount: amount,
            currency: "eur",
            source: "tok_mastercard",
            description: "Charge for andrew.garcia@example.com"
        }, (error, charge) => {
            (error) ? reject(error) : resolve(charge);
        });
    })
}

module.exports = {createCharge};