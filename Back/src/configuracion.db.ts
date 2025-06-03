// BACK/src/configuracion.db.ts

import fs from 'fs';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

const dbPath = path.join(__dirname, '../db/novomilladoiro.sqlite');
const initSqlPath = path.join(__dirname, '../db/init.sql');

export async function initDB() {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // Leer y ejecutar el SQL
  const initScript = fs.readFileSync(initSqlPath, 'utf-8');
  await db.exec(initScript);

  console.log('✅ Base de datos inicializada');
  return db;
}