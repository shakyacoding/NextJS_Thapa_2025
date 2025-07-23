import mysql from "mysql2/promise";



export const db2 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Iloveyou00#",
    database: "hospital_db",
})

try {
    const connection = await db2.getConnection();
    console.log("Database connected successfully");
    connection.release()
} catch (err) {
    console.log("Database connection failed", err);
    process.exit(1)
}