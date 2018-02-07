const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('agenda');

    if(err){
        console.log(err);
    }

    let busca = {
        feita: false
    };

    db.collection('tarefas').find(busca).toArray((err, resposta) => {
        console.log(resposta);
        
        client.close();
    });

});