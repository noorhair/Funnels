import ftp from 'basic-ftp';
import path, { dirname } from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const FTP_HOST = process.env.FTP_HOST;
const FTP_USER = process.env.FTP_USER;
const FTP_PASSWORD = process.env.FTP_PASSWORD;
const FTP_REMOTE_PATH_STATIC_PAGES = process.env.FTP_REMOTE_PATH_STATIC_PAGES;
const FTP_REMOTE_PATH_DYNAMIC_CHECKOUT = process.env.FTP_REMOTE_PATH_DYNAMIC_CHECKOUT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function uploadFolder(localFolder, remoteFolder) {
    const client = new ftp.Client();
    try {
        await client.access({
            host: FTP_HOST,
            user: FTP_USER,
            password: FTP_PASSWORD,
            secure: false
        });
        await uploadRecursive(localFolder, remoteFolder, client);
    } catch (err) {
        console.error('Error:', err);
    }
    client.close();
}

async function uploadRecursive(localFolder, remoteFolder, client) {
    const files = await fs.promises.readdir(localFolder);
    for (const file of files) {
        const localPath = path.join(localFolder, file);
        const remotePath = path.join(remoteFolder, file);
        const stats = await fs.promises.stat(localPath);
        if (stats.isDirectory()) {
            await client.ensureDir(remotePath);
            await uploadRecursive(localPath, remotePath, client);
        }
    }
    for (const file of files) {
        const localPath = path.join(localFolder, file);
        const remotePath = path.join(remoteFolder, file);
        const stats = await fs.promises.stat(localPath);
        if (stats.isFile()) {
            await client.uploadFrom(localPath, remotePath, { overwrite: true });
        }
    }
}


uploadFolder(__dirname+'/dynamicCheckoutPage/dist', FTP_REMOTE_PATH_DYNAMIC_CHECKOUT)
    .then(() => console.log('Transferencia completada. PAGINAS DINAMICAS SUBIDAS CON ÉXITO'))
    .catch(err => console.error('Error:', err));

uploadFolder(__dirname+'/staticPages', FTP_REMOTE_PATH_STATIC_PAGES)
    .then(() => console.log('Transferencia completada. PAGINAS ESTÁTICAS SUBIDAS CON ÉXITO'))
    .catch(err => console.error('Error:', err));
