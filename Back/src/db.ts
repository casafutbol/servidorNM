// src/db.ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDB() {
  return open({
    filename: './nobomilladoiro.db', // ruta a tu archivo DB
    driver: sqlite3.Database
  });
}