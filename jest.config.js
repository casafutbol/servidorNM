/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',  // para tests React en navegador simulado
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // para compilar TypeScript
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  // Opcional: para configurar entorno test
};

module.exports = config;
