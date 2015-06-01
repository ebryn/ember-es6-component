import { module, test } from 'qunit';
import Component from 'ember-es6-component';

module('EmberES6Component');

test('can be created with .create', function(assert) {
  let component = Component.create();

  assert.ok(component);
});

test('sets elementId', function(assert) {
  let component = Component.create();

  assert.ok(component.elementId);
});

test('sets a unique elementId', function(assert) {
  let component1 = Component.create();
  let component2 = Component.create();

  assert.notEqual(component1.elementId, component2.elementId);
});
