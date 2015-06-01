import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('x-rendering-layout', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it can renders static content', function(assert) {
  assert.expect(1);

  var component = this.subject();

  // Renders the component to the page
  this.render();

  assert.ok(component.element, 'an element exists');
});
