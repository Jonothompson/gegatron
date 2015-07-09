import DS from 'ember-data';

export default DS.Model.extend({
  chapter: DS.attr('string'),
  url: DS.attr('string'),
  chapterContent: DS.attr('string')
});
