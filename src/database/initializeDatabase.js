export async function initializeDatabase(database) {
    try {
        await database.execAsync(`
            DROP TABLE IF EXISTS users;

            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT NOT NULL UNIQUE,
                senha TEXT NOT NULL DEFAULT 'A123456a!',
                role TEXT NOT NULL DEFAULT 'user',
                created_at DATE DEFAULT CURRENT_TIMESTAMP,
                updated_at DATE
            ); 

            INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Super', 'super@gmail.com', ' A123456a!', 'SUPER');
            INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Admin', 'adim@gmail.com', ' A123456a!', 'ADMIN');
            INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('User', 'user@gmail.com', ' A123456a!', 'USER');
            `);
    } catch (error) {
        console.log(error);
    }
}