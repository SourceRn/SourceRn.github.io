import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entrada = path.join(__dirname, '../assets', 'aboutImage.png');
const salida = path.join(__dirname, '../assets', 'aboutImage.webp');

sharp(entrada)
    .webp({ quality: 70 })
    .toFile(salida)
    .then(() => {
        console.log("imagen optimizada");
    })
    .catch((err) => {
        console.error("Error al convertir imagen: " + err);
    });