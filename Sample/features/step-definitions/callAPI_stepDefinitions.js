var logic = require('C:/Sample/features/logic/callAPI.js');
module.exports = function () {

    Given(/^the \"([^\"]*)\" API is called for an endpoint$/, function (method) {
        logic.findMethod(method);
    });

    When(/^I hit the endpoint$/, function (callback) {
        callback.pending();
    });

    this.Then(/^the statuscode should be code$/, function (callback) {
        callback.pending();
    });

};