import React from 'react';
import { Data } from './Data';

export const Details = ({ abilities, description, lg, types }) => {
    return (
        <div>
            <h5>
                {
                    lg === 'es' ? 'Tipo' : 'Type' 
                }
            </h5>
            {
                types.map( type => (
                    <Data
                        data = { type.name } 
                        key = { type.name }
                        {...type}
                    />
                )) 
            }
            <h5>
                {
                    lg === 'es' ? 'Habilidades' : 'Abilities' 
                }
            </h5>
            {
                abilities.map( ability => (
                    <Data
                        data = { ability.name }
                        key = { ability.name }
                        {...ability}
                    />
                )) 
            } 
            <h5>
                {
                    lg === 'es' ? 'Descripción' : 'Description' 
                }
            </h5>
            <p>
                {
                    description.replace('',' ')
                }
            </p>
        </div>
    )
}
