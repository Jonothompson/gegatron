import DS from 'ember-data';

export default DS.Model.extend({
  filename: DS.attr('string'),
  url: DS.attr('string'),
  owner: DS.belongsTo('parseUser')
});
