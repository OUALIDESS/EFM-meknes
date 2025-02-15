import React from 'react';
import Header from './Layout/Header';
import Menu from './Layout/Menu';
import Footer from './Layout/FFooter';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdministrerAnnonces from './components/AdministrerAnnonces';
import DiffuserAnnonce from './components/DiffuserAnnonce'



export default function App() {
  return (
    <div>
      <Router>
      <Header />
      <Menu />

        <Routes>
          <Route path="/Connexion" element={<Connexion />} />
          <Route path='/Inscription' element={<Inscription/>}/>
          <Route path='/DiffuserAnnonce' element={<DiffuserAnnonce/>}/>
          <Route path='/AdministrerAnnonces' element={<AdministrerAnnonces/>}/>

        </Routes>
     
      <Footer />
    </Router>
      
  
    
      
     
      
    </div>
  )
}

