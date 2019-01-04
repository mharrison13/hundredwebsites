import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  domainName: DS.attr('string'),
  worktype: DS.attr('string'),
  hostName: DS.attr('string'),
  message: DS.attr('string'),
  emailAddress: DS.attr('string'),
  timestamp: DS.attr('string'),
});
