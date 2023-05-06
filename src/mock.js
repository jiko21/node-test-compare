const mocked = require('./mocked');

const someFunc1 = () => {
    return mocked.fn(1, 2);
};

module.exports.someFunc1 = someFunc1;
