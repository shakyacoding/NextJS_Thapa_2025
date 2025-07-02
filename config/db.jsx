import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Iloveyou00#",
    database: "hospital",
})

try {
    const connection = await db.getConnection();
    console.log("Database connected successfully");
    connection.release()
} catch (err) {
    console.log("Database connection failed", err);
    process.exit(1)
}