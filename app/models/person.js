import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { hasMany } from '@ember-data/model';

export default Model.extend({
  firstname: attr('string'),
  lastname: attr('string'),
  email: attr('string'),
  articles: hasMany('article'),
  photos: hasMany('photo')
});
