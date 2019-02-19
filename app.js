var express = require('express');
var bodyParser = require('body-parser');

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));





app.get('/', function(req, res, next){
    res.send('eae');
});

var myRouter = require('./routes');
app.use('/api', myRouter);





var PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
    console.log('servidor rodando em na porta ' + PORT);
});