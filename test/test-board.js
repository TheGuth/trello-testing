import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe('Board component', function() {
    it('Should display title and lists',  function() {

      const lists = [
        {
          id: 1,
          title: 'List One',
          cards: [
            {
              id: 1,
              text: 'one'
            },
            {
              id: 2,
              text: 'two'
            }
          ]
        },
        {
          id: 2,
          title: 'List Two',
          cards: [
            {
              id: 3,
              text: 'three'
            },
            {
              id: 4,
              text: 'four'
            }
          ]
        }
      ];

      const renderer = TestUtils.createRenderer();
      renderer.render(<Board title={[{title: 'title'}]} lists={lists} />);
      const result = renderer.getRenderOutput();

      result.props.children[0].type.should.equal('div');
      result.props.children[0].props.className.should.equal('board-title');
      result.type.should.equal('div');

      result.props.children[1][0].props.title.should.equal('List One');
      result.props.children[1][1].props.title.should.equal('List Two');
      result.props.children[1][0].props.cards[0].text.should.equal('one');
      result.props.children[1][0].props.cards[1].text.should.equal('two');

    });
});
