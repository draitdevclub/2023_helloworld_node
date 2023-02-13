var refCountryService = require("../../models/refCountryModel");
exports.getCountries = async function (request, response, next) {
    // console.log('In getCountries');


    var countries = await refCountryService.getAll();
    // console.log('countries: ' + JSON.stringify(countries));

    return response.status(200).send({ status: "success", records: countries });
}