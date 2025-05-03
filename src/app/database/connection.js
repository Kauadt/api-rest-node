import mysql from 'mysql'

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "admin",
    database: "db_cup"
})

connection.connect()

export default connection
