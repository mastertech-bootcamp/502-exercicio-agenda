const MongoClient = require('mongodb').MongoClient;
let entrada = process.argv[2];

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('agenda');

    if(err){
        console.log(err);
    }

    let busca = {
        nome: entrada
    }

    let alteracao = {
        nome: entrada,
        feita: true
    }

    db.collection('tarefas').update(busca, alteracao, (err, resposta) => {
        console.log('Tarefa feita!');
        
        client.close();
    });

});