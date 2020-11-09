import React, { useState } from 'react'
import { Details } from './Details';
import { useFetchInfoPoke } from '../hooks/useFetchInfoPoke';
import { useFetchDescription } from '../hooks/useFetchDescription';

import { Col, Modal } from 'react-bootstrap'

export const PokeGridItem = ({ lg, name, url}) => {

    const [show, setShow] = useState( false );
    const { id, abilities, types } = useFetchInfoPoke( url );
    const { description } = useFetchDescription( id, lg );

    
    const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`;

    return (
        <>
            {
                id !== undefined &&
                <Col 
                    className = "card"
                    onClick = { () => setShow(true) } 
                    sm = { 4 }
                    md = { 3 }
                    lg = { 2 }
                >
                    <div className="image">
                        <img src={ urlImg } alt={ name } />
                    </div>
                    <h3>
                        { name }
                    </h3>
                </Col>
            }
            <Modal
                show = { show }
                onHide = { () => setShow(false) }
            >
                <div className = "justify-content-md-center align-self-center landscape">
                    <img src={ urlImg } alt={ name } className = "imgModal" />
                </div>
                <Modal.Body>
                    <h4>{ name }</h4>
                    <Details 
                        abilities= { abilities } 
                        description = { description } 
                        lg = { lg }
                        types = { types }
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}
