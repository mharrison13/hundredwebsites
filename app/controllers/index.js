  import { computed, observer } from '@ember/object';
  import Controller from '@ember/controller';
  import { match, not } from '@ember/object/computed';

  export default Controller.extend({
    emailAddress: '',
    headerMessage: 'Hundred Websites',

    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),

    actions: {

      submitRequest() {
        const email = this.get('emailAddress');
        const request = this.store.createRecord('info-request', { email: email });
        request.save().then(response => {
          this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
          this.set('emailAddress', '');
        });
      }
    }

  });
