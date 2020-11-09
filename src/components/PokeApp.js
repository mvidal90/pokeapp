import React, { useState } from 'react';
import { PokeGrid } from './PokeGrid';

import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import arg from '../img/argentina.svg';
import usa from '../img/united-states.svg'

export const PokeApp = () => {

    const [language, setLanguage] = useState('es');

    return (
        <>
            <div className = "language">
                <h2>PokeApp</h2>
                <div
                    className = "lgGrid ml-auto"
                    onClick = { () => setLanguage('es') }
                >
                    <img 
                        className = "lg"
                        src = { arg }
                        alt = "Cambiar idioma al español"
                    />
                </div>
                <div
                    className = "lgGrid"
                    onClick = { () => setLanguage('en') }
                >
                    <img 
                        className = "lg"
                        src = { usa }
                        alt = "Change language to English"
                    />
                </div>
            </div>
            <Container>
                <Row className = "justify-content-md-center align-self-center">
                    <h3>{ language === 'es' ? 'Encontrá tu POKÉMON!!' : 'Find your POKÉMON!!'   }</h3>
                </Row>
                <PokeGrid lg = { language }/> 
            </Container>
        </>
    )
}
