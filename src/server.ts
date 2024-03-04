import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { operationController } from './controllers/operationController';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use('/', operationController);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
