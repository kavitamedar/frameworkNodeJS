var rp = require('request-promise');
var expect = require('chai').expect;
var logs = require('wdio-allure-reporter');

function findMethod(method) {
    if (method.equal("GET")) {
        toGet(method, 200);
        } else {
        toPost(method, 201);
    }
}

function callApi(method, options, statusCode) {
    rp(options)
        .then(function (resp) {
            console.log(JSON.stringify(resp));
            expect(resp.statusCode).to.be.equal(statusCode);
        })
        .catch(function (err) {
            console.log(err);
        })
}
function toPost(mthd, statusCode) {
    console.log('################# TO POST ###################');
    var options = {
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: { 'Content-type': "application/json" },
        json: true,
        resolveWithFullResponse: true,
        method: mthd,
        body: { "userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" }
    }
    callApi(options, statusCode);
}

function toGet(mthd, statusCode) {
    console.log('################# TO GET ###################');
    var options = {
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        headers: { 'Content-type': "application/json" },
        json: true,
        resolveWithFullResponse: true,
        method: mthd,
    }
    callApi(options, statusCode);
}


