async function connect(){
    
    if(global.connection && global.connection.state == 'disconnected') {
        return global.connection;
    }

    const mysql = require('mysql2/promise');
    const user = 'guilhermeggloor'
    const password = '********'
    const porta = '3306'
    const database = 'produtos-api'

    const connection = await mysql.createConnection(`mysql://${user}:${password}@localhost:${porta}/${database}`);
    console.log("conector com o mysql");

    global.connection = connection;
    
    return connection;
}

module.exports = {connect}

