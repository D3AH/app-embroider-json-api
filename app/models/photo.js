import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { hasMany } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  url: attr('string'),
  height: attr('number'),
  width: attr('number'),
  raw: attr('boolean'),
  tags: hasMany('tag'),
  photographer: belongsTo('person'),
  articles: hasMany('article')
});
