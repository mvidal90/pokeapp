import React from 'react';
import { shallow } from 'enzyme';
import { Details } from '../../components/Details';

jest.mock('../../hooks/useFetchPoke');

describe('Pruebas con Details', () => {

    const abilities = [{
        name: 'Ability 1',
    },
    {
        name: 'Ability 2',
    },
    {
        name: 'Ability 3',
    }]

    const types = [{
        name: 'Type 1',
    },
    {
        name: 'Type 2',
    }]        

    const description = 'Esta es unadescripción';

    test('Debe mostrarse correctamente en español', () => {

        const lg = 'es';
        
        const wrapper = shallow( 
            <Details 
                abilities= { abilities } 
                description = { description } 
                lg = { lg }
                types = { types } 
            /> 
        );
        
        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('Data' ).length).toBe( abilities.length+types.length );
        expect( wrapper.find('h5').length ).toBe( 3 );
        expect( wrapper.find('h5').at(0).text() ).toBe( 'Tipo' );
        expect( wrapper.find('h5').at(1).text() ).toBe( 'Habilidades' );
        expect( wrapper.find('h5').at(2).text() ).toBe( 'Descripción' );
        expect( wrapper.find('p').at(0).text() ).toBe( 'Esta es una descripción' );

    })

    test('Debe mostrarse correctamente en inglés', () => {

        const lg = 'en';
        
        const wrapper = shallow( 
            <Details 
                abilities= { abilities } 
                description = { description } 
                lg = { lg }
                types = { types } 
            /> 
        );
        
        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('h5').at(0).text() ).toBe( 'Type' );
        expect( wrapper.find('h5').at(1).text() ).toBe( 'Abilities' );
        expect( wrapper.find('h5').at(2).text() ).toBe( 'Description' );

    })


})
