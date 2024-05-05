import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" to="/">Ma Boutique</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-a" to="/">Accueil</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" to="/produits">Produits</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" to="/panier">Panier</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
