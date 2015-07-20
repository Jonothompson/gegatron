import DS from 'ember-data';

export default DS.Model.extend({
  filename: DS.attr('string'),
  id: DS.attr('number'),
  isWriteable: DS.attr('boolean'),
  mimetype: DS.attr('string'),
  size: DS.attr('number'),
  url: DS.attr('string')
});
