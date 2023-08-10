import app from './src/index.js'
import connection from './src/database/database.js';

const port = process.env.PORT || 3000;
connection()

app.listen(port, () => console.log(`conectou na porta ${port}`));
