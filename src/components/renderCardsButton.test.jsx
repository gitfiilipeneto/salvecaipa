import React from 'react';
import renderer from 'react-test-renderer';
// import Link from '../Link.react';
import AddMore from './renderCardsButton'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <AddMore>Add</AddMore>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
    let root = component.root
  // manually trigger the callback
  const button = root.findByType('button')
  button.props.onClick()

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
 button.props.onClick()
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


