import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { hasMany } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  status: attr('string'),
  created: attr('date'),
  views: attr('number'),
  author: belongsTo('person'),
  tags: hasMany('tag'),
  comments: hasMany('comment'),
  photos: hasMany('photo')
});
