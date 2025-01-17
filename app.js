
import express from 'express';
import * as UserService from './services/user.js';

const app = express();
const port = 3307;
const host = "localhost";

app.use(express.json());

app.get('/users', UserService.getUser);
app.post('/users', UserService.addUser);

app.listen(port, host, () => {
    console.log(`server REST API berjalan di http://${host}:${port}`);
})

