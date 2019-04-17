const { Given, Then } = require('cucumber');

Given(
    /^the "method" API is called$/, () => {
       console.log('i slept');
    }
);
Then(
    /^i fuck her$/, () => {
        console.log('so damn hot');
    }
);