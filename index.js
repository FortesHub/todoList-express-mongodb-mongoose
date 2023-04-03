import express from 'express';
import Connection from './database/db';

const app = express();

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
