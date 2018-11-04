  import { computed, observer } from '@ember/object';
  import Controller from '@ember/controller';
  import { match, not, gte } from '@ember/object/computed';
  // import { gte } from '@ember/object/computed';

  export default Controller.extend({
    emailAddress: '',
    message: '',
    headerMessage: 'Contact',

    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),
    isLongEnough: gte("message.length", 5),

    isValid: Ember.computed.and('isValidEmail', 'isLongEnough'),

    actions: {

      send() {
        alert(`Message Sent:`);
        this.set('responseMessage', `We got your message and we’ll get in touch soon`);
        this.set('emailAddress', '');
        this.set('message');
      }
    }

  });
