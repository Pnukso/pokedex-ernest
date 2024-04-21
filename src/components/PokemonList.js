import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const limit = 20;

    useEffect(() => {
        const fetchPokemon = async () => {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
            setPokemonList(result.data.results);
        };
        fetchPokemon();
    }, [offset]);

    const handleNextPage = () => {
        setOffset((prevOffset) => prevOffset + limit);
    };

    const handlePreviousPage = () => {
        setOffset((prevOffset) => Math.max(0, prevOffset - limit));
    };

    return (
        <>
            <div className='pokemon-container'>
                {pokemonList.map((pokemon) => (
                    <div key={pokemon.name} className='pokemon'>
                        <Link className='pokemonname' to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </div>
                ))}
            </div>
            <div className='button-container'>
                <button disabled={offset === 0} onClick={handlePreviousPage}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
            </div >
        </>
    );
};

export default PokemonList;
