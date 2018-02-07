const MongoClient = require('mongodb').MongoClient;
let entrada = process.argv[2];

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('agenda');

    if(err){
        console.log(err);
    }

    let novaTarefa = {
        nome: entrada,
        feita: false
    }

    db.collection('tarefas').insert(novaTarefa, (err, resposta) => {
        console.log('Tarefa inserida!');
        
        client.close();
    });

});









// function inserir(err, client) {
//     const db = client.db('agenda');

//     if(err){
//         console.log(err);
//     }

//     db.collection('tarefas').insert({c:'tarefa do terminal'}, fechar);
// }

// function fechar (err, resposta) {    
//     // client.close();
//     console.log('fechei a bagaça')
// }

// MongoClient.connect('mongodb://localhost:27017', inserir);