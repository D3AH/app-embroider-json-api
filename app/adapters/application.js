import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://192.168.250.214:49160/rest'
});
