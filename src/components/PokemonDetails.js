import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setPokemon(result.data);
        };
        fetchPokemonDetails();
    }, [name]);

    return (
        <div>
            {pokemon ? (
                <div className='pokemon-details-container'>

                    <div>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <h1>{pokemon.name}</h1>
                    </div>
                    <div>
                        <h3>Stat</h3>
                        <ul>
                            {pokemon.stats.map((stat) => (
                                <li key={stat.stat.name}>
                                    {stat.stat.name}: {stat.base_stat}
                                </li>
                            ))}
                        </ul>
                        <h3>Abilities</h3>
                        <ul>
                            {pokemon.abilities.map((ability) => (
                                <li key={ability.ability.name}>
                                    {ability.ability.name}
                                </li>
                            ))}
                        </ul>
                        <p>Height: {pokemon.height / 10} meters</p>
                        <p>Weight: {pokemon.weight / 10} kilograms</p>
                    </div>

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PokemonDetails;
