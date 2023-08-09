const mysql = require('mysql2/promise');

const bd_usuario = 'ewerton_nose'; //usuario
const bd_senha = '123456'; //senha
const bd_servidor = '10.67.22.216'; //servidor
const bd_porta = '3306'; //porta
const bd_banco = 'ewerton_node'; // nome do banco
let connection;

const config ={
    host: bd_servidor,
    port: bd_porta,
    user: bd_usuario,
    password: bd_senha,
    database: bd_banco,
    waitForConnections : true,
    connectionLimit : 10, // Default: 10 - deixar 100 ou 1000
    queueLimit : 0,
}

/*
O numero maximo de solicitações de conexão que o pool enfileirará
antes de retornar um erro getConnection. Se definido como 0, não
há limite para o número de solicitações enfileiradas. (Padrão: 0)
*/
