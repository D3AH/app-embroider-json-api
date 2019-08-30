import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { hasMany } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default Model.extend({
  name: attr('string'),
  article: belongsTo('article'),
  parent: belongsTo('tag', { inverse: 'children' }),
  children: hasMany('tag', { inverse: 'parent' })
});
