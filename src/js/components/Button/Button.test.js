import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from './Button';

describe('I`m testing <Button />...', () => {
    it ('Has Hello as value', () => {
      const wrapper = shallow(<Button text="bla" />);
      expect(wrapper.find('button').text()).to.equal('bla');
    });
});
