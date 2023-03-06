import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { getPokemons } from './dashboard.actions';

const Dashboard = () => {
    const dispatch = useDispatch();

    const pokemonList = useSelector(state => state.dashboard.pokemonList);
    const [apiUrl, setApiUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [details, setsetDetails] = useState(null);

    useEffect(() => {
        dispatch(getPokemons(apiUrl));
    }, [apiUrl]);

    const loadNextPage = () => {
        setApiUrl(pokemonList.next);
    };

    const loadPreviousPage = () => {
        setApiUrl(pokemonList.previous);
    };

    const loadDetails = (pokemon) => {
        axios.get(pokemon.url)
            .then((res) => {
                setsetDetails(res.data);
            });
    };

    return (
        <div>
            <h4>Pokemons</h4>
            <Container>
                <Row>
                    <Col xs={7} className="px-0">
                        {
                            pokemonList && pokemonList.results && pokemonList.results.map((pokemon, idx) => (
                                <div key={idx} className="list-item px-2 py-1">
                                    <span className="cursor-pointer text-capitalize" onClick={() => loadDetails(pokemon)}>{pokemon.name}</span>
                                </div>
                            ))
                        }
                    </Col>
                    <Col className="details-panel py-2">
                        {details && (
                            <>
                                <img src={details.sprites.front_shiny}/>
                                <img src={details.sprites.back_shiny}/>
                                <div className="text-capitalize">Name: {details.name}</div>
                                <div>Height: {details.height}</div>
                                <div>Weight: {details.weight}</div>
                                <div>Abilities: {details.abilities.map((ability, aIdx) => <span key={aIdx} className="badge bg-secondary mx-1">{ability.ability.name}</span>)}</div>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>

            <div className="mt-2 mb-2">
                <button className="btn btn-secondary" onClick={loadPreviousPage} disabled={!pokemonList.previous}>Previous</button>
                <button className="btn btn-secondary mx-2" onClick={loadNextPage}>Next</button>
            </div>
        </div>
    )
};

export default Dashboard;