import React, { useState, useEffect } from 'react';

export default function AdministrerAnnonces() {
  const [annonces, setAnnonces] = useState([]);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedAnnonce, setEditedAnnonce] = useState(null);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedAnnonces = JSON.parse(localStorage.getItem('annonces')) || [];
    setAnnonces(savedAnnonces);
  }, []);

  // Function to delete an announcement
  const handleDelete = () => {
    const updatedAnnonces = annonces.filter((annonce) => annonce !== selectedAnnonce);
    setAnnonces(updatedAnnonces);
    localStorage.setItem('annonces', JSON.stringify(updatedAnnonces));
    setSelectedAnnonce(null);
  };

  // Function to handle changes in the edit form
  const handleChange = (e) => {
    setEditedAnnonce({ ...editedAnnonce, [e.target.name]: e.target.value });
  };

  // Function to save edited annonce
  const handleSave = () => {
    const updatedAnnonces = annonces.map((annonce) =>
      annonce === selectedAnnonce ? editedAnnonce : annonce
    );

    setAnnonces(updatedAnnonces);
    localStorage.setItem('annonces', JSON.stringify(updatedAnnonces));
    setSelectedAnnonce(editedAnnonce);
    setEditMode(false);
  };

  return (
    <div className="annonces-container">
      <h2>Liste des Annonces</h2>

      {/* Table displaying limited info */}
      {!selectedAnnonce ? (
        <table className="annonces-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Ville</th>
              <th>Code Postal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {annonces.map((annonce, index) => (
              <tr key={index}>
                <td>{annonce.email}</td>
                <td>{annonce.ville}</td>
                <td>{annonce.codePostal}</td>
                <td>
                  <button onClick={() => { setSelectedAnnonce(annonce); setEditedAnnonce(annonce); }}>Détails</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Card displaying full details when an item is selected
        <div className="annonce-details-card">
          <h3>Détails de l'Annonce</h3>

          {editMode ? (
            // Edit Form
            <div className="edit-form">
              <label>Texte:</label>
              <input type="text" name="annonceText" value={editedAnnonce.annonceText} onChange={handleChange} />
              
              <label>Catégorie:</label>
              <input type="text" name="categorie" value={editedAnnonce.categorie} onChange={handleChange} />
              
              <label>Région:</label>
              <input type="text" name="region" value={editedAnnonce.region} onChange={handleChange} />
              
              <label>Prix:</label>
              <input type="text" name="prix" value={editedAnnonce.prix} onChange={handleChange} />
              
              <label>Code Postal:</label>
              <input type="text" name="codePostal" value={editedAnnonce.codePostal} onChange={handleChange} />
              
              <label>Téléphone:</label>
              <input type="text" name="telephone" value={editedAnnonce.telephone} onChange={handleChange} />
              
              <label>Ville:</label>
              <input type="text" name="ville" value={editedAnnonce.ville} onChange={handleChange} />
              
              <label>Email:</label>
              <input type="text" name="email" value={editedAnnonce.email} onChange={handleChange} />

              <button onClick={handleSave} className="save-btn">Enregistrer</button>
              <button onClick={() => setEditMode(false)} className="cancel-btn">Annuler</button>
            </div>
          ) : (
            // Read-Only View
            <>
              <p><strong>Texte:</strong> {selectedAnnonce.annonceText}</p>
              <p><strong>Catégorie:</strong> {selectedAnnonce.categorie}</p>
              <p><strong>Région:</strong> {selectedAnnonce.region}</p>
              <p><strong>Prix:</strong> {selectedAnnonce.prix}</p>
              <p><strong>Code Postal:</strong> {selectedAnnonce.codePostal}</p>
              <p><strong>Téléphone:</strong> {selectedAnnonce.telephone}</p>
              <p><strong>Ville:</strong> {selectedAnnonce.ville}</p>
              <p><strong>Email:</strong> {selectedAnnonce.email}</p>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button onClick={handleDelete} className="delete-btn">Supprimer</button>
                <button onClick={() => setEditMode(true)} className="edit-btn">Modifier</button>
                <button onClick={() => setSelectedAnnonce(null)} className="return-btn">Retour</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
