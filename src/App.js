import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import AboutPage from './components/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
