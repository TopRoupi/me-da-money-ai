var mongoose = require('mongoose');

mongoose.connect('mongodb://dev:d3vadmin@cluster0-shard-00-00-gfovw.mongodb.net:27017,cluster0-shard-00-01-gfovw.mongodb.net:27017,cluster0-shard-00-02-gfovw.mongodb.net:27017/cadastro-de-arvore?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
mongoose.Promise = global.Promise;

module.exports = mongoose;