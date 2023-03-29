import React, { useState } from 'react';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    if (username === 'usuario' && password === 'contraseña') {
      setIsLoggedIn(true);
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Iniciar sesión</button>
        </form>
      ) : (
        <div>
          <h1>Bienvenido, {username}!</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
}

