import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';


const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.post('/operacion', (req: Request, res: Response) => {
    const { operacion, operandos } = req.body;

    if (!operacion || !operandos || !Array.isArray(operandos)) {
        return res.status(400).json({ error: 'Se requieren operación y operandos válidos' });
    }

    let resultado: number | string;

    switch (operacion) {
        case 'suma':
            resultado = operandos.reduce((a, b) => a + b, 0);
            break;
        case 'resta':
            resultado = operandos.reduce((a, b) => a - b);
            break;
        case 'multiplicacion':
            resultado = operandos.reduce((a, b) => a * b, 1);
            break;
        case 'division':
            resultado = operandos.reduce((a, b) => a / b);
            break;
        default:
            resultado = 'Operación no válida';
            break;
    }

    res.json({ resultado });
});

export { router as operationController };
