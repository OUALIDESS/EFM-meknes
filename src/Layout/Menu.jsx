import React from 'react';
import { Link } from 'react-router-dom';


export default function Menu() {
  return (
    <div>
          <div className='Menu'>
            <h1>Espace Membre : </h1>
            <h4>Bienvenu pour pacez votre annonce</h4>
                    <nav>
                <ul>
                
                    <li><Link to="/Connexion">Connection</Link></li>
                    <li><Link to="/Inscription">Inscription</Link></li>
                </ul>
                </nav>
            <h1> Vous pouvez trouver Nos annonces ici  :</h1>
            <ul>
                
                    <li><Link to="/ConsulterAnnonce">Consulter Nos annonces</Link></li>
                    <li><Link to="/DiffuserAnnonce">Diffuser nos annonces</Link></li>
                    <li><Link to="/AdministrerAnnonces">Administrer nos annonces</Link></li>
                </ul>

            
  
          </div>
    </div>
  )
}
