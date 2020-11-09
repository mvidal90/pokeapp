import React from 'react';
import { shallow } from 'enzyme';
import { Data } from '../../components/Data';

describe('Puebas cons <Data />', () => {
    
    const data = 'Esto es una data';
    
    const wrapper = shallow( <Data data = { data } />)

    test('Debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('p').length).toBe(1);
        expect( wrapper.find('p').text()).toBe( data );

    })
})
