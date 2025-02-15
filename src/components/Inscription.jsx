import React, { useState } from 'react';

export default function Inscription() {
  const [infos, setInfos] = useState({
    username: '',  // Modification: "name" devient "username"
    password: ''
  });

  const handleInputContent = (e) => {
    const { name, value } = e.target;
    setInfos({
      ...infos,
      [name]: value
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Correction: enregistrer sous "user" et non "userInfos"
    localStorage.setItem('user', JSON.stringify(infos));

    setInfos({
      username: '',
      password: ''
    });

    alert('Votre compte a été créé avec succès !');
  };

  return (
    <div>
      <form className="form-container">
        <h2>Créer votre compte :</h2>
        <p>Saisissez vos informations ici :</p>
        <label>Nom d'utilisateur :</label>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"  // Modification ici
          onChange={handleInputContent}
          value={infos.username}
        />
        <label>Mot de passe :</label>
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleInputContent}
          value={infos.password}
        />
        <button onClick={handleClick}>Créer votre compte</button>
      </form>
    </div>
  );
}
