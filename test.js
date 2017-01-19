const index = require('./');

index.getNewsList('55ccc5376675e91100163ec7')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });