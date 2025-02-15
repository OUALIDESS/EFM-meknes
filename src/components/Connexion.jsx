import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setMessage("Aucun compte trouvé. Veuillez vous inscrire d'abord.");
      return;
    }

    if (username === savedUser.username && password === savedUser.password) {
      setMessage(`Bienvenue, ${savedUser.username} !`);
    } else {
      setMessage("Identifiants incorrects. Réessayez.");
    }
  };

  return (
    <div>
      <form className="form-container">
        <h2>Login</h2>
        <div>
          <label>
            Nom d'utilisateur:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Entrez votre nom d'utilisateur"
            />
          </label>
        </div>
        <div>
          <label>
            Mot de passe:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
            />
          </label>
        </div>
        <button type="button" onClick={handleLogin}>Se connecter</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Login;
