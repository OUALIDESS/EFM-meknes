import React, { useState } from 'react';

export default function DiffuserAnnonce() {
  // State for each form field
  const [annonceText, setAnnonceText] = useState('');
  const [categorie, setCategorie] = useState('Emploi');
  const [region, setRegion] = useState('Alsace');
  const [prix, setPrix] = useState('');
  const [codePostal, setCodePostal] = useState('');
  const [telephone, setTelephone] = useState('');
  const [ville, setVille] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Create an object with the form data
    const formData = {
      annonceText,
      categorie,
      region,
      prix,
      codePostal,
      telephone,
      ville,
      email,
    };

    // Save the form data to localStorage
    const existingData = JSON.parse(localStorage.getItem('annonces')) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem('annonces', JSON.stringify(updatedData));

    // Clear the form fields
    setAnnonceText('');
    setCategorie('Emploi');
    setRegion('Alsace');
    setPrix('');
    setCodePostal('');
    setTelephone('');
    setVille('');
    setEmail('');

    alert('Annonce soumise avec succès!');
  };

  return (
    <div className='formulaire'>
      <form className='form-container' onSubmit={handleSubmit}>
        <label>Ajouter texte pour l'annonce</label>
        <textarea
          rows="4"
          value={annonceText}
          onChange={(e) => setAnnonceText(e.target.value)}
        ></textarea>

        <label>Catégorie</label>
        <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
          <option>Emploi</option>
          <option>Immobilier</option>
          <option>Automobile</option>
          <option>Services</option>
        </select>

        <label>Région</label>
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option>Alsace</option>
          <option>Île-de-France</option>
          <option>Normandie</option>
          <option>Occitanie</option>
        </select>

        <label>Prix :</label>
        <input
          type='text'
          placeholder='Prix'
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />

        <label>Code postal :</label>
        <input
          type='text'
          placeholder='Code postal'
          value={codePostal}
          onChange={(e) => setCodePostal(e.target.value)}
        />

        <label>Numéro de téléphone :</label>
        <input
          type='text'
          placeholder='Téléphone'
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />

        <label>Ville :</label>
        <input
          type='text'
          placeholder='Ville'
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />

        <label>Email :</label>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Valider Votre Annonce</button>
      </form>
    </div>
  );
}
