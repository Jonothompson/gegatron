import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sumo-paint', 'Unit | Model | sumo paint', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
