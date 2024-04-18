import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hbXutdy2!",
    database: "cardapio"
})