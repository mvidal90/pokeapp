import React, { useState } from 'react'
import { PokeGridItem } from './PokeGridItem';
import { useFetchPoke } from '../hooks/useFetchPoke';

import { Col, Row } from 'react-bootstrap';

export const PokeGrid = ( { lg, initialOffset = 0 } ) => {

    const [ page, setPage] = useState( 1 );
    const [ offset, setOffset] = useState( initialOffset );
    const { poke } = useFetchPoke( offset );

    const handleChange = ( e ) => {
        setPage(e.target.value);
    }

    const increment = ( e ) => {
        e.preventDefault();

        setPage( parseInt(page) + 1 );
        setOffset( offset + 5 );
    }
    
    const decrement = ( e ) => {
        e.preventDefault();

        setPage( page - 1 );
        setOffset( offset - 5 )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (page > 0 && page < 131) {
            setPage( page );
            setOffset( (page - 1) * 5 );            
        }
    }

    return (
        <>
            <Row className="justify-content-md-center align-self-center">
                {
                    poke.map( pokemon => (
                        <PokeGridItem
                            lg = { lg } 
                            key = { pokemon.name }
                            {...pokemon}
                        />
                    )) 
                }
            </Row>
            <Row className="justify-content-md-center align-self-end">
                <Col 
                    xs = { 6 } 
                    sm = { 4 }
                    lg = { 2 }
                >
                    { page > 1 &&  
                        <button
                            className = "pg"
                            onChange = { handleChange }
                            onClick = { decrement }
                        >
                            {
                                lg === 'es' ? 'Anterior' : 'Previus'
                            }
                        </button>
                    }
                </Col>
                <Col 
                    xs = { 6 }
                    sm = { 4 }
                    lg = { 2 }
                >
                    { page < 131 &&
                        <button
                            className = "pg"
                            onChange= { handleChange }
                            onClick= { increment }
                        >
                            { lg === 'es' ? 'Siguiente' : 'Next' }
                        </button>
                    }
                </Col>
            </Row>
            <Row>
                <Col className = "pagination ml-auto" xs = {2} sm = {2} md = { 2 } lg = { 1 }>
                    <p className = "ml-auto"> { lg === 'es' ? 'Página' : 'Page' } </p>
                </Col>
                <Col xs = {2} sm = {2} md = { 2 } lg = { 1 }>
                    <form onSubmit={ handleSubmit }>
                        <input 
                            name = "Page"
                            onChange = { handleChange }
                            type = "number"
                            value = { page }
                        />
                    </form>
                </Col>
                <Col className= "pagination" xs = {2} sm = {2} md = { 2 } lg = { 1 }>
                    <p> { lg === 'es' ? 'de 130' : 'of 130' } </p>
                </Col>
            </Row>
        </>
    );
}
