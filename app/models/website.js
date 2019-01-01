import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  phone: DS.attr('string'),
  fund: DS.attr('number'),
  img: DS.attr('string'),
});
