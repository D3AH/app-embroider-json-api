import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default Model.extend({
  body: attr('string'),
  timestamp: attr('date'),
  author: attr('person'),
  article: belongsTo('article')
});
