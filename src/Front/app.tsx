import * as React from 'react';
import LoginForm from './components/Login';

const App: React.FC = () => {
  const handleLogin = async (username: string, password: string) => {
    // Cambia la URL por la de tu backend
    const response = await fetch('http://tuservidor/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      // Login exitoso, puedes guardar el token o redirigir al usuario
      alert('Login correcto');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default App;