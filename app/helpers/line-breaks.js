import Ember from 'ember';

export function lineBreaks(text/*, hash*/) {
  text = Ember.Handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  return new Ember.Handlebars.SafeString(text);
}

export default Ember.HTMLBars.makeBoundHelper(lineBreaks);
