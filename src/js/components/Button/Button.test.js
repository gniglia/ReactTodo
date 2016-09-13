import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Testing component <Button />', () => {
    it ('Has `Add issue` as text', () => {
      const wrapper = shallow(<Button text="Add issue" />);
      expect(wrapper.find('button').text()).to.equal('Add issue');
    });
});
