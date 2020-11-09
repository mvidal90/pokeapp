import React from 'react';
import { shallow } from 'enzyme';
import { PokeGridItem } from '../../components/PokeGridItem';

describe('Pruebas con <PokeGridItem />', () => {

    const language = 'es';

    const name = 'Un pokemon';
    
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow( <PokeGridItem lg = { language } name={ name } url={ url }/>)

    test('Debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('Modal').length).toBe(1);
        expect( wrapper.find('Details').length).toBe(1);
        expect( wrapper.find('h4').length).toBe(1);


    })

})
