import React from 'react';
import { shallow } from 'enzyme';
import { useFetchPoke } from '../../hooks/useFetchPoke';
import { PokeGrid } from '../../components/PokeGrid';

jest.mock('../../hooks/useFetchPoke');

describe('Pruebas con <PokeGrid />', () => {

    const language = 'es';

    test('Debe mostrarse correctamente', () => {
          
        const pokes = [{
            name: 'Pikachu',
            url: 'https://localhost/cualquier/cosa.jpg',
        },
        {
            name: 'Charmander',
            url: 'https://localhost/cualquier/cosa.jpg',
        }]
    
        useFetchPoke.mockReturnValue({
            poke: pokes
        });

        const wrapper = shallow( <PokeGrid lg = { language }/> );

        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('PokeGridItem').length).toBe(pokes.length);
        expect( wrapper.find('button').length).toBe(1);
        expect( wrapper.find('input').length).toBe(1);


    })

})
