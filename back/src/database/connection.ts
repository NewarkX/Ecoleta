import knex from 'knex';
import path from 'path';

const connection = knex({
    client:'sqlite3',
    connection:{
        filename:path.resolve(__dirname,'database.sqlite'),
    },
    useNullAsDefault: true
});

export default connection;

//migrations serve para ter controle de versao do banco de dados