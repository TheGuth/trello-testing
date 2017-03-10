import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';

describe('List component', function() {
    it('Should display list of cards',  function() {

      const renderer = TestUtils.createRenderer();
      renderer.render(<List cards={[{text: "text"}]} />);
      const result = renderer.getRenderOutput();
      result.props.className.should.equal('card-list');
      result.props.children[0].type.should.equal('h3');
      result.props.children[1][0].props.text.should.equal('text');
      result.type.should.equal('div');
    });
});
