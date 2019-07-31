let express = require('express');
let heroes = require('./heroes.json');
let app = express();
let port = 1337;

app.post('/', (request,response) => {

});


app.get('/', (request,response) => {
    response.send('Nice. Very nice.');
});

app.get('/heroes', (request,response) => {
    response.send(heroes);
});

app.all('*', (request, response) => {
    response.send('404 error son')
});

app.listen(port, () => {
    console.log("this is my port: " + port)
});