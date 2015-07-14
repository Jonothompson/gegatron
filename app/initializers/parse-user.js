import DS from 'ember-data';
import ParseUser from 'ember-parse-adapter/models/parse-user';
export function initialize() {
  ParseUser.reopen({
    name: DS.attr('string'),
    isAdmin: DS.attr('boolean')
  });
}

export default {
  name: 'parse-user',
  initialize: initialize
};
