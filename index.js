const request = require('request-promise');
const configurations = require('./configurations');

module.exports = {
    getNewsList: (id) => {
        return new Promise((resolve, reject) => {
            request(configurations.address + id)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}