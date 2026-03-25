// src/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Backend de Sistema de Inventario funcionando correctamente!',
    status: 'online'
  });
});

app.get('/test-db', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'success', message: '✅ Conexión a MySQL en Railway OK' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Error al conectar con la base de datos' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});