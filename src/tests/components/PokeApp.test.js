import React from 'react';
import { shallow } from 'enzyme';
import { PokeApp } from '../../components/PokeApp';

describe('Pruebas con <PokeApp />', () => {

    test('Debe mostrarse correctamente', () => {
          
        const wrapper = shallow( <PokeApp /> );

        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('PokeGrid').length).toBe(1);
        expect( wrapper.find('h2').length).toBe(1);
        expect( wrapper.find('h3').length).toBe(1);
        expect( wrapper.find('img').length).toBe(2);

    })

})
